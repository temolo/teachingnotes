input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.showNumber(pins.analogReadPin(AnalogPin.P2))
        basic.pause(500)
    }
})
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Happy)
basic.pause(500)
