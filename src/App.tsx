/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-paper">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* Additional Section: O Processo */}
        <section id="especialidade" className="py-32 bg-paper relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  {/* Decorative Frame */}
                  <div className="absolute -top-6 -left-6 w-full h-full border border-gold/30 -z-10"></div>
                  <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-gold/5 -z-10"></div>
                  
                  <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                    <img 
                      src="https://i.imgur.com/JE6C12R.png" 
                      alt="Processo de Registro de Marca" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Artistic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-60"></div>
                    <div className="absolute inset-0 border-[20px] border-paper/10 pointer-events-none"></div>
                  </div>

                  {/* Floating Detail */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 -left-10 bg-gold p-6 hidden md:block shadow-xl"
                  >
                    <div className="text-paper font-serif text-4xl mb-1">01.</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-paper/60">Fase de Análise</div>
                  </motion.div>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-6 block">O Processo</span>
                  <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                    Segurança em cada <br />
                    <span className="italic text-gold">Etapa.</span>
                  </h2>
                  <p className="text-ink/70 leading-relaxed mb-10 font-light text-lg">
                    O registro de marca é o alicerce de qualquer empresa de sucesso. Nossa empresa conduz todo o processo junto ao INPI, garantindo que sua identidade comercial esteja juridicamente protegida contra terceiros.
                  </p>
                  <div className="space-y-6 mb-12">
                    {[
                      "Pesquisa de viabilidade técnica",
                      "Protocolo imediato no INPI",
                      "Acompanhamento jurídico semanal"
                    ].map((step, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.2) }}
                        className="flex items-center gap-4 group"
                      >
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: 32 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.8 + (i * 0.2) }}
                          className="h-px bg-gold/50 group-hover:bg-gold transition-colors"
                        ></motion.div>
                        <span className="text-xs uppercase tracking-widest text-ink/80 group-hover:text-ink transition-colors">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                  <a 
                    href="https://wa.me/555599378426" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-gold pb-2 hover:text-gold transition-all hover:translate-x-2"
                  >
                    Iniciar Registro Agora
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contato" className="py-40 bg-ink text-paper text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif mb-12 leading-tight"
            >
              Pronto para Garantir seu <br />
              <span className="italic text-gold">Patrimônio Digital?</span>
            </motion.h2>
            <motion.a 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://wa.me/555599378426" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-16 py-6 bg-gold text-ink text-sm uppercase tracking-[0.4em] font-black hover:bg-paper transition-all duration-500 shadow-2xl"
            >
              Falar com nossa empresa
            </motion.a>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-paper/5 whitespace-nowrap pointer-events-none uppercase tracking-tighter">
            Registro de Marcas
          </div>
        </section>
      </main>
      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, backgroundColor: "#D4AF37" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 bg-ink text-gold border border-gold/30 rounded-full z-50 shadow-2xl transition-colors"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
