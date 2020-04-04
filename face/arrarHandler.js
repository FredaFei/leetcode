/**
 * 从小到大合并两数组(两数组已经是从小到大排序好了)
 * @param {*} arr1
 * @param {*} arr2
 * @return []
 */
function sort(arr1, arr2) {
  var i = 0
  var j = 0
  var k = 0
  var result = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[k++] = arr1[i++]
    } else {
      result[k++] = arr2[j++]
    }
  }
  while (i < arr1.length) {
    result[k++] = arr1[i++]
  }
  while (j < arr2.length) {
    result[k++] = arr2[j++]
  }
  return result
}
var a = [6, 9, 44]
var b = [2, 7, 16, 24]
sort(a, b)

/**
 * 最大连续子序列与和（算法）
 * 子序列必须包含一个
 * @param {*} arr
 * @return number
 * https://zhuanlan.zhihu.com/p/25848393
 */
function maxSubArray(arr) {
  var maxSum = 0
  var currentSum = 0
  var start = 0
  var end = 0
  for (var i = 0; i < arr.length; i++) {
    currentSum += arr[i]
    if (currentSum < 0) {
      currentSum = 0
      start = i+1
    }
    if (currentSum > maxSum) {
      maxSum = currentSum
      end = i
    }
  }
  console.log(`start ${start},end ${end}`)
  if(end-start>=1){
    return [arr.slice(start,end+1), maxSum]
  }
}
var c = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
maxSubArray(c) // [[4, -1, 2, 1],6]

/**
 * 最大连续子序列和(另外一种写法)
 * https://mgechev.github.io/javascript-algorithms/searching_maximum-subarray.js.html
 */
function maxSubarray(arr) {
  var maxSum = 0
  var currentSum = 0
  for (var i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i])
    maxSum = Math.max(maxSum, currentSum)
  }
  return maxSum
}

/**
 * 回文判断 方案一
 */
function isPlalindrome1(str) {
  if (typeof str !== 'string') {
    console.warn(`参数 ${str} 不是字符串类型`)
    return false
  }
  const len = str.length
  const half = len / 2
  for (var i = 0; i < half; i++) {
    if (str[i] === str[len - 1 - i]) {
      return true
    }
  }
  return false
}
/**
 * 回文判断 方案二
 */
function isPlalindrome2(str) {
  if (typeof str !== 'string') {
    console.warn(`参数 ${str} 不是字符串类型`)
    return false
  }
  const str2 = str.replace(/\s+/g, '').replace(/\_+/g, '')
  return (
    str2 ===
    str2
      .split('')
      .reverse()
      .join('')
  )
}
/**
 *
 * @param  str
 * @return str
 * StrMayBe => str_may_be
 */
function changeStr(str) {
  return str
    .split('')
    .reduce((a, b) => {
      if (b.charCodeAt() >= 65 && b.charCodeAt() <= 90) {
        return a.concat(['_', b.toLowerCase()])
      } 
      return a.concat([b])
    }, [])
    .join('')
    .substr(1)
}
/**
 * 统计一个字符串中出现最多的字符
 */
function getMaxFrequentStr(str) {
  str = str.replace(/\s+/g, '')
  const hash = {}
  str.split('').map(s => {
    if (!hash[s]) {
      hash[s] = 0
    }
    hash[s] += 1
  })
  const max = Object.values(hash)
    .sort((a, b) => a - b)
    .pop()
  let result
  for (let k in hash) {
    if (hash[k] === max) {
      result = k
    }
  }
  return result
}
getMaxFrequentStr('nice to meet you, me too')

/**
 * 找出字符串中连续出现最多的字符和个数
 * 'abcaakjbb' => {'a':2,'b':2}
 */
function getMaxContinuousStr(str) {
  const arr = str.replace(/\s+/g, '').match(/(\w)\1*/g)
  const maxLen = Math.max(...arr.map(s => s.length))
  const result = arr.reduce((pre, curr) => {
    if (curr.length === maxLen) {
      pre[curr[0]] = curr.length
    }
    return pre
  }, {})
  return result
}
getMaxContinuousStr('abcbac aaddccc kkk')
