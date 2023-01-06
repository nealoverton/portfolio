import { HashLink as Link } from 'react-router-hash-link';
import { scrollWithOffset } from '../utilities/scroll.js';


const SectionMenu = ({highlightedSection, isResponsive = true}) => {
    const tryMeClassName = 'SectionMenu__label' + (highlightedSection === 'tryme' ? '--highlighted' : '');
    const skillsClassName = 'SectionMenu__label' + (highlightedSection === 'skills' ? '--highlighted' : '');
    const projectsClassName = 'SectionMenu__label' + (highlightedSection === 'projects' ? '--highlighted' : '');
    const experienceClassName = 'SectionMenu__label' + (highlightedSection === 'experience' ? '--highlighted' : '');

    return <nav className={isResponsive ? 'SectionMenu responsive' : 'SectionMenu'}>
        <h2 className='SectionMenu__title'>In this page</h2>
        <Link smooth to={'#tryme'} scroll={el => scrollWithOffset(el)} className={tryMeClassName}>Try Me</Link>
        <Link smooth to={'#skills'} scroll={el => scrollWithOffset(el)} className={skillsClassName}>Skills</Link>
        <Link smooth to={'#projects'} scroll={el => scrollWithOffset(el)} className={projectsClassName}>Projects</Link>
        <Link smooth to={'#experience'} scroll={el => scrollWithOffset(el)} className={experienceClassName}>Experience</Link>
    </nav>
}

export default SectionMenu;