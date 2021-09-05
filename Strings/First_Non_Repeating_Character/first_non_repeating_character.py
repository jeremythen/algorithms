
def first_non_repeated_character(str):
    charCounter = {}
    for c in str:
        if c not in charCounter:
            charCounter[c] = 0
        charCounter[c] += 1
    for c in str:
        if charCounter[c] == 1:
            return c
    return None

print(first_non_repeated_character("abcdabcdef") == "e")
print(first_non_repeated_character("abcdacdef") == "b")
print(first_non_repeated_character("abcda") == "b")
print(first_non_repeated_character("abcd") == "a")

