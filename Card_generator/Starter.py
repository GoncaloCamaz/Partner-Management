import csvReader as reader

def printGreetings():
    print("Hello! Im the card Generator\n")
    print("Please insert full path of csv file. (e.g. /Users/Downloads/Socios.csv")
    path = input()
    
    print("Please select:\n")

    print("1 - Generate all cards")
    print("2 - Generate specific card")

    if(input() == 1):
        reader.openFile(path,-1)
    else:
        print("Please insert the partner number:")
        number = input()
        reader.openFile(path,number)

printGreetings()
