import React from 'react'
import spotimg from '../images/spotify.png'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { DataLayerValue } from '../DataLayer';
export default function Sidebar() {
    const [{ playlists }, dispatch] = DataLayerValue();

    return (
        <>

            <div className="sidebar">
                <img className='sidebar_logo' src={spotimg} alt="" />
                <SidebarOption Icon={HomeIcon} title="Home" />
                <SidebarOption Icon={SearchIcon} title="Search" />
                <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
                <br />
                <strong className='sidebar_title'>PLAYLISTS</strong>
                <hr />
                <div className='playlists'>

                    {playlists?.items?.map((playlist) => {
                        return <SidebarOption title={playlist.name} />
                    })}
                </div>
            </div>
        </>

    )
}
