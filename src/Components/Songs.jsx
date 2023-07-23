import React from 'react'

export default function Songs({ track }) {
    return (
        <>
            <div className="song_row">
                <img className='song_rowalbum' src={track.album.images[0].url} alt="" />
                <div className="song_rowinfo">
                    <h1>{track.name}</h1>
                    <p>
                        {track.artists.map((artist) => {
                            return (artist.name)
                        }).join(",")}
                        {track.album.name}
                    </p>
                </div>
            </div>
        </>
    )
}
