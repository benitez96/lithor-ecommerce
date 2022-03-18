from fastapi import APIRouter, Depends, status, Body, HTTPException
from fastapi.exceptions import HTTPException
from sqlmodel import Session, select
from typing import List
from starlette.config import Config
import mercadopago

from ...models.models import *
from ...db.db import get_session

config = Config(".env")

ACCESS_TOKEN = config("MP_ACCESS_TOKEN", cast=str)


router = APIRouter()

@router.post("/")
def process_payment(request: PaymentRequest):
    print(request)

    sdk = mercadopago.SDK(ACCESS_TOKEN)
    payment_data = request.dict()

    payment_response = sdk.payment().create(payment_data)
    payment = payment_response["response"]

    print(payment)

    return payment
