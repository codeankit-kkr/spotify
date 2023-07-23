import React from 'react'
import Header from './Header'
import { DataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { More } from '@mui/icons-material';
import Songs from './Songs';
export default function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = DataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className='body_shuffle' />
                    <FavoriteIcon />
                    <MoreHorizIcon />
                </div>
            </div>
            <div>
                {discover_weekly?.tracks.items.map((item) => {
                    return <Songs track={item.track} />
                })}
            </div>

        </div>
    )
}
