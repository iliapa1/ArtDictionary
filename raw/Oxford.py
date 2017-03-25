import requests
import json
import sys
from pprint import pprint
import re
#  -*- coding: utf-8 -*-

pattern = ' '
printed = 0

app_id = "ac4c15fa"
app_key = "7c0858622acda81d78ee9e746079a042"
language = "en"
word_id = input("Word: ")

lexcat = input('What part of speech is this?')
lexcat = lexcat.lower()
lexcat = lexcat[0].upper() + lexcat[1:]

url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.lower() + '/' + 'definitions'

r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})

#print("code {}\n".format(r.status_code)) #just returns status code
#print("text \n" + r.text)
data = json.loads(r.text)
#url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.lower()
#r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})
#pprint(data)
#print(data["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][2]["definitions"])


i=0
while(printed==0):
    if lexcat == data["results"][0]["lexicalEntries"][i]["lexicalCategory"]:
        definition = str(data["results"][0]["lexicalEntries"][i]["entries"][0]["senses"][0]["definitions"])
        definition = definition[:-2]
        definition = definition[2:]
        definition = definition[0].upper() + definition[1:] + '.'
        print(definition)

        printed = 1

    i = i+1
