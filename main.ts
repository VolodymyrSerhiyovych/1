input.onButtonPressed(Button.A, function () {
    Mayak = 0
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Mayak += 1
})
input.onButtonPressed(Button.B, function () {
    Mayak = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let Mayak = 0
Mayak = 1
basic.forever(function () {
    if (Mayak == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
