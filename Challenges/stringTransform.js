function transformString(s) {
    const length = s.length;

    if (length % 15 === 0) {
        // Reverse the string
        const reversedString = s.split('').reverse().join('');
        // Replace each character with its ASCII code
        const asciiCodes = Array.from(reversedString).map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else if (length % 3 === 0) {
        // Reverse the string
        return s.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        const asciiCodes = Array.from(s).map(char => char.charCodeAt(0)).join(' ');
        return asciiCodes;
    } else {
        // No transformation if none of the conditions are met
        return s;
    }
}

// Test cases from the problem statement
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"