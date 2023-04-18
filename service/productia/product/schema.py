
import graphene
from graphene_django import DjangoObjectType
from .models import Product


class ProductType(DjangoObjectType):

    class Meta:  
        model = Product  
        fields = ("id", "sku", "name", "price", "image", "description")  


class ProductQuery(graphene.ObjectType):  
      
    all_products = graphene.List(ProductType)
    # product_by_id = graphene.Field(ProductType, id=graphene.Int(required=True))
    # product_by_sku = graphene.List(ProductType, sku=graphene.String(required=True))
    # product_by_name = graphene.List(ProductType, name=graphene.String(required=True))

    def resolve_all_products(root, info):
        print("Info.resolve_all_products", info)
        return Product.objects.all()

    # def resolve_product_by_id(self, info, id):
    #     print("Info.resolve_product_by_id", info)
    #     try:
    #         return Product.objects.get(id=id)
    #     except Product.DoesNotExist:
    #         return Product.objects.none()
        
    # def resolve_product_by_sku(self, info, sku):
    #     print("Info.resolve_product_by_sku", info)
    #     return Product.objects.filter(sku=sku)
    
    # def resolve_product_by_name(self, info, name):
    #     print("Info.resolve_product_by_name", info)
    #     return Product.objects.filter(name=name)


