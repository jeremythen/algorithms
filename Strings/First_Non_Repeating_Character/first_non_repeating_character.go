package main

import (
	"fmt"
)

func firstNonRepeatedCharacter(str string) string {
	charCount := make(map[rune]int)
	for _, c := range str {
		charCount[c]++
	}
	for _, c := range str {
		if charCount[c] == 1 {
			return string(c)
		}
	}
	return ""
}

func main() {
	fmt.Println(firstNonRepeatedCharacter("abcdabcdef") == "e")
	fmt.Println(firstNonRepeatedCharacter("abcdacdef") == "b")
	fmt.Println(firstNonRepeatedCharacter("abcda") == "b")
	fmt.Println(firstNonRepeatedCharacter("abcd") == "a")
}
