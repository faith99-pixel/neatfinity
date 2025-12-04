# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Cleaning Service Booking - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Service Type: {{service}}
Apartment Size: {{apartment_size}}
Address: {{address}}

Message:
{{message}}
```

4. Save and copy your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Contact Page
Open `app/contact/page.tsx` and replace:
- Line 24: `'YOUR_SERVICE_ID'` with your Service ID
- Line 25: `'YOUR_TEMPLATE_ID'` with your Template ID
- Line 35: `'YOUR_PUBLIC_KEY'` with your Public Key

## Example:
```typescript
await emailjs.send(
  'service_abc123',      // Your Service ID
  'template_xyz789',     // Your Template ID
  { ... },
  'user_def456'          // Your Public Key
);
```

## Test Your Form
1. Run `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your email inbox for the booking request
