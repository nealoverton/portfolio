import '../styles/styles.js';
import { HashLink as Link } from 'react-router-hash-link';


const SectionMenu = ({highlightedSection}) => {
    const tryMeClassName = 'SectionMenu__label' + (highlightedSection === 'tryme' ? '--highlighted' : '');
    const skillsClassName = 'SectionMenu__label' + (highlightedSection === 'skills' ? '--highlighted' : '');
    const projectsClassName = 'SectionMenu__label' + (highlightedSection === 'projects' ? '--highlighted' : '');
    const experienceClassName = 'SectionMenu__label' + (highlightedSection === 'experience' ? '--highlighted' : '');

    return <div className='SectionMenu'>
        <h2 className='SectionMenu__title'>In this page</h2>
        <Link smooth to={'#tryme'} className={tryMeClassName}>Try Me</Link>
        <Link smooth to={'#skills'} className={skillsClassName}>Skills</Link>
        <Link smooth to={'#projects'} className={projectsClassName}>Projects</Link>
        <Link smooth to={'#experience'} className={experienceClassName}>Experience</Link>
    </div>
}

export default SectionMenu;