basic.showIcon(IconNames.EigthNote)
basic.pause(1000)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
    }
})
