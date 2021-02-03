# def creates a bit of code and records it in the named word you created
# EX: def funcName()

def greet():
    print('Hello')
    print('Hello Again from greet!')

greet() # invokes/calling the greet function
print('Done executing greet')

# Max function
# searches the largest character
big = max('Hello world')
print(big) # prints w

# Min function finds the blank as min
tiny = min('Hello word')
print(tiny) # prints the space between o and w

# TODO: ARGUMENTS TODO:
# Argument is a value we pass into the function as its input when we call the function
# We put the arguments in parentheses after the name of the function
# big = max('Hello World') - Hello World is the Argument

# TODO: PARAMETERS TODO:
# A parameter is a variable which we use in the function DEFINITION.
# It is the "handle" that allows the code in the function to access the arguments
# for a particular function invocation.
# EX: lang is the parameter
def sayHello(lang):
        if lang == 'hi':
            print("Hi Back!")
sayHello('hi')

# TODO: Return Values TODO:
# Often function will take its arguments, do some computation, and RETURN a value
# to be used as the value of the function call in the calling expression.
# The RETURN keyword is used for this

def hello():
    return'Hola from hello func'

print(hello(), "Jaime")

# TODO: Multiple Parameters/Arguments
# We can define more than one parameter in the function difinition.
# We simply add more arguments when we call the function.

def addtwo(a, b): # multiple parameters
    added = a + b
    return added          
x = addtwo(5, 5)# Added amount of arguments needed in addtwo func.
print("This is the result of addtwo:", x) 
# We match the number and order os arguments and parameters


