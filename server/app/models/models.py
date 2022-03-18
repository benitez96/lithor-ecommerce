from typing import Optional, List, TYPE_CHECKING
from sqlmodel import SQLModel, Field, Relationship


class ProductOrderLink(SQLModel, table=True):
    product_id: Optional[int] = Field(default=None, primary_key=True,
                            foreign_key='product.id')
    order_id: Optional[int] = Field(default=None, primary_key=True,
                          foreign_key='order.id')


class ProductCategoryLink(SQLModel, table=True):
    product_id: Optional[int] = Field(default=None, primary_key=True,
                                      foreign_key='product.id')
    category_id: Optional[int] = Field(default=None, primary_key=True,
                                       foreign_key='category.id')



class Category(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

    products: List['Product'] = Relationship(back_populates='categories',
                                           link_model=ProductCategoryLink)

class CategoryCreate(SQLModel):
    name: str

class CategoryRead(SQLModel):
    id: int
    name: str


class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    name: str = Field(index=True)
    cost: float
    price: float
    description: Optional[str]
    image_url: str
    discount: Optional[int]

    categories: List[Category] = Relationship(back_populates='products',
                                                link_model=ProductCategoryLink)

    orders: List['Order'] = Relationship(back_populates='products',
                                         link_model=ProductOrderLink)

class ProductCreate(SQLModel):
    name: str
    cost: float
    price: float
    description: Optional[str]
    image_url: str
    discount: Optional[int]
    category_ids: Optional[List[int]] = []

class ProductRead(SQLModel):
    id: int
    name: str
    price: float
    description: Optional[str]
    image_url: str
    categories: List[CategoryRead] = []

class ItemCreate(SQLModel):
    product_ref: Optional[int]
    description: str
    unit_price: float
    qty: Optional[int] = 1


class Item(ItemCreate, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    order_id: int = Field( default=None, foreign_key='order.id' )
    order: 'Order' = Relationship( back_populates = 'items' )


class StatusCreate(SQLModel):
    name: str

class StatusRead(SQLModel):
    id: int
    name: str

class Status(StatusCreate, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    orders: List['Order'] = Relationship(back_populates='status')

class OrderCreate(SQLModel):
    name: str
    state: str
    city: str
    address: str
    phone: str
    email: str
    status_id: int

    products: Optional[List[int]]

    items: List[ItemCreate]


class Order(OrderCreate, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    products: List[Product] = Relationship(back_populates='orders',
                                            link_model=ProductOrderLink)

    status_id: Optional[int] = Field(default=None, foreign_key='status.id')
    status: Status = Relationship(back_populates='orders')

    items: List[Item] = Relationship(back_populates='order')



class Identification(SQLModel):
        type: str
        number: str

class Payer(SQLModel):
    email: str
    identification: Identification

class PaymentRequest(SQLModel):
    description: str
    installments: Optional[int]
    issuer_id: str
    payer: Payer
    payment_method_id: str
    token: str
    transaction_amount: float
