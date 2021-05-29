import csv
from cardGenerator import drawCard

def openFile(path, mode):
    with open(path, newline='') as csvFile:
        reader = csv.reader(csvFile, delimiter=';')
        if(mode == -1):
            drawAll(reader)
        else:
            drawParterCard(mode, reader)


def drawAll(reader):
    for row in reader:
        number = row[0]
        name = row[1]
        year = row[5]
        email = row[2]
        drawCard(number,name,email,year)

def drawParterCard(number, reader):
    for row in reader:
        if(row[0] == number):
            number = row[0]
            name = row[1]
            year = row[5]
            email = row[2]
            drawCard(number,name,email,year)
