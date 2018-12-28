/**
 * 基于链表实现的栈
*/

class Node{
  constructor(element){
    this.element = element
    this.next = null
  }
}
class StackBasedOnLinkedList{
  constructor(){
    this.top = null
  }
  push(value){
    const node = new Node(value)
    if(this.top === null){
      this.top = node
    }else{
      node.next = this.top
      this.top = node
    }
  }
  pop(){
    if(this.top === null){
      return -1
    }
    const value = this.top.element
    this.top = this.top.next
    return value
  }
  clear(){
    this.top = null
  }
  display(){
    if(this.top !== null){
      let temp = this.top
      while(temp !== null){
        console.log(temp.element)
        temp = temp.next
      }
    }
  }
}

const stack = new StackBasedOnLinkedList()
stack.push(1)
stack.push(2)
stack.push(3)

let res = 0
while (res!==-1) {
  res = stack.pop
  console.log(res)
}

export default StackBasedOnLinkedList