function bubbleSort(array) {

    // outer loop fiindca trebuie sa reia de mai multe ori fiind noile perechi
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
        console.log("Step " + (i+1) + ": " + array);
    }
    return array;
}

console.log(bubbleSort([5, 3, 7, 2, 8, 4, 1]));