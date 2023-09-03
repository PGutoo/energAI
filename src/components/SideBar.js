import logo from '../assets/logos/image 26.png';
import home from '../assets/icons/Group 9293.png';
import graph from '../assets/icons/Group 9251.png';
import line from '../assets/icons/Line_up.png';
import settings from '../assets/icons/Setting_line.png';
import on from '../assets/icons/On_button.png';

export default function SideBar() {
    return (
        <aside className='side-bar'>
            <img src={logo} alt='logo'/>
            <div className='middle-icons'>
                <img src={home} alt='icon'/>
                <img src={graph} alt='icon'/>
                <img src={line} alt='icon'/>
                <img src={settings} alt='icon'/>
            </div>
            <img src={on} alt='icon'/>
        </aside>
    );
};