semester = 8000.0
increase = 0.03

for year in range(0, 5):
    price = semester * increase
    semester = price + semester
    if year == 0:
     print("In", year + 1, "year, The tuition will be",semester)
    else :
        print("In", year + 1, "years, the tuition will be",semester)

#------------BONUS Factotirialize A Number------------------------------#

fac_num = int(input("Enter a nonnegative integer: "))
result = 1
for num in range(1, fac_num + 1):
    result = result * num
print(result)