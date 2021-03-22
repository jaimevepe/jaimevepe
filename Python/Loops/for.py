# This program converts the speeds 60 kph
# through 130 kph (in 10 kph increments)
# to mph. Using range() function
# Formula = MPH = KPH * 0.6214

START_SPEED = 60            # Starting speed
END_SPEDD = 131             # Ending speed
INCREMENT = 10              # Speed increment by 10
CONVERSION_FACTOR = 0.6214  # Conversion factor from Formula 

# Print the table headings
print(" ")
print('KPH \t MPH')
print('------------------')

# Print the converted speeds
for kph in range(START_SPEED, END_SPEDD, INCREMENT):
    mph = kph * CONVERSION_FACTOR
    print(kph, '\t', format(mph, '.1f'))
print('DONE')

# The first value in the sequence will be 60 assigned to kph. 
# Notice the third argument specifies 10 as the step value. 
# This means the numbers in the list will be 60, 70, 80, and so forth. 
# The second argument specifies 131 as the sequence’s ending limit, 
# so the last number in the sequence will be 130.