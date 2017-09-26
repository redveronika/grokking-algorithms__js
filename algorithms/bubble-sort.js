function bubbleSort(arr) {
    let tmp;
    for(let i = arr.length-1; i > 0; i--) {
        let counter = 0;
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                counter++;
            }
        }
        if(counter === 0) break;
    }
    return arr;
}

console.log(bubbleSort([3,5,9,1,4,8,7]));