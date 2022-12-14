import '../styles/styles.js';
import { IoFlask } from 'react-icons/io5';
// import { Tooltip } from 'react-tooltip';
import Tippy from '@tippyjs/react';

const SideBar = () => {

    return <div className='SideBar'>
        <h2 className='SideBar__title'>Related Topics</h2>
        <h3 className='SideBar__subtitle'>Skills</h3>
        <Tippy content="hi">
            <p><span>
            <IoFlask className='blue' id="experimental" />
            </span>Dev.prototype.C#()</p>
        </Tippy> 
        <p>Dev.prototype.CSS()</p>
        <p><IoFlask className='blue'/>Dev.prototype.Dart()</p>
        <p>Dev.prototype.ES6/Node.js()</p>
        <p><IoFlask className='blue'/>Dev.prototype.Flutter()</p>
        <p>Dev.prototype.HTML()</p>
        <p>Dev.prototype.Java()</p>
        <p>Dev.prototype.PostgreSQL()</p>
        <p>Dev.prototype.React()</p> 
        <p>Dev.prototype.SQL()</p>
        <p><IoFlask className='blue'/>Dev.prototype.Unity()</p>

        <h3 className='SideBar__subtitle'>Projects</h3>
        <p>Dev.prototype.cavernOfWonder()</p>
        <p>Dev.prototype.meetingRoomBooker()</p>
        <p>Dev.prototype.tablehog()</p>
        
        <h3 className='SideBar__subtitle'>Experience</h3>
        <p>Dev.prototype.northcodersCodingBootcamp()</p>
        <p>Dev.prototype.sportsTradingConsultancy()</p>
        <p>Dev.prototype.tutorManchesterCodes()</p>
    </div>
}

export default SideBar;