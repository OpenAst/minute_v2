from django.shortcuts import render
from rest_framework import status
from allauth.account.utils import send_email_confirmation
from rest_framework.response import Response
from rest_framework.views import APIView
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.registration.views import RegisterView


class CustomRegisterView(RegisterView):
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Perform any custom actions here
        user = self.perform_create(serializer)

        try:
            send_email_confirmation(request, user) # Send the email verification
        except Exception as e:
            # If 
            user.delete()
            return Response(
                {"detail": "User created, but email confirmation failed. User deleted."},
                status=status.HTTP_400_BAD_REQUEST
            )    

        headers = self.get_success_headers(serializer.data)

        return Response(
            {"detail": "User created successfully", "data": serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )