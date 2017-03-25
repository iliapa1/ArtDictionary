from django.shortcuts import render
from django.http import HttpResponseRedirect
from .scripts.Oxford import DefineWord



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
    return render(request, 'paint/home.html')
