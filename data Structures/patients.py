def time_needed(p):
    return p[1]
def order(patients):
    patients.sort(key=time_needed)

    total_wait=0
    wait=0
    ord=[]

    for p in patients:
        ord.append(p[0])
        total_wait+=wait
        wait+=p[1]

    return ord,total_wait

def details():
    n=int(input("Enter the no. of patients: "))
    patients= []
    for i in range(1,n+1):
        time=int(input(f"Enter the time required for patient {i}: "))
        patients.append((i,time))
    return patients


patients = details()
ord,total_wait = order(patients)
print("Order of patients",ord)
print("Total waiting time",total_wait)