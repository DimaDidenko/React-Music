import React from 'react';
import im from './orig.png'
import './ArtistCard.css'
import youtube from './youtube.svg'
import favorite from './favorite.svg'
import add from './add.svg'

const ArtistCard = ({name, listeners, url, addFavourite, index, type, checkArr, int, handlerYoutube}) => {
    return (
        <div className="artist-card">
            <figure>
                <img src={url !== "" ? url : im} alt="artist" className="artist-card__img"/>
                <figcaption>
                    <p className="artist-card__name">{name}</p>
                    <p className="artist-card__number-albums">{typeof listeners === 'object' ? listeners.name : listeners}</p>
                </figcaption>
                <div className='card__overlay'>
                    <img src={favorite}
                         alt="favourite"
                         className='card__svg'
                         onClick={addFavourite}
                         data-index={index}
                         data-arr-for-add={type}
                         data-check={checkArr}
                    />
                    <img src={add}
                         alt="add"
                         className='card__svg'
                         onClick={addFavourite}
                         data-index={index}
                         data-arr-for-add={int}
                         data-check='artistsData'
                    />
                    <img src={youtube}
                         alt="youtube"
                         className='card__svg'
                         onClick={handlerYoutube}
                         data-query={`${typeof listeners === 'object' ? listeners.name : listeners.includes('Listeners') ? '' : listeners} ${name}`}
                    />
                </div>
            </figure>
        </div>
    );
};

export default ArtistCard;

