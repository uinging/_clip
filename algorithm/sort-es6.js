class CArray {
  constructor(numElements) {
    this.arr = new Array(numElements).fill(0);
    this.pos = 0;
    this.numElements = numElements;

    // for (var i = 0; i < numElements; ++i) {
    //     this.arr[i] = i;
    // }
  }

  // insert (element) {
  //     this.arr[this.pos++] = element;
  // }

  toString() {
    let arrLength = this.arr.length;
    let numLength = (arrLength + '').length + 1;
    let restr = '';
    let temp = '';

    if (!arrLength) return '';

    for (let i = 0; i < this.arr.length; ++i) {
      temp = this.arr[i] + '';
      temp = temp.padStart(numLength, ' ');
      // restr += temp + ' ';
      restr += temp;

      if ((i + 1) % 20 === 0) {
        restr += '\n';
      }
    }
    return restr;
  }

  clear() {
    // for (var i = 0; i < this.arr.length; ++i) {
    //     this.arr[i] = 0;
    // }
    this.arr.fill(0);
  }

  setData() {
    for (var i = 0; i < this.numElements; ++i) {
      this.arr[i] = Math.floor(Math.random() * this.numElements);
    }
  }

  swap(arr, index1, index2) {
    // var temp = arr[index1];
    // arr[index1] = arr[index2];
    // arr[index2] = temp;
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  bubbleSort() {
    // 冒泡排序
    // 共排序 len-1 次
    // 从左到右依次比较相邻的两个数,如果左边数大于右边数,则对换相邻两个数的位置
    // 首次排序比较 len - 1 次
    // 第一次排序就筛选出最大值,第二次排就选出第二大
    // 所以第二次排序比较 len - 2 次, 第三次比较 len - 3 次,依次类推
    const len = this.arr.length;

    for (let max = len; max > 1; max--) {
      for (let i = 0; i < max; i++) {
        if (this.arr[i] > this.arr[i + 1]) {
          this.swap(this.arr, i, i + 1);
        }
      }
      // console.log(this.toString());
    }
  }

  selectionSort() {
    // 选择排序
    let min;
    const len = this.arr.length;
    // 先将首项设为最小项
    // 在剩下的所有数中寻找更小的数,如果有,就和最小项对换位置
    // 将第二项设为最小项
    for (let pos = 0; pos < len - 1; ++pos) {
      min = pos;
      for (let i = pos + 1; i <= len - 1; ++i) {
        if (this.arr[i] < this.arr[min]) {
          min = i;
        }
      }
      this.swap(this.arr, pos, min);
      // console.log(myNums.toString());
    }
  }

  insertionSort() {
    // 插入排序
    // 从第二项开始排序
    // 内部循环依次将左侧数和待排序项比较
    // 如果待排序项小于左侧数,则将左侧数复制到右侧,再与下一个左侧数比较
    const len = this.arr.length;
    let item, pos;

    for(let i = 1; i < len; i ++) {
      // 将待排序项缓存
      item = this.arr[i];

      for(pos = i; pos > 0; pos--) {
        if(this.arr[pos - 1] <= item) {
          break;
        } else {
          this.arr[pos] = this.arr[pos - 1];
        }
      }
      // 将待排序项复制到结果位置
      this.arr[pos] = item;
    }
  }
}


var numElements = 100;
var myNums = new CArray(numElements);
var arr1 = new CArray(numElements),
  arr2 = new CArray(numElements),
  arr3 = new CArray(numElements);


var start, end;

myNums.setData();
arr1.arr = myNums.arr.slice();
arr2.arr = myNums.arr.slice();
arr3.arr = myNums.arr.slice();

console.log("原始数据:");
console.log(myNums.toString());
// console.log(myNums.arr);

// start = new Date().getTime();
console.time('bubble');
arr1.bubbleSort();
// stop = new Date().getTime();
console.log('冒泡排序耗时:');
console.timeEnd('bubble');
console.log(arr1.toString());
// console.log(arr1.arr);

// start = new Date().getTime();
console.time('select');
arr2.selectionSort();
// stop = new Date().getTime();
console.log('选择排序耗时:');
console.timeEnd('select');
console.log(arr2.toString());

// start = new Date().getTime();
console.time('insert');
arr3.insertionSort();
// stop = new Date().getTime();
console.log('插入排序耗时:');
console.timeEnd('insert');
console.log(arr3.toString());