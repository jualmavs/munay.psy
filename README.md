# 🌿 MUNAY.PSY — Landing Page Profesional v2.0

> **Sabiduría Ancestral × Bienestar Moderno**

![Version](https://img.shields.io/badge/version-2.0.0-purple)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)
![GSAP](https://img.shields.io/badge/GSAP-3.12-green)

---

## ✨ Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14.2 (App Router) |
| Lenguaje | TypeScript 5.4 (strict) |
| Estilos | Tailwind CSS 3.4 |
| Animaciones | GSAP 3.12 + ScrollTrigger |
| Partículas | Canvas API nativo |
| Tipografía | Cormorant Garamond + Syne |
| Hosting rec. | Vercel |

---

## 🚀 Instalación y Uso

```bash
# 1. Instalar dependencias
npm install

# 2. Desarrollo
npm run dev
# → http://localhost:3000

# 3. Build producción
npm run build
npm run start
```

---

## 📁 Estructura

```
src/
├── app/
│   ├── layout.tsx      # Metadatos SEO + fuentes
│   ├── page.tsx        # Ensamblado de secciones
│   └── globals.css     # Variables + estilos base
├── components/
│   ├── Nav.tsx         # Navegación responsive
│   ├── Hero.tsx        # Hero + Canvas partículas + GSAP
│   ├── About.tsx       # Sobre nosotros + pilares
│   ├── Carousel.tsx    # Carrusel de productos
│   ├── Testimonials.tsx# Testimonios con estrellas
│   ├── Contact.tsx     # Formulario → WhatsApp
│   ├── Footer.tsx      # Footer completo
│   └── SocialFloat.tsx # Iconos flotantes
└── lib/
    └── data.ts         # Productos y testimonios
public/
├── favicon.png
└── images/
    ├── logo.png
    └── products/
        ├── kombucha.png
        ├── miel.png
        └── enteogenos.png
```

---

## 🎨 Características

- ✅ **Hero inmersivo** — Canvas partículas bioluminiscentes + GSAP word-reveal
- ✅ **Carrusel de productos** — Con imagen, descripción, precio y CTA
- ✅ **Sección Sobre Nosotros** — Filosofía + pilares de la marca
- ✅ **Testimonios** — Estrellas reales, 5 reseñas
- ✅ **Formulario → WhatsApp** — Sin backend, redirige prediligenciado
- ✅ **Iconos sociales flotantes** — WhatsApp, Instagram, Facebook con SVG reales
- ✅ **Responsive 100%** — Mobile-first, probado en todos los breakpoints
- ✅ **SEO completo** — Schema.org, Open Graph, Twitter Card
- ✅ **WCAG AA** — ARIA labels, contraste, keyboard nav
- ✅ **Sin links externos en footer** — Todo el footer usa anclas internas

---

## 🌐 Deploy en Vercel

```bash
# Opción A: Vercel CLI
npx vercel --prod

# Opción B: Panel Vercel
# 1. Sube el proyecto a GitHub
# 2. Conecta en vercel.com
# 3. Click "Deploy"
```

---

## 📞 Contacto MUNAY

- WhatsApp: +57 314 571 2545
- Instagram: @munay.psy
- Email: munaynature24@gmail.com

---

MIT © 2024 MUNAY.PSY
