import React from 'react';
import './Youtube.css'

const Youtube = ({youtube, videoId}) => {
    return (
        <div className='player'>
            <p className='close' onClick={youtube}>&#10006;</p>
            <iframe className='frame'
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen>
            </iframe>
        </div>
    );
};

export default Youtube;












