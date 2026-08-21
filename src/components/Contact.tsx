import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const { lang } = useLang();

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading>{lang === 'es' ? 'Contacto Profesional' : 'Professional Contact'}</SectionHeading>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto mt-12">
            {lang === 'es' 
              ? 'Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, ¡intentaré responderte lo antes posible!' 
              : 'I am currently open to new opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you!'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:cesar.jacay02062002@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand/10 text-brand border border-brand/30 rounded-md hover:bg-brand/20 transition-colors">
              <Mail size={20} />
              {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
            </a>
            <a href="https://linkedin.com/in/cesar-jacay" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-bg-card text-white border border-border-subtle rounded-md hover:border-gray-500 transition-colors">
              <FiLinkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/CesarJ262" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-bg-card text-white border border-border-subtle rounded-md hover:border-gray-500 transition-colors">
              <FiGithub size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
