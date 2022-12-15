import '../styles/styles.js';
import { HashLink as Link } from 'react-router-hash-link';


const SectionMenu = () => {
    return <div className='SectionMenu'>
        <h2 className='SectionMenu__title'>In this page</h2>
        <Link smooth to={'#tryme'} className='SectionMenu__label'>Try Me</Link>
        <Link smooth to={'#skills'} className='SectionMenu__label'>Skills</Link>
        <Link smooth to={'#projects'} className='SectionMenu__label'>Projects</Link>
        <Link smooth to={'#experience'} className='SectionMenu__label'>Experience</Link>
    </div>
}

export default SectionMenu;