let Hand = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        if (Hand == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (Hand == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    game.removeLife(1)
})
input.onButtonPressed(Button.A, function () {
    Hand = randint(0, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(1)
    game.setLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
    game.setLife(2)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.addScore(1)
    game.setLife(3)
})
