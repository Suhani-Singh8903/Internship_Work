# Get number of children
n = int(input("Enter number of children: "))

# Get ages
ages = []
print("Enter age of each child:")
for i in range(n):
    age = int(input(f"Child {i+1}: "))
    ages.append(age)

# Sort ages
ages.sort()

# Create groups
groups = []
current_group = [ages[0]]

# Put children in groups
for age in ages[1:]:
    if age - current_group[0] <= 2:  # If age difference is 2 or less
        current_group.append(age)
    else:  # If age difference is more than 2
        groups.append(current_group)
        current_group = [age]

# Add the last group
groups.append(current_group)

# Print results
print("\nGroups:")
for i, group in enumerate(groups, 1):
    print(f"Group {i}: {group}")
print(f"\nTotal number of groups: {len(groups)}")

# n=int(input("Enter no. of children : "))
# age=[]
# for i in range(1,n+1):
#     j=int(input(f"Enter the age of child {i}:"))
#     age.append(j)

# print(age)
# age.sort()
# for i in range[1:]:
#     if age[i]-age[i-1]