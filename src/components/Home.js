import SideBar from './SideBar.js';
import SectionMenu from './SectionMenu.js';
import Main from './Main.js';
import { useState } from 'react';
import SideBarDropDown from './SideBarDropDown.js';

const Home = ({sideBarDropDownIsOpen, setSideBarDropDownIsOpen}) => {
    const [highlightedSection, setHighlightedSection] = useState('experience');

    return <div className='Home'>
        <SideBar/>
        <SideBarDropDown sideBarDropDownIsOpen={sideBarDropDownIsOpen}setSideBarDropDownIsOpen={setSideBarDropDownIsOpen} highlightedSection={highlightedSection}/>
        <Main setHighlightedSection={setHighlightedSection} sideBarDropDownIsOpen={sideBarDropDownIsOpen}/>
        <SectionMenu highlightedSection={highlightedSection} />
    </div>

}

export default Home;