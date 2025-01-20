import time

def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

# Get user input
a = int(input("Enter a number: "))

# Measure execution time
start_time = time.time()
result = fib(a)
end_time = time.time()

# Output result and time taken
print(f"The Fibonacci number at position {a} is {result}")
print(f"Time taken to compute: {end_time - start_time:.6f} seconds")
