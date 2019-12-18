const tree = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

/*
* 中根序遍历顺序存储的完全二叉树
* */
function traverse(tree, fn) {
  const t = (tree, i, fn) => {
    if (tree[i] === undefined) {return}
    t(tree, 2 * i + 1, fn)
    fn(tree[i])
    t(tree, 2 * i + 2, fn)
  }
  t(tree, 0, fn)
}

const result = []
traverse(tree, (value) => {
  result.push(value)
})
console.log(result); //["H", "D", "I", "B", "J", "E", "A", "F", "C", "G"]