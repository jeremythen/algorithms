

def max_chars(string):
    chars_count_map = {}
    max_char = ''
    max_char_count = 0
    for c in string:
        if chars_count_map.get(c) is None:
            chars_count_map[c] = 1
        chars_count_map[c] += 1

        if(chars_count_map[c] > max_char_count):
            max_char_count = chars_count_map[c]
            max_char = c

    return max_char


print(max_chars("abcdadsfadgadsssssssa") == 's')