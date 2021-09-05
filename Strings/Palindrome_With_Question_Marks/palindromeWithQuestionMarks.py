
def palindrome_with_question_marks(s):
    chars = list(s)
    length = len(s)
    for i, j in zip(range(0, length / 2 + 1), range(length, length / 2 - 1, -1)):
        left_char = chars[i]
        right_char = chars[j - 1]
        if left_char != '?' and right_char != '?':
            if left_char != right_char:
                return "NO"
        elif left_char == '?' and right_char == '?':
            chars[i] = 'a'
            chars[j - 1] = 'a'
        elif left_char == '?':
            chars[i] = right_char
        elif right_char == '?':
            chars[j - 1] = left_char
    return ''.join(chars)

print(palindrome_with_question_marks("?ab??a") == "aabbaa")
print(palindrome_with_question_marks("bab??a") == "NO")
print(palindrome_with_question_marks("?a?") == "aaa")
print(palindrome_with_question_marks("a?a") == "aaa")
print(palindrome_with_question_marks("?ab???a") == "aababaa")
