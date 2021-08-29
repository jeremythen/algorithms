function capitalize(s) {
    const chars = s.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i - 1] === ' ' || i === 0) {
            chars[i] = chars[i].toUpperCase();
        }
    }
    return chars.join('');
}

console.log(capitalize("this is jeremy") === 'This Is Jeremy');
