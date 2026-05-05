export const dynamic = 'force-dynamic';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Carousel from '@/components/Carousel';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialFloat from '@/components/SocialFloat';

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Carousel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <SocialFloat />
    </>
  );
}
