# 🧠 Smart Brain

A full-stack face detection web application that uses AI to detect faces in any image URL you provide.

## 🚀 Live Demo

Submit an image URL and Smart Brain will draw bounding boxes around every detected face — all processed locally in the browser using [face-api.js](https://github.com/vladmandic/face-api).

## 🛠️ Tech Stack

**Frontend**
- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [face-api.js (@vladmandic)](https://github.com/vladmandic/face-api) — in-browser face detection
- Particle background animation
- Session persistence via `localStorage`

**Backend** → [Smart-Brain-API](https://github.com/Pranay-opsraga/Smart-Brain-API)
- Node.js + Express
- PostgreSQL (via Knex.js)
- bcrypt password hashing

## ✨ Features

- 🔐 Sign Up / Sign In with secure authentication
- 🧠 Face detection directly in the browser (no API cost)
- 🎯 Tracks number of image submissions per user
- 💾 Session restored automatically on page reload
- 🌌 Particle animation background

## 📦 Getting Started

### Prerequisites
- Node.js ≥ 18
- The [Smart-Brain-API](https://github.com/Pranay-opsraga/Smart-Brain-API) backend running locally

### Installation

```bash
# Clone the repo
git clone https://github.com/Pranay-opsraga/Smart-Brain.git
cd Smart-Brain

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and set VITE_API_URL to your backend URL
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable        | Description                  | Default                    |
|-----------------|------------------------------|----------------------------|
| `VITE_API_URL`  | URL of the Smart-Brain API   | `http://localhost:3001`    |

## 📁 Project Structure

```
src/
├── Components/
│   ├── FaceRecognition.jsx   # Renders image + face bounding boxes
│   ├── ImageLinkForm.jsx     # URL input form
│   ├── Logo.jsx              # Animated logo
│   ├── NavBar.jsx            # Navigation bar
│   ├── Particles.jsx         # Particle background
│   ├── Rank.jsx              # User entry rank display
│   ├── signIn.jsx            # Sign-in form
│   └── signUp.jsx            # Sign-up form
└── App.jsx                   # Root component & routing
```

## 🔗 Related

- [Smart-Brain-API](https://github.com/Pranay-opsraga/Smart-Brain-API) — the backend REST API for this project

## 📄 License

[MIT](LICENSE)
