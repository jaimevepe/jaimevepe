# Asterix pattern upside down
for row in range( 10, 0, -1):
    for col in range(row):
        print("*", end=" ")
    print()

# HashTag pattern 
# rows_num = 10

# for row in range(rows_num - 1):
#     print("#", end="")

#     for space in range(row):
#         print(" ", end="")
#     print("#")

# TODO: Find smallest number
smallest = None
print("Before:", smallest)
for num in [3, 41, 12, 1, 74, 15]:
    if smallest is None or num < smallest:
        smallest = num
    print("Loop:", num, smallest)
print("Smallest:", smallest)