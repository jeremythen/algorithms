package main

import (
	"fmt"
	"math"
)

func main() {

	fmt.Println(digitAt(1234567, 1) == 7)
	fmt.Println(digitAt(1234567, 2) == 6)
	fmt.Println(digitAt(1234567, 3) == 5)
	fmt.Println(digitAt(1234567, 4) == 4)

}

func digitAt(num, index int) int {
	return (num / int(math.Pow(10, float64(index-1)))) % 10
}
