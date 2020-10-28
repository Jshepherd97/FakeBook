import React from 'react'
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import './Post_Joe.css'
import guideInputs from "./guideInputs";


function Post({profilePic, image, username, timestamp, message, comment1, comment1username, comment2, comment2username, showreport, setInputId, inputId, showBlock, comment1profilePic, comment2profilePic}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar'/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post__bottom">
                    <p>{message}</p>
                </div>
                <div className="post__image">
                    <img src={image} alt=''/>
                </div>
                <div className="post__options">
                    <div className="post__option">
                        <ThumbUpIcon /> 
                        <p>Like</p>
                    </div>
                    <div className="post__option">
                        <ChatBubbleOutlineOutlinedIcon /> 
                        <p>Comment</p>
                    </div>
                    <div className="post__option">
                        <NearMeIcon /> 
                        <p>Share</p>
                    </div>
                    <div className="post__option">
                        <AccountCircleIcon />
                        <ExpandMoreOutlinedIcon /> 
                    </div>
                </div>
                <div className="post__input">
                    <ChatBubbleOutlineOutlinedIcon />
                    <input placeholder='Make a comment' type='text' />
                </div>
                <div className={`post__comment ${comment1 ? "" : "hide"}`}>
                <Avatar src={comment1profilePic} className='post__avatar'/>
                <div className="post__commentinput">
                <div className="post__commentinfo">
                    <h3>{comment1username}</h3>
                    <p>{comment1}</p>
                </div>
                </div>
                </div>

                <div className={`post__comment ${comment2 ? "" : "hide"}`}>
                <Avatar src={comment2profilePic} className='post__avatar'/>
                <div className="post__commentinput">
                <div className="post__commentinfo">
                    <h3>{comment2username}</h3>
                    <p>{comment2}</p>
                </div>
                </div>

                {showreport && (
                <Button className="report_button"
                onClick={() => {
                setInputId(guideInputs[inputId].child1);
                }}>
                Report
                </Button>
                )}

                {showBlock && (
                <Button className="report_button"
                onClick={() => {
                setInputId(guideInputs[inputId].child1);
                }}>
                Block
                </Button>
                )}

                </div>
        </div>
    )
}

export default Post
