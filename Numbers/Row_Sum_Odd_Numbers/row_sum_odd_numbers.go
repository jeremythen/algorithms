package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(rowSumOddNumbers(3) == 27)
	fmt.Println(rowSumOddNumbers(4) == 64)
	fmt.Println(rowSumOddNumbers(5) == 125)
}

func rowSumOddNumbers(rowNum int) int {
	return int(math.Pow(float64(rowNum), 3))
}
