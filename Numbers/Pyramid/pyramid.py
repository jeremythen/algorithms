
from functools import reduce

def pyramid(n):
    arr = [" "] * (n * 2 - 1)
    midLength = len(arr) / 2
    for i, j in zip(range(midLength, -1, -1), range(midLength, len(arr) + 1)):
        arr[i] = '#'
        arr[j] = '#'
        s = reduce(lambda a, b: a + b, arr)
        print(s)

pyramid(1)
pyramid(2)
pyramid(3)
pyramid(4)
pyramid(5)

