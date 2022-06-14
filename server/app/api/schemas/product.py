from typing import Optional, List, TYPE_CHECKING
from sqlmodel import SQLModel, Field, Relationship

class Image(SQLModel):
    url: str
    name: str
    is_principal: Optional[bool] = False

class SizeCreate(SQLModel):
    name: str

class Option(SQLModel):
    size: str
    quantity: int

class ProductSchema(SQLModel):
    name: str
    description: Optional[str]
    cost: float
    price: float
    images: List[Image]
    options: List[Option]

