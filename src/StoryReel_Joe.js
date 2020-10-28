import React from 'react'
import './StoryReel.css'
import Story from './Story'
import Dog from "./images/Dog.png";
import Walrus from "./images/Walrus.png";
import Shark from "./images/Shark.png";
import Rabbit from "./images/Rabbit.png";
import Polar from "./images/Polar.png";

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='https://cdn.dribbble.com/users/4252646/screenshots/7725994/image.png'
                profileSrc= {Walrus}
                title='Wilfred'
            />
            <Story 
                image='https://cdn.dribbble.com/users/2147952/screenshots/5202053/wrzesie_.jpg'
                profileSrc={Rabbit}
                title='Roger'
            />
            <Story 
                image='https://cdn.dribbble.com/users/518045/screenshots/14377191/media/3738320e203453f00ea38c3d6f2046e1.png'
                profileSrc={Polar}
                title='Peter'
            />
            <Story 
                image='https://cdn.dribbble.com/users/529301/screenshots/13790330/media/497929111f4df389587278cde7f169ce.jpg'
                profileSrc={Dog}
                title='Billy'
            />
            <Story 
                image='https://cdn.dribbble.com/users/518045/screenshots/10474900/media/7c882f76fa14db8d7610dfaa22bc1143.png'
                profileSrc={Shark}
                title='Sid'
            />
        </div>
    )
}

export default StoryReel
