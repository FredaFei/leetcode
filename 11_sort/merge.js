/**
 * 归并排序
 * 对两个有序数组排序
 */
// 人类思维
function merge(a, b) {
  let temp = [], i = 0, j = 0;
  while (i < a.length || j < b.length) {
    if (i >= a.length) {
      temp.push(b[j]);
      j++;
    } else if (j >= b.length) {
      temp.push(a[i]);
      i++;
    } else if (a[i] < b[j]) {
      temp.push(a[i]);
      i++;
    } else {
      temp.push(b[j]);
      j++;
    }
  }
  return temp;
}

merge([4, 2, 1], [3, 7, 5]);
merge([4, 2, 1], [3, 5]);

// 递归
function merge(a, b) {
  return a.length === 0
    ? b
    : b.length === 0
      ? a
      : a[0] < b[0]
        ? [a[0]].concat(merge(a.slice(1), b))
        : [b[0]].concat(merge(a, b.slice(1)));
}

// 数学思维
function sort(arr) {
  let k = arr.length;
  if (k === 1) {return arr;}
  let left = arr.slice(0, parseInt(k / 2));
  let right = arr.slice(parseInt(k / 2));
  return merge(sort(left), sort(right));
}

sort([4, 2, 1, 3]);
sort([4, 2, 1, 3, 5]);
sort([4, 2, 1, 6, 9, 3, 5]);

// 原地排序 优化
function merge(arr, middle) {
  // arr [0,middle)排好序，[middle,...]也是排好序
  let i = 0, j = middle;
  while (i < middle && middle < arr.length) {
    let w = 0;
    while (arr[i] <= arr[j] && i < middle) {i++;}
    while (arr[i] >= arr[j] && j < arr.length) {
      j++;
      w++;
    }
    let part = arr.splice(j - w, w);
    arr.splice(i, 0, ...part);
    i += w;
    middle += w;
  }
  return arr;
}

merge([1, 3, 4, 6, 2, 5, 8, 9], 4);

function sort(arr) {
  return inplace_sort(arr, 0, arr.length);
}

function inplace_sort(arr, start, end) {
  if (end - start <= 1) {return arr;}
  let middle = parseInt((start + end) / 2);
  inplace_sort(arr, start, middle);
  inplace_sort(arr, middle, end);
  merge(arr, start, middle, end);
  return arr;
}

function merge(arr, start, middle, end) {
  // arr [start,middle)排好序，[middle,end)也是排好序
  console.log((`merge before arr: ${arr}; start: ${start}; middle: ${middle}; end: ${end};`));
  let i = start, j = middle;
  while (i < middle && middle < end) {
    let w = 0;
    while (arr[i] <= arr[j] && i < middle) {i++;}
    while (arr[i] >= arr[j] && j < end) {
      j++;
      w++;
    }
    let part = arr.splice(j - w, w);
    arr.splice(i, 0, ...part);
    i += w;
    middle += w;
  }
  console.log((`merge after arr: ${arr}; start: ${start}; middle: ${middle}; end: ${end};`));
  return arr;
}

// 自底向上
function sort(arr) {
  for (let size = 1; size < arr.length; size *= 2) {
    console.log(`size: ${size}`);
    for (let j = 0; j < arr.length; j += size * 2) {
      console.log(`j: ${j}`);
      merge(arr, j, j + size, j + size * 2);
      console.log(`arr: ${arr}`);
    }
  }
}

function merge(arr, start, middle, end) {
  // arr [start,middle)排好序，[middle,end)也是排好序
  if (start > arr.length) {start = arr.length - 1;}
  if (middle > arr.length) {middle = arr.length;}
  if (end > arr.length) {end = arr.length;}
  console.log((`merge before arr: ${arr}; start: ${start}; middle: ${middle}; end: ${end};`));
  let i = start, j = middle;
  while (i < middle && middle < end) {
    let w = 0;
    while (arr[i] <= arr[j] && i < middle) {i++;}
    while (arr[i] >= arr[j] && j < end) {
      j++;
      w++;
    }
    let part = arr.splice(j - w, w);
    arr.splice(i, 0, ...part);
    i += w;
    middle += w;
  }
  console.log((`merge after arr: ${arr}; start: ${start}; middle: ${middle}; end: ${end};`));
  return arr;
}