# 🛍️ Zenthrixa – Full Stack MERN E-Commerce Platform

Zenthrixa is a modern, scalable, and production-ready e-commerce platform built using the MERN stack. The application provides a complete online shopping experience with secure authentication, product management, shopping cart functionality, order processing, payment gateway integration, and an admin dashboard for store management.

The project demonstrates real-world full-stack development practices including RESTful APIs, authentication, cloud media storage, payment processing, responsive UI design, and deployment workflows.

---

## 🚀 Live Demo

### Customer Store

Frontend: https://zenthrixa-frontend.vercel.app/

### Admin Dashboard

Admin Panel: https://zenthrixa-admin-panel.vercel.app/

### Backend API

Backend: https://zenthrixa-backend.vercel.app

---

## ✨ Key Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* Product Browsing
* Product Detail Pages
* Related Products Recommendation
* Shopping Cart Management
* Quantity Updates
* Order Placement
* Order History Tracking
* Stripe Payment Integration
* Razorpay Payment Integration
* Cash on Delivery (COD)
* Responsive Mobile Experience

---

### 🛒 Product Features

* Dynamic Product Listings
* Product Categories
* Product Subcategories
* Product Images
* Product Sizes
* Bestseller Products
* Product Search Functionality
* Product Filtering
* Related Product Suggestions

---

### 💳 Payment Features

* Secure Stripe Checkout
* Razorpay Integration
* Cash On Delivery Support
* Payment Verification
* Order Status Updates

---

### 🛠️ Admin Features

* Secure Admin Authentication
* Product Management
* Add Products
* Remove Products
* Product Listing Management
* Order Management
* Order Status Updates
* Customer Order Tracking

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Tailwind CSS
* Axios
* React Toastify

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer
* BcryptJS

### Database

* MongoDB Atlas
* Mongoose ODM

### Cloud Services

* Cloudinary

### Payment Gateways

* Stripe
* Razorpay

### Deployment

* Vercel
* MongoDB Atlas
* Cloudinary

---

## 📂 Project Structure

```bash
Zenthrixa
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── context
│   └── assets
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
├── admin
│   ├── src
│   ├── pages
│   ├── components
│   └── assets
│
└── README.md
```

---

## 🔐 Authentication Flow

* JWT-based Authentication
* Password Hashing using Bcrypt
* Protected API Routes
* Admin Authorization Middleware
* Secure Token Verification

---

## 🛍️ Order Workflow

```text
Browse Products
      ↓
Add To Cart
      ↓
Checkout
      ↓
Select Payment Method
      ↓
Place Order
      ↓
Payment Verification
      ↓
Order Confirmation
      ↓
Track Order Status
```

---

## 📦 API Features

### User APIs

* Register User
* Login User
* Fetch User Cart
* Update Cart

### Product APIs

* Add Product
* List Products
* Fetch Single Product
* Remove Product

### Order APIs

* Place COD Order
* Place Stripe Order
* Place Razorpay Order
* Verify Stripe Payment
* Verify Razorpay Payment
* Fetch User Orders
* Fetch All Orders
* Update Order Status

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/sharadpal8055/Zenthrixa.git
```

```bash
cd Zenthrixa
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Backend Setup

```bash
cd backend

npm install

npm run server
```

---

## Admin Setup

```bash
cd admin

npm install

npm run dev
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=4000

MONGODB_URI=

JWT_SECRET=

ADMIN_EMAIL=
ADMIN_PASSWORD=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET_KEY=

STRIPE_SECRET_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

### Frontend (.env)

```env
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
```

### Admin (.env)

```env
VITE_BACKEND_URL=
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Mobile Devices
* Tablets
* Laptops
* Desktop Screens

Built using a mobile-first responsive design approach.

---

## 🚀 Performance Highlights

* Component-Based Architecture
* Reusable UI Components
* Optimized API Calls
* Cloud-Based Image Storage
* Secure Authentication
* Production Deployment Ready
* Scalable Folder Structure

---

## 📸 Screenshots

### Home Page

<img width="1907" height="1096" alt="image" src="https://github.com/user-attachments/assets/e4bd86c2-a835-43eb-b021-6fdc5b15ba91" />


### Product Page

<img width="1895" height="1092" alt="image" src="https://github.com/user-attachments/assets/f3ba5cf3-c0cb-4dbd-bd8f-4bd8643fd74a" />


### Cart Page

<img width="1898" height="1091" alt="image" src="https://github.com/user-attachments/assets/21d890f0-c7dc-4715-a015-57741f5e4b8a" />

<img width="1902" height="1088" alt="image" src="https://github.com/user-attachments/assets/3d1895cd-e7f1-4400-88aa-835a4eb640e3" />
<img width="1905" height="1089" alt="image" src="https://github.com/user-attachments/assets/16d53161-9761-44aa-a8ed-7808715c7429" />

<img width="1904" height="1090" alt="image" src="https://github.com/user-attachments/assets/4d4348c3-44f2-4c9f-8e65-974fdbd0719c" />

---

## 🎯 Future Enhancements

### 🧠 AI-Powered Shopping Experience

* AI Product Recommendation Engine based on user behavior and purchase history
* Personalized Home Page Recommendations
* Smart Search with Natural Language Queries
* AI-Powered Shopping Assistant Chatbot
* Visual Product Search using Images
* AI-Based Customer Support and Query Resolution
* Predictive Analytics for Product Demand Forecasting

### 🛍️ Marketplace Expansion

Zenthrixa is envisioned to evolve beyond a fashion-focused platform into a complete digital marketplace serving multiple product categories, including:

* Fashion & Apparel
* Groceries & Daily Essentials
* Electronics & Gadgets
* Home & Kitchen Appliances
* Utensils & Cookware
* Beauty & Personal Care
* Books & Stationery
* Sports & Fitness Equipment
* Furniture & Home Decor
* Health & Wellness Products

### ⭐ Customer Experience Enhancements

* Wishlist Functionality
* Product Reviews & Ratings
* Recently Viewed Products
* Product Comparison Feature
* Advanced Search & Filtering
* Voice-Based Product Search
* Personalized Shopping Experience

### 💳 Commerce & Payments

* Coupon & Discount Management System
* Gift Cards & Store Credits
* Subscription-Based Purchases
* Multi-Currency Support
* International Payment Gateways
* Automated Invoice Generation

### 📦 Inventory & Operations

* Advanced Inventory Management
* Low Stock Notifications
* Warehouse Management System
* Supplier Management
* Automated Stock Tracking
* Return & Refund Management

### 📈 Business Intelligence

* Advanced Analytics Dashboard
* Sales Performance Reports
* Customer Behavior Analytics
* Revenue Forecasting
* AI-Driven Business Insights

### 🌍 Platform Scalability

* Multi-Vendor Marketplace Support
* Seller Dashboard
* Vendor Verification System
* Mobile Applications (Android & iOS)
* Progressive Web App (PWA)
* Global Shipping Integration
* Multi-Language Support

### 📧 Communication & Engagement

* Email Notifications
* SMS Notifications
* Order Tracking Updates
* Marketing Campaign Management
* Customer Loyalty & Rewards Program


---

## 👨‍💻 Developer

**Sharad Pal**

B.Tech Computer Science Engineering

Full Stack Developer | MERN Stack Enthusiast

GitHub: https://github.com/sharadpal8055

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
