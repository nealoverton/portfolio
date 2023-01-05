import '../styles/styles.js';
import { IoFlask, IoCaretDown, IoCaretForward } from 'react-icons/io5';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import { scrollWithOffset } from '../utilities/scroll.js';

const SideBar = () => {
    const [skillListIsOpen, setSkillListIsOpen] = useState(true);
    const [projectListIsOpen, setProjectListIsOpen] = useState(true);
    const [experienceListIsOpen, setExperienceListIsOpen] = useState(true);

    return <div className='SideBar'>
        <h2 className='SideBar__title'>Related Topics</h2>
        <h3 className='SideBar__subtitle' onClick={()=>setSkillListIsOpen(!skillListIsOpen)}>
            {skillListIsOpen ?
            <IoCaretDown/> :
            <IoCaretForward/>
            }         
            Skills
        </h3>
        
        <div className={skillListIsOpen ? 'SideBar__List' : 'SideBar__List--hidden'}>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>
            <span>
                <Tooltip title="In experimental phase" position="top">
                    <IoFlask alt='blue conical flask icon' className='blue' id="experimental" />
                </Tooltip>
            </span>Dev.prototype.C#()
        </Link>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.CSS()</Link>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>
            <Tooltip title="In experimental phase" position="top">
                <IoFlask alt='blue conical flask icon' className='blue' id="experimental" />
            </Tooltip>
            Dev.prototype.Dart()
        </Link>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.ES6/Node.js()</Link>
        <Link smooth to={'#frameworks'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>
            <Tooltip title="In experimental phase" position="top">
                <IoFlask alt='blue conical flask icon' className='blue' id="experimental" />
            </Tooltip>
            Dev.prototype.Flutter()
        </Link>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.HTML()</Link>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.Java()</Link>
        <Link smooth to={'#frameworks'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.Jest()</Link>
        <Link smooth to={'#other'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.PostgreSQL()</Link>
        <Link smooth to={'#frameworks'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.React()</Link>
        <Link smooth to={'#languages'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.SQL()</Link>
        <Link smooth to={'#other'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>
            <Tooltip title="In experimental phase" position="top">
                <IoFlask alt='blue conical flask icon' className='blue' id="experimental" />
            </Tooltip>
            Dev.prototype.Unity()
        </Link>
        </div>
        
        <h3 className='SideBar__subtitle' onClick={()=>setProjectListIsOpen(!projectListIsOpen)}>
            {projectListIsOpen ?
                <IoCaretDown/> :
                <IoCaretForward/>
            }  
            Projects
        </h3>

        <div className={projectListIsOpen ? 'SideBar__List' : 'SideBar__List--hidden'}>
            <Link smooth to={'#cavern'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.cavernOfWonder()</Link>
            <Link smooth to={'#meeting'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.meetingRoomBooker()</Link>
            <Link smooth to={'#tablehog'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.tablehog()</Link>
        </div>
        
        <h3 className='SideBar__subtitle' onClick={()=>setExperienceListIsOpen(!experienceListIsOpen)}>
            {experienceListIsOpen ?
                <IoCaretDown/> :
                <IoCaretForward/>
            } 
            Experience
        </h3>
        <div className={experienceListIsOpen ? 'SideBar__List' : 'SideBar__List--hidden'}>
            <Link smooth to={'#northcoders'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.northcodersCodingBootcamp()</Link>
            <Link smooth to={'#trading'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.sportsTradingConsultancy()</Link>
            <Link smooth to={'#mcrcodes'} scroll={el => scrollWithOffset(el)} className='SideBar__link'>Dev.prototype.tutorCommandShift()</Link>
        </div>
        
    </div>
}

export default SideBar;