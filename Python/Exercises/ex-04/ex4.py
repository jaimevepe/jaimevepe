def computepay(hours, rate):
    print("In compute pay", fhour, fRate)
    if fhour > 40 :
        regPay = fhour * fRate
        overTimePay = (fhour - 40.0) * (fRate * 0.5)
        pay = regPay + overTimePay
    else:
        pay = fhour * fRate
    # print("Returning",pay)
    return pay # TODO: must have return on a function call


hours = input("Enter hours: ")
rate = input("Enter rate: ")
try: # Dangerous Code
    fhour = float(hours) # convert to decimal numbers
    fRate = float(rate)
except:
    print("Error! Enter numeric input for rate and hours")
    quit() # to not continue to the code below

# print(fhour, fRate)
check = computepay(fhour,fRate) # TODO: def func needs a return of value for func call to work
print("Pay Check:", check)

