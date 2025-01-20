# Returns either the index of the location in the array,
# or -1 if the array did not contain the target value
def binary_search(array, target_value):
    min_index = 0
    max_index = len(array) - 1

    while min_index <= max_index:
        guess_index = (min_index + max_index) // 2
        
        if array[guess_index] == target_value:
            return guess_index  # Target value found
        elif array[guess_index] < target_value:
            min_index = guess_index + 1  # Search in the right half
        else:
            max_index = guess_index - 1  # Search in the left half

    return -1  # Target value not found

# Example usage
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
          41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

result = binary_search(primes, 73)
print("Found prime at index", result)

# You can also add assertions to test the function
assert binary_search(primes, 73) == 20
assert binary_search(primes, 2) == 0
assert binary_search(primes, 97) == 24
assert binary_search(primes, 50) == -1
