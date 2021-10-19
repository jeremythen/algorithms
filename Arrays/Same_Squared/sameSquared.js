function sameSquared(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    const mapCounter = (arr) => {
        const map = new Map();
        for(let i = 0; i < arr.length; i++) {
            const value = arr[i];
            if(!map.has(value)) {
                map.set(value, 0);
            }
            map.set(value, map.get(value) + 1);
        }
        return map;
    };
    const arr1MapCounter = mapCounter(arr1);
    const arr2MapCounter = mapCounter(arr2);
    if(arr1MapCounter.size !== arr2MapCounter.size) {
        return false;
    }
    const keys = arr1MapCounter.keys();
    for(let key of keys) {
        const keySquared = key * key;
        if(!arr2MapCounter.has(keySquared) || arr2MapCounter.get(keySquared) !== arr1MapCounter.get(key)) {
            return false;
        }
    }
    return true;
}

console.log(sameSquared([1,2,3], [4,1,9]) === true);
console.log(sameSquared([1,2,3], [1,9]) === false);
console.log(sameSquared([1,2,1], [4,4,1]) === false);
console.log(sameSquared([1,2,5,3,4,5,6,6], [1,4,9,16,25,36,36,25]) === true);