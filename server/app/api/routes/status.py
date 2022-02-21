from fastapi import APIRouter, Depends, status, Body, HTTPException
from fastapi.exceptions import HTTPException
from sqlmodel import Session

from ...db.db import get_session
from ...models.models import *


router = APIRouter()


@router.post('/', response_model=StatusRead, status_code=status.HTTP_201_CREATED)
async def create_order(
    status: StatusCreate,
    session: Session = Depends(get_session)
):
    db_status = Status.from_orm(status)

    session.add(db_status)
    session.commit()
    session.refresh(db_status)

    return db_status
