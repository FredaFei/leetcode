function bubbleSort(arr) {
  if (arr.length <= 1) {
    return
  }
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
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
    console.log('i: ' + i)
    console.log('j: ' + j)
    for (; j > -1 && arr[j] > value; j--) {
      console.log(j)
      arr[j + 1] = arr[j]
    }
    console.log(j)
    console.log('arr[j + 1], value')
    console.log(arr[j + 1], value)
    arr[j + 1] = value
  }
  return arr
}

insertionSort([2, 1, 3, 7, 8, 4, 1])
