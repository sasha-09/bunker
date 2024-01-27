from PIL import Image, ImageDraw, ImageFont

top_text = input("введите категорию:")
bottom_text = input("введите название:")


template = ["карта.png"]

print("выберите картинку для шаблона:")

for i in range(len(template)):
  print(i, template[i])
tempalate_number = int(input("введите номер шаблона:"))

image = Image.open(template[tempalate_number])

width, height = image.size

draw = ImageDraw.Draw(image)

font = ImageFont.truetype("arial.ttf", size=50)

text = draw.textbbox( (0, 0), top_text, font=font)
draw.text(((width - text[2]) / 2, 280), top_text, font=font, fill="black")

text = draw.textbbox((0, 0), bottom_text, font)
draw.text(((width - text[2]) / 2, height - text[3] - 800), bottom_text, font=font, fill="black")

image.save("ГотоваяКарта.png")
