import { useState } from 'react';

const CodeDemo = () => {

    const [outputIsVisible, setOutputIsVisible] = useState(false);

    const codeDemoText = <p className='code-demo__body__code-field__text'>
        <span className='comment'>&#47;&#47;  create a new instance of Dev</span><br/>
        <span className='blue'>const</span> newDev = new <span className='red'>Dev</span>();<br/><br/>
        <span className='comment'>&#47;&#47;  call .nealOverton() with valid start date</span><br/>
        <span className='blue'>const</span> data = newDev.<span className='red'>nealOverton</span>(<span className='green'>2019</span>);<br/><br/>
        console.<span className='red'>log</span>(data);<br/>
        <span className='comment'>&#47;&#47;  expected output: data specific to Neal Overton</span><br/>
    </p>
    
    const outputText =  <p className='code-demo__output-row__output-text'>
        &#62; I started teaching myself Java in late 2019 using online resources. Yes, that was an intense place to start and yes, I could write an abstract class before I could make a simple static web page.<br/>
        I loved it though and completing the Northcoders Coding Bootcamp in 2022 gave me a more rounded set of skills. Take a look below for more details.
    </p>;

    return (
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
    )
}

export default CodeDemo;