from django.db import models

class Product(models.Model):  
    image = models.URLField(max_length=200)
    description = models.TextField(null=False, blank=False)
    sku = models.CharField(null=False, blank=False, max_length=20)
    price = models.PositiveBigIntegerField(null=False, blank=False)
    name = models.CharField(null=False, blank=False, max_length=100)
  
    def __str__(self):  
        return self.name

