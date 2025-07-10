import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Experience } from '@/components/Experience';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        {/* Skills component: Ensure unique keys for elements being mapped.
             Also, make sure you are rendering valid React children (strings, numbers, or React elements).
             If you are trying to render an object, convert it to a string first using JSON.stringify(). */}
        <Skills />
        <Projects />
        {/* Experience component: Make sure the data being mapped is a valid array and not undefined.
             Add a conditional check before mapping or initialize the array with an empty array. */}
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;