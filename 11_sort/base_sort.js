function countSort(arr) {
  if (arr.length <= 1) { return arr }
  const hash = {}
  let max = arr[arr.length-1]
  let min = arr[0]
  for(let i=0;i<arr.length;i++){
    const key = arr[i]
    hash[key] = hash[key] === undefined ? 1 : hash[key]+1
    if(key<min){min = key}
    if(key>max){max = key}
  }
  const result = []
  for (let j=min;j<=max;j++){
    if (hash[j]!==undefined) { 
      for (let k = 0; k < hash[j]; k++) {
        result.push(j)
      }
    }
  }
  return result
}
var arr = [6,2,8,3,1,2,10,6]
countSort(arr)

function bubbleSort(arr) {
  const {length} = arr
  for(let i=0; i<length-1; i++){
    for (let j = 0; i < length -j- 1; j++) {
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
bubbleSort(arr)

function insertSort(arr) {
  if (arr.length <= 1) { return arr }
  for (let i = 1; i < arr.length; i++) {
    const n = arr[i]
    let j
    for(j = i-1;j>=0;j--){
      if(arr[j]>n){
        arr[j+1]=arr[j]
      }else if(arr[j]<=n){
        break;
      }
    }
    console.log(`j ${j}`)
    console.log(`arr ${arr}`)
    arr[j+1] = n
  }
  return arr
}
insertSort(arr)

function bSearch(arr,n,start,end) {
  if(start===end){return -1}
  let mid = parseInt((start+end)/2)
  return n === arr[mid] ? mid : 
    n > arr[mid] ? bSearch(arr, n, mid + 1,end) : 
      n < arr[mid] ? bSearch(arr, n, start, mid) : 
        undefined
}
bSearch([7,4,2,12,6,9,13,11],6,0,8)