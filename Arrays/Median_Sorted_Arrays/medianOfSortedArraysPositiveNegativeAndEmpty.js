const countOfMissingNumbersBetween = (min, max, length) => {
    if(length === 0) {
        return 0;
    }
    const count = max - min - length + 1;
    return count < 0 ? 0 : count;
};

const findMedianSortedArraysAllNegativeAllNegative = (nums1, nums2) => {

    const totalLength = nums1.length + nums2.length;

    const min = Math.min(nums1[0], nums2[0]);
    const max = Math.max(nums1[nums1.length - 1], nums2[nums2.length - 1]);

    const countOfMissingNumbers = countOfMissingNumbersBetween(min, max, totalLength);

    const newMin = min + countOfMissingNumbers;

    const sum = newMin + max;

    let result = sum / 2;

    return result;

};

const findMedianSortedArraysAllPositive = (nums1, nums2) => {

    const totalLength = nums1.length + nums2.length;

    const min = Math.min(nums1[0], nums2[0]);
    const max = Math.max(nums1[nums1.length - 1], nums2[nums2.length - 1]);

    const countOfMissingNumbers = countOfMissingNumbersBetween(min, max, totalLength);

    const newMax = max - countOfMissingNumbers;

    const sum = min + newMax;

    const result = sum / 2;

    return result;

};

const medianOfSortedArraysPositiveNegativeAndEmpty = (nums1, nums2) => {

    const originalNums1 = nums1;
    const originalNums2 = nums2;

    if(nums1.length === 0 && nums2.length === 0) {
        return 0;
    }

    const totalLength = nums1.length + nums2.length;

    if(nums1.length === 0 && nums2.length > 0) {
        nums1 = nums2;
    }

    if(nums2.length === 0 && nums1.length > 0) {
        nums2 = nums1;
    }
    
    const min = Math.min(nums1[0] || 0, nums2[0] || 0);
    const max = Math.max(nums1[nums1.length - 1] || 0, nums2[nums2.length - 1] || 0);

    if(min < 0 && max < 0 && (originalNums1.length !== 0 && originalNums2.length !== 0)) {
        return findMedianSortedArraysAllNegativeAllNegative(nums1, nums2);
    }

    if(min >= 0 && max >= 0 && (originalNums1.length !== 0 && originalNums2.length !== 0)) {
        return findMedianSortedArraysAllPositive(nums1, nums2);
    }

    const countOfMissingNumbers = countOfMissingNumbersBetween(min, max, totalLength);

    const newMax = max - countOfMissingNumbers;

    const sum = newMax + min;

    let result = sum / 2;

    if(min < 0 && countOfMissingNumbers > 0 && totalLength % 2 === 0) {
        result + 1;
    }

    return result;
    

};


// Positive numbers
// console.log('Positive numbers')
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,3], [2]) === 2);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2], [3,4]) === 2.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([0,0], [0,0]) === 0);

console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,5,6], [7,8,9,10,11,12]));
console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7,8,9,10,12]));

// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,4,6], [7,8,9,10,11,12]) === 7);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7,8,9,10,12]) === 6);


// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7,8,9,10,11]) === 6);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7,8,9,10]) === 5.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7,8,9]) === 5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7,8]) === 4.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,4,5,6], [7]) === 4);

// // Positive and negative numbers
// console.log('Positive and negative numbers')
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], [7,8,9,10,11,12]) === 6.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], [7,8,9,10,11]) === 6);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], [7,8,9,10]) === 5.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], [7,8,9]) === 5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], [7,8]) === 4.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], [7]) === 4);

// // All negative numbers
// console.log('All negative numbers')

// // Not working yet
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12, -11, -10, -9, -8, -7 ], [ -6, -5, -4, -3, -2, -1 ]) === -6.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12, -11, -10, -9, -8 ], [ -6, -5, -4, -3, -2, -1 ]) === -6);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12, -11, -10, -9 ], [ -6, -5, -4, -3, -2, -1 ]) === -5.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12, -11, -10 ], [ -6, -5, -4, -3, -2, -1 ]) === -5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12, -11 ], [ -6, -5, -4, -3, -2, -1 ]) === -4.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12 ], [ -6, -5, -4, -3, -2, -1 ]) === -4);

// // With positive and negative numbers and empty arrays
// console.log('With positive and negative numbers and empty arrays')

// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], []) === 0);

// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [7,8,9,10,11,12]) === 9.5);
//console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [7,8,10,11,12]) === 10);
//console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [7,8,9,10,12]) === 9);
//console.log(medianOfSortedArraysPositiveNegativeAndEmpty([1,2,3,5,6], []));
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [7,8,9,10]) === 8.5);

// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [-2,-1,7,8,9,10,11]) === 8);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([-1,2,3,4,5,6], []) === 3.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [-2,-1,7,8,9]) === 7);

// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([], [ -6, -5, -4, -3, -2, -1 ]) === -3.5);
// console.log(medianOfSortedArraysPositiveNegativeAndEmpty([ -12, -11 ], []) === -11.5);




const medianOfSortedArraysPositiveNegativeAndEmpty2 = function(nums1, nums2) {

    if(nums1.length === 0 && nums2.length === 0) {
        return 0;
    }

    const totalLength = nums1.length + nums2.length;

    if(nums1.length === 0 && nums2.length > 0) {
        nums1 = nums2;
    }

    if(nums2.length === 0 && nums1.length > 0) {
        nums2 = nums1;
    }

    const min = Math.min(nums1[0] || 0, nums2[0] || 0);
    const max = Math.max(nums1[nums1.length - 1] || 0, nums2[nums2.length - 1] || 0);

    if(max === 0 && min === 0) {
        return 0;
    }

    const countOfMissingNumbers = countOfMissingNumbersBetween(min, max, totalLength);

    let newMax;

    newMax = max < 0 ? min + countOfMissingNumbers : max - countOfMissingNumbers;

    const newMin = max < 0 ? max : min;

    const sum = min < 0 ? newMax - min : newMax + newMin;

    let result = sum / 2;

    if(min < 0 && countOfMissingNumbers > 0 && totalLength % 2 === 0) {
        result += 1;
    }

    return result;

};