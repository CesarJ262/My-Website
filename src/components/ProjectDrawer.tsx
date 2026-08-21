import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaAws } from 'react-icons/fa';
import { useLang } from '../LanguageContext';

export interface ProjectData {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
  github?: string;
  date: string;
  stars: number;
  forks: number;
  details: {
    problem: string;
    architecture: string;
    security: string;
  };
}

interface ProjectDrawerProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const getTagIcon = (tag: string, size: number = 14) => {
  const awsServices = ['vpc', 'iam', 'rds', 'lambda', 'waf', 'cloudfront', 'eventbridge', 'guardduty', 'cognito', 'kms', 'macie', 's3'];

  if (awsServices.includes(tag.toLowerCase())) {
    return <FaAws size={size} />;
  }

  switch (tag.toLowerCase()) {
    case 'sast': return <Search size={size} />;
    case 'github': return <FiGithub size={size} />;
    default: return null;
  }
};

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const { lang } = useLang();

  // Bloquear el scroll del body cuando el drawer está abierto
  if (project) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] xl:w-[700px] bg-bg-main border-l border-border-subtle shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8 md:p-12 relative min-h-full flex flex-col">

              {/* Header */}
              <div className="flex justify-end mb-8 md:mb-12">
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-border-subtle flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Cerrar panel"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Title & Desc */}
              <div className="text-brand font-mono text-sm tracking-wide mb-3">./project</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                {project.title}
              </h2>
              <p className="text-gray-300 text-[17px] leading-relaxed mb-8">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-16">
                {project.tags.map(t => (
                  <span key={t} className="text-sm font-mono tracking-wide text-gray-300 bg-transparent border border-white/10 px-4 py-2 rounded-lg cursor-default flex items-center gap-2">
                    {getTagIcon(t, 16)}
                    {t}
                  </span>
                ))}
              </div>

              {/* Structured Details */}
              <div className="space-y-12 flex-grow">

                {/* 01 PROBLEMA */}
                <div>
                  <div className="text-brand font-mono text-[13px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <span className="opacity-80">01 /</span> {lang === 'es' ? 'PROBLEMA' : 'PROBLEM'}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {project.details.problem}
                  </p>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* 02 ARQUITECTURA */}
                <div>
                  <div className="text-brand font-mono text-[13px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <span className="opacity-80">02 /</span> {lang === 'es' ? 'ARQUITECTURA' : 'ARCHITECTURE'}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {project.details.architecture}
                  </p>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* 03 SEGURIDAD */}
                <div>
                  <div className="text-brand font-mono text-[13px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                    <span className="opacity-80">03 /</span> {lang === 'es' ? 'DECISIONES DE SEGURIDAD' : 'SECURITY DECISIONS'}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {project.details.security}
                  </p>
                </div>

              </div>

              {/* Action */}
              <div className="mt-16 pt-8 border-t border-border-subtle pb-8 md:pb-0">
                <a
                  href={project.github || project.link || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-border-subtle text-white font-medium hover:bg-white/10 hover:border-gray-500 transition-all"
                >
                  <FiGithub size={18} />
                  {lang === 'es' ? 'Abrir repositorio' : 'Open repository'}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
