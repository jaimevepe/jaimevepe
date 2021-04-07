def main():
    # Get the number of units and the unit cost.
    num_units = int(input('Enter the number of units: '))
    unit_cost = float(input('Enter the cost of each unit: '))
   
    # Call show_total_cost, passing num_units into the
    # units parameter and unit_cost into the cost parameter.
    show_total_cost(units=num_units, cost=unit_cost )

def show_total_cost(units, cost):
    total_cost = units * cost
    print('Total Cost:', format(total_cost, ',.2f'))

# Call the main function.
main()