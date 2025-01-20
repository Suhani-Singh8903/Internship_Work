# def read_input():
#     n = int(input("Enter the number of elements: "))
#     numbers = list(map(int, input("Enter the numbers separated by space: ").split()))
#     return n, numbers

# def find_max_pairwise_product(numbers):
#     numbers.sort()
#     max1 = numbers[-1]  
#     max2 = numbers[-2]  
#     return max1 * max2


# n, numbers = read_input()
# result = find_max_pairwise_product(numbers)
# print("Maximum Pairwise Product:", result)

# import random

# def read_input():
#     """Reads input from the user."""
#     n = int(input("Enter the number of elements: "))
#     numbers = list(map(int, input("Enter the numbers separated by space: ").split()))
#     return n, numbers

# def find_max_pairwise_product(numbers):
#     """Finds the maximum pairwise product from a list of numbers."""
#     numbers.sort()
#     max1 = numbers[-1]  # Largest number
#     max2 = numbers[-2]  # Second largest number
#     return max1 * max2

# def brute_force_max_pairwise_product(numbers):
#     """Computes the maximum pairwise product using brute force."""
#     max_product = 0
#     n = len(numbers)
#     for i in range(n):
#         for j in range(i + 1, n):
#             max_product = max(max_product, numbers[i] * numbers[j])
#     return max_product

# def generate_test_case(max_size=1000, max_value=10**5):
#     """Generates a random test case."""
#     n = random.randint(2, max_size)  # Random size between 2 and max_size
#     numbers = [random.randint(0, max_value) for _ in range(n)]
#     return n, numbers

# def stress_test(iterations=1000, max_size=10000, max_value=10**7):
#     """Performs stress testing by comparing the optimized solution with the brute-force solution."""
#     for i in range(iterations):
#         # Generate a test case
#         n, numbers = generate_test_case(max_size, max_value)
        
#         # Calculate results using both methods
#         result_fast = find_max_pairwise_product(numbers)
#         result_slow = brute_force_max_pairwise_product(numbers)
        
#         # Compare results
#         if result_fast != result_slow:
#             print("Test case failed!")
#             print("Numbers:", numbers)
#             print("Fast result:", result_fast)
#             print("Slow result:", result_slow)
#             return
        
#         print(f"Test case {i + 1} passed.")
    
#     print("All test cases passed!")

# # Main execution
# if __name__ == "__main__":
#     # Uncomment this for user input
#     # n, numbers = read_input()
#     # print("Maximum Pairwise Product:", find_max_pairwise_product(numbers))

#     # Stress test
#     stress_test(iterations=100, max_size=1000, max_value=100000)

n=int(input("Enter the no. of elements: "))
numbers=list(map(int, input("Enter the numbers separated by space: ").split()))
for i in range(0,len(numbers)):
    for j in range(i+1,len(numbers)):
        if numbers[i]>numbers[j]:
            temp=numbers[i]
            numbers[i]=numbers[j]
            numbers[j]=temp
print()


print ("Sorted array : ", numbers)
print("Max Pairwise product is ",numbers[-1]*numbers[-2])