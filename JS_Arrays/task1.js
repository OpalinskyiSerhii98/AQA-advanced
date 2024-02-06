
function countNumbers(array) {
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveCount++
        }
        else if (array[i] < 0) {
            negativeCount++
        }
        else {
            zeroCount++
        }
    }
    console.log("Кількість позитивних чисел:", positiveCount);
    console.log("Кількість негативних чисел:", negativeCount);
    console.log("Кількість нульових чисел:", zeroCount);
}

const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
countNumbers(numbers)