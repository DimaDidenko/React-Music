import React from 'react';
import Logo from '../Logo/Logo';
import Menu from "../Menu/Menu";

import './Sidebar.css'

const Sidebar = ({sidebarShow}) => {
    return (
        <aside className={sidebarShow ? 'aside aside-show' : 'aside'}>
            <Logo/>
            <Menu menu={[
                {text: "Main", link: '#', submenu: false},
                {text: "Interesting", link: '#', submenu: true},
                {text: "Favourites", link: '#', submenu: true},
            ]}/>
        </aside>
    )
};

export default Sidebar;