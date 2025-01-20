def gcd(a,b):
    while b:
        a,b=b,a%b
    return a

n=int(input('enter a no.'))
m=int(input('enter a no. '))
if n>m:
    gcd(n,m)
else:
    gcd(m,n)