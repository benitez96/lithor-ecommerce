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
def process_payment(request: PaymentRequest, session: Session = Depends(get_session)):

    # Verify product stock
    for item in request.items:
        product = session.get(Variant, item.id)

        if product.quantity - item.quantity < 0 :
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Producto agotado")



    sdk = mercadopago.SDK(ACCESS_TOKEN)
    payment_data = {
        "transaction_amount": float(request.transaction_amount),
        "token": request.token,
        "description": request.description,
        "installments": request.installments,
        "payment_method_id": request.payment_method_id,
        "payer": request.payer.dict()
    }

    payment_response = sdk.payment().create(payment_data)
    payment = payment_response["response"]

    if payment["status"] == "approved":
        # Update product stock
        for item in request.items:
            product = session.get(Variant, item.id)
            product.quantity -= item.quantity
            session.add(product)

        session.commit()




    print(payment)

    return payment
