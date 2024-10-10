from django.shortcuts import render
from rest_framework import status
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

        # send_email_confirmation(request, user) # Send the email verification

        headers = self.get_success_headers(serializer.data)

        return Response(
            {"detail": "User created successfully", "data": serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )