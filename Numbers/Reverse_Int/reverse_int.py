
def reverse_int(n):
    n2 = abs(n)
    result = 0
    while n2 > 0:
        result = result * 10 + n2 % 10
        n2 /= 10
    return -result if n < 0 else result

print(reverse_int(123) == 321)
print(reverse_int(500) == 5)
print(reverse_int(503) == 305)
