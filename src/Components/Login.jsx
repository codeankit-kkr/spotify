import React from 'react'
import spotifyimg from '../images/spotify.png'
import { loginUrl } from '../spotify'
export default function Login() {

    return (
        <div className='login_div'>
            <div className="img_spot">
                <img className='spotify_image' src={spotifyimg} alt="spotify" />
            </div>
            <div className='btn_div'>
                <button className='btn'>
                    <a href={loginUrl}>
                        LOGIN WITH SPOTIFY

                    </a>
                </button>
            </div>
        </div>
    )
}
