from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # ['id', 'username', 'email', 'first_name', 'last_name', 'bio',
        #   'location', 'profile_picture', 'rating', 'role', 'last_login']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ['id']

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'first_name',
                  'last_name', 'bio', 'mobile', 'country', 'profile_picture', 'rating', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user

    def update(self, instance, validated_data):
        # Override the update method if needed
        instance.username = validated_data.get('username', instance.username)
        # Hash the new password if it is provided
        new_password = validated_data.get('password')
        if new_password:
            instance.password = make_password(new_password)
        # Add other fields as needed
        instance.save()
        return instance


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})


class editUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('bio', 'country', 'profile_picture', 'mobile',
                  'first_name', 'last_name', 'email')
