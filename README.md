# ABC Company Website with CMS

A responsive landing page for ABC Company powered by a CMS to update the main headline dynamically. Built with the **MERN stack**.

---

## 🔧 Tech Stack

- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: MongoDB (with Mongoose)
- Deployment: Render (for backend), Vercel or Netlify (for frontend)

---

## 🚀 Live Demo

🔗 [Frontend Deployed Website](https://cms-app-flax.vercel.app/cms)

🔗 [CMS Backend API](https://cms-app-b9fg.onrender.com/api/heading)

---

## 📁 Project Setup

### 🔹 Backend (`backend/`)

1. Clone this repo
2. Navigate to `backend` folder:
    ```bash
    cd backend
    npm install
    ```
3. Create a `.env` file with:

    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the server:
    ```bash
    node index.js
    ```

---

### 🔹 Frontend (`frontend/`)

1. Navigate to `frontend` folder:
    ```bash
    cd frontend
    npm install
    ```

2. Run the app:
    ```bash
    npm run dev
    ```

---

## 🔗 API Endpoints

### 1. `GET /api/heading`

- **Returns** the current heading stored in DB.
- ✅ Used by frontend on landing page.

**Response:**
```json
{ "_id": "...", "content": "Hyper boost your Revenue Management..." }
```

2. POST /api/heading
* Updates or creates the heading.
* ✅ Used by CMS form.

Body:
```bash
{ "content": "New heading goes here" }
```

Response:
```bash
{ "message": "Heading updated successfully" }
```


## 🧾 Database Schema
```bash
// models/Heading.js
const mongoose = require('mongoose');

const headingSchema = new mongoose.Schema({
  content: { type: String, required: true },
});

module.exports = mongoose.model('Heading', headingSchema);
```

### 🌍 Deployment Instructions
---
## Backend (Render):
1. Push server/ to GitHub.
2. Go to [Render.com](https://render.com).
3. New Web Service → connect repo.
4. Set:
    * Build command: npm install
    * Start command: node server.js
    * Add **.env** variables in settings.

5. Deploy.


### Frontend (Vercel / Netlify):
1. Push client/ to GitHub.
2. Go to [vercel.com](https://vercel.com).
3. New Project → import repo.
4. Set vite as framework (it auto-detects).
5. Set environment variables if needed (e.g., VITE_API_URL).


### ✅ Features Summary
* Responsive landing page
* Heading loaded via backend
* CMS form to update heading in real-time
* GSAP animations for UI
* Skeleton loading for UX

### 📌 Notes
* Ensure axios calls in frontend hit the deployed backend URL, not localhost.
* Code is modular and components are split cleanly (Header, HeroSection, FeaturesSection, etc.)

### 📄 License
This is a demo submission for hiring assignment at Brynk Labs.

---
