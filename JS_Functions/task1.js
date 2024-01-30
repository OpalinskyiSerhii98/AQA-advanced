// Function declaration
function calculateRectangleArea(width, height) {
    return width * height
}

const result = calculateRectangleArea(5, 10)
console.log(result)

// Function expression

const calculateRectangleArea2 = function (width, height) {
    return width * height
}

const result2 = calculateRectangleArea(2, 5)
console.log(result2)

// Arrow function

const calculateRectangleArea3 = (width, height) => {
    return width * height
}

const result3 = calculateRectangleArea(8, 2)
console.log(result3)