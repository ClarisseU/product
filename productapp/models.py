from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=60)
    detail = models.CharField(max_length=60)
    price = models.CharField(max_length=60)
    manufactured = models.CharField(max_length=60)
    
    def __str__(self):
        return self.name
    
    def save_product(self):
        self.save()
        