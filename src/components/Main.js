import { useState } from 'react';
import '../styles/styles.js';
import ViewportBlock from './ViewportBlock.js';

const Main = ({setHighlightedSection}) => {
    const nealOverton = <span className='red'>nealOverton</span>
    const nealOvertonWithBracket = <span><span className='red'>nealOverton</span><span className='comment'>&#40;&#40;</span></span>;
    const blockOpen = <span className='comment'>&#41; =&#62; &#123; &#47;*</span>;
    const blockClose = <span className='comment'>*&#47; &#125; &#41;<br/></span>;

    const introText = <p className='Main__intro'>
        <span className='code-background'><b>Neal Overton</b></span> is a <b>full stack dev</b> and <b>bootcamp tutor</b>. He is prepared to write masses of code for the sake of a visual pun.
    </p>

    const codeDemoText = <p>
        <span className='comment'>&#47;&#47;  create a new instance of Dev</span><br/>
        <span className='blue'>const</span> newDev = new <span className='red'>Dev</span>();<br/><br/>
        <span className='comment'>&#47;&#47;  call .nealOverton() with valid start date</span><br/>
        <span className='blue'>const</span> data = newDev.{nealOverton}(<span className='green'>2019</span>);<br/><br/>
        console.<span className='red'>log</span>(data);<br/>
        <span className='comment'>&#47;&#47;  expected output: data specific to Neal Overton</span><br/>
    </p>
    
    const outputText =  <p className='code-demo__output-row__output-text'>
        &#62; I started teaching myself Java in late 2019 using online resources. Yes, that was an intense place to start and yes, I could write an abstract class before I could make a simple static web page.<br/>
        I loved it though and completing the Northcoders Coding Bootcamp in 2022 gave me a more rounded set of skills. Take a look below for more details.
    </p>;
   

    const skillsText = <p className='skills-box__text'>
        <a className='anchor' id='languages'/>
        <span className='comment'>&#47;&#47;  Languages</span><br/>
        {nealOvertonWithBracket}<span className='blue'>JavaScriptES6</span><span className='comment'>,</span> <span className='blue'>Node.js</span>{blockOpen} advanced knowledge, and I now tutor the use of Javascript in a Bootcamp{blockClose}
        {nealOvertonWithBracket}<span className='blue'>Java</span>{blockOpen} self-taught up to advanced concepts like interfaces and generics{blockClose}
        {nealOvertonWithBracket}<span className='blue'>HTML</span>{blockOpen} ... {blockClose}
        {nealOvertonWithBracket}<span className='blue'>CSS</span>{blockOpen} ... {blockClose}
        {nealOvertonWithBracket}<span className='blue'>C#</span>{blockOpen} experience is limited to experimenting with Unity, but I'm having fun {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Dart</span>{blockOpen} experience is limited to experimenting with Flutter, but my Java experience means everything seems quite familiar {blockClose}
        
        <a className='anchor' id='frameworks'/>
        <br/><span className='comment'>&#47;&#47;  Frameworks</span><br/>
        {nealOvertonWithBracket}<span className='blue'>React</span>{blockOpen} extensive experience, take a look at examples below (including this one) {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Jest</span>{blockOpen} well-versed in TDD including spies and mock functions {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Flutter</span>{blockOpen} experimented with some basic apps, love how the layout and styling is done right there as you place the widget {blockClose}

        <a className='anchor' id='other'/>
        <br/><span className='comment'>&#47;&#47;  Other</span><br/>
        {nealOvertonWithBracket}<span className='blue'>PostgreSQL</span>{blockOpen} example below  {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Unity</span>{blockOpen} example below  {blockClose}
    </p>;

    const [outputIsVisible, setOutputIsVisible] = useState(false);

    return <div className='Main'>
        <h1 className='Main__title'>Dev.prototype.nealOverton()</h1>
        {introText}
        <ViewportBlock onEnterViewport={() => setHighlightedSection('tryme')}/>
        <a className='anchor' id='tryme'/>
        <h2 className='Main__subtitle'>Try me</h2>
        <div className='code-demo'>
            <p className='code-demo__title'>JavaScript Demo: Dev.nealOverton()</p>
            <div className='code-demo__body'>
                <div className='code-demo__body__number-column'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                </div>
                <div className='code-demo__body__code-field'>
                    {codeDemoText}
                </div>
            </div>
            <div className='code-demo__output-row'>
                <div className='code-demo__output-row__button-column'>
                    <button className='code-demo__output-row__button' onClick={() => setOutputIsVisible(true)}>Run &#62;</button>
                    <button className='code-demo__output-row__button' onClick={() => setOutputIsVisible(false)}>Reset</button>
                </div>
                <div className='code-demo__output-row__output-box'>
                    {outputIsVisible ? outputText : <></>}
                </div>
            </div>
        </div>
        <a className='anchor' id='skills'/>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('skills')}/>
        <h2 className='Main__subtitle'>Skills</h2>
        <div className='skills-box'>
            {skillsText}
        </div>
        <a className='anchor' id='projects'/>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>
        <h2 className='Main__subtitle' >Projects</h2>
        <a className='anchor' id='tablehog'/>
        <h3 className='Main__project-title code-background'>Tablehog</h3>
        <p className='Main__project-text'>
            This is a React web app designed to allow users to read board game reviews. Once logged in, they are permitted on comment and vote on reviews which interest them. <br/> <br/>
            The back end is a REST API comprising an Express server and a psql database. This was written using TDD and utilises an automated test and deployment pipeline achieved through Github Actions.<br/> <br/>

            Front end Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/tablehog' target={'_blank'}>https://github.com/nealoverton/tablehog</a><br/>
            Back end Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/board-game-reviews' target={'_blank'}>https://github.com/nealoverton/board-game-reviews</a>
        </p>

        <a className='anchor' id='meeting'/>
        <h3 className='Main__project-title code-background'>Meeting Room Booker</h3>
        <p className='Main__project-text'>
            This is a React web app developed to improve the quality of life in my partner's office. It utilises the FullCalendar library for the calendar functionality and has a Firebase back end. <br/><br/>

            Github repo: <a className='Main__project-text__link' href='https://github.com/coramarcu/book-a-meeting' target={'_blank'}>https://github.com/coramarcu/book-a-meeting</a>
        </p>

        <a className='anchor' id='cavern'/>
        <h3 className='Main__project-title code-background'>Cavern of Wonder</h3>
        <p className='Main__project-text'>
            My first foray into Unity one weekend: navigate a hot air balloon through a procedurally-generated maze of obstacles. While the game is simple, I learned a lot (don't try to handle physics in <span className='code-background'>Update()</span>, kids) and am excited to see what I can produce next. <br/><br/>

            So-named because my friend's only remark when playing was "Man, how big is this cavern?".<br/><br/>

            Github repo: <a className='Main__project-text__link' href='https://github.com/coramarcu/book-a-meeting' target={'_blank'}>https://github.com/coramarcu/book-a-meeting</a>
        </p>
        <a className='anchor' id='experience'/>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('experience')}/>
        <h2 className='Main__subtitle'>Experience</h2>
        <a className='anchor' id='mcrcodes'/>
        <h3 className='experience__title'>Tutor at Manchester Codes</h3>
        <p className='experience__text'>I provide lecture support and one-on-one mentoring to adults on an intensive coding bootcamp.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>12.2022</span>;</p>
            <p><span className='blue'>const</span> endDate = null;</p>
        </div>

        <a className='anchor' id='northcoders'/>
        <h3 className='experience__title'>Student on Northcoders Coding Bootcamp</h3>
        <p className='experience__text'>I studied on Northcoders' 13 week full-stack development bootcamp. This focused on Javascript, HTML, and CSS, as well as Git version control, TDD and Agile practices such as pair programming, stand ups, and kanban boards.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>11.2021</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>03.2022</span>;</p>
        </div>

        <a className='anchor' id='trading'/>
        <h3 className='experience__title'>Sports Trading Consultant</h3>
        <p className='experience__text'>I monitored online gambling systems and was responsible for preventing and investigating potentially costly odds discrepancies. Working closely with the lead engineer on this project and helping out with UI design and bugfixing is what drew me towards coding.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>04.2015</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>11.2022</span>;</p>
            <p>console.<span className='red'>log</span>(status);  <span className='comment'>&#47;&#47;  self-employed</span></p>
        </div>
    </div>
}

export default Main;