# Gateway to God - Mantras – Frontend Codebase

A modern spiritual web application that helps users explore sacred Hindu mantras, understand their meanings, and deepen their spiritual journey through beautifully designed interfaces.

This repository contains the **Next.js frontend** for the **Gateway to God – Mantras** full-stack application.

---

# Overview

Gateway to God is a spiritual library designed to make traditional Hindu mantras accessible in a **modern, elegant, and user-friendly interface**.

Users can:

- Read sacred mantras and verses
- View transliterations and meanings
- Track spiritual content
- Access a clean and distraction-free reading experience

The interface is built with **modern frontend technologies** to provide a **premium user experience across all devices**.

---

# Features

## Spiritual Library

- Browse sacred Hindu chants and mantras
- Dedicated pages for each mantra
- Clean and readable verse layout

## Mantra Pages

Currently implemented:

- **Hanuman Chalisa**
- **Lalita Sahasranama (Coming Soon)**
- **Rama Mantra (Coming Soon)**

Each mantra page includes:

- Sanskrit verse text
- Transliteration
- Meaning / explanation
- Spiritual themed layout

---

## Modern UI/UX

The interface focuses on calm, readable, and elegant design.

Highlights include:

- Spiritual themed color palette (saffron / gold)
- Smooth hover effects
- Soft gradient backgrounds
- Hero image galleries
- Premium typography
- Responsive layouts

---

## Authentication UI

Frontend support for user authentication:

- Login page
- Signup page
- Profile page
- Logout confirmation dialog

Authentication state is managed through:

- Context API
- LocalStorage token handling

---

## Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile devices

Responsive features include:

- Mobile hero image sliders
- Flexible card grid layouts
- Adaptive navigation bar
- Fluid typography scaling

---

# Tech Stack

## Framework

- **Next.js 14+ (App Router)**

## UI Framework

- **TailwindCSS**

## Component Library

- **shadcn/ui**

## Icons

- **Lucide React**

## State Management

- React Context API

## Styling

- TailwindCSS utility styling
- Gradient backgrounds
- Soft glow effects

---

# Project Structure

```
frontend
│
├── app
│   ├── hanuman-chalisa
│   ├── lalita-sahasranama
│   ├── rama-mantra
│   ├── login
│   ├── signup
│   ├── profile
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── MantraCard.jsx
│   ├── Navbar.jsx
│   ├── VerseCard.jsx
│   └── ui
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── error-alert.jsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── loading-spinner.jsx
│       └── screen-loader.jsx
│
├── context
│   └── AuthContext.jsx
│
├── data
│   ├── hanumanChalisa.js
│   ├── lalitaSahasranama.js
│   └── ramaMantra.js
│
├── lib
│   ├── api.js
│   └── utils.ts
│
└── public
    ├── hanuman1.jpg
    ├── hanuman2.jpg
    ├── hanuman3.jpg
    ├── hanuman4.jpg
    └── hanuman5.jpg
```

---

# Key Components

## Navbar

Responsive navigation bar with:

- Login / Signup buttons
- Profile access
- Logout confirmation modal

---

## MantraCard

Reusable card component used for displaying mantra entries.

Features:

- Icon support
- Hover glow effect
- CTA button
- "Coming Soon" modal integration

---

## VerseCard

Displays mantra verses including:

- Verse number
- Sanskrit text
- Transliteration
- Meaning

Optimized for readability and spiritual content presentation.

---

# Installation

Clone the repository:

```
git clone https://github.com/yourusername/gateway-to-god.git
```

Navigate to frontend:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# Future Improvements

Planned features include:

- Chant counter system
- User progress tracking
- Audio mantra playback
- Additional mantra libraries
- Bookmark favorite verses
- Dark mode spiritual theme
- SEO optimized mantra pages

---

# Backend Integration

This frontend connects to the backend API for:

- Authentication
- User data
- Chant tracking
- Mantra content

Backend repository is located in the **backend** folder of the full project.

---

# License

This project is created for educational and spiritual purposes.

---

# Author

Satinder Singh Sall

Full-Stack Developer  
Passionate about building meaningful spiritual technology and modern web applications.

---
