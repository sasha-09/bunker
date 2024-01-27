from translatepy.translators.google import GoogleTranslate

import requests

gtranslate = GoogleTranslate()

def get_weather(city, api_key):
  print(f"Вы ввели: {city}, ваш ключ: {api_key}")
  
  # настройка ссылки
  url="https://api.openweathermap.org/data/2.5/weather?"
  complete_url=f"{url}q={city}&appid={api_key}&units=metric"
  print(complete_url)

  # запрос на сайт
  r =requests.get(complete_url)  
  print(r)

  # получение данных
  data =r.json()
  print(type(data))

  # получение температуры
  temp=data["main"]["temp"]
  print(f"Температура: {temp}")

  # получение погоды
  weather=data["weather"][00]["main"]
  print(weather)
  
  translate_weather=gtranslate.translate(weather,"RU")
  print(translate_weather)
  
  
  # получение ветра
  wind_speed=data["wind"]["speed"]
  print(f"Скорость ветра: {wind_speed}")

  # получение страны
  country=data["sys"]["country"]
  print(country)



def main():
  print("добро пожаловать в погоду для диназаврав")
  api_key="d60a491c7db5d7ceadac7227ebc93ebc"
  city=input("какой город вам нужен: ")
  get_weather(city, api_key)
  
main()