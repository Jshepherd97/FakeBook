import React, { useState, useEffect } from 'react'
import './Feed_Joe.css'
import StoryReel from './StoryReel_Joe'
import MessageSender from './MessageSender_Joe'
import Post from './Post_Joe'
import InFeedGuide from "./Guide.jsx";
import guideInputs from "./guideInputs";
import postlist from "./posts_Joe.js";
import ourPost from "./ourPost.js";

function Feed({
    setInputId,
    inputId, 
    theirname
    }) {
    const [posts, setPosts] = useState([]);
    const [showPost, setPostVisibility] = useState(false);
    const [showPosts, setPostsVisibility] = useState(false);

    useEffect(() => {
        if (inputId === "picPosted" && !showPost) {
        setPostVisibility(true);
        }
    }, [showPost, inputId]);
    
    useEffect(() => {
        if (inputId === "intro2" && !showPosts) {
        setPostsVisibility(true);
        }
    }, [showPosts, inputId]);

   return (
        <div className = 'feed'>
        {showPosts && (
        <StoryReel />
        )}
        <MessageSender theirname={theirname}/>
        {showPost && (
        <Post
          setInputId={setInputId}
          inputId={inputId}
          message={ourPost[inputId].message}
          image={ourPost[inputId].image}
          username={theirname}
          timestamp={ourPost[inputId].timestamp}
          profilePic={ourPost[inputId].profilePic}
          comment1={ourPost[inputId].comment1}
          comment1username={ourPost[inputId].comment1username}
          comment2={ourPost[inputId].comment2}
          comment2username={ourPost[inputId].comment2username}
          showreport={ourPost[inputId].showreport}
          showBlock={ourPost[inputId].showBlock}
          comment1profilePic = {ourPost[inputId].comment1profilePic}
          comment2profilePic = {ourPost[inputId].comment2profilePic}
        />
      )}

      <InFeedGuide
         setInputId={setInputId}
         inputId={inputId}
         key={guideInputs[inputId].id}
         identifier={guideInputs[inputId].id}
         message={guideInputs[inputId].message}
         option1={guideInputs[inputId].option1}
         option2={guideInputs[inputId].option2}
         image={guideInputs[inputId].imgURL}
       />
        {showPosts === false && (
       <div className = {"grey_box"} />
        )}

      {showPosts && (
        <Post
          key={postlist[0].key}
          image={postlist[0].imgURL}
          message={postlist[0].message}
          username={postlist[0].username}
          timestamp={postlist[0].timestamp}
          profilePic={postlist[0].profilePic}
        />
      )}

      {showPosts && (
        <Post
          key={postlist[1].key}
          image={postlist[1].imgURL}
          message={postlist[1].message}
          username={postlist[1].username}
          timestamp={postlist[1].timestamp}
          profilePic={postlist[1].profilePic}
        />
      )}

      {showPosts && (
        <Post
          key={postlist[2].key}
          image={postlist[2].imgURL}
          message={postlist[2].message}
          username={postlist[2].username}
          timestamp ={postlist[2].timestamp}
          profilePic={postlist[2].profilePic}
        />
      )}

      {showPosts && (
        <Post
          key={postlist[3].key}
          image={postlist[3].imgURL}
          message={postlist[3].message}
          username={postlist[3].username}
          timestamp ={postlist[3].timestamp}
          profilePic={postlist[3].profilePic}
        />
      )}

       </div>
   )}



// return (
//     <div className='feed'>
//         {posts.map(post => (
//             <Post 
//                 key={post.data.id}
//                 profilePic={post.data.profilePic}
//                 message={post.data.message}
//                 timestamp={post.data.timestamp}
//                 username={post.data.username}
//                 image={post.data.image}
//             />
//         ))}
//     </div>
// )


export default Feed
