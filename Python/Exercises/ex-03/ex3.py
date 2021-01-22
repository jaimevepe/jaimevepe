
# Rewrite pay computation to pay workers time and a half(0.5) 
# for working more than 40 hours
# with Try and Except

hours2 = input("Enter hours again: ")
rate2 = input("Enter rate: ")
try: # Dangerous Code
    fhour = float(hours2) # convert to decimal numbers
    fRate = float(rate2)
except:
    print("Error! Enter numeric input for rate")
    quit() # to not continue to the code below

print(fhour, fRate)
if fhour > 40 :
    regPay = fhour * fRate
    overTimePay = (fhour - 40.0) * (fRate * 0.5)
    pay = regPay + overTimePay
else:
    pay = fhour * fRate
print("PAY with TRY/EXCEPT",pay)