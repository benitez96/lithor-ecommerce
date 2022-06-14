from fastapi import APIRouter, Depends, status, Body, HTTPException
from fastapi.exceptions import HTTPException
from sqlmodel import Session, select
from typing import List

from ..schemas.product import *
from ...models.models import *
from ...db.db import get_session


router = APIRouter()

@router.get("/{product_id}", response_model=ProductSchema)
def get_product(product_id: int, session: Session = Depends(get_session)):
    product = session.get(Product, product_id)
    if product is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Product not found")
    return product

@router.get("/", response_model=List[ProductSchema])
def get_products(session: Session = Depends(get_session)):
    """
    Get all products
    """
    return session.exec(select(Product)).all()

@router.post('/', response_model=ProductSchema, status_code=status.HTTP_201_CREATED)
def create_product(
        *,
        session: Session = Depends(get_session),
        product: ProductSchema
):

    db_product = Product.from_orm(product)

    if product.category_ids:
        categories = session.query(Category).filter(Category.id.in_(product.category_ids)).all()
        if not categories:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Categories not found")
        db_product.categories = categories

    session.add(db_product)
    session.commit()
    session.refresh(db_product)

    #TODO: faltan insertar las imagenes primero
    for variant in product.variants:

        db_variant = Variant(
            size = variant.size,
            price = float(variant.price),
            cost = float(variant.cost),
            quantity = variant.quantity,
        )
        db_variant.product_id = db_product.id

        session.add(db_variant)
        session.commit()
        session.refresh(db_variant)

        for image in variant.images:
            db_image = Image.from_orm(image)
            db_image.variant_id = db_variant.id
            session.add(db_image)
            session.commit()



    session.refresh(db_product)

    return db_product
