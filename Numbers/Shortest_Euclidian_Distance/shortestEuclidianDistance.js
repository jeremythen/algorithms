
function getPointsDistance(point1, point2) {
    const v1 = point1[0];
    const v2 = point2[0];
    const v3 = point1[1];
    const v4 = point2[1];
    const v1Minusv2 = v1 - v2;
    const v3Minusv4 = v3 - v4;
    const v1MinusV2Squared = Math.pow(v1Minusv2, 2);
    const v3Minusv4Squared = Math.pow(v3Minusv4, 2);
    const v1MinusV2SquaredPlusV3Minusv4Squared = v1MinusV2Squared + v3Minusv4Squared;
    const sqrt = Math.sqrt(v1MinusV2SquaredPlusV3Minusv4Squared);
    return sqrt;
}

function shortestPointLineLength(points) {
    let smallest = +Infinity;
    for(let i = 0; i < points.length - 1; i++) {
        const pointsDistance = getPointsDistance(points[i], points[i + 1]);
        if(pointsDistance < smallest) {
            smallest = pointsDistance;
        }
    }
    return smallest.toFixed(2);
}

const points = [[0, 11], [-7, 1], [-5, -3]];
const expectedResult = 4.47;

const smallestPointsDistance = shortestPointLineLength(points);

console.log('smallestPointsDistance: ', smallestPointsDistance);
console.log('smallestPointsDistance === expectedResult: ', smallestPointsDistance == expectedResult);
