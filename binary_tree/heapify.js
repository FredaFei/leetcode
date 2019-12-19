const array = [35, 26, 48, 10, 59, 64, 17, 23, 45, 31]

/** 二叉树 ==> 堆
 * 堆是一个完全二叉树
 * 堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。
 * */
function heapify(heap) {
  // 2*i+1 = left ==>  i=left-1/2
  for (let i = parseInt((heap.length - 1) / 2); i >= 0; i--) {
    console.log(heap[i]);
    siftDown(heap, i, heap.length)
  }
  return heap
}

function siftDown(heap, i, length) {
  const left = 2 * i + 1, right = 2 * i + 2
  let greater = left
  if (left >= length) {return}
  if (right < length && heap[right] > heap[greater]) {
    greater = right
  }
  if (heap[greater] > heap[i]) {
    console.log(`change ${heap[greater]} to ${heap[i]}`);
    [heap[greater], heap[i]] = [heap[i], heap[greater]]
    siftDown(heap, greater, length)
  }
}

const a2 = heapify(array)
console.log(a2);

/**
 * 堆中插入一个元素值，且结果还是堆
 * */
function insert(heap, item) {
  heap.push(item)
  siftUp(heap, heap.length - 1)
}

function siftUp(heap, i) {
  if (i === 0) {return}
  const parent = parseInt((i - 1) / 2)
  if (heap[i] > heap[parent]) {
    console.log(`change ${heap[i]} to ${heap[parent]}`);
    [heap[i], heap[parent]] = [heap[parent], heap[i]]
    siftUp(heap, parent)
  }
}

insert(a2, 60)
console.log(a2);

/**
* 删除堆顶值，且结果还是堆
* */
function extractMax(heap, start, end) {
  [heap[start], heap[end - 1]] = [heap[end - 1], heap[start]]
  const max = heap[end - 1]
  siftDown(heap, start, end - 1)
  return max
}

extractMax(a2, 0, array.length)
console.log(a2.pop());
console.log(a2);

/**
 * 堆排序从小到大
 * */
function heapSort(arr) {
  const heap = heapify(arr)
  for (let i = 0; i < heap.length; i++) {
    extractMax(heap, 0, heap.length - i)
  }
  return heap
}
heapSort([31,26,48,2,9,0,3])