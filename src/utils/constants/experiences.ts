import { Experience } from '../../types/experience';
import CyberGuardianLogo from '../../assets/logos/CyberGuardianLogo.webp';
import IndraLogo from '../../assets/logos/IndraLogo.webp';
import WebEn72hLogo from '../../assets/logos/WebEn72hLogo.webp';

export const EXPERIENCES: Experience[] = [
  {
    company: 'Cyber Guardian',
    role: 'Ingeniero de software',
    startDate: new Date('2022/03/01'),
    description:
      'Cyber Guardian es la plataforma de ciberseguridad más completa del mercado para pequeñas y medianas empresas. Con Cyber Guardian, las pymes pueden defenderse de las amenazas del mundo digital y fortalecer la protección de su negocio, con la misma capacidad que tienen ya las grandes corporaciones. Monitorización proactiva 24/7 de las alertas de seguridad para responder a las amenazas más avanzadas y emergentes.',
    icon: CyberGuardianLogo,
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'TypeScript',
      'Firebase',
      'HTML5',
      'CSS',
      'GitHub',
    ],
  },
  {
    company: 'Indra',
    role: 'Ingeniero de software',
    startDate: new Date('2021/10/01'),
    endDate: new Date('2022/03/01'),
    description:
      'Cliente Telefónica: realización de la migración de sus aplicaciones de Oracle Forms a un entorno más moderno desarrollado en Java EE 8, así como brindar soporte y mantenimiento a los diversos módulos del proyecto.',
    icon: IndraLogo,
    technologies: ['JSP', 'JavaScript', 'Java EE 8', 'PL/SQL', 'XLST', 'SVN'],
  },
  {
    company: 'WebEn72h',
    role: 'Socio fundador',
    startDate: new Date('2020/04/01'),
    endDate: new Date('2021/12/01'),
    description:
      'Proyecto propio donde ofrecíamos una amplia gama de servicios en línea para ayudar a nuestros clientes a establecer y mejorar su presencia en la web. Nuestro equipo se especializaba en la creación de páginas web y tiendas online multiplataforma, brindando soluciones personalizadas y adaptadas a las necesidades específicas del usuario. Además, ofrecíamos servicios de mantenimiento, actualización y migración de sitios web, tiendas online y dominios, así como servicios de gestión y administración de bases de datos.',
    icon: WebEn72hLogo,
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];
