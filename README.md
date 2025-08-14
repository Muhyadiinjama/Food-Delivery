# 🍽️ FoodPoin Deliver - Food Delivery System

FoodPoin Deliver is a full-stack **Food Delivery System** designed to make ordering meals quick, easy, and efficient.  
The platform consists of a **customer-facing application** for browsing menus and placing orders, and an **admin dashboard** for managing products, orders, and user data.

---

## 🚀 Live Demo

- **Frontend (Customer)**: [https://food-delivery-szal.onrender.com](https://food-delivery-szal.onrender.com)  
- **Admin Panel**: [https://food-delivery-admin-1h9m.onrender.com](https://food-delivery-admin-1h9m.onrender.com)

---

## 📌 Features

### **Customer App**
- 🍔 Browse menu items with images, descriptions, and prices  
- 🛒 Add items to cart and place orders  
- 🔑 User authentication (Sign up & Login)  
- 📦 Order tracking and status updates  

### **Admin Panel**
- 🥗 Add, edit, and delete food items  
- 📜 View and manage customer orders  
- 📊 Dashboard with sales and order statistics  
- 🔒 Secure admin login  

---

## 🛠️ Tech Stack

| Layer        | Technology Used |
|--------------|-----------------|
| **Frontend** | React.js (Vite) + Tailwind CSS |
| **Backend**  | Node.js + Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Hosting**  | Render (Frontend & Backend) |
| **Authentication** | JSON Web Token (JWT) |

---

## 📂 Project Structure

foodpoin-deliver/
│
├── frontend/ # React.js customer app
├── admin/ # React.js admin panel
├── backend/ # Express.js + MongoDB server
└── README.md

---

## ⚙️ Installation & Setup (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foodpoin-deliver.git
   cd foodpoin-deliver



Install dependencies for each part:

cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
Create .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run backend:

cd backend
npm start

Run frontend:

cd frontend
npm run dev

Run admin panel:

cd admin
npm run dev

👨‍💻 Author

Muhyadiin Jama, abdullahi shaam and bedrudin
Computer Science & Software Engineering Student