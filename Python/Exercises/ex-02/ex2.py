hours = input("Enter Hours: ")
rate = input("Eenter Rate: ")
# hours are type string inputs, so we have to convert them into Numbers
xp = float(hours) * float(rate)
print("Pay:",xp)