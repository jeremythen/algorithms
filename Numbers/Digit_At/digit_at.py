
def digit_at(number, index):
    return number // 10 ** (index - 1) % 10


print(digit_at(1234567, 1) == 7)
print(digit_at(1234567, 2) == 6)
print(digit_at(1234567, 3) == 5)
print(digit_at(1234567, 4) == 4)
