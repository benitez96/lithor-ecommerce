from typing import Optional, List, TYPE_CHECKING
from sqlmodel import SQLModel, Field, Relationship


class ProductOrderLink(SQLModel, table=True):
    variant_id: Optional[int] = Field(default=None, primary_key=True,
                            foreign_key='variant.id')
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

class ImageCreate(SQLModel):
    url: str

class Image(ImageCreate, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    variant_id: Optional[int] = Field(foreign_key='variant.id')
    variant: 'Variant' = Relationship(back_populates='images')


class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True, index=True)
    name: str = Field(index=True)
    description: Optional[str]
    image: str

    categories: List[Category] = Relationship(back_populates='products',
                                                link_model=ProductCategoryLink)


    variants: List['Variant'] = Relationship(back_populates='product')



class VariantCreate(SQLModel):

    color: Optional[str]
    size: str
    quantity: int
    cost: str
    price: str
    discount: Optional[int] = 0
    images: List[ImageCreate]

class VariantRead(SQLModel):

    id: int
    color: Optional[str]
    size: str
    quantity: int
    price: str
    discount: Optional[int] = 0
    images: List[ImageCreate]


class Variant(VariantCreate, table=True):
    id: Optional[int] = Field(default=None, primary_key=True, index=True)

    cost: float
    price: float

    images: Optional[List['Image']] = Relationship(back_populates='variant')
    product_id: int = Field(foreign_key='product.id')
    product: Product = Relationship(back_populates='variants')

    orders: List['Order'] = Relationship(back_populates='variants',
                                         link_model=ProductOrderLink)

class ProductCreate(SQLModel):
    name: str
    description: Optional[str]
    image: str
    category_ids: Optional[List[int]] = []
    variants: List[VariantCreate]

class ProductRead(SQLModel):
    id: int
    name: str
    image: str
    description: Optional[str]
    categories: List[CategoryRead]
    variants: List[VariantRead]

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

    variants: Optional[List[int]]

    items: List[ItemCreate]


class Order(OrderCreate, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    variants: List[Variant] = Relationship(back_populates='orders',
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

class ShippingData(SQLModel):
    name: Optional[str]
    last_name: Optional[str]
    street: Optional[str]
    street_number: Optional[str]
    city: Optional[str]
    state: Optional[str]
    flat: Optional[str]
    phone: Optional[str]
    dni: Optional[str]
    zip_code: Optional[str]

class Item(ProductRead):
    id: str
    quantity: int
    size: str

class PaymentRequest(SQLModel):
    description: str
    installments: Optional[int]
    issuer_id: str
    payer: Payer
    payment_method_id: str
    token: str
    transaction_amount: str
    items: List[Item]
    shipping_data: Optional[ShippingData]
