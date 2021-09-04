package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(reverseInt(123) == 321)
	fmt.Println(reverseInt(500) == 5)
	fmt.Println(reverseInt(503) == 305)
}

func reverseInt(n int32) int {
	n2 := int(math.Abs(float64(n)))
	result := 0
	for n2 > 0 {
		result = result*10 + n2%10
		n2 /= 10
	}
	if n < 0 {
		return -result
	}
	return result
}
