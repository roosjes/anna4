basic.showLeds(`
    . # . # .
    # # # # #
    . # # # .
    . . # . .
    . . . . .
    `)
music.playMelody("F D G B D A D A ", 196)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    music.playMelody("C5 B A G F E D C ", 120)
})
