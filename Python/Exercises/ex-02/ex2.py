# Write computation to pay workers from hours worked and oay rate

hours = input("Enter Hours: ")
rate = input("Enter Rate: ")
# hours are type string inputs, so we have to convert them into Numbers
xp = float(hours) * float(rate)
print("Your Pay:",xp)

#----------------------------------------------------------------#
# Rewrite pay computation to pay workers time and a half(0.5) for working more than 40 hours

hours2 = input("Enter hours again: ")
rate2 = input("Enter rate: ")
fhour = float(hours2) # convert to decimal numbers
fRate = float(rate2)

# print(fhour, fRate)
if fhour > 40 :
    print('OverTime')
    regPay = fhour * fRate
    overTimePay = (fhour - 40.0) * (fRate * 0.5)
    pay = regPay + overTimePay
else:
    print('Regular Pay')
    pay = fhour * fRate
print("PAY with TRY/EXCEPT",pay)