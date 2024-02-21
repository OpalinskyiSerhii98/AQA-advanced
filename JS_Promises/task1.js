function printWithDelay (text, ms) {
    setTimeout(function (){
        console.log(`${text} ${ms} !`)
    }, ms)
}

printWithDelay( "some text will appear in", 1000+" ms")