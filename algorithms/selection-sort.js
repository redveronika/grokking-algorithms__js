function selectionSort(arr) {
    const newArr = [];
    const arrLength = arr.length;
    for(let i = 0; i < arrLength; i++) {
        const smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}

// utility function. Find the smallest element in array
function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

console.log(selectionSort([4,2,6,1,7]));