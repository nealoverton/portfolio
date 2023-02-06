import CodeDemo from './CodeDemo.js';
import ViewportBlock from './ViewportBlock.js';
import { Link } from 'react-router-dom';

const Main = ({setHighlightedSection}) => {
    const formatSkill = (name, description) => {
        return <>
            <span><span className='red'>nealOverton</span><span className='comment'>&#40;&#40;</span></span>
            <span className='blue'>{name}</span>
            <span className='comment'>&#41; =&#62; &#123; &#47;*</span> 
            {description}
            <span className='comment'>*&#47; &#125; &#41;<br/></span>
        </>
    }


    return <div className='Main'>
        <h1 className='Main__title'>Dev.prototype.nealOverton()</h1>
        <p className='Main__intro'>
        <span className='code code-background'><b>Neal Overton</b></span> is a <b>full stack dev</b> and <b>bootcamp tutor</b>. He is prepared to write masses of code for the sake of a visual pun.
        </p>

        <ViewportBlock 
            onEnterViewport={() => setHighlightedSection('tryme')}
        />
        <h2 className='Main__subtitle' id='tryme'>Try me</h2>
        
        <CodeDemo/>
        
        <h2 className='Main__subtitle' id='skills'>Skills</h2>
        <div className='skills-box'>
            <ViewportBlock onEnterViewport={() => setHighlightedSection('skills')} />

            <p className='skills-box__text code'>
                <span className='comment' id='languages'>&#47;&#47;  Languages</span><br/>
                {formatSkill("JavaScriptES6", "I tutor bootcamp students from their first steps with variables and operators, through functional and object-oriented programming, and ultimately on to creating complex, well-tested applications")}
                {formatSkill("Java", "self-taught from the fundamentals of programming up to building REST APIs with Spring Boot. Take a look at the Inventory API in the projects section below")}
                {formatSkill("HTML", "striving to keep things semantic and accessible")}
                {formatSkill("CSS", "test this page's responsiveness with your browser's dev tools")}
                {formatSkill("C#", "some experience writing Unity scripts")}
                {formatSkill("Dart", "some experience building simple Flutter apps")}
            </p>
            

            <ViewportBlock onEnterViewport={() => setHighlightedSection('skills')} />

            <p className='skills-box__text code'>
                <br/><span id='frameworks' className='comment'>&#47;&#47;  Frameworks</span><br/>
                {formatSkill("React", "extensive experience, take a look at examples in the projects section below (as well as this site itself)")}
                {formatSkill("Jest", "I tutor bootcamp students in the ways of TDD, focusing on unit testing with mock functions and spies")}
                {formatSkill("Spring Boot", "self-taught, you can find an example of my progress in the Inventory API in the projects section below. This is a REST API using JPA and Hibernate to manage a PSQL database with many-to-many relationships")}
                {formatSkill("Flutter", "experimented with some basic apps")}

                <br/><span id='other' className='comment'>&#47;&#47;  Other</span><br/>
                {formatSkill("PostgreSQL", "Check out the Tablehog API and Inventory API in the projects section below, both of which use a psql database")}
                {formatSkill("Unity", "I've been enjoying learning by making some simple games, check out my first attempt, Cavern of Wonder, below")}
            </p>
        </div>
        
        <h2 className='Main__subtitle' id='projects' >Projects</h2>
        <h3 className='Main__project-title code code-background' id='tablehog'>Tablehog</h3>
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

        <h3 className='Main__project-title code code-background' id='inventory'>Inventory API</h3>

        <div className='Main__project-text-container'>
            <img src='spring-boot-api.png' className='Main__project__img' alt='Screenshot of JSON output from Spring Boot inventory API'/>
            <p className='Main__project-text'>
                Current WIP. A Java Spring Boot REST API for managing stock. Next step is to add store locations with many-to-many relationships to stock items<br/><br/>

                Github repo: <a className='Main__project-text__link' href='https://github.com/nealoverton/spring-boot-api' target={'_blank'} rel='noreferrer'>https://github.com/nealoverton/spring-boot-api</a>
            </p>
        </div>

        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>

        <h3 className='Main__project-title code code-background' id='meeting'>Meeting Room Booker</h3>

        <div className='Main__project-text-container'>
            <img src='meeting-screenshot.png' className='Main__project__img' alt='Screenshot of calendar from meeting room booking app'/>
            <p className='Main__project-text'>
                A React web app developed to improve the quality of life in my partner's office. It utilises the FullCalendar library for the calendar functionality and Firebase for the back end. <br/><br/>

                Github repo: <a className='Main__project-text__link' href='https://github.com/coramarcu/book-a-meeting' target={'_blank'} rel='noreferrer'>https://github.com/coramarcu/book-a-meeting</a>
            </p>
        </div>
        
        <ViewportBlock onEnterViewport={() => setHighlightedSection('projects')}/>
        <h3 className='Main__project-title code code-background' id='cavern'>Cavern of Wonder</h3>
        
        <div className='Main__project-text-container'>
            <img src='cavern-screenshot.png' className='Main__project__img' alt='Screenshot of hot air balloon and rocky obstacles from cavern of wonder game'/>
            <p className='Main__project-text'>
                My first foray into Unity one weekend: navigate a hot air balloon through a procedurally-generated maze of obstacles. While the game is simple, I learned a lot (don't try to handle physics in <span className='code code-background'>Update()</span>, kids) and am excited to see what I can produce next. <br/><br/>

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
        <div className='experience__details code code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>12.2022</span>;</p>
            <p><span className='blue'>const</span> endDate = null;</p>
        </div>
        <h3 className='experience__title' id='northcoders'>Student on Northcoders Coding Bootcamp</h3>
        <p className='experience__text'>I studied on Northcoders' intensive 13-week full-stack development bootcamp. Their industry-led curriculum provided me with a broad set of technical skills as well as introducing me to various Agile practices.</p>
        <div className='experience__details code code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>11.2021</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>03.2022</span>;</p>
            <ViewportBlock onEnterViewport={() => setHighlightedSection('experience')}/>
            <p>
                <span className='blue'>const</span> curriculum = &#123;<br/>
                <span >    </span>fundamentals: &#91;<br/>
                <span >        </span><span className='green'>"Node.js"</span>,<br/>
                <span >        </span><span className='green'>"HTML"</span>,<br/>
                <span >        </span><span className='green'>"CSS"</span>,<br/>
                <span >        </span><span className='green'>"Jest"</span>,<br/>
                <span >        </span><span className='green'>"Git"</span><br/>
                <span >    </span>&#93;,<br/>

                <span >    </span>backend: &#91;<br/>
                <span >        </span><span className='green'>"Express"</span>,<br/>
                <span >        </span><span className='green'>"Supertest"</span>,<br/>
                <span >        </span><span className='green'>"psql"</span>,<br/>
                <span >        </span><span className='green'>"APIs"</span>,<br/>
                <span >        </span><span className='green'>"CI/CD"</span><br/>
                <span >    </span>&#93;,<br/>

                <span >    </span>frontend: &#91;<br/>
                <span >        </span><span className='green'>"DOM"</span>,<br/>
                <span >        </span><span className='green'>"React"</span>,<br/>
                <span >        </span><span className='green'>"UX"</span>,<br/>
                <span >        </span><span className='green'>"semantic HTML and accessibility"</span><br/>
                <span >    </span>&#93;<br/>
                &#125;;
            </p>
        </div>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('experience')}/>
        <h3 className='experience__title' id='trading'>Sports Trading Consultant</h3>
        <p className='experience__text'>I monitored online gambling systems and was responsible for preventing and investigating potentially costly odds discrepancies. Working closely with the lead engineer on this project and helping out with UI design and bugfixing is what drew me towards coding.</p>
        <div className='experience__details code code-background'>
            <p><span className='blue'>const</span> startDate = <span className='green'>04.2015</span>;</p>
            <p><span className='blue'>const</span> endDate = <span className='green'>11.2022</span>;</p>
            <p>console.<span className='red'>log</span>(status);  <span className='comment'>&#47;&#47;  self-employed</span></p>
        </div>
        <ViewportBlock onEnterViewport={() => setHighlightedSection('experience')}/>
    </div>
}

export default Main;