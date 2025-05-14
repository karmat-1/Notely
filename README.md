# 📝 Notely – AI-Powered Note-Taking App

**Notely** is a smart, minimal, and powerful note-taking web application designed to enhance productivity using AI assistance. Built with modern web technologies, Notely ensures a smooth experience across devices while offering user authentication, secure storage, and intelligent note management.

---

## 🚀 Features

- 🔐 **Authentication & Authorization** using Supabase
- 🧠 **AI-Powered Suggestions** for note summarization (coming soon)
- 📝 **Create, Edit, and Manage Notes** with ease
- 🔄 **Auto Save** with real-time updates
- 🔎 **Smart Search** across your notes
- 🌙 **Dark Mode** support
- 🧱 **Built with:**
  - Next.js (App Router)
  - Supabase (Auth + Database)
  - Prisma (ORM)
  - PostgreSQL
  - Tailwind CSS
  - TypeScript

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/notely.git
cd notely
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

```env
# Supabase
SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/notely

# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
### 4.  Set Up Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```
### 5. Run the Development Server

```bash
npm run dev
```

## Authentication & Authorization
- User authentication is powered by Supabase Auth.
- Middleware ensures protected routes redirect unauthorized users to the login page.
- Users are redirected to their latest note upon login.

## Tech Stack
- Frontend: Next.js 15, Tailwind CSS
- Auth: Supabase Auth
- Database: PostgreSQL (via Supabase)
- ORM: Prisma

  ## Coming Soon
- AI summarization and note rewriting

- Tagging and categorization

- Note sharing with permissions

- Offline mode
