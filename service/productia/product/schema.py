
import graphene
from graphene_django import DjangoObjectType
from .models import Product


class ProductType(DjangoObjectType):

    class Meta:
        model = Product
        fields = ("id", "sku", "name", "price", "image", "description")


class ProductQuery(graphene.ObjectType):

    all_product = graphene.List(ProductType)
    # description clashes with graphene.List description so the field desc is expected
    query_products = graphene.List(ProductType,
                                sku=graphene.String(default_value=None, required=False),
                                name=graphene.String(default_value=None, required=False),
                                image=graphene.String(default_value=None, required=False),
                                price=graphene.BigInt(default_value=None, required=False),
                                desc=graphene.String(default_value=None, required=False)) 
    product_by_id = graphene.Field(ProductType, id=graphene.Int(required=False))

    def resolve_all_product(self, info):
        return Product.objects.all()

    def resolve_query_products(self, info, **kwargs):
        try:
            filter = {}
            for kwarg in kwargs:
                print("Info.>>>>", kwarg, kwargs[kwarg])
                if kwargs[kwarg] is not None:
                    filter[kwarg] = kwargs[kwarg]
            return Product.objects.filter(**filter)
        except Product.DoesNotExist:
            return Product.objects.none()

    def resolve_product_by_id(self, info, id):
        print("Info.resolve_product_by_id", info)
        try:
            return Product.objects.get(id=id)
        except Product.DoesNotExist:
            return Product.objects.none()


schema = graphene.Schema(query=ProductQuery)
