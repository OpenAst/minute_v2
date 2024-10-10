from django.contrib.auth.forms import UserCreationForm
from django import forms
from minute.models import CustomUser
from django.core.exceptions import ValidationError

class RegistrationForm(UserCreationForm):
  email = forms.EmailField(required=True)
  username = forms.CharField(widget=forms.TextInput(attrs={"placeholder": "Enter email-username", "class": "form-control"}))  
  password1 = forms.CharField(label="Password", widget=forms.TextInput(attrs={"placeholder": "Enter password", "class": "form-control"}))  
  password1 = forms.CharField(label="Password", widget=forms.TextInput(attrs={"placeholder": "Enter password", "class": "form-control"}))
  password2 = forms.CharField(label="Password", widget=forms.TextInput(attrs={"placeholder": "Enter password", "class": "form-control"})) 
  class Meta:
    model = CustomUser
    fields = ['username', 'email', 'password1', 'password2']
     
  def clean_email(self):
    email = self.cleaned_data.get('email')
    if CustomUser.objects.filter(email=email).exists():
      raise ValidationError('An account with this email already exist')
    return
  