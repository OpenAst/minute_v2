from django.shortcuts import render
from rest_framework import status
from allauth.account.utils import send_email_confirmation
from rest_framework.response import Response
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.registration.views import RegisterView
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.encoding import force_bytes
from django.shortcuts import redirect
from django.http import HttpResponse
from django.contrib.auth import get_user_model

class CustomRegisterView(RegisterView):
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Perform any custom actions here
        user = serializer.save(request)
        user.is_active = False # Disable user until email verification
        user.save()

        # Generate email verification token
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)
        verification_link = f"{request.scheme}://{request.get_host()}/auth/verify/{uid}/{token}/"

        send_mail(
             'Verify your account',
            f'Click the link to verify your account: {verification_link}',
            'isrealme0@gmail.com', 
            [user.email],
        )
        
        headers = self.get_success_headers(serializer.data)

        return Response(
            {"detail": "User created successfully", "data": serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )
    
def verify_email(request, uidb64, token):
        User = get_user_model()
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
             user.is_active = True
             user.save()
             return HttpResponse('Email verification successful')
        else:
             return HttpResponse('Email verification failed.')    


