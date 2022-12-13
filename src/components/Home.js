import '../styles/styles.js';
import SideBar from './SideBar.js';
import SectionMenu from './SectionMenu.js';
import Main from './Main.js';

const Home = () => {

    return <div className='Home'>
        <SideBar/>
        <Main/>
        <SectionMenu/>
    </div>

}

export default Home;