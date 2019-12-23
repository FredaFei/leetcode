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
const traverseRootLast = (bTree, fn) => {
  if (!bTree) {return}
  let current = bTree
  const stack = []
  stack.push(bTree)
  while (stack.length > 0) {
    current = stack.pop()
    if(current.left){stack.push(current.left)}
    if(current.right){stack.push(current.right)}
    fn(current.value)
  }
}

const result4 = []
traverseRootLast(binaryTree, (value) => {
  result4.unshift(value)
})