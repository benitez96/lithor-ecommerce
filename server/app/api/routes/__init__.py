from fastapi import APIRouter

from .product import router as product_router
# from .order import router as order_router
# from .process_payment import router as process_payment_router


router = APIRouter()


router.include_router(product_router, prefix="/products", tags=["products"])
# router.include_router(order_router, prefix="/orders", tags=["orders"])
# router.include_router(process_payment_router, prefix="/process_payment", tags=["process_payment"])

