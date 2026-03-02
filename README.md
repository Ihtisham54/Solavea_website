# Solavea - Global Talent Solutions

Solavea is a corporate IT staffing and recruitment website designed to connect organizations with top-tier technology professionals.

## Project Overview

This is a static website built with HTML, CSS, and Vanilla JavaScript. It features a modern, fully responsive design with a focus on professional aesthetics.

### Key Features

- **Fully Responsive**: Optimized for desktop, tablet, and mobile (320px–1200px+).
- **Mobile Navigation**: Hamburger menu with smooth toggle animation on screens below 768px.
- **Multi-page Layout**: Includes Home, About, Services, Industries, Expertise, Careers, Contact, and Submit Resume pages.
- **Interactive Elements**: Smooth scrolling, page-load animations, and intersection observer effects.
- **Modern Styling**: Custom CSS architecture with CSS custom properties for easy theming.

## Project Structure

```
Solavea/
├── css/
│   └── style.css           # Global styles + responsive media queries
├── js/
│   └── main.js             # Animations, hamburger menu, smooth scroll
├── images/                 # Website images and assets
│   ├── logo.png
│   ├── hero.png
│   ├── about.png
│   ├── staffing.png
│   ├── recruitment.png
│   ├── industries.png
│   ├── culture.jpg
│   └── why_us.png
├── index.html              # Homepage
├── about.html              # About Us page
├── services.html           # Services page
├── industries.html         # Industries page
├── expertise.html          # Expertise page
├── careers.html            # Careers page
├── contact.html            # Contact page
├── submit-resume.html      # Submit Resume page
├── package.json            # Project metadata
└── .gitignore              # Git ignore rules
```

## Getting Started

### Option 1: Open Directly

Simply open `index.html` in a web browser. No build step required.

### Option 2: Local Development Server

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open `http://localhost:5173` in your browser.

## Responsive Breakpoints

| Breakpoint | Target                                       |
| ---------- | -------------------------------------------- |
| > 768px    | Desktop — full horizontal navigation         |
| ≤ 768px    | Tablet — hamburger menu, single-column grids |
| ≤ 480px    | Mobile — tighter spacing, smaller typography |

## Technologies Used

- HTML5
- CSS3 (with Custom Properties)
- JavaScript (ES6+)
- Google Fonts (Inter)

## License

All rights reserved © 2026 Solavea.
