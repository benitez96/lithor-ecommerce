from fastapi import APIRouter, Depends, status, Body, HTTPException
from sqlmodel import Session
from fastapi.exceptions import HTTPException
from typing import List

from ...db.db import get_session
from ...models.models import *


router = APIRouter()


@router.post('/', response_model=CategoryRead, status_code=status.HTTP_201_CREATED)
def create_category(
    *,
    session: Session = Depends(get_session),
    category: CategoryCreate
):

    db_category = Category.from_orm(category)

    session.add(db_category)
    session.commit()
    session.refresh(db_category)

    return db_category

