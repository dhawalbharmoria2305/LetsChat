# BaatChit 💬

BaatChit is a modern, responsive, full-stack real-time chat application that enables users to connect and chat instantly. It features secure user authentication, real-time message delivery, online status indicators, unseen message badges, and image sharing capabilities.

---

## 🚀 Key Features

* **Real-time Messaging**: Instant, bidirectional messaging powered by **Socket.io**.
* **Media Sharing**: Support for uploading and viewing images using **Cloudinary** integration.
* **Online/Offline Status**: Real-time tracking of active user sessions.
* **Unseen Messages Badges**: Visual notifications and counters for unread messages.
* **Secure Authentication**: User signup, login, session persistence, and secure password hashing with bcrypt, coupled with JWT tokens.
* **Profile Management**: Profile picture upload and personal details configuration.
* **Modern & Responsive UI**: Clean, stunning glassmorphic design that adapts beautifully to both desktop and mobile layouts.

---

## 🛠️ Tech Stack

### Client (Frontend)
* **Framework**: React 19 (Vite boilerplate)
* **Styling**: Tailwind CSS
* **Routing**: React Router DOM (v7)
* **State Management**: React Context API
* **Icons & Notifications**: Lucide React & React Hot Toast
* **Networking & WebSockets**: Axios & Socket.io-client

### Server (Backend)
* **Runtime Environment**: Node.js
* **Framework**: Express.js (v5)
* **Database**: MongoDB (Mongoose ODM)
* **Real-time Communications**: Socket.io
* **Authentication**: JWT (JSON Web Tokens) & bcryptjs
* **File Storage**: Cloudinary (Image uploads API)

---

## 📁 Directory Structure

```text
BaatChit/
├── client/                 # Frontend React Application
│   ├── public/             # Static Assets
│   ├── src/
│   │   ├── assets/         # App icons & default images
│   │   ├── components/     # UI components (Sidebar, ChatContainer, etc.)
│   │   ├── context/        # React Contexts (AuthContext, ChatContext)
│   │   ├── lib/            # Utility functions (formatting dates, Axios instance)
│   │   ├── pages/          # Viewpages (Home, Login, Signup, Profile)
│   │   ├── App.jsx         # Main router and component tree
│   │   └── main.jsx        # App entry point
│   ├── .env.example        # Environment variables template for client
│   └── package.json        # Frontend dependencies
│
└── server/                 # Backend Node.js Server
    ├── controllers/        # Route controllers (user, message actions)
    ├── lib/                # Shared libraries (database connection, Cloudinary config)
    ├── middleware/         # Custom middlewares (auth protection)
    ├── models/             # Mongoose database schemas (User, Message)
    ├── routes/             # Express API endpoints
    ├── server.js           # Server starter file & WebSocket mappings
    ├── .env.example        # Environment variables template for server
    └── package.json        # Server dependencies
```

---

## ⚙️ Installation & Setup

Follow these steps to get a local copy of the project running:

### Prerequisites
* [Node.js](https://nodejs.org/) installed (v18+ recommended)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB instance
* A free [Cloudinary](https://cloudinary.com/) account for image storage

---

### Step 1: Clone and Set Up the Server

1. Open a terminal and navigate to the `server/` directory:
   ```bash
   cd server
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server/` directory (or modify the existing one) with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_phrase
   
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the server in development mode:
   ```bash
   npm run server
   ```
   *The server runs by default on `http://localhost:5000`.*

---

### Step 2: Set Up the Client

1. Open a new terminal and navigate to the `client/` directory:
   ```bash
   cd client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `client/` directory (or verify the existing one):
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   *By default, Vite will start the frontend app on `http://localhost:5173`.*

---

## 🧑‍💻 Available Scripts

### In the `client` directory:
* `npm run dev`: Runs the frontend in development mode.
* `npm run build`: Compiles the frontend code into optimized static files for production.
* `npm run lint`: Analyzes the codebase for syntax or formatting errors.
* `npm run preview`: Locally previews the production build.

### In the `server` directory:
* `npm run server`: Runs the backend using `nodemon` to automatically reload upon code changes.
* `npm run start`: Starts the backend server in production mode.
