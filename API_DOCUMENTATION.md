# API Documentation - Apex Photo Club Backend

Base URL: `http://localhost:5000/api`

---

## 🔐 Authentication API

### Register User
```
POST /auth/register
```

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "6123456789abcdef01234567",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- `400` - User already exists / Validation error
- `500` - Server error

---

### Login User
```
POST /auth/login
```

**Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "6123456789abcdef01234567",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Errors:**
- `400` - Invalid credentials
- `500` - Server error

---

### Get Current User
```
GET /auth/me
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "user": {
    "_id": "6123456789abcdef01234567",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "profileImage": "https://...",
    "role": "user",
    "isVerified": false,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Errors:**
- `401` - No token / Invalid token
- `404` - User not found

---

## 📅 Bookings API

### Create Booking
```
POST /bookings
Content-Type: application/json
```

**Request:**
```json
{
  "name": "Jane Doe",
  "phone": "9876543210",
  "email": "jane@example.com",
  "weddingDate": "2024-12-01T00:00:00Z",
  "package": "premium",
  "message": "Looking forward to working with you!"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Booking created successfully",
  "booking": {
    "_id": "6123456789abcdef01234567",
    "name": "Jane Doe",
    "phone": "9876543210",
    "email": "jane@example.com",
    "weddingDate": "2024-12-01T00:00:00Z",
    "package": "premium",
    "message": "Looking forward to working with you!",
    "status": "pending",
    "userId": null,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Errors:**
- `400` - Missing required fields / Validation error
- `500` - Server error

---

### Get All Bookings
```
GET /bookings?status=pending&page=1&limit=10
Authorization: Bearer {token}
```

**Query Parameters:**
- `status` (optional): 'pending', 'confirmed', or 'cancelled'
- `page` (optional): Page number, default 1
- `limit` (optional): Items per page, default 10

**Response (200):**
```json
{
  "success": true,
  "bookings": [
    {
      "_id": "6123456789abcdef01234567",
      "name": "Jane Doe",
      "phone": "9876543210",
      "email": "jane@example.com",
      "weddingDate": "2024-12-01T00:00:00Z",
      "package": "premium",
      "message": "Looking forward to working with you!",
      "status": "pending",
      "userId": null,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "limit": 10,
    "pages": 3
  }
}
```

**Errors:**
- `401` - Unauthorized

---

### Get Booking by ID
```
GET /bookings/{bookingId}
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "booking": {
    "_id": "6123456789abcdef01234567",
    "name": "Jane Doe",
    "phone": "9876543210",
    "email": "jane@example.com",
    "weddingDate": "2024-12-01T00:00:00Z",
    "package": "premium",
    "message": "Looking forward to working with you!",
    "status": "pending",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Errors:**
- `401` - Unauthorized
- `404` - Booking not found

---

### Update Booking Status
```
PUT /bookings/{bookingId}
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "status": "confirmed"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Booking updated",
  "booking": {
    "_id": "6123456789abcdef01234567",
    "name": "Jane Doe",
    "status": "confirmed",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

**Errors:**
- `401` - Unauthorized
- `404` - Booking not found
- `400` - Invalid status

---

### Delete Booking
```
DELETE /bookings/{bookingId}
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Booking deleted successfully"
}
```

**Errors:**
- `401` - Unauthorized
- `404` - Booking not found

---

## 👤 Users API

### Get User Profile
```
GET /users/profile/me
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "user": {
    "_id": "6123456789abcdef01234567",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "profileImage": "https://...",
    "role": "user",
    "isVerified": false,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### Update User Profile
```
PUT /users/profile/me
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "name": "John Updated",
  "phone": "9876543210",
  "profileImage": "https://..."
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile updated",
  "user": {
    "_id": "6123456789abcdef01234567",
    "name": "John Updated",
    "phone": "9876543210",
    "profileImage": "https://..."
  }
}
```

---

### Get All Users (Admin)
```
GET /users?page=1&limit=10
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "users": [
    {
      "_id": "6123456789abcdef01234567",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    }
  ],
  "pagination": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "pages": 5
  }
}
```

---

## 📸 Posts API

### Get All Posts
```
GET /posts?category=wedding&page=1&limit=10&sort=-createdAt
```

**Query Parameters:**
- `category` (optional): 'wedding', 'portrait', 'event', 'other'
- `page` (optional): Page number, default 1
- `limit` (optional): Items per page, default 10
- `sort` (optional): Sort field, default '-createdAt'

**Response (200):**
```json
{
  "success": true,
  "posts": [
    {
      "_id": "6123456789abcdef01234567",
      "title": "Beautiful Wedding",
      "description": "Amazing wedding photography",
      "category": "wedding",
      "images": [
        {
          "url": "https://res.cloudinary.com/...",
          "publicId": "apex/photo_12345"
        }
      ],
      "likes": 150,
      "views": 500,
      "userId": {
        "_id": "6123456789abcdef01234567",
        "name": "John Doe",
        "profileImage": "https://..."
      },
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "pages": 10
  }
}
```

---

### Get Post by ID
```
GET /posts/{postId}
```

**Response (200):**
```json
{
  "success": true,
  "post": {
    "_id": "6123456789abcdef01234567",
    "title": "Beautiful Wedding",
    "description": "Amazing wedding photography",
    "category": "wedding",
    "images": [...],
    "likes": 150,
    "views": 501,
    "userId": {...},
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### Create Post
```
POST /posts
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "title": "Beautiful Wedding",
  "description": "Amazing wedding photography",
  "category": "wedding",
  "images": [
    {
      "url": "https://res.cloudinary.com/...",
      "publicId": "apex/photo_12345"
    }
  ]
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Post created successfully",
  "post": {...}
}
```

---

### Update Post
```
PUT /posts/{postId}
Authorization: Bearer {token}
Content-Type: application/json
```

**Request:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "isPublished": true
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Post updated",
  "post": {...}
}
```

---

### Delete Post
```
DELETE /posts/{postId}
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```

---

### Like Post
```
POST /posts/{postId}/like
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Post liked",
  "post": {
    "_id": "6123456789abcdef01234567",
    "likes": 151
  }
}
```

---

## ⚠️ Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "No token provided" or "Invalid token"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## 🔑 Authentication Header Format

All protected endpoints require:
```
Authorization: Bearer <jwt_token>
```

Example:
```
GET http://localhost:5000/api/users/profile/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTIzNDU2Nzg5YWJjZGVmMDEyMzQ1NjciLCJpYXQiOjE2NzM4MDE4MDAsImV4cCI6MTY3Mzg4ODIwMH0.SIGNATURE
```

---

## 📝 Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Success |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Validation error |
| 401 | Unauthorized - Missing/invalid token |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Server Error |

---

## ⏱️ Rate Limiting

- **Limit:** 100 requests per 15 minutes per IP
- **Headers:** 
  - `X-RateLimit-Limit: 100`
  - `X-RateLimit-Remaining: 99`
  - `X-RateLimit-Reset: 1234567890`

---

**Last Updated:** 2024
**Version:** 1.0.0
