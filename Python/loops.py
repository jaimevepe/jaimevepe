#While Loop
# infinite loop
n = 5
while n > 0 :
    print(n)
    n = n - 1
print("Blashoff!")
print(n) 

# Breaking out of loops

# while True:
#     line = input("> ")
#     if line == "done" :
#         break
#     print(line)
# print("Done!")

# Finishing an iteration with continue
while True:
    lin = input("-> ")
    if lin[0] == "#":
        continue
    if lin == "done": # done typed in will stop the loop
        break
    print(lin)
print("Done!")