 DecodeLabs-Task1: Responsive Personal Portfolio Website

Welcome to my first official internship project submission for **Decode Labs**. This repository contains a fully responsive, modern, and high-performance Personal Portfolio Website customized with a sleek aesthetic layout and complete user input handling.

---

 🚀 Project Overview
The main goal of this task was to design and develop a single-page portfolio website that effectively displays an intern's programming core skills, frontend abilities, and projects, while providing a seamless way for mentors or visitors to connect via a responsive contact form.

---

 🎨 Design & Aesthetic Theme
Instead of using boring standard colors, this portfolio uses a carefully selected professional color palette:
- **Background Theme:** Nude Baby Pink (`#F7EBE8`) which creates a soft, clean, and modern background that reduces visual strain.
- **Card & Element Highlights:** Soft Purple / Mauve (`#E8DFF5` & `#8E7C93`) applied strictly to skills and project components to deliver a neat, high-contrast separation.
- **Dynamic UX/UI Transitions:** The application features a custom smooth-scrolling experience (`scroll-behavior: smooth`). All container cards have fluid CSS transition logic (`transition: all 0.3s ease`) that triggers subtle lifts (`translateY`) and scale adjustments (`scale(1.02)`) on mouse hover.

---

 🛠️ Technology Stack & Tools Used
1. **Semantic HTML5:** Used clean layout structuring tags like `<header>`, `<nav>`, `<section>`, and `<footer>` rather than monotonous nested `<div>` wrappers.
2. **Pure CSS3 Logic:** Implemented dynamic layout structures using Flexbox and CSS Grids to maintain layout responsiveness across mobile, tablet, and desktop viewports (`@media` screen rules included).
3. **Vanilla JavaScript (ES6+):** Programmed to inject interactivity, manage DOM events, and process client-side verification directly.

---

 📋 Core Features Included

 1. Developer Skills Set Showcase
The section highlights my core engineering and stack competencies arranged in clean visual blocks:
- **Core Languages:** Java, Python
- **Algorithms:** Data Structures & Algorithms (DSA)
- **Frontend & UI/UX:** HTML5, CSS3, JavaScript, Web Design
- **Database Systems:** SQL

 2. Live Social Profile Integrations
The navigation header bar and footer are hardcoded with direct links pointing to my real professional profiles:
- **GitHub:** https://github.com/payalbanerjee09
- **LinkedIn:** https://linkedin.com/in/payalbanerjee09

 3. Smart Form Validation & User Feedback
The contact section includes an interactive script built with an automated listener to capture submit events:
- Empty Field Checks: Uses `.trim()` validation logic to ensure that white spaces aren't treated as legitimate inputs.
- Dynamic Response Alert: Instead of reloading the page blindly, it intercepts submission via `event.preventDefault()`, checks validation, triggers a sweet customized user feedback popup alert, and automatically flushes out the data from input nodes using the form `.reset()` method.

---

## 📂 File Directory Structure
```text
DecodeLabs-Task1/
│
├── index.html       # Primary semantic structure with customized content
├── style.css        # The entire visual skin, responsive queries, and purple/pink animations
├── script.js       # Event listeners, submission validation, and form resetting
└── README.md        # Comprehensive implementation documentation
