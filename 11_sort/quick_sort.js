/** 
 * 数学思维
*/
function quickSort(arr) {
  const [pivot, ...rest] = arr;
  return arr.length <= 1 ? arr : [
    ...quickSort(rest.filter(i => i < pivot)),
    pivot,
    ...quickSort(rest.filter(i => i >= pivot))
  ];
}

var arr = [19, -2, 34, 1, 4, 3];
quickSort(arr);

/**
 * 人类思维
*/
function quickSort(arr) {
  return _quickSort(arr, 0, arr.length);
}
function _quickSort(arr, start, end) {
  console.log(`arr before: ${arr}`)
  if (end - start <= 1) { return arr }
  const pivotIndex = handlePivot(arr, start, end)
  console.log(`pivotIndex: ${pivotIndex}`)
  console.log(`arr: ${arr}`)
  _quickSort(arr, start, pivotIndex)
  _quickSort(arr, pivotIndex + 1, end)
  return arr
}
function swap(arr, a, b){
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

function handlePivot(arr, start, end) {
  if (end - start <= 1) {return arr.length - 1;}
  let pivot = arr[start];
  let smallEnd = start;
  let bigStart = end;
  let i = start + 1;
  while (bigStart - smallEnd > 1) {
    if (arr[i] < pivot) {
      smallEnd += 1;
      swap(arr, i, smallEnd);
      i +=1
    } else if(arr[i]>=pivot) {
      bigStart -= 1;
      swap(arr, i, bigStart);
    }
  }
  swap(arr, start, smallEnd);
  return smallEnd;
}

const q1 = quickSort([1, 2, 9, 4, 10, 20, 12])
const q2 = quickSort([11, 2, 39, 24, 1, 2, 9])
const q3 = quickSort([1, 1, 1, 1, 1])
const q4 = quickSort([])
console.log(q1)
console.log(q2)
console.log(q3)
console.log(q4)