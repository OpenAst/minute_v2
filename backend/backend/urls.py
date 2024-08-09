from django.contrib import admin
from django.urls import path, include
from allauth.account.views import account_inactive
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from dj_rest_auth.registration.views import VerifyEmailView, ConfirmEmailView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Djoser auth urls 
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    
    # dj-rest-auth urls for login, logout etc.
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    
    # JWT Token views
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Social account specific urls
    path('auth/registration/account-confirm-email/', VerifyEmailView.as_view(), name='account_email_verification_sent'),
    path('auth/registration/account-confirm-email/<str:key>/', ConfirmEmailView.as_view(), name='confirm-email'),
    
    # allauth endpoints
    path('account-inactive/', account_inactive, name='account_inactive'),
    
    path('accounts/', include('allauth.urls')),
    
    # Include app's URLS
    # path('', include('minute.urls')),
] 
