import React from 'react';
import ArtistCard from '../ArtistCard/ArtistCard'
import './ArtistPage.css'

const ArtistPage = ({artistsData, addFavourite, handlerYoutube}) => {
    return (
        <div className='content'>
            {artistsData.map((el, index) => <ArtistCard
                url={el.image[2]['#text']}
                name={el.name}
                listeners={`Listeners: ${(+el.listeners).toLocaleString()}`}
                key={el.name}
                addFavourite={addFavourite}
                index={index}
                type="favouriteArtist"
                int='interestingArtist'
                checkArr="artistsData"
                handlerYoutube={handlerYoutube}
            />)}
        </div>
    );
};

export default ArtistPage;
