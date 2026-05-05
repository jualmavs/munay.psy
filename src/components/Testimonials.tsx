'use client';
import { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(ref.current.querySelectorAll('.t-card'),
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%' },
          }
        );
      });
    });
  }, []);

  const ACCENT_COLORS = ['#8B5CF6','#3B82F6','#06B6D4','#EC4899','#F59E0B'];

  return (
    <section
      id="testimonios"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Testimonios de clientes"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-700/40 bg-pink-900/20 text-xs font-semibold tracking-widest text-pink-300 uppercase mb-6">
            <span>💬</span> Testimonios
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Lo que dicen nuestros{' '}
            <span className="grad-text">clientes</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="t-card glass rounded-2xl p-6 flex flex-col gap-4 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.rating} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    width="16" height="16"
                    viewBox="0 0 24 24"
                    fill={s < t.rating ? '#F59E0B' : 'rgba(255,255,255,0.15)'}
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-m-muted text-sm leading-relaxed flex-1">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${ACCENT_COLORS[i % ACCENT_COLORS.length]}, #3B82F6)` }}
                  aria-hidden="true"
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-m-muted">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="text-center mt-14">
          <p className="text-m-muted mb-6">¿Listo para transformar tu bienestar?</p>
          <a
            href="https://wa.me/573145712545?text=Hola%20MUNAY%2C%20quiero%20empezar%20mi%20camino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1"
          >
            Empieza hoy mismo →
          </a>
        </div>
      </div>
    </section>
  );
}
