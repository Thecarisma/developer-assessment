import graphene
from .product.schema import ProductQuery

schema = graphene.Schema()


schema.query = graphene.Schema(query=ProductQuery)
