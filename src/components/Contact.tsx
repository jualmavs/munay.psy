'use client';
import { useEffect, useRef, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  producto: string;
  mensaje: string;
}

const SOCIAL = [
  {
    label: 'WhatsApp',
    handle: '+57 314 571 2545',
    url: 'https://wa.me/573145712545',
    bg: '#25D366',
    icon: (
      <WhatsAppIcon width={22} height={22} variant="default" />
    ),
  },
  {
    label: 'Instagram',
    handle: '@munay.psy',
    url: 'https://www.instagram.com/munay.psy/?hl=es',
    bg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    icon: (
      <svg width="22" height="22" fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    handle: 'MUNAY.PSY',
    url: 'https://www.facebook.com/profile.php?id=61573611705858',
    bg: '#1877F2',
    icon: (
      <svg width="22" height="22" fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'munaynature24@gmail.com',
    url: 'mailto:munaynature24@gmail.com',
    bg: 'linear-gradient(135deg,#8B5CF6,#3B82F6)',
    icon: (
      <svg width="22" height="22" fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormData>({ nombre: '', email: '', telefono: '', producto: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!ref.current) return;
        gsap.fromTo(ref.current.querySelectorAll('.c-reveal'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
      });
    });
  }, []);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola MUNAY 👋`,
      ``,
      `Soy *${form.nombre}*`,
      form.email    ? `📧 Email: ${form.email}` : '',
      form.telefono ? `📱 Teléfono: ${form.telefono}` : '',
      form.producto ? `🌿 Producto de interés: *${form.producto}*` : '',
      ``,
      `💬 Mensaje:`,
      form.mensaje,
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/573145712545?text=${encodeURIComponent(lines)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls = 'w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 text-white placeholder:text-m-muted/50 text-sm transition-all';

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
      aria-label="Formulario de contacto"
      style={{ background: 'linear-gradient(180deg,#05050A 0%,#0A0A14 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 c-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-700/40 bg-cyan-900/20 text-xs font-semibold tracking-widest text-cyan-300 uppercase mb-6">
            <span>📩</span> Contacto
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            ¿Listo para tu{' '}
            <span className="grad-text">transformación?</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-5" />
          <p className="mt-4 text-m-muted max-w-xl mx-auto">
            Completa el formulario y te respondemos directamente por WhatsApp con toda la información que necesitas.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Formulario ── */}
          <div className="c-reveal glass rounded-2xl p-8">
            <h3
              className="font-display text-2xl font-semibold mb-1"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Envíanos un mensaje
            </h3>
            <p className="text-m-muted text-sm mb-6">
              Al enviar, se abrirá WhatsApp con tu mensaje prediligenciado.
            </p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-nombre" className="block text-xs font-semibold tracking-wider text-m-muted mb-1.5">
                    Nombre *
                  </label>
                  <input
                    id="c-nombre" type="text" required
                    placeholder="Tu nombre completo"
                    value={form.nombre} onChange={set('nombre')}
                    className={inputCls}
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-semibold tracking-wider text-m-muted mb-1.5">
                    Email *
                  </label>
                  <input
                    id="c-email" type="email" required
                    placeholder="tu@email.com"
                    value={form.email} onChange={set('email')}
                    className={inputCls}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-telefono" className="block text-xs font-semibold tracking-wider text-m-muted mb-1.5">
                  Teléfono
                </label>
                <input
                  id="c-telefono" type="tel"
                  placeholder="+57 3XX XXX XXXX"
                  value={form.telefono} onChange={set('telefono')}
                  className={inputCls}
                  autoComplete="tel"
                />
              </div>

              <div>
                <label htmlFor="c-producto" className="block text-xs font-semibold tracking-wider text-m-muted mb-1.5">
                  Producto de interés
                </label>
                <select
                  id="c-producto"
                  value={form.producto} onChange={set('producto')}
                  className={inputCls + ' cursor-pointer'}
                >
                  <option value="">— Seleccionar —</option>
                  <option>Melena de León (Cápsulas)</option>
                  <option>Kombucha MUNAY</option>
                  <option>Orellana</option>
                  <option>Miel Ceremonial Enteógenos</option>
                  <option>Enteógenos en Cápsulas</option>
                  <option>Kit Neuro Fungi</option>
                  <option>Información general</option>
                </select>
              </div>

              <div>
                <label htmlFor="c-mensaje" className="block text-xs font-semibold tracking-wider text-m-muted mb-1.5">
                  Mensaje *
                </label>
                <textarea
                  id="c-mensaje" required rows={4}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  value={form.mensaje} onChange={set('mensaje')}
                  className={inputCls + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
              >
                <WhatsAppIcon width={20} height={20} variant="default" />
                {sent ? '¡Mensaje enviado! ✓' : 'Enviar por WhatsApp'}
              </button>

              <p className="text-xs text-m-muted/60 flex items-center gap-1.5">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                Sin spam. Solo te contactaremos con la información solicitada.
              </p>
            </form>
          </div>

          {/* ── Panel de redes y contacto ── */}
          <div className="c-reveal flex flex-col gap-6">
            <div>
              <h3
                className="font-display text-2xl font-semibold mb-2"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Contáctanos directamente
              </h3>
              <p className="text-m-muted text-sm">
                Estamos aquí para acompañarte. Escríbenos o síguenos en nuestras redes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:border-purple-500/40 hover:-translate-x-1 transition-all group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ background: s.bg }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors">
                      {s.label}
                    </p>
                    <p className="text-xs text-m-muted">{s.handle}</p>
                  </div>
                  <span className="ml-auto text-m-muted/40 group-hover:text-purple-400 transition-colors">→</span>
                </a>
              ))}
            </div>

            {/* Info box */}
            <div className="glass rounded-xl p-6 border border-purple-900/30">
              <p
                className="font-display text-lg font-semibold mb-2 grad-text"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                "Equilibrio integral: cuerpo, mente y espíritu para una vida plena y consciente"
              </p>
              <p className="text-xs text-m-muted/70">— MUNAY.PSY Filosofía</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
