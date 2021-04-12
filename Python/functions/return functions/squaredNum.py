def square(num):
    return num ** 2 
    
def main():
    to_square = int(input('Enter an integer: '))
    squared = square(to_square)
    print("The result of",to_square,"squared is",squared)

main()