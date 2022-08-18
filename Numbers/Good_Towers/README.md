You are given an array `H` containing the height of towers. The idea is that there should not be 2 adjacent towers with the same height. If that is the case, then you need to increment the size of one of the towers so they are not the same height.
There can be many towers with the same height, but non of them should be the same height.

You have given an array `M` which indicates the cost of increasing the height by 1 on each tower at index `i`.

The idea is to provide a solution that avoids 2 adjacent towers with the same height in the least cost.

For example, given:

```js
const H = [2, 2, 2];
const M = [3, 10, 6];
```

We could try to modify the element of `H` at index 1: `[2, 3, 2]`, so towers with the same height are not next to each other, but increasing `H[1]` would cost `M[1]` which is 10.
And if we instead modified `0` and `2` then `H` would be: `[3, 2, 3]` and that would cost `M[0]` + `M[2]` which is 9, less than 10. So, this is the solution in this case.

The function will have the following signature:

```js
function minCost(H, M)
```

And should return the minimum cost it would need to modify the towers height so that no towers with the same height are adjacent.
