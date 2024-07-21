from rest_framework import generics
from .models import Artist
from .serializers import ArtistSerializer

#Criar as views usando o Rest Framework para realizar as operações CRUD sobre os artistas.
class ArtistListCreate(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
