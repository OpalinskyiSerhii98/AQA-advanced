function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(number);
    } else {
        oddCallback(number);
    }
}

const handleEven = (num) => console.log("number is even")
const handleOdd = (num) => console.log("number is odd")

handleNum(98,handleEven, handleOdd)