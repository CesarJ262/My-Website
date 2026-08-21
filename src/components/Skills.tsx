import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';
import { SiLinux, SiPython, SiWireshark, SiKalilinux } from 'react-icons/si';
import { FaWindows, FaAws } from 'react-icons/fa';
import { Terminal, ShieldAlert, FileCheck, Shield, Bug, Users, Globe, Crosshair, Flame, Search } from 'lucide-react';

const SkillBadge = ({ icon, text, colorClass }: { icon: React.ReactNode, text: string, colorClass: string }) => {
  // Extract base color name from the class string for the background opacity
  // colorClass will be like "border-orange-500/30 text-orange-400"
  // We'll just pass the full class string.
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-opacity-10 text-xs font-mono tracking-wide ${colorClass}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default function Skills() {
  const { lang } = useLang();

  const categories = [
    {
      title: lang === 'es' ? 'Seguridad Cloud' : 'Cloud Security',
      desc: lang === 'es' 
        ? 'Arquitectura segura, gestión de identidades y despliegues auditables en la nube.'
        : 'Secure architecture, identity management, and auditable cloud deployments.',
      tags: [
        { name: 'AWS VPC', icon: <FaAws size={14} />, color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' },
        { name: 'AWS IAM', icon: <FaAws size={14} />, color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' },
        { name: 'AWS Lambda', icon: <FaAws size={14} />, color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' },
        { name: 'AWS RDS', icon: <FaAws size={14} />, color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' }
      ]
    },
    {
      title: lang === 'es' ? 'Frameworks & Compliance' : 'Frameworks & Compliance',
      desc: lang === 'es'
        ? 'Definición de controles, poblaciones de auditoría y remediación técnica.'
        : 'Control definition, audit populations, and technical remediation.',
      tags: [
        { name: 'ISO/IEC 27001', icon: <FileCheck size={14} />, color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' },
        { name: 'SOC 2 Type II', icon: <FileCheck size={14} />, color: 'border-green-500/30 bg-green-500/10 text-green-400' },
        { name: 'OWASP Top 10', icon: <ShieldAlert size={14} />, color: 'border-red-500/30 bg-red-500/10 text-red-400' },
        { name: 'Mitre ATT&CK', icon: <Crosshair size={14} />, color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
        { name: 'NIST CSF', icon: <Shield size={14} />, color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' }
      ]
    },
    {
      title: lang === 'es' ? 'Sistemas & Infraestructura' : 'Systems & Infrastructure',
      desc: lang === 'es'
        ? 'Gestión de servidores, hardening y troubleshooting operativo.'
        : 'Server management, hardening, and operational troubleshooting.',
      tags: [
        { name: 'Kali Linux', icon: <SiKalilinux size={14} />, color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
        { name: 'Linux', icon: <SiLinux size={14} />, color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
        { name: 'Windows', icon: <FaWindows size={14} />, color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
        { name: 'Windows Server', icon: <FaWindows size={14} />, color: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400' }
      ]
    },
    {
      title: 'Scripting & Herramientas',
      desc: lang === 'es'
        ? 'Automatización de tareas, análisis de tráfico y explotación de vulnerabilidades.'
        : 'Task automation, traffic analysis, and vulnerability exploitation.',
      tags: [
        { name: 'Python', icon: <SiPython size={14} />, color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' },
        { name: 'Bash', icon: <Terminal size={14} />, color: 'border-green-500/30 bg-green-500/10 text-green-400' },
        { name: 'Wireshark', icon: <SiWireshark size={14} />, color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
        { name: 'Metasploit', icon: <Crosshair size={14} />, color: 'border-red-500/30 bg-red-500/10 text-red-400' },
        { name: 'Burpsuite', icon: <Flame size={14} />, color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' },
        { name: 'NMAP', icon: <Search size={14} />, color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' }
      ]
    },
    {
      title: lang === 'es' ? 'Técnicas Ofensivas & Defensivas' : 'Offensive & Defensive Techniques',
      desc: lang === 'es'
        ? 'Recolección de inteligencia, análisis de amenazas y pruebas de penetración.'
        : 'Intelligence gathering, threat analysis, and penetration testing.',
      tags: [
        { name: 'Hacking Ético', icon: <Terminal size={14} />, color: 'border-green-500/30 bg-green-500/10 text-green-400' },
        { name: 'OSINT', icon: <Globe size={14} />, color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
        { name: 'Ing. Social', icon: <Users size={14} />, color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' },
        { name: 'Vuln Analysis', icon: <Bug size={14} />, color: 'border-red-500/30 bg-red-500/10 text-red-400' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>{lang === 'es' ? 'Skills & Stack Tecnológico' : 'Skills & Tech Stack'}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-card border border-border-subtle rounded-xl p-8 hover:border-brand/30 transition-colors flex flex-col"
            >
              <h3 className="text-white font-bold text-lg mb-3">{cat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{cat.desc}</p>
              <div className="flex flex-wrap gap-3">
                {cat.tags.map(tag => (
                  <SkillBadge key={tag.name} icon={tag.icon} text={tag.name} colorClass={tag.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
