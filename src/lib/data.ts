export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDesc: string;
  price: string;
  unit: string;
  benefits: string[];
  image: string;
  placeholder: string;
  accent: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'melena-de-leon',
    name: 'Melena de León',
    category: 'Adaptógeno Premium',
    description: 'Hongo medicinal milenario que estimula el Factor de Crecimiento Nervioso (NGF), mejora la memoria, reduce la ansiedad y potencia tu claridad mental cada día.',
    longDesc: 'El Hericium erinaceus —conocido como Melena de León— es el hongo más estudiado por la neurociencia moderna. Nuestras cápsulas contienen 200 mg de cuerpo fructífero puro, sin rellenos ni aditivos. Estimula la síntesis de NGF y BDNF para una neurogénesis real.',
    price: '$85.000',
    unit: '60 cápsulas · 200 mg',
    benefits: ['Neurogénesis · NGF', 'Claridad mental', 'Anti-ansiedad', 'Memoria largo plazo'],
    image: '/images/products/enteogenos.png',
    placeholder: '🧠',
    accent: '#8B5CF6',
    featured: true,
  },
  {
    id: 'kombucha',
    name: 'Kombucha MUNAY',
    category: 'Fermento Vivo',
    description: 'Bebida fermentada viva rica en probióticos, enzimas y ácidos orgánicos. Revitaliza tu microbioma, mejora la digestión y eleva tu energía de forma natural.',
    longDesc: 'Elaborada con té orgánico, SCOBY activo y azúcar de caña sin refinar. Cada botella contiene millones de bacterias benéficas vivas. Sabor Jamaica disponible.',
    price: '$18.000',
    unit: '350 ml · Sabor Jamaica',
    benefits: ['Probióticos vivos', 'Salud digestiva', 'Energía natural', 'Detox suave'],
    image: '/images/products/kombucha.png',
    placeholder: '🍶',
    accent: '#06B6D4',
  },
  {
    id: 'orellana',
    name: 'Orellana',
    category: 'Comestible Gourmet',
    description: 'Hongo Pleurotus en presentaciones gourmet: antipasto, ceviche y mermeladas. Proteína completa, lovastatina natural y propiedades antioxidantes excepcionales.',
    longDesc: 'Las orellanas (Pleurotus ostreatus) son una fuente de proteína vegetal completa con los 9 aminoácidos esenciales. Contienen lovastatina, un compuesto que apoya la salud cardiovascular. Disponibles en 3 presentaciones artesanales.',
    price: '$25.000',
    unit: 'Antipasto · Ceviche · Mermelada',
    benefits: ['Proteína completa', 'Lovastatina natural', 'Antioxidante', 'Versátil'],
    image: '/images/products/kombucha.png',
    placeholder: '🍄',
    accent: '#10B981',
  },
  {
    id: 'miel-ceremonial',
    name: 'Miel Ceremonial',
    category: 'Enteógeno · Miel',
    description: 'Miel de Apis mellifera 100% natural con enteógenos de origen ancestral. Disponible en tres rituales según la profundidad de experiencia que buscas.',
    longDesc: 'Una fusión sagrada de miel pura colombiana y enteógenos seleccionados. Cada presentación está calibrada para distintos niveles de exploración interior. Usada en rituales de sanación durante siglos.',
    price: 'Desde $60.000',
    unit: 'Ritual Breve 2g · Medio 3.6g · Profundo 5g',
    benefits: ['Ritual Breve · 2 g', 'Ritual Medio · 3,6 g', 'Ritual Profundo · 5 g', 'Origen ancestral'],
    image: '/images/products/miel.png',
    placeholder: '🍯',
    accent: '#F59E0B',
  },
  {
    id: 'enteogenos-capsulas',
    name: 'Enteógenos Cápsulas',
    category: 'Enteógeno · Cápsulas',
    description: 'Tu ritual cada tres días. Compuestos naturales que favorecen conexiones neuronales y bienestar emocional. Investigados por la ciencia moderna para depresión y ansiedad.',
    longDesc: 'Formuladas para protocolos de microdosificación integrativa. Cada cápsula contiene extracto estandarizado de origen natural, envasada bajo condiciones controladas. Resultados acumulativos desde la tercera semana.',
    price: '$90.000',
    unit: 'Por protocolo · Ritual cada 3 días',
    benefits: ['Conexiones neuronales', 'Ritual cada 3 días', 'Bienestar emocional', 'Protocolo integrativo'],
    image: '/images/products/enteogenos.png',
    placeholder: '✨',
    accent: '#EC4899',
  },
  {
    id: 'kit-neuro-fungi',
    name: 'Kit Neuro Fungi',
    category: 'Sinergia Completa',
    description: 'La combinación definitiva: adaptógenos más enteógenos en sinergia para neurogénesis completa. El protocolo integral de bienestar MUNAY en un solo kit.',
    longDesc: 'Diseñado para quienes buscan la experiencia total de bienestar MUNAY. El Kit incluye Melena de León + Enteógenos en Cápsulas + guía de uso. El efecto sinérgico supera los resultados individuales de cada producto.',
    price: '$160.000',
    unit: 'Kit completo · Guía incluida',
    benefits: ['Sinergia adaptógeno+enteógeno', 'Neurogénesis completa', 'Guía de protocolo', 'Máximo bienestar'],
    image: '/images/products/enteogenos.png',
    placeholder: '🧬',
    accent: '#8B5CF6',
  },
];

export const TESTIMONIALS = [
  {
    name: 'María Camila G.',
    role: 'Instructora de Yoga · Bogotá',
    text: 'La Melena de León transformó mi práctica. Mi mente está más clara, mis meditaciones son más profundas y el estrés cotidiano ya no me controla como antes. MUNAY es auténtico.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Andrés F.',
    role: 'Empresario · Medellín',
    text: 'Llevo tres meses con el Kit Neuro Fungi y los resultados son reales. Mejor enfoque, más energía sostenida y sin los bajones de la tarde. Mis socios también lo usan ya.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Sofía L.',
    role: 'Psicóloga Clínica · Cali',
    text: 'Como profesional de salud mental, soy escéptica. Pero los estudios sobre Hericium son sólidos y los productos MUNAY son de calidad real. Los recomiendo a mis pacientes con confianza.',
    rating: 5,
    initial: 'S',
  },
  {
    name: 'Daniel R.',
    role: 'Artista · Cartagena',
    text: 'La Miel Ceremonial abrió puertas de percepción que no sabía que existían. Una experiencia guiada, profunda y completamente segura. Gracias MUNAY por la autenticidad.',
    rating: 5,
    initial: 'D',
  },
  {
    name: 'Valentina M.',
    role: 'Chef · Bucaramanga',
    text: 'La Kombucha y las orellanas de MUNAY se convirtieron en protagonistas de mi cocina. Sabor excepcional, calidad gourmet y los beneficios nutricionales que buscaba para mis clientes.',
    rating: 5,
    initial: 'V',
  },
];
