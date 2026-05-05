'use client';
import { useEffect, useRef } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  // ── Canvas partículas Three.js style (nativo Canvas) ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let W = 0, H = 0;

    const COLORS = ['#8B5CF6','#3B82F6','#06B6D4','#EC4899','#A78BFA','#60A5FA'];

    interface P {
      x: number; y: number; vx: number; vy: number;
      r: number; a: number; c: string;
      phase: number; phaseSpeed: number;
    }

    const NUM = window.innerWidth < 768 ? 70 : 160;
    let pts: P[] = [];

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const spawn = (): P => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.8 + .4,
      a: Math.random() * .6 + .15,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: .008 + Math.random() * .015,
    });

    const frame = () => {
      ctx.clearRect(0, 0, W, H);

      // Lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            ctx.save();
            ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 110) * .07})`;
            ctx.lineWidth = .5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Dots
      pts.forEach(p => {
        p.phase += p.phaseSpeed;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        const a = p.a * (.75 + .25 * Math.sin(p.phase));
        // Glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, p.c + Math.round(a * 80).toString(16).padStart(2,'0'));
        g.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + Math.round(a * 255).toString(16).padStart(2,'0');
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    };

    resize();
    pts = Array.from({ length: NUM }, spawn);
    frame();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  // ── GSAP headline reveal ──
  useEffect(() => {
    let gsap: typeof import('gsap').gsap;
    import('gsap').then(mod => {
      gsap = mod.gsap;
      if (!headRef.current) return;
      const words = headRef.current.querySelectorAll('.word');
      gsap.fromTo(words,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, stagger: .12, ease: 'power4.out', delay: .3 }
      );
      gsap.fromTo('.hero-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: .9, delay: 1, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: .7, delay: 1.4, stagger: .12, ease: 'power3.out' }
      );
    });
  }, []);

  const scrollDown = () =>
    document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Sección principal"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="hero-cta inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-700/40 bg-purple-900/20 text-xs font-semibold tracking-widest text-purple-300 uppercase mb-8">
          <span>✦</span> Sabiduría Ancestral × Bienestar Moderno
        </div>

        {/* Headline */}
        <h1
          ref={headRef}
          className="overflow-hidden font-display leading-tight mb-6"
          style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem,8vw,7rem)', fontWeight: 700 }}
          aria-label="Conecta tu Mente Ancestral con el Bienestar Moderno"
        >
          <span className="block overflow-hidden">
            <span className="word inline-block">Conecta&nbsp;tu</span>
          </span>
          <span className="block overflow-hidden">
            <span className="word grad-text inline-block">Mente&nbsp;Ancestral</span>
          </span>
          <span className="block overflow-hidden">
            <span className="word inline-block" style={{ color: '#06B6D4' }}>con el Bienestar</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-lg md:text-xl text-m-muted max-w-2xl mx-auto leading-relaxed mb-10 opacity-0">
          En MUNAY integramos adaptógenos, fermentos vivos y enteógenos naturales para
          nutrir tu cuerpo, clarificar tu mente y expandir tu espíritu. Una experiencia
          integral hacia una vida plenamente consciente.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/573145712545?text=Hola%20MUNAY%2C%20quiero%20empezar%20mi%20camino%20de%20bienestar"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta opacity-0 flex items-center gap-2 px-8 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold text-base transition-all hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1"
          >
            <WhatsAppIcon size={20} variant="default" /> Empieza tu Camino
          </a>
          <button
            onClick={() => document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-cta opacity-0 px-8 py-4 rounded-lg border border-purple-600/50 hover:border-purple-400 text-white font-semibold text-base transition-all hover:bg-purple-900/30 hover:-translate-y-1"
          >
            Ver Productos
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollDown}
          className="mt-16 flex flex-col items-center gap-2 text-xs text-m-muted/60 uppercase tracking-widest mx-auto hover:text-m-muted transition-colors"
          aria-label="Desliza hacia abajo"
        >
          <span>Desliza</span>
          <span className="inline-block animate-bounce text-purple-400 text-lg">↓</span>
        </button>
      </div>
    </section>
  );
}

