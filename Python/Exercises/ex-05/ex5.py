#TODO:
# Write a program which repeatedly reads numbers until the user enters "done"
# Once "done" is entered, print out the total, count, and average 
# of the numbers. If the user enters anything other then a number, detect
# their mistake using TRY and EXCEPT and print and error message
# and skip to the next number.

num = 0
total = 0

while True: # infinate loop
    string = input("Enter a number: ")
    if string == 'done': # To break out of the loop
        break
    try:
      floatVal = float(string) # converting string to float value
    except:
        print('Invalid Input')
        continue # will make loop go back to the top
    # print(floatVal)
    num = num + 1
    total = total + floatVal

# print('All Done')
print(total, num, total/num)