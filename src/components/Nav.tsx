'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import WhatsAppIcon from './WhatsAppIcon';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#05050A]/90 backdrop-blur-xl border-b border-purple-900/30 py-3' : 'py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('#inicio')} className="flex items-center gap-2 cursor-pointer">
            <Image src="/images/logo.png" alt="MUNAY Logo" width={38} height={38} className="rounded-full" />
            <span
              className="font-display text-xl font-bold tracking-widest grad-text"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              MUNAY.PSY
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-body font-500 text-m-muted hover:text-m-text transition-colors tracking-wider uppercase cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/573145712545?text=Hola%20MUNAY%2C%20me%20interesa%20conocer%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
          >
            <WhatsAppIcon variant="default" /> WhatsApp
          </a>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform origin-center duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform origin-center duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#05050A]/98 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map(l => (
          <button
            key={l.href}
            onClick={() => scrollTo(l.href)}
            className="text-3xl font-display font-semibold text-white/80 hover:text-white transition-colors cursor-pointer tracking-widest"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {l.label}
          </button>
        ))}
        <a
          href="https://wa.me/573145712545"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 px-8 py-3 rounded-full bg-green-500 text-white font-semibold"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon variant="default" /> Contáctanos
        </a>
      </div>
    </>
  );
}
