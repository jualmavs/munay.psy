'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const PILLARS = [
  { icon: '🌿', title: '100% Natural', desc: 'Ingredientes orgánicos de trazabilidad comprobada, libres de aditivos artificiales.' },
  { icon: '🔬', title: 'Ciencia Validada', desc: 'Fórmulas respaldadas por investigación moderna y miles de años de tradición ancestral.' },
  { icon: '✨', title: 'Visión Holística', desc: 'Cada producto trabaja en sinergia con tu cuerpo, mente y espíritu como un sistema unificado.' },
  { icon: '🌍', title: 'Origen Colombia', desc: 'Cultivados con amor en Colombia, honrando la biodiversidad y los saberes de nuestro territorio.' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const el = ref.current;
        if (!el) return;

        gsap.fromTo(el.querySelectorAll('.about-reveal'),
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: .9, stagger: .12, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          }
        );
        gsap.fromTo(el.querySelectorAll('.pillar'),
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: .7, stagger: .1, ease: 'power3.out',
            scrollTrigger: { trigger: '.pillars-grid', start: 'top 85%' },
          }
        );
      });
    });
  }, []);

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Sobre nosotros"
    >
      {/* BG accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="about-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-700/40 bg-purple-900/20 text-xs font-semibold tracking-widest text-purple-300 uppercase mb-6">
              <span>🌿</span> Quiénes Somos
            </div>

            <h2
              className="about-reveal font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Equilibrio Integral:<br />
              <span className="grad-text">Cuerpo, Mente<br />y Espíritu</span>
            </h2>

            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 about-reveal" />

            <p className="about-reveal text-m-muted text-lg leading-relaxed mb-5">
              En MUNAY nos inspira conectar la sabiduría ancestral con el bienestar moderno,
              equilibrando cuerpo, mente y espíritu para una vida plena y consciente.
            </p>
            <p className="about-reveal text-m-muted leading-relaxed mb-5">
              Creemos que la naturaleza contiene todo lo necesario para sanar y elevar la
              consciencia humana. Por eso trabajamos con hongos medicinales, fermentos vivos
              y enteógenos de origen ancestral, elaborados con rigor científico y amor por el territorio colombiano.
            </p>
            <p className="about-reveal text-m-muted leading-relaxed mb-8">
              Nuestra misión es acompañarte en un camino de autoconocimiento, salud integral
              y expansión de la consciencia, con productos que son tan honestos como la tierra
              que los produce.
            </p>

            <a
              href="https://wa.me/573145712545?text=Hola%20MUNAY%2C%20quiero%20saber%20m%C3%A1s%20sobre%20su%20filosofia"
              target="_blank"
              rel="noopener noreferrer"
              className="about-reveal inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-600/50 hover:border-purple-400 hover:bg-purple-900/30 text-white font-semibold transition-all"
            >
              Escríbenos 
              <span className="ml-1">📩</span>
            </a>
          </div>

          {/* Right */}
          <div>
            {/* Logo display */}
            <div className="about-reveal flex justify-center mb-12">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl animate-glow"
                  style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <Image
                  src="/images/logo.png"
                  alt="MUNAY Logo"
                  width={220}
                  height={220}
                  className="relative z-10 animate-float rounded-2xl"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
            </div>

            {/* Pillars */}
            <div className="pillars-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map(p => (
                <div
                  key={p.title}
                  className="pillar glass rounded-xl p-5 hover:border-purple-500/40 transition-all hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{p.title}</h3>
                  <p className="text-xs text-m-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
