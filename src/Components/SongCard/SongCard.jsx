import React from 'react';
import smallImage from './react.png'
import './SongCard.css'
import youtube from './youtube.svg'
import favorite from './favorite.svg'
import add from './add.svg'

const SongCard = ({name, artist, url, addFavourite, index, type, checkArr, int, handlerYoutube}) => {
    return (
        <div className="songs-item">
            <figure className="songs-item__figure">
                <img className="songs-item__img" src={url !== '' ? url : smallImage} alt="image"/>
                <figcaption className="songs-item__discription">
                    <p className="songs-item__music-name">{name}</p>
                    <p className="songs-item__singer">{typeof artist === 'object' ? artist.name : artist}</p>
                </figcaption>
                <div className='song__overlay'>
                    <img src={favorite}
                         alt="favourite"
                         className='song__svg'
                         onClick={addFavourite}
                         data-index={index}
                         data-arr-for-add={type}
                         data-check={checkArr}
                    />
                    <img src={add}
                         alt="add"
                         className='song__svg'
                         onClick={addFavourite}
                         data-index={index}
                         data-arr-for-add={int}
                         data-check='songsData'
                    />
                    <img src={youtube}
                         alt="youtube"
                         className='song__svg'
                         onClick={handlerYoutube}
                         data-query={`${typeof artist === 'object' ? artist.name : artist} ${name}`}
                    />

                </div>
            </figure>
        </div>
    );
};

export default SongCard;
















