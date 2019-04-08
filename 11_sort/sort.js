function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function bubbleSort(arr) {
  if (arr.length <= 1) {
    return
  }
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        flag = true
      }
    }
    if (!flag) {
      break
    }
  }
  return arr
}

function insertionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let value = arr[i]
    let j = i - 1
    for (; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = value
  }
  return arr
}

insertionSort([2, 1, 3, 7, 8, 4, 1])

function selectionSort(arr) {
  let len = arr.length
  let min
  for (let i = 0; i < len; i++) {
    min = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i !== min) {
      swap(arr, i, min)
    }
  }
  return arr
}
selectionSort([2, 1, 3, 7, 8, 4, 1])

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pointIndex = parseInt(arr.length / 2)
  var point = arr.splice(pointIndex, 1)[0]
  var leftArr = []
  var rightArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < point) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat([point], quickSort(rightArr))
}
quickSort([2, 1, 3, 7, 8, 4, 1])

function mergeSort(arr) {
  if(arr.length<=1){return arr}
  var middle = Math.floor(arr.length / 2)
  var left = arr.slice(0,middle)
  var right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  var temp = []
  var leftIndex = 0
  var rightIndex = 0
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
mergeSort([2, 1, 34, 7, 15, 5, 1])