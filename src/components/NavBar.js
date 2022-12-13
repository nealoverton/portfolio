import '../styles/styles.js';
import { TfiWorld } from 'react-icons/tfi'

const Navbar = () => {

    return <div className='navbar'>
        <div className='info'>
            <div className='logo'>
                <h2 className='logo__text--blue'>N</h2>
                <h2 className='logo__text--black'>njo dev docs</h2>
                <h2 className='logo__text--blue'>_</h2>
            </div>
            <button className='info__button'>Get in touch</button>
        </div>
        
        <div className='path'>
            <p>References <span>  >  </span> Javascript <span>  >  </span> Developers <span>  >  </span> NealOverton <span>  >  </span> NealOverton.prototype.dev()</p>
            <p className='path__language'><TfiWorld/> English (UK)</p>
        </div>
    </div>
}

export default Navbar;