input.onButtonPressed(Button.AB, function () {
    StAtE = 1
})
let StAtE = 0
StAtE = 0
basic.forever(function () {
    if (StAtE == 1) {
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
    }
})
