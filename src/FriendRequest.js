import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './FriendRequest.css';
import guideInputs from "./guideInputs";

function FriendRequest({
    setFr,
    showFr,
    inputId,
    setInputId
})

{


    const [fr1vis, setFr1vis] = useState(false);
    const [fr2vis, setFr2vis] = useState(false);


    useEffect(() => {
        if (inputId === "friendRequest" && !fr1vis) {
        setFr1vis(true);
        console.log(fr1vis);
        }
    }, [fr1vis, inputId]);

    useEffect(() => {
        if (inputId === "friendRequest" && !fr2vis) {
        setFr2vis(true);
        console.log(fr2vis);
        }
    }, [fr2vis, inputId]);

    useEffect(() => {
        if (inputId === "successFr" || inputId === "successFr2") {
            console.log("running1");
            if (!fr2vis && !fr1vis) {
                setInputId("Finish1")
            }}

        else if (inputId === "errorFr") {
                console.log("running2");
                    if (!fr2vis && !fr1vis) {
                setInputId("Finish1")
            }
            }
        }
    , [fr2vis, inputId]);

    return (
        
        
        <div>
            {( fr1vis || fr2vis) && (
            <div className='friendRequest' id = "friends">
                <div>
                    <div className="friends_title">
                        <p>Friends</p>
                    </div>
                    <div className="newrequests_title">
                        <p>New Requests</p>
                    </div>
                </div>

                {fr1vis && (
                <div className="requestbox">
                    <div className="avatarwrapper">
                        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvNDJPHZa-dMZmadq2YykGcmsqLpDTfIetFg&usqp=CAU' />
                    </div>
                    <div className="namewrapper">
                        <div className="buttonname">
                            <div className="name">
                                <p>Dan the Deer</p>
                            </div>
                            <div className="friends">
                                <p>100 mutual friends</p>
                            </div>
                        </div>
                        <div className="buttonwrapper">
                            <div className="confirm_button"
                                    onClick={() => {
                                    setInputId("successFr");
                                    setFr1vis(false)
                                    }}>
                                <p>Confirm</p>
                            </div> 
                            <div className="delete_button"
                            onClick={() => {
                                    setInputId("errorFr");
                                    setFr1vis(false)
                                    }}>
                                <p>Delete</p>
                            </div> 
                        </div>

                    </div>

                </div>)}

                {fr2vis && (
                <div className="requestbox">
                    <div className="avatarwrapper">
                        <Avatar src='data:image/png;base64,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' />
                    </div>
                    <div className="namewrapper">
                        <div className="buttonname">
                                <div className="name">
                                    <p>Simon the Snake</p>
                                </div>
                                <div className="friends">
                                    <p>No mutual friends</p>
                                </div>
                            </div>
                            <div className="buttonwrapper">
                                <div className="confirm_button"
                                onClick={() => {
                                    setInputId("errorFr2");
                                    }}>
                                    <p>Confirm</p>
                                </div>
                                <div className="delete_button"
                                onClick={() => {
                                    setInputId("successFr2");
                                    setFr2vis(false)
                                    }}>                                
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
                </div>)}

            </div>
            )}
        </div>



    )
}

export default FriendRequest
