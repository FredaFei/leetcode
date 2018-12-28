/**
 * 单链表的插入、删除查找、求链表的中间节点
 * 链表中存储的是int类型的数据
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = new Node('head')
  }
  // 根据value查找
  findByValue(item) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }
  findByIndex(index){
    let currentNode = this.head
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode === null ? -1 : currentNode
  }
  // 对指定元素的后方插入
  insert(newEle, ele) {
    const currentNode = this.findByValue(ele)
    if (currentNode === -1) {
      return
    }
    const newNode = new Node(newEle)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  //查找前一个
  findPrev(item){
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.next.element!==item){
      currentNode = currentNode.next
    }
    return currentNode.next === null ? -1 : currentNode
  }
  // 根据value删除
  remove(item){
    let delEl = this.findByValue(item)
    if(delEl === -1){return}
    const prevEl = this.findPrev(item)
    prevEl.next = delEl.next
  }
  // 遍历所有节点
  display(){
    let currentNode = this.head
    while(currentNode !== null){
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
  findMiddleNode(){
    let slow = this.head
    let fast = this.head
    while(fast.next !== null && fast.next.next !== null){
      slow = fast.next
      fast = fast.next.next
    }
    console.log(slow)
    console.log(fast)
    return slow
  }
}

const lList = new LinkedList()
console.log(lList)
lList.insert('one', 'tail')
lList.insert('one', 'head')
lList.insert('two', 'one')
lList.insert('three', 'two')
lList.findPrev('head')
lList.findPrev('one')
lList.findByValue('two')
lList.findByIndex(2)
lList.display()
lList.findMiddleNode()
