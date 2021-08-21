package main

import (
	"fmt"
)

func main() {
	fmt.Println(maxChars("abcdadsfadgadsssssssa") == "s")
}

func maxChars(s string) string {

	charCounter := make(map[string]int)
	maxChar := ""
	maxCharCount := 0

	for _, c := range s {
		cStr := string(c)
		charCounter[cStr]++
		if charCounter[cStr] > maxCharCount {
			maxChar = cStr
			maxCharCount = charCounter[cStr]
		}
	}

	return maxChar
}
