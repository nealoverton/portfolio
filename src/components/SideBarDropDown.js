import SideBar from "./SideBar";
import "../styles/SideBarDropDown.css";

const SideBarDropDown = ({ sideBarDropDownIsOpen, setSideBarDropDownIsOpen, highlightedSection }) => {

    return (
        <div className={sideBarDropDownIsOpen ? "SideBarDropDown expanded" : "SideBarDropDown closed"}>
            <div>
                <SideBar isResponsive={false} highlightedSection={highlightedSection}/>
            </div>
            
            <div className={sideBarDropDownIsOpen ? "dropdown-background expanded" : "dropdown-background closed"} onClick={() => setSideBarDropDownIsOpen(false)}/>
        </div>
    )
}

export default SideBarDropDown;