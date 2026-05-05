# 🌿 MUNAY.PSY — Landing Page Profesional v2.0

> **Sabiduría Ancestral × Bienestar Moderno**

[![Ver demo en vivo](https://img.shields.io/badge/Ver%20demo%20en%20vivo-MUNAY.PSY-25D366?style=for-the-badge&logo=netlify&logoColor=white)](https://munay-psy.netlify.app/)

🔗 **Sitio en producción:** https://munay-psy.netlify.app/

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
| Hosting | Netlify |

---

## 🚀 Instalación y Uso

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev
# → http://localhost:3000

# 3. Build de producción
npm run build

# 4. Ejecutar versión de producción local
npm run start

---

📁 Estructura del Proyecto

src/
├── app/
│   ├── layout.tsx      # Metadatos SEO + fuentes globales
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
    ├── og-image.jpg
    └── products/
        ├── kombucha.png
        ├── miel.png
        └── enteogenos.png

---

🎨 Características
✅ Hero inmersivo — Canvas con partículas bioluminiscentes y animaciones GSAP
✅ Carrusel de productos — Imágenes, descripciones, precios y CTA
✅ Sección Sobre Nosotros — Filosofía y pilares de la marca
✅ Testimonios — Reseñas con valoración visual
✅ Formulario → WhatsApp — Sin backend, redirección prediligenciada
✅ Iconos sociales flotantes — WhatsApp, Instagram y Facebook con SVG reales
✅ Responsive 100% — Mobile-first, probado en varios breakpoints
✅ SEO completo — Schema.org, Open Graph y Twitter Card
✅ Accesibilidad — ARIA labels, contraste adecuado y navegación por teclado
✅ Footer limpio — Enlaces internos y experiencia visual consistente

---

🌐 Deploy en Netlify
# Opción A: Netlify CLI
npm install -g netlify-cli
netlify deploy --prod

# Opción B: Despliegue conectado a GitHub
# 1. Sube el proyecto a GitHub
# 2. Conecta el repositorio en netlify.com
# 3. Configura:
#    - Build command: npm run build
#    - Publish directory: .next
# 4. Despliega el sitio

---

📞 Contacto MUNAY
WhatsApp: +57 314 571 2545
Instagram: @munay.psy
Email: munaynature24@gmail.com

---

MIT © 2024 MUNAY.PSY