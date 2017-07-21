function bubbleSort(arr){
	const len = arr.length;

	for(let max = len - 1; max > 1; max--) {
		for(let i = 0; i < max; i++) {
			if(arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			}
		}
	}
	return arr;
}

function selectSort(arr) {
	const len = arr.length;
	let min;

	for(let pos = 0; pos < len - 1; pos++) {
		min = pos;
		for(let i = pos + 1; i < len; i++) {
			if(arr[min] > arr[i]) {
				min = i;
			}
		}
		[arr[min], arr[pos]] = [arr[pos], arr[min]];
	}
	return arr;
}

function insertSort(arr) {
	const len = arr.length;
	let item, pos;

	for(let i = 1; i < len; i ++) {
		item = arr[i];

		for(pos = i; pos > 0; pos--) {
			if(arr[pos - 1] <= item) {
				break;
			} else {
				arr[pos] = arr[pos - 1];
			}
		}
		arr[pos] = item;
	}
	return arr;
}


let arr = [6,3,5,3,6,2,8,1,9]
// bubbleSort(arr);
// selectSort(arr);
// insertSort(arr);
// 
// [6,3,5,3,6,2,8,1,9]
// [3,6,5,3,6,2,8,1,9]


function quickSort(arr) {
	const len = arr.length;
	
	if(len === 0) {
		return [];
	}

	let lesser = [];
	let greater = [];
	let pivot = arr[0];

	for(let i = 1; i < len; i++) {
		if(arr[i] < pivot) {
			lesser.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	return quickSort(lesser).concat(pivot, quickSort(greater));
}

quickSort(arr);