# -*- coding: utf-8 -*-
import random
import os
import datetime
import qrcode

from PIL import Image, ImageDraw, ImageFont

def drawCard(num,name,email,firstYear):
    font = ImageFont.truetype('Fonts/Arial.ttf',20)
    image = Image.new('RGB', (800,600), (255, 255, 255))
    draw = ImageDraw.Draw(image)

    # Numero do Socio
    (x, y) = (20, 350)
    color = 'rgb(0, 0, 0)'
    number = str('Número: '+str(num))
    draw.text((x, y), number, fill=color, font=font)

    # ano de enrada
    (x, y) = (20, 400)
    color = 'rgb(0, 0, 0)'
    entranceYear = str('Sócio desde: '+str(firstYear))
    draw.text((x, y), entranceYear, fill=color, font=font)

    # nome do socio
    (x, y) = (20, 450)
    color = 'rgb(0, 0, 0)' # black color
    nameAux = str('Nome: '+str(name))
    draw.text((x, y), nameAux, fill=color, font=font)

    # email
    (x, y) = (20, 500)
    color = 'rgb(0, 0, 0)' # black color
    emailAux = str('Email: '+str(email))
    draw.text((x, y), emailAux, fill=color, font=font)


    # save the edited image
    img = qrcode.make('http://www.arcum.pt/')    
    image.paste(img,(500,0))
    imArcum = Image.open('Images/arcum.png','r')
    image.paste(imArcum,(0,50))

    image.save('Cards/'+name+'.png')