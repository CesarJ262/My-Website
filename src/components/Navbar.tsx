// No icons in navbar
import { useLang } from '../LanguageContext';

export default function Navbar() {
  const { lang, toggleLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 w-full bg-bg-main/90 backdrop-blur-md border-b border-border-subtle z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-sans text-white">
          CesarJ262<span className="text-brand">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#summary" className="text-gray-400 hover:text-brand transition-colors text-sm">
            {lang === 'es' ? 'Perfil' : 'Profile'}
          </a>
          <a href="#experience" className="text-gray-400 hover:text-brand transition-colors text-sm">
            {lang === 'es' ? 'Experiencia' : 'Experience'}
          </a>
          <a href="#education" className="text-gray-400 hover:text-brand transition-colors text-sm">
            {lang === 'es' ? 'Educación' : 'Education'}
          </a>
          <a href="#skills" className="text-gray-400 hover:text-brand transition-colors text-sm">
            Skills
          </a>
          <a href="#projects" className="text-gray-400 hover:text-brand transition-colors text-sm">
            {lang === 'es' ? 'Proyectos' : 'Projects'}
          </a>
          <a href="#contact" className="text-gray-400 hover:text-brand transition-colors text-sm">
            {lang === 'es' ? 'Contacto' : 'Contact'}
          </a>
        </div>
        <div className="flex items-center gap-4 border-l border-border-subtle pl-4">
          <button onClick={toggleLang} className="flex items-center gap-2 border border-border-subtle rounded-md px-2 py-1 text-sm hover:border-brand transition-colors cursor-pointer text-white">
            {lang === 'es' ? '🇵🇪 ES' : '🇺🇸 EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
