// While Loop

// var i = 0

// while( i < 10 ){
//     console.log('Younus Ali Akash')
//     i++
// }

var running = true
while (running){
    var rand = Math.floor(Math.random () * 10 + 1)
    if( rand == 5 ){
        console.log('You Won the Rafel Draw')
        running = false
       } else {
        console.log('Sorry Please try again. You have Got Number ' + rand )
    }
}
