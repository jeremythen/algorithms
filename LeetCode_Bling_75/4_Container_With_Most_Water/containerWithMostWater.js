function containerWithMostWater(height) {
    let maxSofar = 0;
    const len = height.length;
    for(let i = 0, j = len - 1; i < j; ) {

        const value1 = height[i];
        const value2 = height[j];

        const min = value1 < value2 ? value1 : value2;
        const elementsInBetween = j - i;
        const result = min * elementsInBetween;

        if(result > maxSofar) {
            maxSofar = result;
        }

        if(min === value1) {
            i++;
        } else {
            j--;
        }

    }
    return maxSofar;
}

containerWithMostWater([1,8,6,2,5,4,8,3,7]); // 49
containerWithMostWater([1,1]); // 1
containerWithMostWater([4,3,2,1,4]); // 16
containerWithMostWater([1,2,1]); // 2