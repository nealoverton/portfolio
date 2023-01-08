import CodeDemo from './CodeDemo.js';
import ViewportBlock from './ViewportBlock.js';
import { Link } from 'react-router-dom';

const Main = ({setHighlightedSection}) => {
    const nealOvertonWithBracket = <span><span className='red'>nealOverton</span><span className='comment'>&#40;&#40;</span></span>;
    const blockOpen = <span className='comment'>&#41; =&#62; &#123; &#47;*</span>;
    const blockClose = <span className='comment'>*&#47; &#125; &#41;<br/></span>;

    const introText = <p className='Main__intro'>
        <span className='code-background'><b>Neal Overton</b></span> is a <b>full stack dev</b> and <b>bootcamp tutor</b>. He is prepared to write masses of code for the sake of a visual pun.
    </p>

    const skillsTextStart = <p className='skills-box__text'>
        <span className='comment' id='languages'>&#47;&#47;  Languages</span><br/>
        {nealOvertonWithBracket}<span className='blue'>JavaScriptES6</span><span className='comment'>,</span> <span className='blue'>Node.js</span>{blockOpen} I tutor bootcamp students in the fundamentals of coding as well as the functional and object-oriented programming paradigms usinsg JavaScript{blockClose}
        {nealOvertonWithBracket}<span className='blue'>Java</span>{blockOpen} self-taught up to concepts like interfaces and generics, I have a solid foundation{blockClose}
        {nealOvertonWithBracket}<span className='blue'>HTML</span>{blockOpen} striving to keep things semantic and accessible {blockClose}
        {nealOvertonWithBracket}<span className='blue'>CSS</span>{blockOpen} test this page's responsiveness with your browser's dev tools {blockClose}
        {nealOvertonWithBracket}<span className='blue'>C#</span>{blockOpen} some experience writing Unity scripts{blockClose}
        {nealOvertonWithBracket}<span className='blue'>Dart</span>{blockOpen} some experience building simple Flutter apps {blockClose}
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


    return <div className='Main'>
        <h1 className='Main__title'>Dev.prototype.nealOverton()</h1>
        {introText}
        <ViewportBlock 
            onEnterViewport={() => setHighlightedSection('tryme')}
        />
        <h2 className='Main__subtitle' id='tryme'>Try me</h2>
        
        <CodeDemo/>
        
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
        
        <div className='Main__project-text-container'>
            <img src='tablehog-screenshot.png' className='Main__project__img' alt='Screenshot of tablehog review website'/>
            <img src='api-screenshot.png' className='Main__project__img' alt='Screenshot of JSON output of board game reviews API'/>
            <p className='Main__project-text'>
                A React web app designed to allow users to read board game reviews. Once logged in, they are permitted on comment and vote on reviews which interest them. <br/> <br/>
                The back end is a REST API comprising an Express server and a psql database. This was written using TDD and uses Github Actions to implement a CI/CD pipeline.<br/> <br/>

                Live site: <a className='Main__project-text__link' href='https://tablehog.netlify.app/' target={'_blank'} rel='noreferrer'>https://tablehog.netlify.app/</a><br/><br/>
                Live API: <a className='Main__project-text__link' href='https://board-game-reviews.onrender.com/api' target={'_blank'} rel='noreferrer'>https://board-game-reviews.onrender.com/api</a><br/><br/>
                Front end Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/tablehog' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/tablehog</a><br/><br/>
                Back end Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/board-game-reviews' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/board-game-reviews</a>
            </p>
        </div>

        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>

        <h3 className='Main__project-title code-background' id='meeting'>Meeting Room Booker</h3>

        <div className='Main__project-text-container'>
            <img src='meeting-screenshot.png' className='Main__project__img' alt='Screenshot of calendar from meeting room booking app'/>
            <p className='Main__project-text'>
                A React web app developed to improve the quality of life in my partner's office. It utilises the FullCalendar library for the calendar functionality and Firebase for the back end. <br/><br/>

                Github repo: <a className='Main__project-text__link' href='https://github.com/coramarcu/book-a-meeting' target={'_blank'} rel='noreferrer'>https://github.com/coramarcu/book-a-meeting</a>
            </p>
        </div>
        
        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>
        <h3 className='Main__project-title code-background' id='cavern'>Cavern of Wonder</h3>
        
        <div className='Main__project-text-container'>
            <img src='cavern-screenshot.png' className='Main__project__img' alt='Screenshot of hot air balloon and rocky obstacles from cavern of wonder game'/>
            <p className='Main__project-text'>
                My first foray into Unity one weekend: navigate a hot air balloon through a procedurally-generated maze of obstacles. While the game is simple, I learned a lot (don't try to handle physics in <span className='code-background'>Update()</span>, kids) and am excited to see what I can produce next. <br/><br/>

                So-named because my friend's only remark when playing was "Man, how big is this cavern?".<br/><br/>

                Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/Cavern-of-Wonder' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/Cavern-of-Wonder</a>
            </p>

            
        </div>

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
        <p className='experience__text'>I provide lecture support and one-on-one mentoring to adults on a full-stack coding bootcamp.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>12.2022</span>;</p>
            <p><span className='blue'>const</span> endDate = null;</p>
        </div>
        <h3 className='experience__title' id='northcoders'>Student on Northcoders Coding Bootcamp</h3>
        <p className='experience__text'>I studied on Northcoders' intensive 13-week full-stack development bootcamp. Their industry-led curriculum provided me with a broad set of technical skills as well as intorducing me to various Agile practices.</p>
        <div className='experience__details code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>11.2021</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>03.2022</span>;</p>
            <p>
                <span className='blue'>const</span> curriculum = &#123;<br/>
                <span >    </span>fundamentals: &#91;<br/>
                <span >        </span>"Node.js",<br/>
                <span >        </span>"HTML",<br/>
                <span >        </span>"CSS",<br/>
                <span >        </span>"Jest",<br/>
                <span >        </span>"Git"<br/>
                <span >    </span>&#93;,<br/>

                <span >    </span>backend: &#91;<br/>
                <span >        </span>"Express",<br/>
                <span >        </span>"Supertest",<br/>
                <span >        </span>"psql",<br/>
                <span >        </span>"APIs",<br/>
                <span >        </span>"CI/CD"<br/>
                <span >    </span>&#93;,<br/>

                <span >    </span>frontend: &#91;<br/>
                <span >        </span>"DOM",<br/>
                <span >        </span>"React",<br/>
                <span >        </span>"UX",<br/>
                <span >        </span>"semantic HTML and accessibility"
                <br/>&#93;<br/>
                <span >    </span>&#125;;
            </p>
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