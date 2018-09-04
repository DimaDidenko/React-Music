import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './Chart.css'

const Chart = props => {
    return (
        <div className='chart'>
            <ul className="chart-list">
                <li>
                    <NavLink exact to='/' className="chart-list__item" activeClassName="selected">Artists</NavLink>
                </li>
                <li>
                    <NavLink to='/album' className="chart-list__item" activeClassName="selected">Albums</NavLink>
                </li>
                <li>
                    <NavLink to='/songs' className="chart-list__item" activeClassName="selected">Songs</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Chart;

