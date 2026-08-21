import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function Summary() {
  const { lang } = useLang();

  return (
    <section id="summary" className="py-16 md:py-24 border-b border-border-subtle bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>{lang === 'es' ? 'Acerca de mí' : 'About me'}</SectionHeading>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-400 leading-relaxed text-lg mt-12"
        >
          {lang === 'es' ? (
            <>
              <p>
                Profesional en <span className="text-brand font-medium">Administración de Redes y Comunicaciones</span> con experiencia práctica en arquitectura de seguridad en la nube (AWS), análisis de vulnerabilidades, hardening de código fuente y cumplimiento normativo bajo marcos ISO 27001:2022 y SOC 2.
              </p>
              <p>
                Apasionado por la ciberseguridad, con conocimientos en Cloud Security, Pentesting, Auditoría y Normativas Internacionales.
              </p>
            </>
          ) : (
            <>
              <p>
                Professional in <span className="text-brand font-medium">Network and Communications Administration</span> with practical experience in cloud security architecture (AWS), vulnerability analysis, source code hardening, and regulatory compliance under ISO 27001:2022 and SOC 2 frameworks.
              </p>
              <p>
                Passionate about cybersecurity, with knowledge in Cloud Security, Pentesting, Auditing, and International Regulations.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
