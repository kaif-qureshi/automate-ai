# AutoMate AI 🤖✨

AutoMate AI is an intelligent agentic automation platform built with modern AI workflows, LangGraph, Model Context Protocol (MCP), and multi-tool integrations (Gmail, Google Calendar, Instagram, Vision AI, and more).

---

## 🚀 Features

- **Autonomous AI Agents**: Create, configure, and chat with AI agents equipped with custom instructions, models, and tools.
- **Tool Integrations**:
  - 📧 **Gmail**: Search, read, and draft/send emails.
  - 📅 **Google Calendar**: Check schedules and schedule meetings.
  - 📸 **Instagram**: Vision analysis and image publishing with approval workflows.
  - 🧮 **Tools & MCP**: Model Context Protocol (MCP) tool support.
- **Human-in-the-Loop Approval**: Critical actions (like sending emails, creating calendar events, and posting to Instagram) generate interactive approval cards before execution.
- **Credit & Billing System**: Integrated Razorpay credit management system.
- **Secure Authentication**: Firebase Authentication with JWT session cookies and encrypted credential storage.

---

## 🛠️ Architecture

```
automate-ai/
├── backend/            # Express, LangGraph, MCP Server, Mongoose, Razorpay
│   ├── config/         # DB, Firebase, OAuth, Checkpointer
│   ├── controllers/    # API controllers
│   ├── mcp/            # MCP server, client & tools
│   ├── middleware/     # Auth & protection middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routes
│   └── services/       # LangGraph agent graphs
├── frontend/           # Vite, React 19, Tailwind CSS v4, Redux Toolkit
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── features/   # API queries & actions
│   │   ├── pages/      # Home, Login, Agents, CreateAgent, Pricing, Integrations
│   │   └── redux/      # User & state slices
└── README.md
```

---

## ⚡ Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- Firebase Project (for Auth)
- Groq API Key

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your .env values and place your serviceAccountKey.json in backend/
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Fill in your VITE_FIREBASE_API_KEY in frontend/.env
npm run dev
```

Frontend runs on `http://localhost:5173` and backend runs on `http://localhost:8000`.

---

## 🔒 Security

- Sensitive credentials (`.env`, `serviceAccountKey.json`) are strictly git-ignored.
- Access tokens and OAuth refresh tokens are encrypted at rest using AES-256.
