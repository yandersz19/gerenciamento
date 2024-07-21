from rest_framework import serializers
from .models import Artist

# DRF Criado para definir como serão serializados (JSON) ou Deserializados (Pyhton)
class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'
