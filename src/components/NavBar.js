import '../styles/styles.js';
import { TfiWorld } from 'react-icons/tfi';

const Navbar = () => {

    return <div className='NavBar'>
        <div className='Navbar__full-width-banner'/>
        <div className='info-container'>
            <div className='info-container--left'>
                <div className='logo'>
                    <h2 className='logo__text--blue'>N</h2>
                    <h2 className='logo__text--black'>njo dev docs</h2>
                    <h2 className='logo__text--blue'>_</h2>
                </div>
                <a className='info-container__link' href='https://github.com/nealoverton' target='_blank'>Github</a>
                <a className='info-container__link' href='https://www.linkedin.com/in/neal-overton-b07027234/' target='_blank'>LinkedIn</a>
            </div>
            
            <div className='info-container--right'>
                <p className='info-container__question'>More questions?</p>
                <button className='info-container__button'>Get in touch</button>
            </div>
            
        </div>
        
        <div className='path-container'>
            <p className='path-container__path'>References <span>  &#62;  </span> Javascript <span>  &#62;  </span> Standard built-in objects <span>  &#62;  </span> Dev <span>  &#62;  </span> Dev.prototype.nealOverton()</p>
            <p className='path-container__language'><TfiWorld/> English (UK)</p>
        </div>
    </div>
}

export default Navbar;