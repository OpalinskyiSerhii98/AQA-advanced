const checkOrder = (available, ordered) => {
    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods"
    }
    if (ordered === 0) {
        return "Your order is empty"
    }
    else {
        return "Your order is accepted"
    }
}

const result = checkOrder(100, 80)
console.log(result)