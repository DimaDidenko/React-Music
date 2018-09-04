import React from 'react';
import './Search.css'
import Youtube from "../Youtube/Youtube"
import Chart from '../Chart/Chart'


const Search = ({value, onChange, searchData, youtube, YuuTubeOpen, videoId, sidebarChange}) => {
    return (
        <div className="search">
            {YuuTubeOpen ? <Youtube youtube={youtube} videoId={videoId}/> : null}
            <form method="post" className="search__form" onSubmit={searchData}>
                <input type="text"
                       className="search__input"
                       placeholder="Search music"
                       value={value}
                       onChange={onChange}
                       name='searchValue'/>
                <input type="submit" value="search" className="search__btn"/>
                <span className='burger' onClick={sidebarChange}>☰</span>
            </form>
            <Chart/>
        </div>
    );
};

export default Search;
