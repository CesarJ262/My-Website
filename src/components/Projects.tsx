import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';
import { ExternalLink, Calendar, ChevronRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import ProjectDrawer, { type ProjectData, getTagIcon } from './ProjectDrawer';

export default function Projects() {
  const { lang } = useLang();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: 'AWS Security Architecture',
      desc: lang === 'es'
        ? 'Diseño e implementación de arquitectura segura en AWS usando VPC, IAM, RDS y Lambda con políticas de acceso de mínimo privilegio.'
        : 'Design and implementation of a secure AWS architecture using VPC, IAM, RDS, and Lambda with strict least privilege access policies.',
      tags: ['VPC', 'IAM', 'RDS', 'Lambda', 'Cloud Security'],
      date: lang === 'es' ? 'Actualizado 12 de jun de 2026' : 'Updated Jun 12, 2026',
      stars: 12,
      forks: 3,
      details: {
        problem: lang === 'es'
          ? 'Las infraestructuras en la nube por defecto a menudo carecen del aislamiento de red adecuado, exponiendo recursos sensibles como bases de datos a internet, lo que facilita el acceso no autorizado y las brechas de datos.'
          : 'Default cloud infrastructures often lack proper network isolation, exposing sensitive resources like databases to the internet, facilitating unauthorized access and data breaches.',
        architecture: lang === 'es'
          ? 'Diseñada en AWS utilizando una Virtual Private Cloud (VPC) con subredes públicas y privadas. Los recursos computacionales residen en subredes privadas comunicándose con bases de datos RDS completamente aisladas.'
          : 'Designed in AWS using a Virtual Private Cloud (VPC) with public and private subnets. Computational resources reside in private subnets communicating with completely isolated RDS databases.',
        security: lang === 'es'
          ? 'Se implementó el principio de mínimo privilegio estricto a través de políticas IAM restrictivas. No hay IPs públicas asignadas a recursos críticos, dependiendo exclusivamente de NAT Gateways y VPC Endpoints.'
          : 'Strict least privilege principle implemented via restrictive IAM policies. No public IPs assigned to critical resources, relying exclusively on NAT Gateways and VPC Endpoints.'
      }
    },
    {
      title: 'SAST Code Analyzer',
      desc: lang === 'es'
        ? 'Ejecución y automatización de análisis de código fuente estático (SAST) para identificar y mitigar vulnerabilidades en CI/CD.'
        : 'Execution and automation of static application security testing (SAST) to identify and mitigate vulnerabilities in CI/CD pipelines.',
      tags: ['SAST', 'AppSec', 'DevSecOps'],
      date: lang === 'es' ? 'Actualizado 05 de may de 2026' : 'Updated May 05, 2026',
      stars: 24,
      forks: 5,
      details: {
        problem: lang === 'es'
          ? 'El código vulnerable llegaba a los entornos de producción debido a la falta de pruebas de seguridad automatizadas durante la fase inicial de desarrollo, aumentando el tiempo y costo de remediación.'
          : 'Vulnerable code reached production environments due to the lack of automated security testing during the early development phase, increasing remediation time and costs.',
        architecture: lang === 'es'
          ? 'Integración de herramientas SAST directamente en el pipeline de Integración Continua (CI/CD) utilizando GitHub Actions y analizadores de código open-source.'
          : 'Integration of SAST tools directly into the Continuous Integration (CI/CD) pipeline using GitHub Actions and open-source code analyzers.',
        security: lang === 'es'
          ? 'Bloqueo automático de implementaciones cuando se detectan vulnerabilidades críticas. Escaneo de secretos activado para prevenir la exposición de credenciales y tokens.'
          : 'Automatic deployment blocking when critical vulnerabilities are detected. Secret scanning enabled to prevent credential and token exposure.'
      }
    },
    {
      title: 'Secure Static Web App | AWS',
      desc: lang === 'es'
        ? 'Implementé una arquitectura de contenido estático altamente disponible y segura, utilizando una estrategia de defensa en profundidad para mitigar ataques web comunes.'
        : 'Implemented a highly available and secure static content architecture using a defense-in-depth strategy to mitigate common web attacks.',
      tags: ['S3', 'WAF', 'CloudFront', 'Security', 'GitHub'],
      github: 'https://github.com/CesarJ262/secure-static-site-s3-cloudfront-waf',
      date: lang === 'es' ? 'Actualizado 20 de ago de 2026' : 'Updated Aug 20, 2026',
      stars: 8,
      forks: 1,
      details: {
        problem: lang === 'es'
          ? 'Los despliegues web tradicionales a menudo exponen directamente los servidores de almacenamiento, haciéndolos vulnerables a ataques de denegación de servicio (DDoS) y extracción de datos directa.'
          : 'Traditional web deployments often directly expose storage servers, making them vulnerable to Denial of Service (DDoS) attacks and direct data exfiltration.',
        architecture: lang === 'es'
          ? 'Infraestructura como Código (IaC) construida con Terraform. Utiliza Amazon S3 como almacenamiento protegido, Amazon CloudFront como CDN global y AWS WAF actuando como un firewall de Capa 7.'
          : 'Infrastructure as Code (IaC) built with Terraform. Uses Amazon S3 as protected storage, Amazon CloudFront as a global CDN, and AWS WAF acting as a Layer 7 firewall.',
        security: lang === 'es'
          ? 'El bucket S3 tiene activado "Block All Public Access", permitiendo acceso exclusivo a través de CloudFront mediante Origin Access Control (OAC). AWS WAF configurado con reglas manejadas para bloquear las Top 10 de OWASP.'
          : 'The S3 bucket has "Block All Public Access" enabled, allowing exclusive access through CloudFront via Origin Access Control (OAC). AWS WAF is configured with managed rules to block the OWASP Top 10.'
      }
    },
    {
      title: 'Threat Detection & Response | AWS',
      desc: lang === 'es'
        ? 'Flujo de trabajo automatizado del Centro de Operaciones de Seguridad (SOC) centrado en la detección de amenazas en tiempo real y la respuesta automatizada.'
        : 'Automated Security Operations Center (SOC) workflow focused on real-time threat detection and automated incident response.',
      tags: ['GuardDuty', 'EventBridge', 'Lambda', 'SOC', 'GitHub'],
      github: 'https://github.com/CesarJ262/aws-threat-detection-response',
      date: lang === 'es' ? 'Actualizado 15 de jul de 2026' : 'Updated Jul 15, 2026',
      stars: 15,
      forks: 4,
      details: {
        problem: lang === 'es'
          ? 'La monitorización manual de logs de seguridad es lenta e ineficiente frente a ataques automatizados rápidos en entornos de nube dinámicos.'
          : 'Manual security log monitoring is slow and inefficient against fast automated attacks in dynamic cloud environments.',
        architecture: lang === 'es'
          ? 'Utilización de Amazon GuardDuty para la detección de amenazas, Amazon EventBridge para enrutar los hallazgos y AWS Lambda para ejecutar funciones de remediación.'
          : 'Utilization of Amazon GuardDuty for threat detection, Amazon EventBridge to route findings, and AWS Lambda to execute remediation functions.',
        security: lang === 'es'
          ? 'Aislamiento automático de instancias comprometidas y revocación instantánea de credenciales expuestas mediante automatización de Lambda, limitando significativamente el radio de explosión.'
          : 'Automatic isolation of compromised instances and instant revocation of exposed credentials via Lambda automation, significantly limiting the blast radius.'
      }
    },
    {
      title: 'Secure Auth & Identity Management | AWS',
      desc: lang === 'es'
        ? 'Sistema de autenticación serverless utilizando Amazon Cognito con MFA. Políticas de IAM dinámicas basadas en el principio de menor privilegio.'
        : 'Serverless authentication system using Amazon Cognito with MFA. Dynamic IAM policies based on the principle of least privilege.',
      tags: ['Cognito', 'IAM', 'GitHub'],
      github: 'https://github.com/CesarJ262/aws-cognito-secure-auth-mfa',
      date: lang === 'es' ? 'Actualizado 02 de ago de 2026' : 'Updated Aug 02, 2026',
      stars: 11,
      forks: 2,
      details: {
        problem: lang === 'es'
          ? 'Las aplicaciones web a menudo sufren ataques de apropiación de cuentas (account takeover) y una gestión deficiente del ciclo de vida de los tokens, comprometiendo los datos de los usuarios.'
          : 'Web applications often suffer from account takeover attacks and poor token lifecycle management, compromising user data.',
        architecture: lang === 'es'
          ? 'Integración directa de Amazon Cognito como Proveedor de Identidad (IdP) para aplicaciones web frontend, con flujos de autenticación que incluyen validación JWT en los servicios backend.'
          : 'Direct integration of Amazon Cognito as an Identity Provider (IdP) for frontend web applications, with authentication flows including JWT validation in backend services.',
        security: lang === 'es'
          ? 'Autenticación de Múltiples Factores (MFA) impuesta obligatoriamente. Autorización de acceso basada en roles (RBAC) vinculada a políticas IAM granulares para aislar datos multi-inquilino.'
          : 'Mandatory Multi-Factor Authentication (MFA) enforced. Role-based access authorization (RBAC) linked to granular IAM policies to isolate multi-tenant data.'
      }
    },
    {
      title: 'Data Security & Compliance | AWS',
      desc: lang === 'es'
        ? 'Sistema automatizado con Amazon Macie y AWS KMS para el descubrimiento, clasificación y cifrado de datos sensibles en Amazon S3.'
        : 'Automated system with Amazon Macie and AWS KMS for the discovery, classification, and encryption of sensitive data in Amazon S3.',
      tags: ['KMS', 'Macie', 'S3', 'GitHub'],
      github: 'https://github.com/CesarJ262/aws-macie-s3-data-security',
      date: lang === 'es' ? 'Actualizado 10 de sep de 2026' : 'Updated Sep 10, 2026',
      stars: 9,
      forks: 1,
      details: {
        problem: lang === 'es'
          ? 'A medida que crecen los almacenes de datos en S3, la información de identificación personal (PII) se vuelve difícil de rastrear, arriesgando multas severas por incumplimiento normativo.'
          : 'As data lakes grow in S3, personally identifiable information (PII) becomes hard to track, risking severe regulatory non-compliance fines.',
        architecture: lang === 'es'
          ? 'Despliegue de trabajos de descubrimiento de datos con Amazon Macie para auditar continuamente los buckets de S3. Toda la información almacenada pasa por cifrado en reposo.'
          : 'Deployment of data discovery jobs with Amazon Macie to continuously audit S3 buckets. All stored information goes through encryption at rest.',
        security: lang === 'es'
          ? 'Cifrado a nivel de objeto garantizado utilizando Customer Managed Keys (CMK) de AWS KMS con rotación automática. Alertas integradas a través de SNS para cualquier hallazgo de texto plano.'
          : 'Object-level encryption guaranteed using AWS KMS Customer Managed Keys (CMK) with automatic rotation. Integrated alerts via SNS for any plaintext findings.'
      }
    }
  ];

  return (
    <>
      <section id="projects" className="py-16 md:py-32 border-b border-border-subtle bg-bg-main relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeading>{lang === 'es' ? 'Proyectos' : 'Projects'}</SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative bg-bg-card/40 backdrop-blur-xl border border-border-subtle rounded-2xl p-5 md:p-6 flex flex-col group hover:border-brand/50 transition-all duration-500 overflow-hidden"
              >
                {/* Green radial gradient for the "aura" effect */}
                <div
                  className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle at 0% 0%, var(--color-brand), transparent 35%)` }}
                ></div>

                {/* Content wrapper to stay above the gradient */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title & Link */}
                  <div className="flex justify-between items-start gap-4 mb-4 mt-1">
                    <h3 className="text-white font-bold text-xl leading-tight">{p.title}</h3>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-gray-500 transition-all"
                        aria-label="Abrir enlace externo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>

                  {/* Tags row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(t => {
                      const Icon = getTagIcon(t, 12);
                      return (
                        <span key={t} className="text-[11px] font-mono tracking-wide text-gray-300 bg-transparent border border-white/10 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                          {Icon}
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  {/* Footer Metrics - Just Date */}
                  <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-mono mb-5">
                    <Calendar size={12} /> {p.date}
                  </div>

                  {/* Action */}
                  <div className="flex flex-col mt-auto">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="flex items-center justify-between w-fit gap-3 px-4 py-2 rounded-lg bg-transparent border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/5 hover:text-white transition-all group/btn"
                    >
                      {lang === 'es' ? 'Explorar proyecto' : 'Explore project'}
                      <ChevronRight size={14} className="text-gray-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-start">
            <a
              href="https://github.com/CesarJ262"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 border border-border-subtle text-white font-medium hover:bg-white/10 hover:border-gray-500 transition-all"
            >
              <FiGithub size={18} />
              {lang === 'es' ? 'Ver perfil completo en GitHub' : 'View full profile on GitHub'}
            </a>
          </div>
        </div>
      </section>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
