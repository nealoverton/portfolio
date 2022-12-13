import '../styles/styles.js';
import { TfiWorld } from 'react-icons/tfi';

const Navbar = () => {

    return <div className='Navbar'>
        <div className='info-container'>
            <div className='logo'>
                <h2 className='logo__text--blue'>N</h2>
                <h2 className='logo__text--black'>njo dev docs</h2>
                <h2 className='logo__text--blue'>_</h2>
            </div>
            <button className='info-container__button'>Get in touch</button>
        </div>
        
        <div className='path-container'>
            <p className='path-container__path'>References <span>  &#62;  </span> Javascript <span>  &#62;  </span> Standard built-in objects <span>  &#62;  </span> Dev <span>  &#62;  </span> Dev.prototype.nealOverton()</p>
            <p className='path-container__language'><TfiWorld/> English (UK)</p>
        </div>
    </div>
}

export default Navbar;