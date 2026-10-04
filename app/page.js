import Overlays from '@/components/Overlays';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Token from '@/components/Token';
import About from '@/components/About';
import City from '@/components/City';
import Roadmap from '@/components/Roadmap';
import Lore from '@/components/Lore';
import Join from '@/components/Join';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export default function Home() {
  return (
    <>
      <Overlays />
      <Nav />
      <main>
        <Hero />
        <Token />
        <About />
        <City />
        <Roadmap />
        <Lore />
        <Join />
      </main>
      <Footer />
      <Effects />
    </>
  );
}
