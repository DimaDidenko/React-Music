import React from 'react';
import {NavLink} from 'react-router-dom';
import './Logo.css';

const Logo = () => {
    return (<NavLink to="/" className="logo"><h1 className="title">Logo</h1></NavLink>)
};

export default Logo;