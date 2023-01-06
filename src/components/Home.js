import '../styles/styles.js';
import SideBar from './SideBar.js';
import SectionMenu from './SectionMenu.js';
import Main from './Main.js';
import { useState } from 'react';

const Home = ({sideBarDropDownIsOpen}) => {
    const [highlightedSection, setHighlightedSection] = useState('experience');

    return <div className='Home'>
        <SideBar/>
        <div className={sideBarDropDownIsOpen ? 'SideBar-dropdown' : 'hidden'}></div>
        <Main setHighlightedSection={setHighlightedSection} sideBarDropDownIsOpen={sideBarDropDownIsOpen}/>
        <SectionMenu highlightedSection={highlightedSection}/>
    </div>

}

export default Home;