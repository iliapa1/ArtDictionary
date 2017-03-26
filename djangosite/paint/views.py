from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse

import requests
import json
import sys
from pprint import pprint
import re
#  -*- coding: utf-8 -*-

pattern = ' '

#url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.lower()
#r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})
#pprint(data)
#print(data["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][2]["definitions"])


def DefineWord(word_id, lexcat):
    app_id = "ac4c15fa"
    app_key = "7c0858622acda81d78ee9e746079a042"
    language = "en"

    lexcat = lexcat.lower()
    lexcat = lexcat[0].upper() + lexcat[1:]

    url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/' + language + '/' + word_id.lower() + '/' + 'definitions'

    r = requests.get(url, headers = {'app_id': app_id, 'app_key': app_key})

    #print("code {}\n".format(r.status_code)) #just returns status code
    #print("text \n" + r.text)
    data = json.loads(r.text)
    i=0
    printed = 0
    while(printed==0):
        if lexcat == data["results"][0]["lexicalEntries"][i]["lexicalCategory"]:
            print(lexcat)
            definition = str(data["results"][0]["lexicalEntries"][i]["entries"][0]["senses"][0]["definitions"])
            definition = definition[:-2]
            definition = definition[2:]
            definition = definition[0].upper() + definition[1:]
            print(i)
            return definition

            printed = 1
        i=i+1

#def get_word(request):
#    if request.method == 'POST':
#        form = WordForm(request.POST)
#        if form.is_valid():
#            return str(form)
#
#
#    else:
#        form = WordForm()

#form = get_word(request)
#c = str(DefineWord(form, 'noun'))

def index(request):
    context = {}
    return render(request, 'paint/home.html', context = context)

def paint(request):
    return render(request, 'paint/paint.html')

def ajax_word(request):
    return JsonResponse({"word_definition": DefineWord(request.GET.get("word", 0), request.GET.get("lexica", 0))})
