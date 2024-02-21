function printWithDelay (text, ms) {
    console.log(`${text} ${ms} !`)
}
setTimeout(printWithDelay, 1000, "some text appears in", "1 ms")