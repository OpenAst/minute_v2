from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from minute.models import CustomUser

class Command(BaseCommand):
  help = 'Clean up incomplete user registrations'
  def handle(self, *args, **options):
    threshold = timezone.now() - timedelta(minutes=15)
    incomplete_users = CustomUser.objects.filter(email_verified=False, date_joined_lt=threshold)
    
    deleted_count,  _ = incomplete_users.delete()
    self.stdout.write(self.style.SUCCESS(f'Deleted {deleted_count} incomplete user registrations.'))