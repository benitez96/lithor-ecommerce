from fastapi import APIRouter, Depends, status, Body, HTTPException
from fastapi.exceptions import HTTPException
from sqlmodel import Session

from ...db.db import get_session
from ...models.models import *


router = APIRouter()


@router.post('/', response_model=OrderCreate, status_code=status.HTTP_201_CREATED)
async def create_order(
    order: OrderCreate,
    session: Session = Depends(get_session)
):
    db_order = Order.from_orm(order)
    products = session.query(Product).filter(Product.id.in_(order.products)).all()

    db_order.products = products

    session.add(db_order)
    session.commit()
    session.refresh(db_order)

    return db_order
