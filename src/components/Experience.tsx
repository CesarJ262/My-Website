import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';
import { Calendar } from 'lucide-react';

export default function Experience() {
  const { lang } = useLang();

  const jobs = [
    {
      title: lang === 'es' ? 'Desarrollador de Soluciones IA' : 'AI Solutions Developer',
      company: 'Bioser LAB',
      date: lang === 'es' ? 'jul. 2025 — actualidad' : 'Jul 2025 — present',
      desc: lang === 'es'
        ? 'Implementé y personalicé modelos de lenguaje (LLMs) para la automatización de procesos internos y la mejora de la interacción con el usuario. Desarrollé y desplegué la infraestructura de la plataforma utilizando AWS Amplify, asegurando la disponibilidad y el rendimiento del sitio.'
        : 'Implemented and customized language models (LLMs) for internal process automation and user interaction improvement. Developed and deployed platform infrastructure using AWS Amplify, ensuring site availability and performance.',
      tags: ['LLMs', 'AWS Amplify', 'Automation', 'Cloud Infrastructure'],
      logo: '/logo-bioser.png'
    },
    {
      title: lang === 'es' ? 'Practicante en Seguridad Informática' : 'Cybersecurity Intern',
      date: lang === 'es' ? 'nov. 2024 — abr. 2025' : 'Nov 2024 — Apr 2025',
      desc: lang === 'es'
        ? 'Contribuí en la implementación de los marcos ISO 27001:2022 y SOC 2 Tipo 1, definiendo controles y políticas. Diseñé mejoras para una arquitectura segura en AWS (VPC, IAM, RDS, Lambda) y ejecuté análisis SAST para identificar y reportar vulnerabilidades, aplicando hardening.'
        : 'Contributed to ISO 27001:2022 and SOC 2 Type 1 framework implementation, defining controls and policies. Designed improvements for secure AWS architecture (VPC, IAM, RDS, Lambda) and executed SAST analysis to identify vulnerabilities, applying hardening recommendations.',
      tags: ['ISO 27001', 'SOC 2', 'AWS Security', 'SAST', 'Hardening'],
      logo: '/logo-adfly.png'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-32 border-b border-border-subtle bg-bg-main relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading>{lang === 'es' ? 'Experiencia Laboral' : 'Professional Experience'}</SectionHeading>

        <div className="relative mt-20">

          {/* Main vertical line */}
          <div className="absolute left-[20px] md:left-[240px] top-3 bottom-0 w-px bg-border-subtle"></div>

          <div className="space-y-24">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col md:flex-row md:items-start group"
              >

                {/* Date Column (Left side on md) */}
                <div className="md:w-[240px] shrink-0 pt-1.5 md:pr-12 flex items-center md:justify-start gap-3 mb-6 md:mb-0 ml-[48px] md:ml-0">
                  <Calendar size={14} className="text-gray-600 hidden md:block" />
                  <span className="text-gray-500 font-mono text-xs tracking-wider uppercase">{job.date}</span>
                </div>

                {/* Glowing Timeline Node */}
                <div className="absolute left-[15.5px] md:left-[235.5px] top-2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand ring-[6px] ring-bg-main shadow-[0_0_12px_rgba(16,185,129,0.8)] group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(16,185,129,1)] transition-all duration-300"></div>
                </div>

                {/* Content Column (Right side on md) */}
                <div className="flex-1 pl-[48px] md:pl-12">

                  {/* Company Logo & Name */}
                  <div className="flex items-center gap-4 mb-4">
                    {job.logo && (
                      <div className="h-6 flex items-center justify-center shrink-0">
                        <img src={job.logo} alt={job.company} className="h-full w-auto object-contain" />
                      </div>
                    )}
                    <span className="text-brand font-medium text-sm tracking-wide">{job.company}</span>
                  </div>

                  <h3 className="text-white font-bold text-2xl md:text-3xl mb-5 tracking-tight leading-tight transition-colors duration-300">
                    {job.title}
                  </h3>

                  {/* Job Description */}
                  <p className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-3xl">
                    {job.desc}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {job.tags.map(t => (
                      <span
                        key={t}
                        className="text-[11px] font-mono tracking-wider text-gray-400 bg-transparent border border-white/10 px-3.5 py-1.5 rounded-[4px] hover:border-brand/50 hover:text-brand transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
