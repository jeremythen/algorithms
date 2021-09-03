package main

import (
	"fmt"
)

func main() {
	fmt.Println(fib(6) == 8)
	fmt.Println(fib(7) == 13)
	fmt.Println(fib(8) == 21)
}

func fib(n int) int {
	v1 := 0
	v2 := 1
	for i := 1; i < n; i++ {
		v2 = v1 + v2
		v1 = v2 - v1
	}
	return v2
}
