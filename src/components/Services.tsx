import { motion } from "motion/react";
import { ShieldCheck, Scale, FileText, Globe } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Proteção de Marcas",
    description: "Registro abrangente e fiscalização dos ativos mais valiosos da sua marca em jurisdições globais."
  },
  {
    icon: Scale,
    title: "Contencioso de PI",
    description: "Representação jurídica especializada em disputas de propriedade intelectual de alto risco e casos de infração."
  },
  {
    icon: FileText,
    title: "Gestão de Portfólio",
    description: "Auditoria estratégica e gestão de portfólios de marcas e direitos autorais em larga escala para corporações multinacionais."
  },
  {
    icon: Globe,
    title: "Licenciamento Global",
    description: "Estruturação e negociação de acordos complexos de licenciamento para maximizar o valor da sua propriedade intelectual."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold mb-6 block">Nossa Especialidade</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Soluções Jurídicas <br />
              <span className="italic text-gold">de Elite.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-paper/60 max-w-sm text-sm leading-relaxed mb-4"
          >
            Combinamos a excelência jurídica tradicional com insights estratégicos modernos para fornecer uma fortaleza de proteção para sua marca.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 border border-paper/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                backgroundColor: "rgba(212, 175, 55, 0.05)",
                y: -5
              }}
              className="bg-ink p-10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-700"></div>
              <service.icon className="w-10 h-10 text-gold mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
              <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-sm text-paper/50 leading-relaxed group-hover:text-paper/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
