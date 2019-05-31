/**
 * 求所有参数的和，参数个数不确定
 * add(1,2,3,...)
 */
function add(){
  return [...arguments].reduce((a,b)=>a+b, 0)
}
add(1,2,3)

/**
 * 求所有参数的和,在没有参数时返回所有参数的和
 * add2(1)(2)(2)()
 */
function add2(n, sum = 0) {
  if (n === undefined) {
    return add(sum)
  } else {
    return m => add22(m, n + sum)
  }
}
add2(1)(2)(2)()

/**
 * 没有参数时返回所有参数的和 ，内部使用add函数，且只在最后求和时使用
 * add3(1)(2)(2)()
 */
function add3(n,args){
  let array = args || []
  if (n === undefined) {
    return add.apply(null, array)
  } else {
    array.push(n)
    return (n) => {
      return add3(n, array)
    }
  }
}
add3(1)(2)(2)()

