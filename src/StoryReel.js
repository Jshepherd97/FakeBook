import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/d/d9/Arcimboldo%2C_Giuseppe_%28workshop%29_-_Winter.jpg'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/2/21/Giuseppe_Arcimboldo_-_The_Cook_-_WGA00840.jpg'
                title='James Dean'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/7/70/Puzzling_picture_postcard.jpg'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/f/f9/Ion_Theodorescu-Sion_-_Iluzie_optic%C4%83%2C_Furnica%2C_30_oct_1908.JPG'
                title='Billy'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/6/67/Unknown_painter_-_Allegorie_des_Fr%C3%BChlings_-_17th_century.jpg'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/c/c6/200508_Firework_of_Lake_of_Annecy_festival_%28363%29.jpg'
                title='Kylie'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/f/fd/Wait_for_Me%2C_Daddy_Statue.jpg'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/2/20/Disneyworld_fireworks_-_0219.jpg'
                title='Kanye'
            />
            <Story 
                image='https://upload.wikimedia.org/wikipedia/commons/8/8c/9132014_42537_PM.png'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/3/31/Alex_Dodge_2012_right.jpg'
                title='Sarah'
            />
        </div>
    )
}

export default StoryReel
