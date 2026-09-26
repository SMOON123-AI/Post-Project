# Post Project

A full-stack social media-style post application built with React and Node.js. Users can create posts and view posts in a feed.

## 🚀 Features

- Create new posts
- View posts in a feed
- Responsive React frontend
- REST API backend
- MongoDB database integration
- Image/file storage integration
- Modular backend structure

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Other

- REST API
- Git & GitHub

## 📁 Project Structure

```text
Post-Project/
│
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
└── .gitignore
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SMOON123-AI/Post-Project.git
cd Post-Project
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd Backend
```

Install the dependencies:

```bash
npm install
```

The backend requires the following environment variables:

Create a `.env` file inside the `Backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

If your application uses additional services such as image/file storage, add their credentials to the `.env` file as well.

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

Open a new terminal and navigate to the project folder:

```bash
cd Post-Project/Frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at the local URL provided by Vite.

## 🔐 Environment Variables

Sensitive information such as:

- Database credentials
- API keys
- Storage credentials
- JWT secrets

should be stored in `.env` files.

The `.env` file is excluded from GitHub using `.gitignore`.

Create your own `.env` file with the required variables before running the backend.

## 📌 Future Improvements

- User authentication
- Like and comment functionality
- User profiles
- Post editing and deletion
- Improved UI/UX
- Deployment
