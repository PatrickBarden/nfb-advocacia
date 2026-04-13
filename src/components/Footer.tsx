import { Shield } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-paper py-20 border-t border-ink/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://i.imgur.com/cK7O2SU.png" 
                alt="Logo Nossa empresa" 
                className="h-28 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-ink/60 text-sm max-w-sm leading-relaxed">
              Advocacia especializada em registro de marcas e proteção de propriedade intelectual para empresas que valorizam sua identidade.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/40 mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#home">Home</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#servicos">Serviços</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#especialidade">Especialidade</a></li>
              <li className="hover:text-gold cursor-pointer transition-colors"><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/40 mb-8">Localização</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>Ijuí — RS</li>
              <li>Atendimento Digital em todo o Brasil</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/40 mb-8">Contato</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-gold cursor-pointer transition-colors">
                <a href="https://wa.me/555599378426" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li className="hover:text-gold cursor-pointer transition-colors">
                <a href="https://www.facebook.com/nicobchuck/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li className="hover:text-gold cursor-pointer transition-colors">
                <a href="https://www.instagram.com/nicolasfb.adv/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-ink/5 gap-6">
          <div className="text-[10px] uppercase tracking-widest font-bold text-ink/30">
            © 2026 Nossa empresa. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-ink/30">
            <span className="hover:text-ink cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-ink cursor-pointer transition-colors">Termos de Serviço</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
