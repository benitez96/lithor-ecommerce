from fastapi import APIRouter

from .category import router as category_router
from .product import router as product_router
from .order import router as order_router
from .status import router as status_router
from .process_payment import router as process_payment_router


router = APIRouter()


router.include_router(category_router, prefix="/categories", tags=["categories"])
router.include_router(product_router, prefix="/products", tags=["products"])
router.include_router(order_router, prefix="/orders", tags=["orders"])
router.include_router(status_router, prefix="/status", tags=["status"])
router.include_router(process_payment_router, prefix="/process_payment", tags=["process_payment"])

