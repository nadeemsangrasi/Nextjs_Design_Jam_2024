````md
# API Endpoints

## 1. Fetching Products Data

**Endpoint:** `/products`  
**Method:** `GET`  
**Description:** Retrieves a list of all available products from Sanity CMS, including essential product details like stock levels, prices, and images.

**Response:**

```json
[
  {
    "id": "12345",
    "name": "Wireless Earbuds",
    "price": 49.99,
    "stock": 100,
    "image": "https://example.com/images/earbuds.jpg"
  },
  {
    "id": "67890",
    "name": "Smartphone",
    "price": 699.99,
    "stock": 25,
    "image": "https://example.com/images/smartphone.jpg"
  }
]
```
````

---

## 2. User Registration

**Description:** User registration and sign-in functionality are seamlessly handled by Clerk. It
provides secure authentication and an integrated sign-up and sign-in experience without
requiring additional custom endpoints.

---

## 3. Creating an Order

**Endpoint:** `/order`  
**Method:** `POST`  
**Description:** Creates a new order and stores it in Sanity CMS. Processes order details, including customer information, payment status, and product details.

**Payload:**

```json
{
  "customerInfo": {
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "address": "456 Avenue, City, Country"
  },
  "paymentStatus": "paid",
  "productDetails": [
    {
      "productId": "12345",
      "quantity": 2,
      "price": 49.99
    },
    {
      "productId": "67890",
      "quantity": 1,
      "price": 699.99
    }
  ]
}
```

**Response:**

```json
{
  "orderId": "order123456",
  "totalAmount": 799.97,
  "orderDate": "2025-01-16T14:25:00Z"
}
```

---

## 4. Order Tracking

**Endpoint:** `/shipment/:order_id`  
**Method:** `POST`  
**Description:** Tracks the shipment of an order using `order_id`. This endpoint interacts with the ShipEngine API to provide real-time shipment status and expected delivery date.

**Path Parameters:**

- `order_id` (string): Unique identifier for the order to be tracked.

**Payload:**

```json
{
  "orderId": "order123456",
  "shipmentId": "ship123456",
  "expectedDeliveryDate": "2025-01-20",
  "status": "in_transit"
}
```

**Response:**

```json
{
  "orderId": "order123456",
  "shipmentId": "ship123456",
  "status": "in_transit",
  "expectedDeliveryDate": "2025-01-20",
  "lastUpdated": "2025-01-16T12:00:00Z"
}
```

```

```
