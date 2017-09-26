function binarySearch(el, arr) {
    // if we are not sure that the array is sorted
    arr.sort();
    let pointerLeft = 0;
    let pointerRight = arr.length;
    let counter = 0;
    while(pointerLeft <= pointerRight){
        ++counter;
        let pointerMedium = Math.ceil((pointerLeft + pointerRight)/2);
        if(el < arr[pointerMedium]) {
            pointerRight = pointerMedium - 1;
        } else if (el > arr[pointerMedium]) {
            pointerLeft = pointerMedium + 1;
        } else {
            return 'el index: ' + pointerMedium + ' number of itteration: ' + counter;
        }
    }
    return 'el not found';
}

console.log(binarySearch(3,  [1, 3, 5, 7, 9]));