#E-Library 

A secure online e-book reading platform built with:
- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express.js + MongoDB
- **Auth:** JWT
- **Payments:** Stripe / Razorpay ready

 Features
✅ User Register / Login  
✅ Browse & purchase books  
✅ Secure PDF reading (no direct downloads)  
✅ Admin can upload books  
✅ Simple reading progress tracking

##  Setup Instructions

### Backend
```bash
cd backend
npm install
# create a .env file with:
# MONGO_URI=your_mongo_connection_string
# JWT_SECRET=your_secret
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

The app runs on **http://localhost:3000** (frontend) and **http://localhost:5000** (backend).

##  Deployment
- Frontend: Vercel / Netlify
- Backend: Railway.app / Render
- DB: MongoDB Atlas

##  Future Ideas
- AI reading recommendations
- Certificates on book completion
- Social sharing, comments, ratings
