# views.py
from django.db import connection
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from data.models import *
from data.serializers import *
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


def getUser(request):
    if isinstance(request.user, User):
        serializer = UserSerializer(request.user)
        return serializer.data


@swagger_auto_schema(
    methods=['get'],
    operation_summary="Get Current User",
    # request_body=editUserSerializer,
    security=[{"Bearer": []}]
)
@api_view(['GET'])
def current_user(request):
    if isinstance(request.user, User):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    else:
        return Response({"detail": "Authentication credentials were not provided."}, status=401)


@swagger_auto_schema(
    methods=['post'],
    operation_summary="Create User",
    # operation_description="Create a new user account.",
    request_body=UserSerializer,
    # request_body=openapi.Schema(
    #     type=openapi.TYPE_OBJECT,
    #     required=['username', 'email', 'password'],
    #     properties={
    #         'username': openapi.Schema(type=openapi.TYPE_STRING),
    #         'email': openapi.Schema(type=openapi.TYPE_STRING),
    #         'password': openapi.Schema(type=openapi.TYPE_STRING)
    #     }
    # ),
    # security=[{"Bearer": []}]
)
@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['password'] = make_password(
                serializer.validated_data.get('password'))
            user = serializer.save()
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(
    methods=['post'],
    operation_summary="Login",
    request_body=LoginSerializer,
    # security=[{"Bearer": []}]
)
@api_view(['POST'])
@permission_classes([])
def login_view(request):
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            raw_password = serializer.validated_data['password']
            print('here')
            # Retrieve the user from the database using the provided username
            user = User.objects.get(username=username)
            # Check if the provided raw password matches the hashed password in the database
            if check_password(raw_password, user.password):
                login(request, user)

                # Generate JWT tokens
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)

                return Response({"message": "Login successful", "access_token": access_token}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(
    methods=['post'],
    operation_summary="Edit Profile",
    request_body=editUserSerializer,
    security=[{"Bearer": []}]
)
@api_view(['POST'])
def editProfile(request):
    print("________________________edit_profile_______________________")
    user = request.user
    print(user)
    serializer = editUserSerializer(
        user, data=request.data, partial=True)  # For partial updates
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(
    methods=['Post'],
    operation_summary="Personal Details",
    request_body=PersonalDetailsSerializer
)
@api_view(['POST'])
def getPersonaDetails(req):
    print("____________________get_personal_details_____________________")
    data = req.data

    try:
        obj = PersonalDetails.objects.get(pk=data['id'])
        serializer = PersonalDetailsSerializer(obj)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except PersonalDetails.DoesNotExist:
        return Response({"error": "Personal details not found"}, status=status.HTTP_404_NOT_FOUND)


@ swagger_auto_schema(
    methods=['post'],
    operation_summary="Edit Personal Details",
    request_body=PersonalDetailsSerializer,
    security=[{"Bearer": []}]
)
@ api_view(['POST'])
def editPersonaDetails(request):
    print("________________________Edit Personal Details_______________________")
    try:
        instance = PersonalDetails.objects.get(
            id=request.data['id'])  # check if details already exists
        # if exists update it
        serializer = PersonalDetailsSerializer(instance=instance,
                                               data=request.data, partial=True)
    except:
        # if not exists create new
        serializer = PersonalDetailsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(['POST'])
def edu_level(req):
    user = getUser(req)
    # print(user)
    if req.method == 'GET':
        try:
            obj = Edu_level.objects.all()
            serializer = Edu_levelSerializer(obj, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response({'msg': 'No level Found'}, status=status.HTTP_204_NO_CONTENT)
    elif req.method == 'POST' and user['role'] == 'Admin':
        serializer = Edu_levelSerializer(data=req.data, partial=True)
        if serializer.is_valid():
            level = serializer.save()
            return Response(Edu_levelSerializer(level).data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(["GET", 'POST'])
def edu_degree(req):
    user = getUser(req)
    if req.method == 'GET':
        try:
            obj = Edu_degree.objects.get()
            serializer = Edu_degreeSerializer(obj)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response({'msg': 'No degree found'}, status=status.HTTP_204_NO_CONTENT)
    elif req.method == 'POST' and user['role'] == 'Admin':
        serializer = Edu_degreeSerializer(data=req.data, partial=True)
        if serializer.is_valid():
            obj = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(["GET", 'POST'])
def edu_group_or_mejor(req):
    user = getUser(req)
    if req.method == 'GET':
        try:
            obj = Edu_group_or_major.objects.get()
            serializer = Edu_group_or_majorSerializer(obj)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response({'msg': 'No group/major Found'}, status=status.HTTP_204_NO_CONTENT)
    elif req.method == 'POST' and user['role'] == 'Admin':
        serializer = Edu_group_or_majorSerializer(data=req.data, partial=True)
        print(req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@ api_view(["GET", ])
def edu_get(req):
    with connection.cursor() as cursor:
        cursor.execute(
            "select * from data_edu_level")
        levels = cursor.fetchall()
        levels = [dict(zip(['name', 'id'], level))
                  for level in levels]
        # result= []
        for level in levels:
            print(level['id'])
            cursor.execute(
                f"select name,id from data_edu_degree where level_id={level['id']}")
            degrees = cursor.fetchall()
            degrees = [dict(zip(['name', 'id'], degree)) for degree in degrees]
            for degree in degrees:
                cursor.execute(
                    f"select name,id from data_edu_group_or_major where degree_id={degree['id']}")
                groups = cursor.fetchall()
                groups = [dict(zip(['name', 'id'], group))
                          for group in groups]
                degree['groups'] = groups
            level['degrees'] = degrees
        return Response(levels, status=status.HTTP_200_OK)
