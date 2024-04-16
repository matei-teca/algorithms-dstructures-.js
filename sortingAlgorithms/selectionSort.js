function selectionSort(array){
    for(let i = 0; i < array.length; i++){

        let currIndex = i;

        // itereaza pana gaseste cel mai mic numar
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[currIndex]){
                // pentru a face swap-ul scoate in outer loop atribuind indexul
                currIndex = j;
            }
        }

        // face swap-ul
        if(currIndex !== i){
            [array[i], array[currIndex]] = [array[currIndex], array[i]];
            console.log("step " + (i+1) + ": " + array);
        }
    }

    return array;
}

console.log(selectionSort([5, 3, 7, 2, 8, 4, 1]));
