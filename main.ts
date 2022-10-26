radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        basic.showIcon(IconNames.Heart)
        music.playTone(880, music.beat(BeatFraction.Whole))
        basic.showNumber(kyoudo)
    }
})
input.onButtonPressed(Button.A, function () {
    if (kyoudo > 0) {
        kyoudo += -1
        basic.showNumber(kyoudo)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    music.playTone(440, music.beat(BeatFraction.Eighth))
    radio.setTransmitPower(kyoudo)
    radio.sendString("takara")
    basic.showNumber(kyoudo)
})
input.onButtonPressed(Button.B, function () {
    if (kyoudo < 7) {
        kyoudo += 1
        basic.showNumber(kyoudo)
    }
})
let kyoudo = 0
radio.setGroup(1)
kyoudo = 7
basic.showNumber(kyoudo)
