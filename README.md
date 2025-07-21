# ⚡ Stark Tech Portfolio - Full Stack

A futuristic portfolio website inspired by Stark Industries, featuring a complete backend integration for contact form functionality.
live link:-stark-tech-portfolio-liard.vercel.app
## 🚀 Features

- **Modern React + TypeScript** frontend with Vite
- **Express.js API** backend with Gmail integration
- **JARVIS AI Assistant** with Gemini AI integration
- **Contact Form** with email notifications
- **Rate Limiting** and security features
- **Beautiful Email Templates** with Stark Tech branding
- **Glass Morphism UI** with advanced animations
- **Responsive Design** for all devices

## 📋 Prerequisites

- Node.js (v18 or higher)
- Gmail account with App Password
- Git

## 🛠️ Quick Setup

### 1. Clone and Install

```bash
git clone https://github.com/ShubhayuChakraborty/stark-tech-web.git
cd stark-tech-web
npm install
```

### 2. Backend Setup

```bash
cd api
npm install
cp .env.example .env
```

Edit `api/.env` with your credentials:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
GEMINI_API_KEY=your-gemini-api-key
```

### 3. Frontend Environment (Optional)

```bash
cp .env.example .env
```

### 4. Start Development Servers

**Option A: Single Command (Recommended)**

```bash
npm run dev
```

This starts both frontend and backend simultaneously with colored output prefixes.

**Option B: Using the batch script (Windows)**

```bash
./start-dev.bat
```

**Option C: Manual start**

```bash
# Terminal 1 - Backend
npm run dev:api

# Terminal 2 - Frontend
npm run dev:frontend
```

## 🌐 Access URLs

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3001
- **API Health**: http://localhost:3001/api/health

## 📧 Gmail Setup Guide

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account → Security → 2-Step Verification
   - Scroll to "App passwords"
   - Generate new password for "Mail"
   - Use this 16-character password in your `.env` file

## 🔧 Backend API

### Endpoints

- `GET /api/health` - Server health check
- `POST /api/contact/send` - Send contact form email
- `POST /api/jarvis/chat` - JARVIS AI assistant chat

### Features

- ✅ Input validation and sanitization
- ✅ Rate limiting (5 requests per 15 minutes)
- ✅ CORS protection
- ✅ Security headers
- ✅ Beautiful HTML email templates
- ✅ Dual email system (confirmation + notification)

## 🎨 Frontend Features

- ✅ Glass morphism design
- ✅ Advanced animations and effects
- ✅ Toast notifications
- ✅ Loading states
- ✅ Form validation
- ✅ Responsive design
- ✅ Stark Industries theme

## 📁 Project Structure

```
stark-tech-web/
├── src/                    # Frontend source
│   ├── components/         # React components
│   │   ├── ContactSection.tsx
│   │   ├── FloatingActionButton.tsx
│   │   └── ...
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   └── types/             # TypeScript definitions
├── api/                   # Backend source
│   ├── routes/            # API routes
│   │   ├── contact.js     # Contact form endpoint
│   │   └── jarvis.js      # JARVIS AI endpoint
│   ├── services/          # Business logic
│   │   ├── emailService.js # Gmail integration
│   │   └── jarvisService.js # AI responses
│   ├── middleware/        # Express middleware
│   └── server.js          # Express server entry
├── public/                # Static assets
├── package.json          # Frontend dependencies
└── start-dev.bat         # Windows startup script
```

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for responsive styling
- **ShadcnUI** components for modern UI
- **Framer Motion** for animations

### Backend

- **Node.js** with Express framework
- **Nodemailer** for Gmail integration
- **Google Generative AI** (Gemini) for JARVIS
- **Express Rate Limit** for security
- **CORS** and security middleware

## 🚀 Deployment Options

### Frontend Deployment

**Vercel (Recommended)**

```bash
npm run build
# Deploy the dist/ folder to Vercel
```

**Netlify**

```bash
npm run build
# Deploy the dist/ folder to Netlify
```

**GitHub Pages**

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

### Backend Deployment

**Railway**

```bash
# Deploy the api/ folder with environment variables
```

**Heroku**

```bash
# Deploy api/ folder with Procfile
echo "web: node server.js" > api/Procfile
```

**DigitalOcean App Platform**

```bash
# Deploy api/ folder with app spec
```

## 🔧 Environment Variables

### Required for Production

**Frontend (.env)**

```env
VITE_API_URL=https://your-api-domain.com
```

**Backend (api/.env)**

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
GEMINI_API_KEY=your-gemini-api-key
PORT=3001
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shubhayu Chakraborty**

- Email: shubhayuchakraborty69@gmail.com
- GitHub: [@ShubhayuChakraborty](https://github.com/ShubhayuChakraborty)
- Portfolio: [Stark Tech Portfolio](https://your-domain.com)

---

⚡ **Built with Stark Tech Innovation** ⚡
