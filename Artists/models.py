from django.db import models
# Representação dos artistas com os seguintes atributos: Nome, Tipo, E-mail, Documento e tipo de documento)
class Artist(models.Model):
    ARTIST_TYPES = [
        ('band', 'Banda'),
        ('solo', 'Solo'),
    ]
    DOCUMENT_TYPES = [
        ('cpf', 'CPF'),
        ('rg', 'RG'),
    ]

    name = models.CharField(max_length=100)
    artist_type = models.CharField(max_length=4, choices=ARTIST_TYPES)
    email = models.EmailField()
    document = models.CharField(max_length=20)
    document_type = models.CharField(max_length=3, choices=DOCUMENT_TYPES)

    def __str__(self):
        return self.name
