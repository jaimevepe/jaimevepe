# Definition of the main function. 
def main(): 
  order = 'Hello, I would like to order' 
  print(order) # You have to define order before printing it
  make_order()

# Definition of the make_order function. 
def make_order(): 
   order = input('Enter your order: ') 
   print ('You have ordered', order)

# Call the main function. 
main()

#---------------------------------------------#

# multiply two integers and display the result in a function
def main2():
    val_1 = int(input('Enter an integer: '))
    val_2 = int(input('Enter another integer: '))
    multiply(val_1, val_2) # sending our inputed values as arguments
                           # for multiply() function
    
def multiply(num_1, num_2): # num_1 and num_2 are parameters
    product = num_1 * num_2 
    print ('The result is', product)

main2()