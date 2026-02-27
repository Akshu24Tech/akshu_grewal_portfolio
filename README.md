# Akshu Grewal — AI Engineer Portfolio

> *"I don't just train models; I build intelligent systems that reason, act, and solve complex problems autonomously."*

A modern, high-performance personal portfolio built with **React**, **Vite**, and **TailwindCSS** — featuring a dynamic video background, interactive project showcase, and smooth animations.

---

## 🚀 Live Demo

**[akshu-grewal-portfolio.vercel.app](#)** *(replace with your Vercel URL)*

---

## ✨ Features

- 🎬 **Video Background** — Full-screen video hero section
- 🎨 **Interactive Projects** — Hover to reveal color from grayscale
- 🧠 **AI-Powered** — Integrated with Google Gemini API
- ⚡ **Blazing Fast** — Vite + React for instant hot-reload
- 📱 **Fully Responsive** — Looks great on all screen sizes
- 🌙 **Dark Mode First** — Premium dark aesthetic with glassmorphism

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 6 |
| Styling | TailwindCSS v4 |
| Animations | Motion (Framer Motion) |
| AI | Google Gemini API (`@google/genai`) |
| Icons | Lucide React |
| Language | TypeScript |

---

## 📦 Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/Akshu24Tech/akshu_grewal_portfolio.git
cd akshu_grewal_portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# 4. Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com).

---

## 📁 Project Structure

```
├── public/
│   └── video.mp4          # Hero background video
├── src/
│   ├── components/        # Reusable React components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html
└── vite.config.ts
```

---

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Akshu24Tech/akshu_grewal_portfolio)

Add your `GEMINI_API_KEY` in the Vercel environment variables settings.

---

## 📬 Contact

- **Email:** akshug2004@gmail.com
- **LinkedIn:** [akshu-grewal](https://www.linkedin.com/in/akshu-grewal)
- **GitHub:** [@Akshu24Tech](https://github.com/Akshu24Tech)

---

*Built with ❤️ by Akshu Grewal*
