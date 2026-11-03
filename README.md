# BETA E-Com UG — Official Corporate Website

This repository contains the official website for **BETA E-Com UG (haftungsbeschränkt)**, engineered using the **Apple Design System** principles (Human Interface Guidelines, SF Pro typography, frosted glassmorphism, bento grids, and refined micro-interactions).

**🌐 Live Website:** [https://beta-ecom-ug.vercel.app](https://beta-ecom-ug.vercel.app)

---

## 🚀 Quick Start / How to View

You can open the website directly in any modern browser:

### Option 1: Direct File Open
Double-click `index.html` or run from your terminal:
```bash
open index.html
```

### Option 2: Local HTTP Server (Python)
```bash
python3 -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000).

---

## 🎨 Apple Design System Features

* **Apple Typography & Pro Aesthetics**: Clean typography hierarchy (-apple-system / SF Pro), balanced weights, and refined letter-spacing.
* **Apple Frosted Glass (Liquid Glassmorphism)**: `backdrop-filter: blur(20px) saturate(180%)` for sticky navigation, modals, and bento cards.
* **Apple Bento Grid Layout**: Asymmetric responsive cards highlighting core competencies.
* **Interactive Live Configurator Demo**: An interactive preview showcasing BETA E-Com's configurator capabilities (color finish toggle, dynamic specs, real-time pricing calculation).
* **Apple Dark & Light Mode Toggle**: Smooth transition between Apple Dark (`#000000`) and Apple Light (`#ffffff`) themes with automatic system preference detection and localStorage persistence.
* **Bilingual Switcher (DE / EN)**: Instant language switching between German and English.
* **Legally Compliant (German Law)**: Built-in interactive modals for **Impressum (§ 5 DDG)** and **Datenschutzerklärung (DSGVO)** containing verified HRB 95142 and USt-IdNr. data.

---

## 📁 Project Structure

```
├── BETA_ECOM_UG_RESEARCH_DOSSIER.md # Comprehensive verified research findings
├── index.html                       # Semantic HTML5 with Apple design structure
├── css/
│   └── apple-design.css             # Apple Design System tokens, styles & animations
├── js/
│   └── main.js                      # Theme switcher, i18n engine, configurator & modals
└── README.md                        # Documentation and overview
```

