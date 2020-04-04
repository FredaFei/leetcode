function curry(fn){
  if(fn.length<=1){return fn}
  function generator(...args){
    if(fn.length===args.length){return fn(...args)}
    return (...args2)=>generator(...args,...args2)
  }
  return generator
}
function fn(a,b,c){
  return [a,b,c]
}
var curried = curry(fn)
curried(1,2,3)
curried(1,2)(3)
curried(1)(2)(3)

/*防抖*/
function debounce(fn,wait){
  var clock
   function denounced(){
    var context = this
    var args = arguments
    clock && window.clearTimeout(clock)
    clock = setTimeout(function(){
      fn.apply(context,args)
    },wait)
  }
  denounced.cancel = function(){
    window.clearTimeout(clock)
    clock = null
  }
  return denounced
}
/*节流*/
function throttle(fn,wait){
  var last=0
  return function(){
    var context = this
    var args = arguments
    var now = new Date()
    if(now-last>wait){
      fn.apply(context,args)
      last = now
    }
  }
}

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
    return m => add2(m, n + sum)
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
