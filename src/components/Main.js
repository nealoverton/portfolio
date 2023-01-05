import { useState } from 'react';
import '../styles/styles.js';
import ViewportBlock from './ViewportBlock.js';
import { Link } from 'react-router-dom';

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
   

    const skillsTextStart = <p className='skills-box__text'>
        <span className='comment' id='languages'>&#47;&#47;  Languages</span><br/>
        {nealOvertonWithBracket}<span className='blue'>JavaScriptES6</span><span className='comment'>,</span> <span className='blue'>Node.js</span>{blockOpen} I tutor bootcamp students in the fundamentals of coding as well as the functional and object-oriented programming paradigms usinsg JavaScript{blockClose}
        {nealOvertonWithBracket}<span className='blue'>Java</span>{blockOpen} self-taught up to concepts like interfaces and generics, I have a solid foundation{blockClose}
        {nealOvertonWithBracket}<span className='blue'>HTML</span>{blockOpen} striving to keep things semantic and accessible {blockClose}
        {nealOvertonWithBracket}<span className='blue'>CSS</span>{blockOpen} test my responsiveness in the console{blockClose}
        {nealOvertonWithBracket}<span className='blue'>C#</span>{blockOpen} experience is limited to experimenting with Unity, but I'm having fun {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Dart</span>{blockOpen} experience is limited to experimenting with Flutter, but my battles with null safety have been legendary {blockClose}
    </p>;

    const skillsTextEnd = <p className='skills-box__text'>
        <br/><span id='frameworks' className='comment'>&#47;&#47;  Frameworks</span><br/>
        {nealOvertonWithBracket}<span className='blue'>React</span>{blockOpen} extensive experience, take a look at examples below (including this one) {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Jest</span>{blockOpen} well-versed in TDD including spies and mock functions {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Flutter</span>{blockOpen} experimented with some basic apps. I like how the layout is determined as the widgets are placed, it's like Lego. {blockClose}

        <br/><span id='other' className='comment'>&#47;&#47;  Other</span><br/>
        {nealOvertonWithBracket}<span className='blue'>PostgreSQL</span>{blockOpen} check out the Tablehog API below, which uses a psql database {blockClose}
        {nealOvertonWithBracket}<span className='blue'>Unity</span>{blockOpen} I've been enjoying learning by making some simple games, check out my first attempt, Cavern of Wonder, below {blockClose}
    </p>

    const [outputIsVisible, setOutputIsVisible] = useState(false);

    return <div className='Main'>
        <h1 className='Main__title'>Dev.prototype.nealOverton()</h1>
        {introText}
        <ViewportBlock 
            onEnterViewport={() => setHighlightedSection('tryme')}
        />
        <h2 className='Main__subtitle' id='tryme'>Try me</h2>
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
        
        <h2 className='Main__subtitle' id='skills'>Skills</h2>
        <div className='skills-box'>
            <ViewportBlock onEnterViewport={() => setHighlightedSection('skills')} />
            {skillsTextStart}
            <ViewportBlock onEnterViewport={() => setHighlightedSection('skills')} />
            {skillsTextEnd}
        </div>
        
        <h2 className='Main__subtitle' id='projects' >Projects</h2>
        <h3 className='Main__project-title code-background' id='tablehog'>Tablehog</h3>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>
        <img src='tablehog-screenshot.png' className='Main__project__img' alt='Screenshot of tablehog website'/>
        <img src='api-screenshot.png' className='Main__project__img' alt='Screenshot of JSON output of board game reviews API'/>
        <p className='Main__project-text'>
            A React web app designed to allow users to read board game reviews. Once logged in, they are permitted on comment and vote on reviews which interest them. <br/> <br/>
            The back end is a REST API comprising an Express server and a psql database. This was written using TDD and uses Github Actions to implement a CI/CD pipeline.<br/> <br/>

            Live site: <a className='Main__project-text__link' href='https://tablehog.netlify.app/' target={'_blank'} rel='noreferrer'>https://tablehog.netlify.app/</a><br/><br/>
            Live API: <a className='Main__project-text__link' href='https://board-game-reviews.onrender.com/api' target={'_blank'} rel='noreferrer'>https://board-game-reviews.onrender.com/api</a><br/><br/>
            Front end Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/tablehog' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/tablehog</a><br/><br/>
            Back end Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/board-game-reviews' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/board-game-reviews</a>
        </p>

        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>

        <h3 className='Main__project-title code-background' id='meeting'>Meeting Room Booker</h3>
        <img src='meeting-screenshot.png' className='Main__project__img' alt='Screenshot of calendar from meeting room booking app'/>
        <p className='Main__project-text'>
            A React web app developed to improve the quality of life in my partner's office. It utilises the FullCalendar library for the calendar functionality and Firebase for the back end. <br/><br/>

            Github repo: <a className='Main__project-text__link' href='https://github.com/coramarcu/book-a-meeting' target={'_blank'} rel='noreferrer'>https://github.com/coramarcu/book-a-meeting</a>
        </p>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>
        <h3 className='Main__project-title code-background' id='cavern'>Cavern of Wonder</h3>
        <img src='cavern-screenshot.png' className='Main__project__img' alt='Screenshot of hot air balloon and rocky obstacles from cavern of wonder game'/>
        <p className='Main__project-text'>
            My first foray into Unity one weekend: navigate a hot air balloon through a procedurally-generated maze of obstacles. While the game is simple, I learned a lot (don't try to handle physics in <span className='code-background'>Update()</span>, kids) and am excited to see what I can produce next. <br/><br/>

            So-named because my friend's only remark when playing was "Man, how big is this cavern?".<br/><br/>

            Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/Cavern-of-Wonder' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/Cavern-of-Wonder</a>
        </p>
        
        <div className='cavern-link__container'>
            <Link className='cavern-link' to={'/cavern-of-wonder'} target="_blank" rel="noopener noreferrer">
                <button className='cavern-link__button'>
                    Play game
                </button>
            </Link>
            <p className='Main__project-text'>( desktop only, spacebar required )</p>
        </div>
        
        
        <h2 className='Main__subtitle' id='experience'>Experience</h2>
        <h3 className='experience__title' id='mcrcodes'>Tutor at Command Shift (formerly Manchester Codes)</h3>
        <p className='experience__text'>I provide lecture support and one-on-one mentoring to adults on an intensive coding bootcamp.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>12.2022</span>;</p>
            <p><span className='blue'>const</span> endDate = null;</p>
        </div>
        <h3 className='experience__title' id='northcoders'>Student on Northcoders Coding Bootcamp</h3>
        <p className='experience__text'>I studied on Northcoders' 13 week full-stack development bootcamp. This focused on Javascript, HTML, and CSS, as well as Git version control, TDD and Agile practices such as pair programming, stand ups, and kanban boards.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>11.2021</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>03.2022</span>;</p>
        </div>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('experience')}/>
        <h3 className='experience__title' id='trading'>Sports Trading Consultant</h3>
        <p className='experience__text'>I monitored online gambling systems and was responsible for preventing and investigating potentially costly odds discrepancies. Working closely with the lead engineer on this project and helping out with UI design and bugfixing is what drew me towards coding.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>04.2015</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>11.2022</span>;</p>
            <p>console.<span className='red'>log</span>(status);  <span className='comment'>&#47;&#47;  self-employed</span></p>
        </div>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('experience')}/>
    </div>
}

export default Main;