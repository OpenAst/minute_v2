import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
from django.core.mail import send_mail

send_mail(
  'Test EMail',
  'This is a test',
  'isrealme0@gmail.com',
  ['isrealcrack@gmail.com'],
  fail_silently=False,
)