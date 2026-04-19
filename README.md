# 🚀 Apex Photo Club - Professional Backend

Complete, production-ready backend setup with Node.js, Express, MongoDB, and all security features.

## 📁 Project Structure

```
backend/
├── config/              # Configuration files
│   ├── db.js           # MongoDB connection
│   ├── cloudinary.js   # Cloudinary setup
│   └── redis.js        # Redis setup (optional)
├── controllers/        # Business logic
│   ├── authController.js      # Authentication
│   ├── bookingController.js   # Booking management
│   ├── userController.js      # User management
│   └── postController.js      # Post/Portfolio management
├── middleware/         # Express middleware
│   ├── authMiddleware.js      # JWT verification
│   ├── errorHandler.js        # Global error handler
│   └── validationMiddleware.js # Input validation
├── models/            # Database models
│   ├── User.js        # User schema
│   ├── Booking.js     # Booking schema
│   └── Post.js        # Post schema
├── routes/            # API routes
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── userRoutes.js
│   └── postRoutes.js
├── server.js          # Main server file
├── package.json       # Dependencies
└── .env.example       # Environment variables template
```

## ✅ Features Implemented

### 🔐 Security
- ✅ Helmet.js (security headers)
- ✅ Express Rate Limiting (DDoS protection)
- ✅ Compression middleware
- ✅ CORS configuration
- ✅ JWT Authentication
- ✅ Bcrypt password hashing
- ✅ Input validation

### 📊 Database
- ✅ MongoDB Atlas connection pooling
- ✅ Mongoose models with validation
- ✅ Proper indexes for performance
- ✅ Error handling

### 🎯 API Endpoints

#### Authentication (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /me` - Get current user (protected)

#### Bookings (`/api/bookings`)
- `POST /` - Create booking (public)
- `GET /` - Get all bookings (protected)
- `GET /:id` - Get booking by ID (protected)
- `PUT /:id` - Update booking status (protected)
- `DELETE /:id` - Delete booking (protected)

#### Users (`/api/users`)
- `GET /profile/me` - Get user profile (protected)
- `PUT /profile/me` - Update profile (protected)
- `GET /` - Get all users (protected)

#### Posts (`/api/posts`)
- `GET /` - Get all published posts (public)
- `GET /:id` - Get post details (public)
- `POST /` - Create post (protected)
- `PUT /:id` - Update post (protected)
- `DELETE /:id` - Delete post (protected)
- `POST /:id/like` - Like post (protected)

### 📧 Features
- ✅ Email notifications via Nodemailer
- ✅ Image storage with Cloudinary
- ✅ Pagination support
- ✅ Error handling
- ✅ Async/await patterns

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
```bash
cp .env.example .env
```

Fill in your actual values:
- MongoDB URI
- JWT Secret
- Cloudinary credentials
- Email credentials

### 3. Run Development Server
```bash
npm run dev
```

### 4. Run Production
```bash
npm start
```

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| JWT_SECRET | JWT signing key | `your-secret-key` |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name | `your-cloud-name` |
| CLOUDINARY_API_KEY | Cloudinary API key | `xxxxx` |
| CLOUDINARY_API_SECRET | Cloudinary API secret | `xxxxx` |
| EMAIL_USER | Sender email address | `your-email@gmail.com` |
| EMAIL_PASSWORD | Email app password | `your-app-password` |
| PORT | Server port | `5000` |

## 🧪 Testing APIs

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create Booking
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "phone": "9876543210",
    "email": "jane@example.com",
    "weddingDate": "2024-12-01",
    "package": "premium",
    "message": "Looking forward!"
  }'
```

## 📈 Performance Optimization

- ✅ Connection pooling (maxPoolSize: 100)
- ✅ Database indexes on frequently queried fields
- ✅ Compression enabled
- ✅ Rate limiting to prevent abuse
- ✅ Pagination for large datasets

## 🔒 Security Best Practices

1. ✅ Passwords hashed with bcrypt
2. ✅ JWT tokens for stateless auth
3. ✅ Rate limiting (100 req/15min per IP)
4. ✅ CORS configured
5. ✅ Security headers via Helmet
6. ✅ Input validation
7. ✅ Error messages don't leak sensitive info

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| express | Web framework |
| mongoose | MongoDB ODM |
| bcryptjs | Password hashing |
| jsonwebtoken | JWT authentication |
| cloudinary | Image storage |
| nodemailer | Email sending |
| helmet | Security headers |
| express-rate-limit | Rate limiting |
| compression | Gzip compression |
| cors | CORS handling |
| dotenv | Environment variables |

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check MONGODB_URI in .env
- Ensure MongoDB is running (for local)
- Check network access (for Atlas)

### JWT Errors
- Ensure JWT_SECRET is set
- Check token format: `Bearer <token>`
- Token may have expired

### Email Not Sending
- Use app-specific password (not regular password)
- Enable "Less secure app access" or use App Password
- Check EMAIL_USER and EMAIL_PASSWORD

## 📝 Next Steps

1. Connect frontend to backend APIs
2. Implement WhatsApp notifications (Twilio)
3. Setup Redis caching for performance
4. Add file upload endpoint
5. Implement admin dashboard
6. Setup CI/CD pipeline
7. Deploy to production (Vercel, Railway, Render)

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Authentication](https://jwt.io/)

---

**Made with ❤️ for Apex Photo Club**
