import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-40 overflow-hidden bg-black">
      <motion.div 
        style={{ y, backgroundImage: 'url(https://i.imgur.com/924LDC7.png)' }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      ></motion.div>
      
      {/* Black Overlay with reduced intensity */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      {/* Stronger gradient to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold">Proteção de Marcas de Elite</span>
            </motion.div>

            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.85] mb-8 tracking-tighter text-ink overflow-hidden"
            >
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="block"
              >
                Blindando
              </motion.span>
              <motion.span 
                initial={{ y: "100%", opacity: 0, skewX: -20 }}
                animate={{ y: 0, opacity: 1, skewX: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="italic text-gold inline-block"
              >
                Legados.
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg text-ink/80 max-w-md leading-relaxed mb-10 font-light"
            >
              Oferecemos proteção jurídica estratégica para empresas que buscam consolidar sua identidade no mercado através do registro de marca.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-6"
            >
              <motion.a 
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/555599378426" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gold text-paper text-xs uppercase tracking-widest font-bold hover:shadow-[0_0_20px_rgba(212,175,85,0.3)] transition-all duration-300"
              >
                Registrar Minha Marca
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border border-gold/30 text-xs uppercase tracking-widest font-bold text-ink hover:bg-gold hover:text-paper transition-all duration-300"
              >
                Ver Serviços
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] -z-10"
      ></motion.div>
    </section>
  );
}
