def basic_recursion(n):
    if n==0:
        return 1
    return n*basic_recursion(n-1)

n=int(input("Enter the no. for which you want to find the factorial of : "))
print(basic_recursion(n))