from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from numpy import product
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EntiretyApp.models import Users, Products, UserProductsMappings
from EntiretyApp.serializers import UserSerializer, ProductSerializer, UserProductsMappingSerializer

from django.core.files.storage import default_storage

@csrf_exempt
def userRegistrationApi(request,id=0):
    if request.method=='GET':
        users = Users.objects.all()
        users_serializer=UserSerializer(users,many=True)
        return JsonResponse(users_serializer.data,safe=False)
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        users_serializer=UserSerializer(data=user_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse("Registration Successful",safe=False)
        return JsonResponse("Failed to Register",safe=False)

@csrf_exempt
def userLoginApi(request):
    data = JSONParser().parse(request)
    userExist = False
    username = data["UserName"]
    password = data["Password"]
    users = Users.objects.all()
    users_serializer=UserSerializer(users,many=True)
    for x in users_serializer.data:
        usernameExist = False
        passwordExist = False
        for key, value in x.items():
            if(key == 'UserName' and value == username):
                usernameExist = True
            if(key == 'Password' and value == password) :
                passwordExist = True
            if(usernameExist and passwordExist) :
                userExist = True
                break
        if(userExist) :
            break
    if(userExist) :
        return JsonResponse({"message" : "Login Successful", "token": username},safe=False)
    return JsonResponse({"message" : "Username or Password is incorrect", "token" : ''},safe=False)
    
@csrf_exempt
def productsApi(request,id=0):
    if request.method=='GET':
        products = Products.objects.all()
        products_serializer=ProductSerializer(products,many=True)
        return JsonResponse(products_serializer.data,safe=False)
    elif request.method=='POST':
        product_data=JSONParser().parse(request)
        products_serializer=ProductSerializer(data=product_data)
        if products_serializer.is_valid():
            products_serializer.save()
            return JsonResponse("Product added",safe=False)
        return JsonResponse("Failed to add the product",safe=False)
    elif request.method=='DELETE':
        products = Products.objects.get(ProductId=id)
        products.delete()
        return JsonResponse("Product deleted",safe=False)

@csrf_exempt
def userProductMapApi(request,id=0):
    if request.method=='GET':
        mappings = UserProductsMappings.objects.all()
        mapping_serializer=UserProductsMappingSerializer(mappings,many=True)
        return JsonResponse(mapping_serializer.data,safe=False)
    elif request.method=='POST':
        mapping_data=JSONParser().parse(request)
        mapping_serializer=UserProductsMappingSerializer(data=mapping_data)
        if mapping_serializer.is_valid():
            mapping_serializer.save()
            return JsonResponse("Product added to the cart",safe=False)
        return JsonResponse("Failed to add product to the cart",safe=False)
    elif request.method=='DELETE':
        mappings=UserProductsMappings.objects.get(MappingId=id)
        mappings.delete()
        return JsonResponse("Product removed from the cart",safe=False)
  