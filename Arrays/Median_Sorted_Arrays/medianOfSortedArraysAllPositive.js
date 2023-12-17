const findMedianSortedArraysAllPositive = (nums1, nums2) => {

    const countOfMissingNumbersBetween = (min, max, length) => {
        if(length === 0) {
            return 0;
        }
        const count = max - min - length + 1;
        return count < 0 ? 0 : count;
    };

    const totalLength = nums1.length + nums2.length;

    const min = Math.min(nums1[0], nums2[0]);
    const max = Math.max(nums1[nums1.length - 1], nums2[nums2.length - 1]);

    const countOfMissingNumbers = countOfMissingNumbersBetween(min, max, totalLength);

    const newMax = max - countOfMissingNumbers;

    const sum = min + newMax;

    const result = sum / 2;

    return result;

};

console.log(findMedianSortedArraysAllPositive([1,3], [2]) === 2);
console.log(findMedianSortedArraysAllPositive([1,2], [3,4]) === 2.5);
console.log(findMedianSortedArraysAllPositive([0,0], [0,0]) === 0);
console.log(findMedianSortedArraysAllPositive([1,2,3,4,5,6], [7,8,9,10,11,12]) === 6.5);
console.log(findMedianSortedArraysAllPositive([1,2,3,4,5,6], [7,8,9,10,11]) === 6);
console.log(findMedianSortedArraysAllPositive([1,2,3,4,5,6], [7,8,9,10]) === 5.5);
console.log(findMedianSortedArraysAllPositive([1,2,3,4,5,6], [7,8,9]) === 5);
console.log(findMedianSortedArraysAllPositive([1,2,3,4,5,6], [7,8]) === 4.5);
console.log(findMedianSortedArraysAllPositive([1,2,3,4,5,6], [7]) === 4);
