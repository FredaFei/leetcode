/**
 * 使用前后栈实现浏览器的前进后退
 */

import { CreatedStack as StackBasedOnLinkedList } from './stackBasedOnLinkedList'

class SampleBrower{
  constructor(){
    this.normalStack = new CreatedStack()
    this.backStack = new CreatedStack()
  }
  pushNormal(value){
    this.normalStack.push(value)
    this.backStack.clear()
    this.diaplayAllStack()
  }
  front(){
    const value = this.normalStack.pop()
    if(value !== -1){
      this.backStack.push(value)
      this.diaplayAllStack()
    }else{
      console.log('no front')
    }
  }
  back(){
    const value = this.backStack.pop()
    if(value !== -1){
      this.normalStack.push(value)
      this.diaplayAllStack()
    }else{
      console.log('no back')
    }
  }
  diaplayAllStack(){
    console.log('display normalStack')
    this.normalStack.display()
    console.log('display backStack')
    this.backStack.display()
  }
}

const brower = new SampleBrower()
brower.pushNormal('first')
brower.pushNormal('second')
brower.pushNormal('three')

brower.back()
brower.back()
brower.front()
brower.pushNormal('four')