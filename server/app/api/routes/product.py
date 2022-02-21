from fastapi import APIRouter, Depends, status, Body, HTTPException
from fastapi.exceptions import HTTPException
from sqlmodel import Session, select
from typing import List

from ...models.models import *
from ...db.db import get_session


router = APIRouter()

@router.post('/', response_model=ProductRead, status_code=status.HTTP_201_CREATED)
def create_product(
        *,
        session: Session = Depends(get_session),
        product: ProductCreate
):


    db_product = Product.from_orm(product)

    categories = session.query(Category).filter(Category.id.in_(product.category_ids)).all()
    if not categories:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Categories not found")

    db_product.categories = categories

    print(db_product)


    session.add(db_product)
    session.commit()
    session.refresh(db_product)

    return db_product
