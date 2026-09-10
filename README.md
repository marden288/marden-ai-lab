# Marden AI Lab

A premium futuristic portfolio and laboratory website for an AI / computer vision engineer, built with React + Vite on the frontend and Express + JWT on the backend.

## Features

- Cinematic dark AI lab aesthetic with glowing cyan, blue and violet accents
- Responsive portfolio with hero, projects, tech stack, certificates, about, AI Lab section and contact form
- React + Tailwind + Framer Motion front end
- JWT-protected admin dashboard for managing content
- Express API with Mongoose-ready schemas for projects, certificates, skills, messages and socials
- Deployment-ready structure and environmental configuration

## Project Structure

```text
Ai/
├── frontend/          # React + Vite frontend
├── backend/           # Express + JWT API
├── README.md          # Setup and deployment guide
├── package.json       # Root scripts for dev/build
└── .env.example       # Environment example for backend
```

## Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas connection string (optional for mock mode)

## Quick Start

1. Install dependencies from the root:

```bash
npm install
```

2. Start the frontend and backend together:

```bash
npm run dev
```

The app will run on:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Backend Setup

Copy the environment example:

```bash
cp backend/.env.example backend/.env
```

Then update the values as needed.

Example:

```env
PORT=5000
JWT_SECRET=marden-ai-lab-secret
MONGODB_URI=mongodb://127.0.0.1:27017/marden-ai-lab
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

If `MONGODB_URI` is not set, the backend runs in mock mode with in-memory data.

## Admin Dashboard

Open:

```text
http://localhost:5173/admin
```

Demo login:

```text
Username: admin
Password: admin123
```

## Production Build

```bash
npm run build
```

## Deployment

### Vercel (Frontend)

1. Import the `frontend` folder as a Vercel app.
2. Use the default Vite build command.
3. Set the root directory to `frontend`.
4. Publish the app.

### Backend Deployment

Use Render, Railway, Fly.io or a Node.js host. Configure environment variables from the `.env.example` file and expose port 5000.

## Notes

- The website uses local placeholder SVG assets because no project screenshots or certificates were provided in the workspace.
- Replace the SVG placeholders with the user's real assets in `frontend/src/assets/projects`, `frontend/src/assets/certificates`, and `frontend/src/assets/profile` for final production use.
