"""
This program calculates the area of a cylinder. 
Fill in the missing line for the calculation. The formula is 4r2.
"""

PI = 3.14159265358979     # global constant 

def cylinder_area(rad):
    area = 4*PI*rad**2  
    print('The cylinder area is', format(area,'.2f'))

def main():
    radius = float(input('Enter the cylinder radius: '))
    cylinder_area(radius)
    
main()