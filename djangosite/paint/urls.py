from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^ajax_word/', views.ajax_word, name='ajax_word'),
    url(r'^home/', views.index, name='index'),
    url(r'^paint/', views.paint, name='paint'),
    url(r'^ajax_db/', views.ajax_db, name='ajax_db'),
    url(r'^about/', views.about, name='about')
]
