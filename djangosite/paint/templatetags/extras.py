from django import template
from django.template.defaultfilters import stringfilter

register = template.Library()

@register.filter(name="makeItSmaller")
def makeItSmaller(value):
    return value.lower()
