# Try / Except Structure

# You surround a dangerous section of code with TRY and EXCEPT
# If the code in the TRY works - the EXCEPT is Skipped
# If the code in the TRY fails - it jumps to the EXCEPT section

greet = 'Hello Bob!'
try: 
    isGreet = int(greet) #turned it into a number (dangerous code)
except:
    isGreet = -1
print("First", isGreet) # will print -1

greet = '123'
try:
    isGreet = int(greet) # dangerous code
except:
    isGreet = -1
print("Second", isGreet) # will print 123

# Entering Data

rawstr = input('Enter a number:')
try:
    convertToNum = int(rawstr) # converts your input into a number,
                               # as long as you entered a number and not string
except:
    convertToNum = -1

if convertToNum > 0:
    print("Nice work: ",convertToNum)
else:
    print("Not a number")

####################################################
temp = '5' # if temp had a word string insde, it would skip to except
cel = 0
try:
    fahr = float(temp) # turn it into a number with decimal
    cel = (fahr - 32.0) * 5.0 / 9.0
except:
    print('Something went wrong!')
print('Done, this is the temp', cel)
