from rest_framework import serializers
from .models import CustomUser

class UserCreateSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ('id', 'first_name', 'last_name', 'username', 'email', 'password')
    extra_kwargs = { 'password': {'write_only': True}}
    
    def create(self, validated_data):
      user = CustomUser.objects.create_user(
        username=validated_data['username'],
        first_name=validated_data['first_name'],
        email=validated_data['email'],
        password=validated_data['password']
      )
      return user
    
class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email')
    
class UserDeleteSerializer(serializers.ModelSerializer):
  class Meta:
    model = CustomUser
    fields = ['id']
    
  def delete(self, validated_data):
    user = CustomUser.objects.get(id=validated_data['id'])
    user.delete()
    return user
      