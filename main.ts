radio.onReceivedNumber(function (receivedNumber) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
	
})
radio.setGroup(1)
radio.sendNumber(0)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
