let nums = [];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`How many\n`, name => {
    const N = name;
    readline.close();
    for(let i = 0; i < N;i++){
        nums.push(Math.floor(Math.random() * 101));
    }
    console.time("Insertion: ");
    insertionSort(nums);
    console.timeEnd("Insertion: ");
    console.time("Bubble: ");
    bubbleSort(nums);
    console.timeEnd("Bubble: ");
    console.time("Merge: ");
    mergeSort(nums);
    console.timeEnd("Merge: ");
    console.time("QuickSort: ");
    quickSort(nums);
    console.timeEnd("QuickSort: ");
  });

function insertionSort(inputArr) {
    let Arr = inputArr;
    let n = Arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = Arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < Arr[j])) {
                Arr[j+1] = Arr[j];
                j--;
            }
            Arr[j+1] = current;
        }
    return Arr;
}
function bubbleSort(inputArr){
    let Arr = inputArr;
    let len = Arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (Arr[j] > Arr[j + 1]) {
                let tmp = Arr[j];
                Arr[j] = Arr[j + 1];
                Arr[j + 1] = tmp;
            }
        }
    }
    return Arr;
}
function mergeSort(inputArr) {
    let Arr = inputArr;
    const half = Arr.length / 2
    
    // Base case or terminating case
    if(Arr.length < 2){
      return Arr;
    }
    
    const left = Arr.splice(0, half)
    return mergeSort(mergeSort(left),mergeSort(Arr))
}
function quickSort(arr) {
    let Arr = arr
    if (Arr.length < 2) {
      return Arr;
    }
    const pivot = Arr[Math.floor(Math.random() * Arr.length)];
  
    let left = [];
    let right = [];
    let equal = [];
  
    for (let val of Arr) {
      if (val < pivot) {
        left.push(val);
      } else if (val > pivot) {
        right.push(val);
      } else {
        equal.push(val);
      }
    }
    return [
      ...quickSort(left),
      ...equal,
      ...quickSort(right)
    ];
  }