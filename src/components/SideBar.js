import '../styles/styles.js';

const SideBar = () => {
    return <div className='SideBar'>
        <h2 className='SideBar__title'>Related Topics</h2>
        <h3 className='SideBar__subtitle'>Skills</h3>
        <p>Dev.prototype.ES6/Node.js()</p>
        <p>Dev.prototype.HTML5()</p>
        <p>Dev.prototype.CSS3()</p>
        <p>Dev.prototype.React()</p>
        <p>Dev.prototype.Java()</p>
        <p>Dev.prototype.C#()</p>
        <p>Dev.prototype.Unity()</p>
        <p>Dev.prototype.PostgreSQL()</p>

        <h3 className='SideBar__subtitle'>Projects</h3>
        <p>Dev.prototype.tablehog()</p>
        <p>Dev.prototype.meetingRoomBooker()</p>
        <p>Dev.prototype.cavernOfWonder()</p>

        <h3 className='SideBar__subtitle'>Experience</h3>
        <p>Dev.prototype.tutorManchesterCodes()</p>
        <p>Dev.prototype.northcodersCodingBootcamp()</p>
        <p>Dev.prototype.sportsTradingConsultancy()</p>
    </div>
}

export default SideBar;