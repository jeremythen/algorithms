function matrix(n) {

    const arr = Array(n);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Array(n);
    }

    let counter = 1;
    let direction = 'right';

    let i = 0;
    let j = -1;

    const limitIndex = n - 1;
    const n2 = n * n;

    const hasValue = (i, j) => arr[i][j];

    while (counter <= n2) {

        switch (direction) {
            case 'right':
                j++;
                if (j === limitIndex || hasValue(i, j + 1)) {
                    direction = 'down';
                }
                break;
            case 'down':
                i++;
                if (i === limitIndex || hasValue(i + 1, j)) {
                    direction = 'left';
                }
                break;
            case 'left':
                j--;
                if (j === 0 && i > 0 || hasValue(i, j - 1)) {
                    direction = 'up';
                }
                break;
            case 'up':
                i--;
                if (hasValue(i - 1, j)) {
                    direction = 'right';
                }
                break;
        }
        arr[i][j] = counter;
        counter++;
    }

    return arr;

}

console.log(matrix(4));