import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { DataLayerValue } from '../DataLayer';
export default function Header() {
    const [{ user }, dispatch] = DataLayerValue();
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input placeholder='Search for Artists, Songs' type='text' />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
