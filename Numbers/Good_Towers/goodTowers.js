function isExpensierIfBacktracked(fromIndex, H, M, value) {
  if (fromIndex === 0 && M[fromIndex] < value) {
    return false;
  }
  H[fromIndex]++; // Simulating that the increment was done on this tower.
  let cost = M[fromIndex];
  if (cost > value) {
    return true;
  }
  // Go back, incrementing the first tower that is equal to the next,
  // summing the cost of this backtracking and return as soon as the
  // cost is greater than modifying the next tower.
  for (let i = fromIndex - 1; i > -1; i--) {
    const v1 = H[i];
    const v2 = H[i + 1];
    if (v1 !== v2) {
      return false;
    }
    cost += M[i];
    H[i]++;
    if (cost > value) {
      return true;
    }
  }
  return false;
}

function minCost(H, M) {
  let minCost = 0;

  const j = H.length - 1;

  for (let i = 0; i < j; i++) {
    const v1 = H[i];
    const v2 = H[i + 1];
    if (v1 === v2) {
      const cost1 = M[i];
      const cost2 = M[i + 1];
      // Check if backtracking is cheaper.
      if (isExpensierIfBacktracked(i, [...H], M, cost2)) {
        H[i + 1]++;
        minCost += cost2;
      } else {
        minCost += cost1;
        H[i]++;
        i -= 2; // Backtrack to check if the previous tower now is equal to the current tower
      }
    }
  }
  return minCost;
}

console.log(minCost(3, [2, 2, 2], [3, 10, 6]) === 9);
console.log(minCost(3, [2, 2, 3], [4, 1, 5]) === 2);
console.log(minCost(4, [1, 3, 2, 1000000000], [7, 3, 6, 2]) === 0);

console.log(minCost(5, [1, 4, 3, 3, 3], [1, 2, 3, 4, 5]) === 4);
console.log(minCost(6, [1, 4, 3, 3, 3, 3], [1, 2, 3, 4, 5, 6]) === 10);
