# 📘 Shiksha - E-Learning Platform (MERN Stack)

Shiksha is a full-featured E-Learning platform built using the MERN stack. It allows students to browse and enroll in courses, while admins manage the content. The platform focuses on scalability, clean UI/UX, and secure role-based access for Admins and Students.

## 🧑‍💻 Tech Stack

- **Frontend**: React.js, Bootstrap/CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT, bcrypt
- **Other Tools**: Context API / Redux (optional), Multer (for file uploads), React Router, Dotenv

---

## ⚙️ Features

### 👩‍🏫 Admin
- Create, update, and delete courses
- Create Teacher and Student accounts
- View all enrollments and users
- Role-based access control

### 👨‍🎓 Student
- Browse and view course details
- Enroll in courses
- View personal enrolled courses

---

## 🚀 Getting Started

### 1. Clone the Repository
    git clone https://github.com/your-username/shiksha-elearning.git
    cd shiksha-elearning

### 2. Install Server Dependencies
    cd server
    npm install
    
### 3. Install Client Dependencies
    cd ../client
    npm install

### 4. Create Environment Variables
Server .env file
     PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
## 5.Client .env file
    REACT_APP_API_URL=http://localhost:5000/api
### 6. Run the App
   Start Backend
    cd server
    npm run dev
  Start Frontend
    cd client
    npm start

## 📁 Folder Structure
# root
├── client           # React Frontend
│   ├── components
│   ├── pages
│   ├── context
│   └── ...
├── server           # Node.js + Express Backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── ...
└── README.md
