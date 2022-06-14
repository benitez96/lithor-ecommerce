from typing import Optional, List, TYPE_CHECKING
from sqlmodel import SQLModel, Field, Relationship



class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    name: str
    description: Optional[str]
    cost: float
    price: float

    images: List['Image'] = Relationship(back_populates='product')
    options: List['Option'] = Relationship(back_populates='product')


class Image(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    url: str
    name: str
    is_principal: Optional[bool] = False

    product_id: int = Field(foreign_key='product.id')
    product: Product = Relationship(back_populates='images')


class Size(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

    options: List['Option'] = Relationship(back_populates='size')


class Option(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    quantity: int

    size_id: int = Field(foreign_key='size.id')
    size: Size = Relationship(back_populates='options')

    product_id: int = Field(foreign_key='product.id', nullable=False)
    product: Product = Relationship(back_populates='options')

# class ItemCreate(SQLModel):
#     product_ref: Optional[int]
#     description: str
#     unit_price: float
#     qty: Optional[int] = 1


# class Item(ItemCreate, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True)

#     order_id: int = Field( default=None, foreign_key='order.id' )
#     order: 'Order' = Relationship( back_populates = 'items' )


# class StatusCreate(SQLModel):
#     name: str

# class StatusRead(SQLModel):
#     id: int
#     name: str

# class Status(StatusCreate, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True)

#     orders: List['Order'] = Relationship(back_populates='status')

# class OrderCreate(SQLModel):
#     name: str
#     state: str
#     city: str
#     address: str
#     phone: str
#     email: str
#     status_id: int

#     options: Optional[List[int]]

#     items: List[ItemCreate]


# class Order(OrderCreate, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True)

#     items: List[Item] = Relationship(back_populates='order')



# class Identification(SQLModel):
#         type: str
#         number: str

# class Payer(SQLModel):
#     email: str
#     identification: Identification

# class ShippingData(SQLModel):
#     name: Optional[str]
#     last_name: Optional[str]
#     street: Optional[str]
#     street_number: Optional[str]
#     city: Optional[str]
#     state: Optional[str]
#     flat: Optional[str]
#     phone: Optional[str]
#     dni: Optional[str]
#     zip_code: Optional[str]

# class Item(ProductCreate):
#     id: str
#     quantity: int
#     size: str

# class PaymentRequest(SQLModel):
#     description: str
#     installments: Optional[int]
#     issuer_id: str
#     payer: Payer
#     payment_method_id: str
#     token: str
#     transaction_amount: str
#     items: List[Item]
#     shipping_data: Optional[ShippingData]
