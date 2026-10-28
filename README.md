# 🧠 travelmate-project — Intelligent Group Travel Planning Platform

<div align="center">

![travelmate-project](https://img.shields.io/badge/travelmate-project-blue)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![React](https://img.shields.io/badge/React-18.x-61dafb)
![AI Powered](https://img.shields.io/badge/AI-Powered-orange)

### ✈️ Plan Together. Decide Smarter. Travel Better.

**An AI-powered platform that simplifies group travel planning — from idea to itinerary.**



</div>

---

## 🌟 Why travelmate-project?

Group travel planning is chaotic — different preferences, budgets, schedules, and endless WhatsApp messages 😵‍💫.

**travelmate-project fixes this.**

It acts as a **smart travel coordinator** that listens to everyone, thinks intelligently, and delivers a plan that works for the whole group.

---

## ✨ Key Highlights

* 🤖 **AI-generated itineraries** tailored to group preferences
* 🧠 **Smart conflict resolution** when opinions clash
* 💰 **Budget prediction & optimization** using AI
* 👥 **Group collaboration** in one place
* 💬 **AI travel assistant** for instant help
* 🛡️ **Admin validation & control** for bookings

---

## 🎯 Real-World Problem

Planning a group trip usually means:

* Endless group chats
* Conflicting opinions
* Budget confusion
* Poor coordination

### ❌ travelmate-project Approach

Manual planning, spreadsheets, and guesswork.

### ✅ travelmate-project Approach

AI-driven planning with clarity, collaboration, and confidence.

---
---

## 🤖 AI Features Explained

| Feature                   | Description                                 |
| ------------------------- | ------------------------------------------- |
| 🧠 Itinerary Generator    | Builds day-wise travel plans using AI       |
| ⚖️ Conflict Resolver      | Balances group preferences intelligently    |
| 💸 Budget Predictor       | Estimates expenses & suggests optimizations |
| 🗺️ Recommendation Engine | Suggests destinations & activities          |
| 💬 AI Chat Assistant      | Answers travel-related questions            |

---

## 🚀 Quick Start

### 🔧 Prerequisites

* Node.js **v18+**
* MongoDB **v6+** (local install or a MongoDB Atlas connection string)
* npm
* Google Gemini API Key (optional — AI falls back to offline grouping without it)

---

## ⚙️ Installation

```bash
# Clone repository
cd travelmate-project

# Backend setup
cd server
npm install

# Frontend setup
cd ../client
npm install
```

Or install everything from the repo root:

```bash
npm run install-all
```

---

## ▶️ Running the App

```bash
# Terminal 1: Start Backend (http://localhost:5000)
cd server
npm run dev
```

```bash
# Terminal 2: Start Frontend (http://localhost:5173)
cd client
npm run dev
```

You can also run both together from the repo root:

```bash
npm run dev
```

📍 Frontend: [http://localhost:5173](http://localhost:5173)
📍 Backend: [http://localhost:5000](http://localhost:5000)
📍 Health check: [http://localhost:5000/api/health](http://localhost:5000/api/health)

> The backend must have a working `MONGO_URI` for login, trips, bookings and chat.
> Production build: `npm run build` then `npm start` (serves `client/dist` from the server).

---

## 🏗️ Project Architecture

```text
travelmate-project/
├── client/         # React + Vite frontend
├── server/         # Node.js + Express + MongoDB backend
├── .github/        # GitHub Actions
├── README.md
└── package.json    # Root scripts (dev, build, start)
```


## 🧩 Functional Modules

### 👤 User Module

* Authentication & profile management
* Join or create travel groups

### 🧳 Trip Planning Module

* Destination selection
* AI itinerary generation
* Group voting & feedback

### 🧠 AI Module

* Preference analysis
* Budget intelligence
* Smart recommendations

### 🛡️ Admin Module

* Trip validation
* User & content moderation

---

## 🛠️ Tech Stack

### Frontend

* React 18
* Context API
* CSS / Modular styling

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose

### AI & Tools

* OpenAI API
* REST APIs
* JWT Authentication

---

## 🔐 Environment Variables

Copy the example files and fill in the values:

```bash
copy server\.env.example server\.env
copy client\.env.example client\.env
```

### Server — `server/.env`

```env
PORT=5000
NODE_ENV=development

# Local MongoDB
MONGO_URI=mongodb://127.0.0.1:27017/travel-around
# Or MongoDB Atlas
# MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/travel-around

# Required: long random string (sessions are stored in MongoDB)
SESSION_SECRET=replace_with_a_long_random_string

# Optional: extra allowed frontend origins for CORS (comma separated)
CLIENT_URL=
```

### Client — `client/.env`

```env
# Optional. Without it the itinerary falls back to offline grouping.
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
VITE_GEMINI_MODEL=gemini-2.0-flash

# Optional
VITE_GOOGLE_PLACES_API_KEY=
```

> **Note:** This project uses Google Gemini (not OpenAI) and cookie-based sessions
> (not JWT). `JWT_SECRET` / `OPENAI_API_KEY` from old docs are no longer used.
> API keys prefixed with `VITE_` are bundled into the frontend and should not be
> treated as server secrets.


## 🧠 Future Scope

* Real-time group chat
* Hotel & transport booking
* Map-based planning
* Multilingual AI assistant
* Mobile app version

---

⭐ If you find this project useful, don’t forget to **star the repository**!
