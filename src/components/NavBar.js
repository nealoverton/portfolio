import { TfiWorld } from 'react-icons/tfi';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { useEffect, useState } from 'react';

const Navbar = ({sideBarDropDownIsOpen, setSideBarDropDownIsOpen}) => {
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

    useEffect(() => {
        if(sideBarDropDownIsOpen){
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        
    }, [sideBarDropDownIsOpen])

    const handleEmail = () => {
        window.location.href = "mailto:nealjoverton@gmail.com";
    }

    return <div className='NavBar'>
        <div className='Navbar__full-width-banner'/>
        <div className='info-container'>
            <div className='info-container--left'>
                <div className='logo'>
                    <h2 className='logo__text--blue'>N</h2>
                    <h2 className='logo__text--black'>njo dev docs</h2>
                    <h2 className='logo__text--blue'>_</h2>
                </div>
                <a className='info-container__link' href='https://github.com/nealoverton' target='_blank' rel="noopener noreferrer">Github</a>
                <a className='info-container__link' href='https://www.linkedin.com/in/neal-overton-b07027234/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </div>
            
            <div className='info-container--right'>
                <p className='info-container__question'>More questions?</p>
                <button className='info-container__button' onClick={handleEmail}>Get in touch</button>
            </div>

            <button className='Navbar__hamburger' onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}>
                {hamburgerIsOpen ? <RxCross1/> : <RxHamburgerMenu/>}
            </button>
        </div>

        <div className={hamburgerIsOpen ? 'hamburger-menu' : 'hamburger-menu--hidden'}>
            <button className='info-container__button' onClick={handleEmail}>Get in touch</button>
            <a className='hamburger__link' href='https://github.com/nealoverton' target='_blank' rel="noopener noreferrer">Github</a>
            <a className='hamburger__link' href='https://www.linkedin.com/in/neal-overton-b07027234/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
        </div>
        
        <div className='path-container'>
            
            
            <div className='path-separater'>
                <button className='path-container__SideBar-icon' onClick={() => setSideBarDropDownIsOpen(!sideBarDropDownIsOpen)}>
                    <BsLayoutTextSidebar/>
                </button>
                <p className='path-container__path'>References <span className='comment'>  &#62;  </span>  <span className='path-container__path--hidable'>Javascript <span className='comment'> &#62;  </span> Standard built-in objects <span className='comment'>  &#62;  </span> Dev <span className='comment'>  &#62;  </span> </span>Dev.prototype.nealOverton()</p>
            </div>
            <p className='path-container__language'><TfiWorld alt='Globe icon'/> English (UK)</p>
            
            
        </div>
    </div>
}

export default Navbar;