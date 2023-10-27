// Needed start-up functions

function calculate(x: number, y: number){
    return (x / y) * 100;
}

// Needed start-up variables

let worth = 1;
let bitcoin = 30000;
let mctnb = 0;
let percentage = calculate(worth, bitcoin);

// Initate start-up

basic.showString("Welcome to MCTNB Blockchain");
basic.showString("0 = Mine, 1 = See Stats, 2 = Reset");
basic.showString("Starting now MCTNB is worth 0.003% of a bitcoin.");

// Controls

input.onPinPressed(TouchPin.P0, function(){
    mctnb += 0.1;
    basic.showNumber(mctnb);
});

input.onPinPressed(TouchPin.P1, function(){
    basic.showString("You own " + calculate(mctnb, bitcoin).toString() + "% of bitcoin.");
    basic.showString("You have " + mctnb.toString() + " mctnb.");
});

input.onPinPressed(TouchPin.P2, function(){
    basic.showString("RESET");
    mctnb = 0;
});