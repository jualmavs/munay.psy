'use client';

import Image from 'next/image';
import WhatsAppIcon from './WhatsAppIcon';

const LINKS = [
  {
    title: 'Productos',
    items: ['Melena de León', 'Kombucha MUNAY', 'Miel Ceremonial', 'Enteógenos Cápsulas', 'Orellana', 'Kit Neuro Fungi'],
    href: '#productos',
  },
  {
    title: 'Empresa',
    items: ['Nosotros', 'Filosofía', 'Testimonios', 'Contacto'],
    hrefs: ['#nosotros', '#nosotros', '#testimonios', '#contacto'],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 pt-16 pb-8"
      role="contentinfo"
      style={{ background: '#030308' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5 mb-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="MUNAY Logo" width={36} height={36} className="rounded-full" />
              <span
                className="font-display text-xl font-bold tracking-widest"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  background: 'linear-gradient(135deg,#8B5CF6,#3B82F6,#06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MUNAY.PSY
              </span>
            </div>
            <p className="text-m-muted text-sm leading-relaxed mb-5 max-w-xs">
              Nos inspira conectar la sabiduría ancestral con el bienestar moderno,
              equilibrando cuerpo, mente y espíritu para una vida plena y consciente.
            </p>

            {/* Social icons — real brand colors */}
            <div className="flex gap-3" aria-label="Redes sociales">
              {/* WhatsApp */}
              <a
                href="https://wa.me/573145712545"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp MUNAY"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                style={{ background: '#25D366' }}
              >
                <WhatsAppIcon size={18} variant="default" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/munay.psy/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MUNAY"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
              >
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61573611705858"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook MUNAY"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                style={{ background: '#1877F2' }}
              >
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:munaynature24@gmail.com"
                aria-label="Email MUNAY"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg,#8B5CF6,#3B82F6)' }}
              >
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links column: Productos */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-m-muted mb-4">Productos</h4>
            <ul className="flex flex-col gap-2" role="list">
              {LINKS[0].items.map(item => (
                <li key={item}>
                  <button
                    onClick={() => document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-m-muted hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links column: Empresa */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-m-muted mb-4">Empresa</h4>
            <ul className="flex flex-col gap-2" role="list">
              {['Nosotros', 'Filosofía', 'Testimonios', 'Contacto'].map((item, i) => {
                const anchors = ['#nosotros', '#nosotros', '#testimonios', '#contacto'];
                return (
                  <li key={item}>
                    <button
                      onClick={() => document.querySelector(anchors[i])?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm text-m-muted hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
              <li>
                <a
                  href="mailto:munaynature24@gmail.com"
                  className="text-sm text-m-muted hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+573145712545"
                  className="text-sm text-m-muted hover:text-white transition-colors"
                >
                  +57 314 571 2545
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-m-muted/50">
          <p>© 2024 MUNAY.PSY — Todos los derechos reservados. Hecho con ❤️ en Colombia.</p>
          <p className="text-center sm:text-right max-w-sm">
            Los productos MUNAY son suplementos naturales. No sustituyen tratamiento médico.
            Consulte a un profesional de salud antes de iniciar cualquier suplementación.
          </p>
        </div>
      </div>
    </footer>
  );
}
