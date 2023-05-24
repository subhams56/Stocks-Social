from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status

from user_app.api.serializers import RegistrationSerializer
from user_app import models
from django.contrib.auth import authenticate
from rest_framework.response import Response

@api_view(["POST"])
def logout_view(request):
    if request.method == "POST":
        request.user.auth_token.delete()
        return Response(status = status.HTTP_200_OK)

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(username=username, password=password)
    
    if user is not None:
        # User credentials are valid, generate token
        token, _ = Token.objects.get_or_create(user=user)
        
        response_data = {
            'token': token.key,
            'userid': user.id
        }
        
        return Response(response_data)
    else:
        # Invalid credentials
        return Response({'error': 'Invalid credentials'}, status=400)

@api_view(['POST'])
def registration_view(request):
    serializer = RegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    account = serializer.save()

    # Generate token for the registered user
    token, _ = Token.objects.get_or_create(user=account)

    response_data = {
        'token': token.key,
        'userid': account.id,
        'username': account.username,
        'email': account.email,
        'response': 'Registration Successful'
    }

    return Response(response_data)
