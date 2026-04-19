# BACKEND SETUP GUIDE - Apex Photo Club

## 🎯 What's New in Your Backend

Your backend was completely redesigned from scratch! Here's what changed:

### ❌ OLD (Messy)
```
server.js → Everything was mixed in one file (auth, DB, routes, models)
```

### ✅ NEW (Professional)
```
Proper MVC architecture with:
- Controllers (Business Logic)
- Routes (API Endpoints)
- Models (Database Schemas)
- Middleware (Security, Validation)
- Config (Database, Cloudinary)
```

---

## 🚀 QUICK START (5 Minutes)

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Create .env File
Copy `.env.example` to `.env` and fill in values:
```bash
cp .env.example .env
```

Edit `.env` with:
```
MONGODB_URI=mongodb://127.0.0.1:27017/apexphotoclub
JWT_SECRET=your-secret-key-here
CLOUDINARY_CLOUD_NAME=xxxxx
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=5000
```

### Step 3: Start Server
```bash
npm run dev
```

You'll see:
```
✅ MongoDB Connected Successfully
🚀 Backend Server Running on http://localhost:5000
```

---

## 📊 Database Setup

### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Run MongoDB:
   ```bash
   mongod
   ```
3. Connection string: `mongodb://127.0.0.1:27017/apexphotoclub`

### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Get connection string like:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/apexphotoclub
   ```
5. Add to `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/apexphotoclub
   ```

---

## 🖼️ Cloudinary Setup (Image Storage)

### Why Cloudinary?
- 🚀 **Fast** - CDN delivery
- 📦 **Free** - 25 GB/month free tier
- 🎨 **Smart** - Auto compression & optimization

### Setup:
1. Go to [Cloudinary](https://cloudinary.com)
2. Sign up (free)
3. Dashboard → Settings → Copy:
   - Cloud Name
   - API Key
   - API Secret
4. Add to `.env`:
   ```
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=xxxxx
   CLOUDINARY_API_SECRET=xxxxx
   ```

---

## 📧 Email Setup (Nodemailer)

### Using Gmail:
1. Enable 2-Factor Authentication
2. Create App Password:
   - Go to myaccount.google.com
   - Security → 2-Step Verification
   - App Passwords → Select "Mail" & "Windows Computer"
   - Google generates password
3. Add to `.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=generated-app-password
   ```

---

## 🔐 JWT Secret Generation

Generate a secure random key:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy output to `.env`:
```
JWT_SECRET=your-generated-secret
```

---

## 📡 API Testing

### Using Postman or Insomnia:

#### 1️⃣ Register User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGc...",
  "user": {
    "id": "xxx",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### 2️⃣ Login User
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### 3️⃣ Create Booking (No Auth Required)
```
POST http://localhost:5000/api/bookings
Content-Type: application/json

{
  "name": "Jane Doe",
  "phone": "9876543210",
  "email": "jane@example.com",
  "weddingDate": "2024-12-01T00:00:00Z",
  "package": "premium",
  "message": "Looking forward to working with you!"
}
```

#### 4️⃣ Get Bookings (Auth Required)
```
GET http://localhost:5000/api/bookings
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 🛡️ Security Features Implemented

| Feature | Purpose |
|---------|---------|
| **Helmet.js** | Adds security headers (XSS, clickjacking protection) |
| **Rate Limiting** | Max 100 requests per 15 min per IP (DDoS protection) |
| **CORS** | Only allows requests from frontend URLs |
| **JWT** | Secure token-based authentication |
| **Bcrypt** | Password hashing (salted) |
| **Compression** | Gzip compression for faster responses |
| **Input Validation** | Check & sanitize all user inputs |

---

## 🔌 Database Models

### User Model
```javascript
{
  name: string,
  email: string (unique),
  phone: string,
  password: string (hashed),
  profileImage: string (URL),
  role: enum ['user', 'admin'],
  isVerified: boolean,
  createdAt: Date
}
```

### Booking Model
```javascript
{
  name: string,
  phone: string,
  email: string,
  weddingDate: Date,
  package: enum ['basic', 'premium', 'gold'],
  message: string,
  status: enum ['pending', 'confirmed', 'cancelled'],
  userId: ObjectId (ref: User),
  createdAt: Date
}
```

### Post Model
```javascript
{
  title: string,
  description: string,
  images: [{ url, publicId }],
  category: enum ['wedding', 'portrait', 'event', 'other'],
  userId: ObjectId (ref: User),
  likes: number,
  views: number,
  isPublished: boolean,
  createdAt: Date
}
```

---

## 🚨 Common Errors & Fixes

### Error: `MongooseError: Cannot connect to MongoDB`
```
✅ Fix: Ensure MongoDB is running or MONGODB_URI is correct
```

### Error: `JWT Error: invalid token`
```
✅ Fix: Ensure token format is "Bearer <token>" in Authorization header
```

### Error: `ValidationError: email is required`
```
✅ Fix: All required fields must be provided in request body
```

### Error: `Email not sending`
```
✅ Fix: 
1. Check EMAIL_USER and EMAIL_PASSWORD are correct
2. Use App Password (not regular password for Gmail)
3. Enable "Less secure apps" if not using 2FA
```

---

## 🧩 Integration with Frontend

Your frontend should:

1. **Register/Login:**
   - Send credentials to `/api/auth/register` or `/api/auth/login`
   - Store returned `token` in localStorage
   - Use token for subsequent requests

2. **Set Auth Header:**
   ```javascript
   fetch('/api/bookings', {
     method: 'GET',
     headers: {
       'Authorization': `Bearer ${token}`
     }
   })
   ```

3. **Create Booking:**
   ```javascript
   fetch('/api/bookings', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       name: 'John',
       phone: '1234567890',
       email: 'john@example.com',
       weddingDate: '2024-12-01',
       package: 'premium',
       message: 'Book now!'
     })
   })
   ```

---

## 📈 Performance Tips

1. ✅ Database queries are indexed (fast lookup)
2. ✅ Pagination enabled (don't load 1000 records at once)
3. ✅ Compression enabled (smaller responses)
4. ✅ Connection pooling (handle 100+ concurrent users)
5. ✅ Rate limiting (prevent abuse)

---

## 🚀 Deployment Ready

### To Deploy (Render, Railway, Vercel):
1. Push code to GitHub
2. Connect GitHub to hosting platform
3. Add environment variables
4. Deploy!

---

## 📞 Need Help?

1. Check `.env` file - all variables set?
2. Is MongoDB running?
3. Port 5000 not in use?
4. Check error messages in console

---

**Your backend is now PRODUCTION READY! 🎉**

Questions? Check README.md in backend folder!
