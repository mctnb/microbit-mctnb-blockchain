# Controls

def on_pin_pressed_p0():
    global mctnb
    mctnb += 0.1
    if not (kelp):
        basic.show_number(mctnb)
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

# Button Press

def on_button_pressed_a():
    global kelp
    basic.show_string("Simple Mode")
    basic.show_string("No longer will show number.")
    kelp = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global mctnb
    basic.show_string("RESET")
    mctnb = 0
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_pin_pressed_p1():
    basic.show_string("You own " + str(calculate(mctnb, bitcoin)) + "% of bitcoin.")
    basic.show_string("You have " + str(mctnb) + " mctnb.")
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

"""

Needed start-up functions

"""
def calculate(x: number, y: number):
    return x / y * 100
kelp = False
mctnb = 0
# Needed start-up variables
worth = 1
bitcoin = 30000
percentage = calculate(worth, bitcoin)
# Initate start-up
basic.show_string("Welcome to MCTNB Blockchain")
basic.show_string("0 = Mine, 1 = See Stats, 2 = Reset")
basic.show_string("Starting now MCTNB is worth 0.003% of a bitcoin.")