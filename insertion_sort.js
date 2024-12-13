//create a fun to insertion a sort with a param array
function InsertionSort(array) {
    //add a loop for search
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let j = i - 1;
        // a loop for sorting num
        while (j >= 0 && array[j] > currentNumber ) {
            array[j + 1] = array[j]
            j--
        }
        array[j+1] = currentNumber;
    }
    return array;
}

//declare an array
let arr = [27,2,55,7,0,15];
//called the fun and log the result
console.log(InsertionSort(arr))
