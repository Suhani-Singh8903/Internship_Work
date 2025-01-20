import time
def fib(n):
    f = [0, 1]  # Initialize the list with the first two Fibonacci numbers
    for i in range(2, n + 1):
        f.append(f[-1] + f[-2])  # Append the sum of the last two numbers
    
    print(f[n]) # Return the nth Fibonacci number

a = int(input("Enter a number: "))
start_time=time.time()
result = fib(a)
end_time=time.time()
print(result)
print(f"Time taken to compute: {end_time - start_time:.6f} seconds")
