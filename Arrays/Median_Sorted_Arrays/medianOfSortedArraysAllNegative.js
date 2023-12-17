const findMedianSortedArraysAllNegativeAllNegative = (nums1, nums2) => {

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

    const newMin = min + countOfMissingNumbers;

    const sum = newMin + max;

    let result = sum / 2;

    if(countOfMissingNumbers > 0 && totalLength % 2 === 0) {
        return result + 1;
    }

    return result;

};

console.log(findMedianSortedArraysAllNegative([ -12, -11, -10, -9, -8, -7 ], [ -6, -5, -4, -3, -2, -1 ]) === -6.5);
console.log(findMedianSortedArraysAllNegative([ -12, -11, -10, -9, -8 ], [ -6, -5, -4, -3, -2, -1 ]) === -6);
console.log(findMedianSortedArraysAllNegative([ -12, -11, -10, -9 ], [ -6, -5, -4, -3, -2, -1 ]) === -4.5);
console.log(findMedianSortedArraysAllNegative([ -12, -11, -10 ], [ -6, -5, -4, -3, -2, -1 ]) === -5);
console.log(findMedianSortedArraysAllNegative([ -12, -11 ], [ -6, -5, -4, -3, -2, -1 ]) === -3.5);
console.log(findMedianSortedArraysAllNegative([ -12 ], [ -6, -5, -4, -3, -2, -1 ]) === -4);
