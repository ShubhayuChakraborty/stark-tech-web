# Stark Tech Portfolio - Backend Setup Guide

This guide will help you set up the backend API for the contact form using Gmail.

## 📋 Prerequisites

- Node.js (v18 or higher)
- Gmail account
- Gmail App Password (not your regular password)

## 🚀 Setup Instructions

### 1. Gmail Configuration

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Navigate to Security → 2-Step Verification
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Environment Configuration

1. Navigate to the `api` folder:

   ```bash
   cd api
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

3. Edit the `.env` file with your details:

   ```env
   # Gmail Configuration
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password

   # Server Configuration
   PORT=3001
   FRONTEND_URL=http://localhost:8080

   # Security
   NODE_ENV=development
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Backend Server

```bash
npm run dev
```

The server will start on `http://localhost:3001`

## 🔧 API Endpoints

### Health Check

```
GET /api/health
```

Returns the server status.

### Send Contact Message

```
POST /api/contact/send
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you soon."
}
```

## ⚡ Features

- **Rate Limiting**: Maximum 5 requests per 15 minutes per IP
- **Input Validation**: Comprehensive validation for all form fields
- **Security**: Helmet.js for security headers, CORS protection
- **Email Templates**: Beautiful HTML email templates with Stark Tech branding
- **Dual Emails**: Sends confirmation to sender and notification to recipient
- **Error Handling**: Comprehensive error handling and logging

## 🛡️ Security Features

- Input sanitization and validation
- Rate limiting to prevent spam
- CORS protection
- Security headers via Helmet.js
- Environment variable protection

## 📧 Email Features

- **Styled HTML emails** with Stark Tech theme
- **Confirmation email** sent to the form submitter
- **Notification email** sent to you with the inquiry
- **Mobile-responsive** email templates
- **Professional branding** matching your portfolio

## 🔍 Troubleshooting

### Common Issues:

1. **Authentication Error**:

   - Ensure you're using App Password, not regular Gmail password
   - Check that 2FA is enabled on your Google account

2. **Port Already in Use**:

   - Change the PORT in `.env` file
   - Update FRONTEND_URL accordingly in both frontend and backend

3. **CORS Error**:

   - Ensure FRONTEND_URL matches your frontend development server URL
   - Check if both servers are running

4. **Rate Limiting**:
   - Wait 15 minutes if you hit the rate limit
   - Adjust rate limit settings in `server.js` if needed for development

## 📝 Frontend Integration

The frontend `ContactSection.tsx` has been updated to:

- Send requests to the backend API
- Show loading states during submission
- Display success/error messages using toast notifications
- Handle network errors gracefully

## 🚀 Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in your environment
2. Update `FRONTEND_URL` to your production domain
3. Use a process manager like PM2
4. Set up reverse proxy with Nginx
5. Use HTTPS for security

## 📊 Monitoring

The API includes:

- Console logging for email send events
- Error logging for debugging
- Health check endpoint for monitoring

## 🎨 Customization

You can customize:

- Email templates in `services/emailService.js`
- Rate limiting in `server.js`
- Validation rules in `middleware/validation.js`
- CORS settings in `server.js`

---

**Need help?** Check the console logs for detailed error messages, or refer to the troubleshooting section above.
