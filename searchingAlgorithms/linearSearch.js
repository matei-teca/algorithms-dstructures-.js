function linearSearch(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
}

const array = [];
const arraySize = 1000000;
for (let i = 100; i < arraySize; i += 5) {
    array.push(i);
}

const target = 999995;

console.log(linearSearch(array, target));
console.log(linearSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 110));

