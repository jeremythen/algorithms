
function getPointsDistance(point1, point2) {
    return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
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
