from django.urls import path
from . import views

#Codigo feito pra configurar as rotas para as nossas views de API no Django.

urlpatterns = [
    path('artists/', views.ArtistListCreate.as_view(), name='artist-list-create'),
    path('artists/<int:pk>/', views.ArtistRetrieveUpdateDestroy.as_view(), name='artist-retrieve-update-destroy'),
]
