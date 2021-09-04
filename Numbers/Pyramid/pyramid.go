package main

import (
	"fmt"
)

func main() {
	pyramid(1)
	pyramid(2)
	pyramid(3)
	pyramid(4)
	pyramid(5)
}

func pyramid(n int) {
	size := (n*2 - 1)
	arr := []string{}

	for i := 0; i < size; i++ {
		arr = append(arr, " ")
	}

	midLength := len(arr) / 2

	for i, j := midLength, midLength; i >= 0; i, j = i-1, j+1 {
		arr[i] = "#"
		arr[j] = "#"
		fmt.Println(arr)
	}

}
