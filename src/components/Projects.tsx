import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

export default function Projects() {
  const { lang } = useLang();

  const projects = [
    {
      title: lang === 'es' ? 'Auditoría Cloud AWS' : 'AWS Cloud Audit',
      desc: lang === 'es' ? 'Evaluación de seguridad y hardening de arquitectura serverless en AWS aplicando controles CIS.' : 'Security assessment and hardening of serverless architecture in AWS applying CIS controls.',
      tags: ['AWS', 'IAM', 'Security'],
      link: '#',
      github: '#'
    },
    {
      title: lang === 'es' ? 'Análisis de Vulnerabilidades' : 'Vulnerability Assessment',
      desc: lang === 'es' ? 'Reporte detallado de vulnerabilidades en aplicación web utilizando OWASP Top 10 y metodologías estándar.' : 'Detailed vulnerability report on a web application using OWASP Top 10 and standard methodologies.',
      tags: ['OWASP', 'BurpSuite', 'Pentesting'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border-subtle bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>{lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-xl p-8 group hover:border-brand/30 transition-colors flex flex-col"
            >
              <h3 className="text-white font-bold text-xl mb-4 group-hover:text-brand transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map(t => (
                  <span key={t} className="text-xs font-mono tracking-wide text-gray-400 bg-white/5 border border-border-subtle px-3 py-1.5 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <a href={p.github} className="text-gray-400 hover:text-white transition-colors" aria-label="Github repository">
                  <FiGithub size={22} />
                </a>
                <a href={p.link} className="text-gray-400 hover:text-white transition-colors" aria-label="Live project link">
                  <ExternalLink size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
