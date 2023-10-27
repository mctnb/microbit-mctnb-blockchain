// Controls
input.onPinPressed(TouchPin.P0, function () {
    mctnb += 0.1
    if (!(kelp)) {
        basic.showNumber(mctnb)
    }
})
// Button Press
input.onButtonPressed(Button.A, function () {
    basic.showString("Simple Mode")
    basic.showString("No longer will show number.")
    kelp = true
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("RESET")
    mctnb = 0
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("You own " + calculate(mctnb, bitcoin).toString() + "% of bitcoin.")
    basic.showString("You have " + mctnb.toString() + " mctnb.")
})
/**
 * Needed start-up functions
 */
function calculate (x: number, y: number) {
    return x / y * 100
}
let kelp = false
let mctnb = 0
// Needed start-up variables
let worth = 1
let bitcoin = 30000
let percentage = calculate(worth, bitcoin)
// Initate start-up
basic.showString("Welcome to MCTNB Blockchain")
basic.showString("0 = Mine, 1 = See Stats, 2 = Reset")
basic.showString("Starting now MCTNB is worth 0.003% of a bitcoin.")
