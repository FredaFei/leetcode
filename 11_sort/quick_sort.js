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

function swap(arr, a, b){
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

function handlePivot(arr, start, end) {
  if (end - start <= 1) {return arr.length - 1;}
  let pivot = arr[start];
  let smallEnd = start;
  let bigStart = end;
  let i = start + 1;
  debugger;
  while (bigStart - smallEnd > 1) {
    if (arr[i] < pivot) {
      smallEnd += 1;
      swap(arr, i, smallEnd);
    } else {
      bigStart -= 1;
      swap(arr, i, bigStart);
    }
  }
  swap(arr, start, smallEnd);
  return smallEnd;
}

handlePivot(arr, 0, 1);

function _quickSort(arr,start,end) {
  console.log( `arr before: ${arr}`)
  if(end-start<=1){return arr}
  const pivotIndex = handlePivot(arr,start,end)
  console.log( `pivotIndex: ${pivotIndex}`)
  console.log( `arr: ${arr}`)
  _quickSort(arr,start,pivotIndex)
  _quickSort(arr,pivotIndex+1,end)
  return arr
}

function quickSort(arr) {
  _quickSort(arr, 0, arr.length);
}