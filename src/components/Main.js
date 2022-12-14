import '../styles/styles.js';

const Main = () => {
    const codeText = "const newDev = new Dev(2020);\n \t \n \t.then((data) => console.log(data));"

    const outputText = "> Put some stuff here";


    return <div className='Main'>
        <h1 className='Main__title'>Dev.prototype.nealOverton()</h1>
        <p>Neal Overton is a full stack dev and bootcamp tutor. He likes coding.</p>
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
                </div>
                <div className='code-demo__body__code-field'>
                    <p>
                    <span className='blue'>const</span> newDev = new <span className='red'>Dev</span>(<span className='green'>2020</span>);
                    </p>
                </div>
            </div>
            <div className='code-demo__output-row'>
                <div className='code-demo__output-row__button-column'>
                    <button className='code-demo__output-row__button'>Run &#62;</button>
                    <button className='code-demo__output-row__button'>Reset</button>
                </div>
                <div className='code-demo__output-row__output-box'>
                    <p className='code-demo__output-row__output-text'>{outputText}</p>
                </div>
            </div>
        </div>
        <h2 className='Main__subtitle'>Skills</h2>
        <div></div>
    </div>
}

export default Main;