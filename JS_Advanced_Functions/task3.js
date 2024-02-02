function divide (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator can't be 0");
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both arguments should be numbers");
    }
    return numerator / denominator
}

try {
    const result1 = divide(2, 5)
    console.log(result1)
} catch (e) {
    console.log(e.message)
}

try {
    const result2 = divide(2, 0)
    console.log(result2)
} catch (e) {
    console.log(e.message)
}

try {
    const result3 = divide('text', 2)
    console.log(result3)
}
catch (e) {
    console.log(e.message)
}

finally {
    console.log("Work is completed")
}
