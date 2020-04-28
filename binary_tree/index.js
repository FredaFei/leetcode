const node = (value, left, right) => ({value, left, right})
const binaryTree =
  node('A',
    node('B', node('D'), undefined),
    node('C',
      node('E', undefined, node('G')),
      node('F', node('H'), node('J'))
    )
  )
const traverseRootFirst = (bTree, fn) => {
  if (!bTree) {return}
  fn(bTree.value)
  traverseRootFirst(bTree.left, fn)
  traverseRootFirst(bTree.right, fn)
}
const traverseRootMiddle = (bTree, fn) => {
  if (!bTree) { return }
  traverseRootMiddle(bTree.left, fn)
  fn(bTree.value)
  traverseRootMiddle(bTree.right, fn)
}
const traverseRootLast = (bTree, fn) => {
  if (!bTree) { return }
  traverseRootLast(bTree.left, fn)
  traverseRootLast(bTree.right, fn)
  fn(bTree.value)
}

const result1 = []
traverseRootFirst(binaryTree, (value) => {
  result1.push(value)
})
const result2 = []
traverseRootMiddle(binaryTree, (value) => {
  result2.push(value)
})
const result3 = []
traverseRootLast(binaryTree, (value) => {
  result3.push(value)
})

// 非递归解法
/**
 * 方法一
 * 前序遍历
 * 思路：
 * 1.先遍历完左侧的所有节点并依次push to stack，执行fn
 * 2.再依次出pop to stack，并检测右节点有无后代节点（回到55行代码）
 * 3.stack 全部检测完退出循环，遍历完成
 * */
const traverseRootFirst = (bTree, fn) => {
  let current = bTree
  const stack = []
  while (true) {
    while (current) {
      fn(current.value)
      stack.push(current)
      current = current.left
    }
    if (stack.length > 0) {
      current = stack.pop()
      current = current.right
      continue
    } else {
      break
    }
  }
}
/**
 * 方法一
 * 中序遍历
 * 思路：
 * 1.先遍历完左侧的所有节点并依次push to stack
 * 2.再依次出pop to stack，执行fn，并检测右节点有无后代节点（回到81行代码）
 * 3.stack 全部检测完退出循环，遍历完成
 * */
const traverseRootMiddle = (bTree, fn) => {
  let current = bTree
  const stack = []
  while (true) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    if (stack.length > 0) {
      current = stack.pop()
      fn(current.value)
      current = current.right
      continue
    } else {
      break
    }
  }
}
/**
 * 后序遍历
 * 思路：
 * 1.先将根节点push to stack
 * 2.循环检测stack是否为空，若不为空，则pop stack，保存其值
 * 3.检测其值左节点存在，存在则 push to stack
 * 4.检测其值右节点存在，存在则 push to stack
 * 5.执行fn （头部插入 unshift）
 * */
const traverseRootLast = (bTree, fn) => {
  if (!bTree) {return}
  let current = bTree
  const stack = []
  stack.push(bTree)
  while (stack.length > 0) {
    current = stack.pop()
    if (current.left) {stack.push(current.left)}
    if (current.right) {stack.push(current.right)}
    fn(current.value)
  }
}

const result4 = []
traverseRootLast(binaryTree, (value) => {
  result4.unshift(value)
})



/**
 * 方法二
 * 前序遍历
 * 思路：
 * 1.先将根节点push to stack
 * 2.循环检测stack是否为空，若不为空，则pop stack，保存其值
 * 3.检测其值右节点存在，存在则 push to stack
 * 4.检测其值左节点存在，存在则 push to stack
 * 5.执行fn （尾部插入 push）
 *
 * 参考 https://juejin.im/post/5c8fa09bf265da60f30d3fb3#heading-24
 * */
const traverseRootFirst = (bTree, fn) => {
  if (!bTree) {return}
  let current = bTree
  const stack = []
  stack.push(bTree)
  while (stack.length > 0) {
    current = stack.pop()
    if (current.right) {stack.push(current.right)}
    if (current.left) {stack.push(current.left)}
    fn(current.value)
  }
}
/**
 * 方法二
 * 中序遍历
 * 思路：
 * 1.先将根节点push to stack
 * 2.循环检测stack或当前节点是否为空
 * 3.若不为空，则push to stack，检测其左节点存在，存在则 push to stack，回到步骤2
 * 4.若当前节点为空，则pop to stack，当前节点为其右节点，回到步骤2
 * */
const traverseRootMiddle = (bTree, fn) => {
  let current = bTree
  const stack = []
  while (current || stack.length > 0) {
    if (current) {
      stack.push(current)
      current = current.left
    } else {
      current = stack.pop()
      fn(current.value)
      current = current.right
    }
  }
}