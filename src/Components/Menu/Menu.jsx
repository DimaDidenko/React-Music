import React from 'react';
import PropTypes from 'prop-types';
import Submenu from '../Submenu/Submenu'
import './Menu.css';

const Menu = ({menu}) => {
    return (
        <ul>
            {menu.map(el => !el.submenu ?
                <li className="menu__item" key={el.text}>
                    <a href={el.link} className="menu__link">{el.text}</a>
                </li>
                :
                <li className="menu__item" key={el.text}>
                    <a href={el.link} className="menu__link">{el.text}</a>
                    <Submenu sub={[
                        {text: 'Artist', link: `${el.text}Artist`, parentKey: el.text},
                        {text: 'Album', link: `${el.text}Album`, parentKey: el.text},
                        {text: 'Songs', link: `${el.text}Song`, parentKey: el.text},
                    ]}/>
                </li>)}
        </ul>
    )
};

Menu.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            submenu: PropTypes.bool.isRequired,
        })
    )
};

export default Menu;