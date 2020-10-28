import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider'
import MainAvatar from "./images/MainAvatar.png"


function Header({theirname}) {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png" 
                    alt = ""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Fakebook' type='text' />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleSharpIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={MainAvatar}/>
                    <h4>{theirname}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                
                <IconButton>
                    <ForumIcon />
                </IconButton>
                
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
