from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from minute.views import CustomRegisterView, verify_email, change_password
from dj_rest_auth.views import LoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # dj-rest-auth urls for login, logout etc.
    path('auth/', include('dj_rest_auth.urls')),
    
    # Custom views for auth
    path('auth/registration/', CustomRegisterView.as_view(), name='custom_register'),
    path('auth/verify/<uidb64>/<token>/', verify_email, name='verify-email'),
    path('auth/change-password/', change_password, name='change_password'),
    # For social accounts
    path('accounts/', include('allauth.urls')),
    
    # JWT Token views
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Include app's URLS
    # path('api/', include('minute.urls')),
] 
