function binarySearch(array, target){
    let left = 0;
    let right = array.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        console.log(`mid: ${mid}, left: ${left}, right: ${right}`);

        if(array[mid] === target){
            return mid;
        } else if(array[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

const array = [];
const arraySize = 1000000;
for (let i = 100; i < arraySize; i += 5) {
    array.push(i);
}

const target = 999995;

console.log();
console.log(binarySearch(array, target));
console.log();
console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 110));
