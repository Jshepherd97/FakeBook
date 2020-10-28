import React from "react";
import { Avatar } from "@material-ui/core";
import "./Guide.css";
import guideInputs from "./guideInputs";
import TourGuidePic from "./images/TourGuidePic.png"

function InFeedGuide({
  image,
  message,
  option1,
  option2,
  setInputId,
  inputId
  
  // addposts
}) {
  // function submitPost() {
  //   addposts({ message: "Sucks bruh" });
  // }

  return (
    <div className="guide_body">
      <div className="guide_top">
        <Avatar
          src={TourGuidePic}
          className="guide_avatar"
        />
        <div className="guide_topinfo">
          <h3>{"Freddy the FakeBook tour guide"}</h3>
          <p>{"just now"}</p>
        </div>
      </div>

      <div className="guide_message">
        <p>{message}</p>
      </div>

      <div className="guide_image">
        <img src={image} alt="" />
      </div>

      <div className={`guide_options ${option1 ? "" : "hide"}`}>
        <div
          onClick={() => {
            setInputId(guideInputs[inputId].child1);
          }}
          className="guide_option"
        >
          <p>{option1}</p>
        </div>
        <div className={`guide_vr_div ${option2 ? "" : "hide"}`}></div>
        <div
          className={`guide_option ${option2 ? "" : "hide"}`}
          onClick={() => {
            setInputId(guideInputs[inputId].child2);
          }}
        >
          <p>{option2}</p>
        </div>
      </div>
      {/* <button onClick={submitPost}>Add Post</button> */}
    </div>
  );
}

export default InFeedGuide;

// export inFeedGuide1;
