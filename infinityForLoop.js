
for ( ; ;){
    var rand = Math.floor(Math.random () * 10 + 1)
    if( rand == 5 ){
        console.log('You Won the Rafel Draw')
        break
       } else {
        console.log('Sorry Please try again. You have Got Number ' + rand )
    }
}