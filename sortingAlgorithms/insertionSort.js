function insertionSort(array) {

    for(let i = 1; i < array.length; i++){
        let unsortedKey = array[i];

        // prev element
        let j = i - 1;

        // daca j a ajuns la 0, sau la ultimul numar mai mare decat cel nesortat,
        // se opreste si insereaza
        while(j >= 0 && array[j] > unsortedKey){
            array[j+1] = array[j];
            j--;
        }

        // j+1 fiindca deja a facut inca un j--
        array[j+1] = unsortedKey;
        console.log("Step " + i + ": " + array);
    }

    return array;
}

console.log(insertionSort([5, 3, 7, 2, 8, 4, 1]));