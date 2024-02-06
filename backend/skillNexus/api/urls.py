from django.urls import path

from . import views

urlpatterns = [
    path('signup', views.signup),
    path('login', views.login_view),
    path('current_user', views.current_user)
]
