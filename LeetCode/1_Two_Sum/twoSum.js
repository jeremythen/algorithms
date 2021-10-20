
function twoSum(numbers, target) {
    const mapToIndex = new Map();
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if(!mapToIndex.has(number)) {
            mapToIndex.set(number, { index1: i, value: number });
        } else {
            mapToIndex.get(number).index2 = i;
        }
    }
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const difference = target - number;
        const differenceObj = mapToIndex.get(difference);
        if(differenceObj && differenceObj.index2) {
            return [i, mapToIndex.get(difference).index2];
        } else if(differenceObj && difference !== number) {
            return [i, mapToIndex.get(difference).index1];
        }
    }
}

twoSum([2,7,11,15], 9); // [0, 1]
twoSum([3,3], 6); // [0, 1]
twoSum([3,2,4], 6); // [1, 2]
twoSum([-1,-2,-3,-4,-5], -8); // [2, 4]
twoSum([0,4,3,0], 0); // [0, 3]
twoSum([-3,4,3,90], 0); // [0, 2]
