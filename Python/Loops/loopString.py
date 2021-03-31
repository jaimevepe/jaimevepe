# Using the WHILE statement and an iteration variable, and the len function
# we can construct a loop to look at each of the letters in a string 
# individually.

# TODO: len will tell you the length of a string

fruit = 'banana'
index = 0
while index < len(fruit):
    letter = fruit[index]
    print(index, letter)
    index = index + 1
print()

# Expected Output: 0 b
                #  1 a
                #  2 n
                #  3 a
                #  4 n
                #  5 a

# TODO: For Loop - Much more elegant

fruit2 = 'pineapple'
for letter in fruit2:
    print('>',letter)
print()

# Loopong and Counting
# counting the 'a's on word
word = 'banana'
count = 0 
for letter in word:
    print(">>",letter) # if print is inside IF, it will print (a a a)
    if letter == 'a':
        count = count + 1
print("> counted",letter,count,"times.")