const array = [
  {id: 1, name: 'CEO', parent: null},
  {id: 2, name: '运营部', parent: 1},
  {id: 3, name: '财务部', parent: 1},
  {id: 11, name: '出纳', parent: 12},
  {id: 12, name: '审核', parent: 9},
  {id: 4, name: '人事部', parent: 1},
  {id: 5, name: '技术部', parent: 1},
  {id: 6, name: '产品部', parent: 1},
  {id: 7, name: '后端开发部', parent: 5},
  {id: 8, name: '前端开发部', parent: 5},
  {id: 9, name: '前端基础设施组', parent: 5},
  {id: 10, name: '前端业务组', parent: 5}
]

function arrayToTree(array) {
  const tree = []
  const map = {}
  for (let i = 0; i < array.length; i++) {
    let key = array[i]['id']
    map[key] = array[i]
    array[i].children = []
  }
  for (let i = 0; i < array.length; i++) {
    let node = array[i]
    if (!array[i].parent) {
      tree.push(node)
    } else {
      map[node['parent']].children.push(node)
    }
  }
  return tree
}

const tree = arrayToTree(array)

function treeToArray(tree) {
  let queen = [].concat(tree)
  const array = []
  while (queen.length) {
    let first = queen.shift()
    if (first.children) {
      queen = queen.concat(first.children)
      delete first['children']
    }
    array.push(first)
  }
  return array
}

treeToArray(tree)

/*
* 迭代(维基百科)
* 每一次对过程的重复被称为一次“迭代”，而每一次迭代得到的结果会被用来作为下一次迭代的初始值。
* */
function arrayToTreeWithLevel(array, parent, level) {
  const result = []
  for (let node of array) {
    if (node.parent === parent) {
      node.level = level;
      let children = arrayToTreeWithLevel(array, node.id, level + 1)
      if (children.length) {
        node.children = children
      }
      result.push(node)
    }
  }
  return result
}

arrayToTreeWithLevel([{id: 11, parent: 1}, {id: 12, parent: 1}, {id: 1, parent: -1}], -1, 0)
