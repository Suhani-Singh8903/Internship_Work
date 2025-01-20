import math

# def prime(n):
#     if n <= 1:
#         print("1 is not a prime number")
#     elif n <= 3:
#         print("Prime")
#     elif n % 2 == 0 or n % 3 == 0:
#         print("Composite")
#     else:
#         for i in range(5, int(math.sqrt(n)) + 1, 6):
#             if n % i == 0 or n % (i + 2) == 0:
#                 print(i)
#                 print("Composite")
#                 break
#         else:
#             print("Prime")

# a = int(input("Enter a no : "))
# prime(a)

def list_prime(a):
    count=0
    for a in range(2,a+1):
        if a<=3:
            print(a)
        elif a % 2 == 0 or a % 3 == 0:
            continue
        else:
            is_prime = True
            for i in range(5, int(math.sqrt(a)) + 1, 6):
                if a % i == 0 or a % (i + 2) == 0:
                    is_prime = False
                    break
            if is_prime:
                print(a)
        count+=1
    print ("The total no. of prime nos. are :",count)
a = int(input("Enter a no : "))
list_prime(a)
