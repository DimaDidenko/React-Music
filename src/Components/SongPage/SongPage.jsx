import React from 'react';
import SongCard from '../SongCard/SongCard'
import './SongPage.css'

const SongPage = ({songsData, addFavourite, handlerYoutube}) => {
    return (
        <div className='content'>
            {songsData.map((el,index) => <SongCard
                url={el.image[1]['#text']}
                name={el.name}
                artist={el.artist}
                key={el.name}
                type='favouriteSong'
                int='interestingSong'
                index={index}
                checkArr='songsData'
                handlerYoutube={handlerYoutube}
                addFavourite={addFavourite}
            />)}
        </div>
    );
};

export default SongPage;

