
def fib(n):
    v1 = 0
    v2 = 1
    for _ in range(1, n):
        v2 = v1 + v2
        v1 = v2 - v1
    return v2

print(fib(6) == 8)
print(fib(7) == 13)
print(fib(8) == 21)
