function sum(a, b) {
    return a + b;
  }

function capitalize(string) {
    const firstAlphabet = string.charAt(0).toUpperCase()

    return firstAlphabet + string.slice(1)
}

function reverseString(string) {
    return [...string].reverse().join('')
}

export {
    sum,
    capitalize,
    reverseString
}