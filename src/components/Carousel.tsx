'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import WhatsAppIcon from './WhatsAppIcon';
import { PRODUCTS } from '@/lib/data';

export default function Carousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const total = PRODUCTS.length;

  const goTo = (i: number) => {
    const next = (i + total) % total;
    setActive(next);
  };

  // GSAP reveal
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.fromTo(sectionRef.current.querySelectorAll('.carousel-reveal'),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: .8, stagger: .1, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        );
      });
    });
  }, []);

  // Animate slide change
  useEffect(() => {
    if (!trackRef.current) return;
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(trackRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: .5, ease: 'power3.out' }
      );
    });
  }, [active]);

  const product = PRODUCTS[active];

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Catálogo de productos"
      style={{ background: 'linear-gradient(180deg, #05050A 0%, #0A0A14 50%, #05050A 100%)' }}
    >
      {/* BG */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 carousel-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-700/40 bg-blue-900/20 text-xs font-semibold tracking-widest text-blue-300 uppercase mb-6">
            <span>🌿</span> Catálogo Completo
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Nuestros <span className="grad-text">Productos Naturales</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-5" />
        </div>

        {/* Slide counter */}
        <div className="carousel-reveal flex items-center justify-center gap-3 mb-10">
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Producto ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-8 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Main slide */}
        <div ref={trackRef} className="carousel-reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass">
            <div
              className="absolute inset-0"
              style={{ background: `radial-gradient(circle at 50% 50%, ${product.accent}20 0%, transparent 60%)` }}
              aria-hidden="true"
            />
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <span className="text-7xl">{product.placeholder}</span>
                <span className="text-xs tracking-widest text-m-muted uppercase">{product.category}</span>
              </div>
            )}

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ borderColor: product.accent + '60', color: product.accent, background: product.accent + '18' }}
              >
                {product.category}
              </span>
            </div>

            {/* Featured badge */}
            {product.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                  ⭐ Bestseller
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 py-4">
            <div>
              <p className="text-m-muted text-sm uppercase tracking-widest mb-2">{product.category}</p>
              <h3
                className="font-display text-4xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {product.name}
              </h3>
            </div>

            <p className="text-m-muted leading-relaxed">{product.longDesc}</p>

            {/* Benefits */}
            <ul className="grid grid-cols-2 gap-2">
              {product.benefits.map(b => (
                <li key={b} className="flex items-center gap-2 text-sm text-m-muted">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${product.accent}, #3B82F6)` }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Unit info */}
            <p className="text-xs text-m-muted/70 border-t border-white/5 pt-4">
              📦 {product.unit}
            </p>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div>
                <p className="text-xs text-m-muted uppercase tracking-wider mb-1">Precio</p>
                <p
                  className="text-3xl font-display font-bold"
                  style={{ fontFamily: 'var(--font-cormorant)', color: product.accent }}
                >
                  {product.price}
                </p>
              </div>
              <a
                href={`https://wa.me/573145712545?text=Hola%20MUNAY%2C%20quiero%20pedir%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <WhatsAppIcon width={18} height={18} variant="default" /> Pedir ahora
              </a>
            </div>
          </div>
        </div>

        {/* Nav buttons */}
        <div className="carousel-reveal flex items-center justify-between mt-10">
          <button
            onClick={() => goTo(active - 1)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:border-purple-500/50 transition-all hover:-translate-x-1"
            aria-label="Producto anterior"
          >
            ←
          </button>

          <span className="text-m-muted text-sm">
            {active + 1} / {total}
          </span>

          <button
            onClick={() => goTo(active + 1)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:border-purple-500/50 transition-all hover:translate-x-1"
            aria-label="Producto siguiente"
          >
            →
          </button>
        </div>

        {/* Thumbnail row */}
        <div className="carousel-reveal flex gap-3 justify-center mt-8 flex-wrap">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-label={`Ver ${p.name}`}
              className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all hover:scale-110 ${
                i === active ? 'border-purple-500 scale-110' : 'border-white/10'
              }`}
            >
              <Image
                src={p.image || '/images/logo.png'}
                alt={p.name}
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

