"""
This program calculates the area of a cylinder.
Using a function with a Return
Fill in the missing line for the calculation. The formula is 4r2.
"""
PI = 3.14159265358979     # global constant 
def cylinder_area(rad):
    return 4*PI*rad**2    # use value of global constant PI
    
def main():
    radius = float(input('Enter the cylinder radius: '))
    area = cylinder_area(radius) # --> Executes function
    print("The cylinder area is",format(area, ',.2f'))

main()