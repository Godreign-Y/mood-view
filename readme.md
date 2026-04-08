# 📌 Team Mood Board – Source of Truth (Architecture + Roles)

## 🧠 Project Overview
A simple web app where team members can:
- Add a **daily mood card**
- View all team moods
- Filter/search moods (optional enhancement)

Each mood card includes:
- Name
- Emoji
- Short note
- Timestamp

---

## 🏗️ Tech Stack

| Layer        | Tech |
|-------------|------|
| Frontend     | React + Vite + Tailwind |
| Backend      | Appwrite (Auth + DB) |
| State Mgmt   | React hooks / Context |
| Storage      | Appwrite Database |

---

## 🧩 High-Level Architecture

```
Frontend (React)
│
├── Landing Page
├── Login Page
├── Mood Board (Main App)
│   ├── Card UI
│   ├── Card Form
│
└── Services Layer
    ├── Appwrite Auth
    └── Appwrite DB

Backend (Appwrite)
│
├── Authentication
└── Database (Mood Collection)
```

---

## 🔄 Data Flow

### 1. Authentication Flow
```
User → Login Page → Appwrite Auth → Session → Access App
```

### 2. Mood Submission Flow
```
User → Form → Appwrite DB → Stored → UI Updates
```

### 3. Mood Fetch Flow
```
App Load → Fetch from DB → Render Cards
```

---

## 🗃️ Database Schema (Appwrite)

**Collection: moods**

| Field       | Type    | Description |
|------------|--------|-------------|
| userId      | string | Appwrite user ID |
| name        | string | User name |
| emoji       | string | Mood emoji |
| note        | string | Short message |
| createdAt   | datetime | Auto timestamp |

---

## 🔐 Auth Requirements

- Email + Password login
- Session persistence
- Logout support

---

## 📁 Folder Structure

```
frontend/
│
├── pages/
│   ├── Landing.jsx
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── components/
│   ├── Card.jsx
│   ├── CardForm.jsx
│
├── services/
│   ├── appwriteAuth.js
│   ├── appwriteDB.js
│
├── context/
│   └── AuthContext.jsx
│
└── App.jsx
```

---

# 👥 ROLE-WISE BREAKDOWN

---

## 👤 Person 1 & 2 → Landing Page

### 🎯 Responsibilities
- Build **homepage UI**
- Introduce app concept
- Add navigation to login

### 📦 Deliverables
- `Landing.jsx`
- Responsive UI

### 🧩 Features
- Title: “Team Mood Board”
- Short description
- CTA button → “Login”
- Optional: animations / styling

### 🔗 Dependencies
- None (independent)

---

## 👤 Person 3 → Appwrite Auth

### 🎯 Responsibilities
- Setup Appwrite SDK
- Implement authentication logic

### 📦 Deliverables
- `appwriteAuth.js`
- Auth context (optional)

### 🧩 Functions
```js
login(email, password)
signup(email, password)
logout()
getCurrentUser()
```

### 🔗 Dependencies
- Used by:
  - Login Page (Person 7)
  - Dashboard (for session)

---

## 👤 Person 4 → Appwrite Database

### 🎯 Responsibilities
- Setup database & collection
- CRUD operations

### 📦 Deliverables
- `appwriteDB.js`

### 🧩 Functions
```js
createMood(data)
getMoods()
deleteMood(id) // optional
```

### 🔗 Dependencies
- Used by:
  - Card Form (Person 6)
  - Card UI (Person 5)

---

## 👤 Person 5 → Card UI

### 🎯 Responsibilities
- Display mood cards

### 📦 Deliverables
- `Card.jsx`

### 🧩 Props
```js
{
  name,
  emoji,
  note,
  createdAt
}
```

### 🧩 Features
- Clean card design
- Emoji prominent
- Timestamp (optional)

### 🔗 Dependencies
- Data from DB (Person 4)

---

## 👤 Person 6 → Card Form

### 🎯 Responsibilities
- Form to submit mood

### 📦 Deliverables
- `CardForm.jsx`

### 🧩 Fields
- Name
- Emoji
- Note

### 🧩 Behavior
- On submit → call `createMood()`
- Clear form after submit

### 🔗 Dependencies
- Uses DB service (Person 4)

---

## 👤 Person 7 → Login Page UI

### 🎯 Responsibilities
- Build login/signup UI

### 📦 Deliverables
- `Login.jsx`

### 🧩 Features
- Email + Password input
- Login button
- Signup option

### 🧩 Behavior
- Calls auth functions
- Redirect to dashboard

### 🔗 Dependencies
- Uses Auth (Person 3)

---

# 🔗 Integration Plan

### Step 1
- Auth + DB setup (Person 3 & 4)

### Step 2
- UI components (5, 6, 7)

### Step 3
- Landing page (1, 2)

### Step 4
- Final integration:
  - Login → Dashboard
  - Form → DB
  - DB → Cards

---

# ⚠️ Rules (IMPORTANT)

- ✅ Follow same folder structure
- ✅ Use shared service files (Auth + DB)
- ❌ Do NOT duplicate logic
- ✅ Use consistent naming
- ✅ Test components independently

---

# 🚀 Bonus Features (Optional)

- Mood filters (happy/sad/etc.)
- Dark mode
- Delete mood
- Real-time updates (Appwrite subscriptions)

