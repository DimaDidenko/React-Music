import React from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import '../ArtistPage/ArtistPage.css';

const AlbumPage = ({albumData, addFavourite, handlerYoutube}) => {
    return (
        <div className='content'>
            {albumData.map((el, index) => <ArtistCard
                url={el.image[2]['#text']}
                name={el.name}
                listeners={el.artist}
                key={el.name + el.url}
                type='favouriteAlbum'
                int='interestingAlbum'
                index={index}
                checkArr='albumData'
                handlerYoutube={handlerYoutube}
                addFavourite={addFavourite}
            />)}
        </div>
    );
};

export default AlbumPage;
