def greet():
    if 2%1 == 0:
        print("what")
    return "Hello, Python!"
def hi():
    return "hey"


def three():
    return "three"

def two():
    return "two"


def four():
    return "four"

def five():
    return "four"

def six():
    return "six"

if __name__ == "__main__":
    for i in range(5):
        print(greet())
    for i in range(2):
        print(hi())
    print(four())
    print(five())
    print(six())