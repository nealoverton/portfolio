import '../styles/styles.js';
import { IoFlask } from 'react-icons/io5';
// import { Tooltip } from 'react-tooltip';
import Tippy from '@tippyjs/react';
import { HashLink as Link } from 'react-router-hash-link';

const SideBar = () => {

    return <div className='SideBar'>
        <h2 className='SideBar__title'>Related Topics</h2>
        <h3 className='SideBar__subtitle'>Skills</h3>
        
        <Link smooth to={'#languages'} className='SideBar__link'><span>
            <IoFlask className='blue' id="experimental" />
            </span>Dev.prototype.C#()</Link>
        <Link smooth to={'#languages'} className='SideBar__link'>Dev.prototype.CSS()</Link>
        <Link smooth to={'#languages'} className='SideBar__link'><IoFlask className='blue'/>Dev.prototype.Dart()</Link>
        
        <Link smooth to={'#languages'} className='SideBar__link'>Dev.prototype.ES6/Node.js()</Link>
        <Link smooth to={'#frameworks'} className='SideBar__link'><IoFlask className='blue'/>Dev.prototype.Flutter()</Link>
        <Link smooth to={'#languages'} className='SideBar__link'>Dev.prototype.HTML()</Link>
        <Link smooth to={'#languages'} className='SideBar__link'>Dev.prototype.Java()</Link>
        <Link smooth to={'#frameworks'} className='SideBar__link'>Dev.prototype.Jest()</Link>
        <Link smooth to={'#other'} className='SideBar__link'>Dev.prototype.PostgreSQL()</Link>
        <Link smooth to={'#frameworks'} className='SideBar__link'>Dev.prototype.React()</Link>
        <Link smooth to={'#languages'} className='SideBar__link'>Dev.prototype.SQL()</Link>
        <Link smooth to={'#other'} className='SideBar__link'><IoFlask className='blue'/>Dev.prototype.Unity()</Link>

        <h3 className='SideBar__subtitle'>Projects</h3>
        <Link smooth to={'#cavern'} className='SideBar__link'>Dev.prototype.cavernOfWonder()</Link>
        <Link smooth to={'#meeting'} className='SideBar__link'>Dev.prototype.meetingRoomBooker()</Link>
        <Link smooth to={'#tablehog'} className='SideBar__link'>Dev.prototype.tablehog()</Link>
        
        <h3 className='SideBar__subtitle'>Experience</h3>
        <Link smooth to={'#northcoders'} className='SideBar__link'>Dev.prototype.northcodersCodingBootcamp()</Link>
        <Link smooth to={'#trading'} className='SideBar__link'>Dev.prototype.sportsTradingConsultancy()</Link>
        <Link smooth to={'#mcrcodes'} className='SideBar__link'>Dev.prototype.tutorManchesterCodes()</Link>
    </div>
}

export default SideBar;