function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * this.numElements);
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var restr = '';
    var temp = '';
    for (var i = 0; i < this.dataStore.length; ++i) {
        temp = this.dataStore[i];
        temp = temp < 10 ? (' ' + temp) : temp;
        restr += temp + ' ';
        if ((i + 1) % 10 === 0) {
            restr += '\n';
        }
    }
    return restr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort() {
    // 冒泡排序
    // 共排序 len-1 次
    // 从左到右依次比较相邻的两个数,如果左边数大于右边数,则对换相邻两个数的位置
    // 首次排序比较 len - 1 次
    // 第一次排序就筛选出最大值,第二次排就选出第二大
    // 所以第二次排序比较 len - 2 次, 第三次比较 len - 3 次,依次类推
    var len = this.dataStore.length;
    var temp;

    for (var outer = len; outer > 1; outer--) {
        for (var inner = 0; inner < outer; inner++) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
        // console.log(this.toString());
    }
}

function selectionSort() {
    // 选择排序
    var min, temp, len = this.dataStore.length;
    // 先将首项设为最小项
    // 在剩下的数中寻找更小的数,如果有,就和最小项对换位置
    // 将第二项设为最小项
    for (var outer = 0; outer <= len - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= len - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
        // console.log(myNums.toString());
    }
}

function insertionSort() {
    // 插入排序
    var temp, inner;
    // 从第二项开始排序
    for (var outer = 1; outer <= this.dataStore.length - 1; outer++) {
        // 将待排序项缓存
        temp = this.dataStore[outer];
        inner = outer;
        // 内部循环依次将左侧数和待排序项比较
        // 如果待排序项小于左侧数,则将左侧数复制到右侧,再与下一个左侧数比较
        while (inner > 0 && temp < (this.dataStore[inner - 1])) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            inner--;
        }
        // 将待排序项复制到结果位置
        this.dataStore[inner] = temp;
        // console.log(myNums.toString());
    }
}



var numElements = 10000;
var myNums = new CArray(numElements);
var arr1 = new CArray(numElements),
    arr2 = new CArray(numElements),
    arr3 = new CArray(numElements);


var start, end;

myNums.setData();
// console.log("原始数据:");
// console.log(myNums.toString());

var arrStr = myNums.dataStore.join(',');
arr1.dataStore = arrStr.split(',');
arr2.dataStore = arrStr.split(',');
arr3.dataStore = arrStr.split(',');


start = new Date().getTime();
arr1.bubbleSort();
stop = new Date().getTime();
console.log('冒泡排序结果:', stop - start);
// console.log(myNums.toString());

start = new Date().getTime();
arr2.selectionSort();
stop = new Date().getTime();
console.log('选择排序结果:', stop - start);
// console.log(myNums.toString());

start = new Date().getTime();
arr3.insertionSort();
stop = new Date().getTime();
console.log('插入排序结果:', stop - start);
// console.log(myNums.toString());






