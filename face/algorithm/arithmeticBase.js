/**
 * 汉诺塔（河内塔）
 * 公式
 * n=1, ac
 * n=2, ab+ac+bc
 * fn(n,a,b,c) = f(n-1,a,c,b) + ac + fn(n-1,b,a,c)
 */
function move(n, from, cache, to) {
  n === 1
    ? console.log(`${from}${to}`)
    : move(n - 1, from, to, cache) +
      console.log(`${from}${to}`) +
      move(n - 1, cache, from, to)
}
move(1, 'a', 'b', 'c')
move(2, 'a', 'b', 'c')
move(3, 'a', 'b', 'c')
move(4, 'a', 'b', 'c')

/**
 * 最大值求解
 */
function max1(arr) {
  let maxVal = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (maxVal < arr[i]) {
      maxVal = arr[i]
    }
  }
  return maxVal
}
var arr = [3, 2, 6, 8, 12, 4, 88]
max1(arr)
function maxOfTwo(a, b) {
  return a < b ? b : a
}
function max2([first, ...other]) {
  if (other.length < 1) {
    return first
  }
  return maxOfTwo(first, max2(other))
}
max2(arr)

/**
 * 斐波那契数列
 * 公式
 * n =0 return 0
 * n=1 return 1
 * n=n return fn(n-1)+fn(n-2)
 */
function fibonacci(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacci2(n) {
  var arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
/**
 * 阶乘
 * 公式
 * n=1 return 1
 * n=n return n*fn(n-1)
 */
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1)
}
function factorial2(n) {
  var result = 1
  for (var i = 1; i <= n; i++) {
    result = result * i
  }
  return result
}
function factorial3(n) {
  var result = 1
  var i = 1
  var next_i, next_result
  while (i <= n - 1) {
    next_i = i + 1
    next_result = next_i * result
    i = next_i
    result = next_result
  }
  return result
}
function factorial4(n) {
  function fn(i, n, result) {
    return i === n ? result : fn(i + 1, n, result * (i + 1))
  }
  return fn(1, n, 1)
}
factorial4(6)
// fn(1, 6, 1)
// fn(2, 6, 2)
// fn(3, 6, 6)
// fn(4, 6, 24)
// fn(5, 6, 120)
// fn(6, 6, 720)
function memorize(fn) {
  const cache = {}
  return (first, ...args) => {
    if (!(first in cache)) {
      cache[first] = fn(first, ...args)
    }
    return cache[first]
  }
}
var fn = memorize(n => (n === 0 ? 0 : n === 1 ? 1 : fn(n - 1) + fn(n - 2)))
fn(3)