import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';
import { GraduationCap, BadgeCheck, Shield, Network, Lock, BookOpen } from 'lucide-react';

export default function Education() {
  const { lang } = useLang();

  return (
    <section id="education" className="py-16 md:py-24 border-b border-border-subtle bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>{lang === 'es' ? 'Educación & Certificaciones' : 'Education & Certifications'}</SectionHeading>

        <div className="grid md:grid-cols-2 gap-16 mt-12">

          {/* Columna Académica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="flex items-center gap-3 text-xl font-bold mb-8 text-white">
              <GraduationCap className="text-brand" size={28} />
              {lang === 'es' ? 'Formación académica' : 'Academic Background'}
            </h3>

            <div className="space-y-0">
              {/* Item SISE */}
              <div className="flex gap-4 group">
                <div className="w-14 h-14 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                  <img src="/logo-sise.png" alt="SISE" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 pb-8 border-b border-border-subtle group-last:border-0">
                  <h4 className="text-white font-bold text-lg mb-1">
                    {lang === 'es' ? 'Redes y Seguridad Informática' : 'Networks & IT Security'}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Instituto Superior SISE</p>
                  <p className="text-gray-500 text-xs font-mono tracking-wide">2022 — 2025</p>
                </div>
              </div>

              {/* Item Ingles */}
              <div className="flex gap-4 group mt-6">
                <div className="w-14 h-14 rounded-lg bg-white/5 border border-border-subtle flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                  <img src="/logo-sise-2.png" alt="UAI" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 pb-8 border-b border-border-subtle group-last:border-0">
                  <h4 className="text-white font-bold text-lg mb-1">
                    {lang === 'es' ? 'Inglés (Intermedio)' : 'English (Intermediate)'}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Instituto Superior SISE</p>
                  <p className="text-gray-500 text-xs font-mono tracking-wide">2023 — 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Certificaciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="flex items-center gap-3 text-xl font-bold mb-8 text-white">
              <BadgeCheck className="text-brand" size={28} />
              {lang === 'es' ? 'Certificaciones' : 'Certifications'}
            </h3>

            <div className="space-y-4">

              {/* Cert Cisco */}
              <div className="p-5 rounded-xl bg-bg-card border border-blue-500/30 flex gap-5 hover:border-blue-500/60 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center shrink-0 overflow-hidden p-1">
                  <img src="/badge-cisco.png" alt="Cisco" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Cisco CyberOps Associate</h4>
                  <p className="text-blue-400/80 text-xs font-mono mb-2 tracking-wide">Cisco · Instituto Superior SISE</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {lang === 'es'
                      ? 'Conceptos de seguridad, monitoreo de redes, y análisis de respuesta a incidentes.'
                      : 'Security concepts, network monitoring, and incident response analysis.'}
                  </p>
                </div>
              </div>

              {/* Cert ISO 27001 */}
              <div className="p-5 rounded-xl bg-bg-card border border-brand/40 flex gap-5 hover:border-brand/70 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center shrink-0 overflow-hidden p-1">
                  <img src="/badge-iso.png" alt="ISO 27001" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Auditor Interno ISO 27001:2022</h4>
                  <p className="text-brand/80 text-xs font-mono mb-2 tracking-wide">I27001IA · vigente hasta feb. 2028</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {lang === 'es'
                      ? 'Gestión de riesgos, cumplimiento normativo y auditoría de SGSI.'
                      : 'Risk management, compliance, and ISMS auditing.'}
                  </p>
                </div>
              </div>

              {/* End of Certifications */}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
