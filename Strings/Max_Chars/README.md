# Max Chars

Receive a strings and return the most repeated character.

## Logic

Create a map to keep the string characters as keys and the count of how many times those characters are present as the value.
Loop through the string characters and increase by one the count in the map the map for that character.
At the same time, keep the max char count you have found so far in a variable and compare it with each character count while looking through the string characters, so at the end of the loop, we have the most used character in a variable.

## Testing

To run the algorithm:

In Go
> go run max_chars.go

In Javascript
> node max_chars.js

In Python
> python max_chars.py

In Java
> java MaxChars.java

