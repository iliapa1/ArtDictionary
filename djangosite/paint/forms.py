from django import forms
from paint.models import Images

class ImageForm(forms.ModelForm):
    class Meta:
        model = Images
        fields = ('word', 'image' )
