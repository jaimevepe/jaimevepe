"""
Repeat 10 times:
         If a random number in the range of 1 through 2 equals 1 then:
              Display ‘Heads’
        Else:
              Display ‘Tails’
"""

# This program simulates 10 tosses of a coin.
import random

# Constants
HEADS = 1
TAILS = 2
TOSSES = 10

def main():
    for toss in range(TOSSES):
        # Simulate the coin toss.
        if random.randint(HEADS, TAILS) == HEADS:
            print('Heads')
        else:
            print('Tails')

# Call the main function.
main()