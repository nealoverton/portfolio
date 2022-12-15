import '../styles/styles.js';
import SideBar from './SideBar.js';
import SectionMenu from './SectionMenu.js';
import Main from './Main.js';
import { useState } from 'react';

const Home = () => {
    const [highlightedSection, setHighlightedSection] = useState('experience');

    return <div className='Home'>
        <SideBar/>
        <Main setHighlightedSection={setHighlightedSection}/>
        <SectionMenu highlightedSection={highlightedSection}/>
    </div>

}

export default Home;