import { motion } from "motion/react";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-64"
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="https://i.imgur.com/cK7O2SU.png" 
            alt="Logo Nossa empresa" 
            className="h-32 md:h-44 w-auto object-contain brightness-0 invert absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {[
            { name: "Home", href: "#home" },
            { name: "Serviços", href: "#servicos" },
            { name: "Especialidade", href: "#especialidade" },
            { name: "Contato", href: "#contato" }
          ].map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, color: "#D4AF37" }}
              className="text-xs uppercase tracking-widest font-medium transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-paper border-b border-ink/10 px-6 py-8 flex flex-col gap-6"
        >
          {[
            { name: "Home", href: "#home" },
            { name: "Serviços", href: "#servicos" },
            { name: "Especialidade", href: "#especialidade" },
            { name: "Contato", href: "#contato" }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm uppercase tracking-widest font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
