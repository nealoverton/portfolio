import { useState } from 'react';
import '../styles/styles.js';

const Main = () => {
    const nealOverton = <span className='red'>nealOverton</span>
    const blockOpen = <span>&#62; &#123; &#47;</span>;
    const blockClose = <span>&#47; &#125;</span>;

    const introText = <p className='Main__intro'>
        <span className='code-background'><b>Neal Overton</b></span> is a <b>full stack dev</b> and <b>bootcamp tutor</b>. He is prepared to write masses of code for the sake of a visual pun.
    </p>

    const codeDemoText = <p>
        <span className='comment'>&#47;&#47;  create a new instance of Dev</span><br/>
        <span className='blue'>const</span> newDev = new <span className='red'>Dev</span>();<br/><br/>
        <span className='comment'>&#47;&#47;  call and store .nealOverton() with valid start date</span><br/>
        <span className='blue'>const</span> data = newDev.{nealOverton}(<span className='green'>2019</span>);<br/><br/>
        console.<span className='red'>log</span>(data);<br/>
        <span className='comment'>&#47;&#47;  expected output: data specific to Neal Overton</span><br/>
    </p>
    
    const outputText =  <p className='code-demo__output-row__output-text'>
        &#62; I started teaching myself Java in 2019 using online resources. Yes, that was an intense place to start and yes, I could write an abstract class before I could make a simple static web page.<br/>
        I loved it though and completing the Northcoders Coding Bootcamp in 2022 gave me a more rounded set of skills. Take a look below for more details.
    </p>;
   

    const skillsText = <p className='skills-box__text'>
        <span className='comment'>&#47;&#47;  Languages</span><br/>
        {nealOverton}((<span className='blue'>JavaScriptES6</span>, <span className='blue'>Node.js</span>) ={blockOpen}* advanced, used throughout bootcamp and beyond *{blockClose})<br/>
        {nealOverton}((<span className='blue'>Java</span>) ={blockOpen}* self-taught up to advanced concepts like interfaces and generics*{blockClose})<br/>
        {nealOverton}((<span className='blue'>HTML</span>) ={blockOpen}* ... *{blockClose})<br/>
        {nealOverton}((<span className='blue'>CSS</span>) ={blockOpen}* ... *{blockClose})<br/>
        {nealOverton}((<span className='blue'>C#</span>) ={blockOpen}* experience is limited to experimenting with Unity, but my Java experience means everything seems fairly familiar *{blockClose})<br/>
        {nealOverton}((<span className='blue'>Dart</span>) ={blockOpen}* experience is limited to experimenting with Flutter, but my Java experience means everything seems fairly familiar *{blockClose})<br/>
        <br/><span className='comment'>&#47;&#47;  Frameworks</span><br/>
        {nealOverton}((<span className='blue'>React</span>) ={blockOpen}* extensive experience, take a look at examples below (including this one) *{blockClose})<br/>
        {nealOverton}((<span className='blue'>Flutter</span>) ={blockOpen}* experimented with some basic apps, love how the layout and styling is done right there as you place the widget *{blockClose})<br/>
        <br/><span className='comment'>&#47;&#47;  Other</span><br/>
        {nealOverton}((<span className='blue'>PostgreSQL</span>) ={blockOpen}* example below *{blockClose})<br/>
        {nealOverton}((<span className='blue'>Unity</span>) ={blockOpen}* example below *{blockClose})<br/>
    </p>;
    

    const [outputIsVisible, setOutputIsVisible] = useState(false);


    return <div className='Main'>
        <h1 className='Main__title'>Dev.prototype.nealOverton()</h1>
        {introText}
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
        <h2 className='Main__subtitle'>Skills</h2>
        <div className='skills-box'>
            {skillsText}
        </div>
        <h2 className='Main__subtitle'>Projects</h2>
    </div>
}

export default Main;