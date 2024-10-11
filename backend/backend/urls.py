from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from dj_rest_auth.registration.views import VerifyEmailView, ConfirmEmailView
from minute.views import CustomRegisterView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # dj-rest-auth urls for login, logout etc.
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', CustomRegisterView.as_view(), name='custom_register'),
    
    # Email verification and confirmation views 
    path('auth/registration/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_confirmation_sent'),
    path('auth/registration/account-confirm-email/<str:key>/', ConfirmEmailView.as_view(), name='confirm-email'),

    path('auth/password/reset/', include('dj_rest_auth.urls')),
    path('auth/password/reset/confirm/', include('dj_rest_auth.urls')),

    path('auth/password/change/', include('dj_rest_auth.urls')),
    
    # For social accounts
    path('accounts/', include('allauth.urls')),
    
    # JWT Token views
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Include app's URLS
    # path('', include('minute.urls')),
] 
