from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from user_app.api.views import registration_view,logout_view,login_view

urlpatterns = [
    path('login/', login_view, name='login'),
    path('register/',registration_view,name='register'),
    path('logout/',logout_view,name='logout'),
] 
