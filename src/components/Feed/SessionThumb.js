import React from "react";
import './SessionThumb.scss';

const SessionThumb = (props) => {

    console.log('SessionThumb',props)
    let sessionData=props.sessionData;
    return <div className="thumb">
    <div className="img-div">
    <img  src={sessionData.img_id} ></img>
    </div>
    <div>
    <div>{sessionData.name}</div>
    <div>{sessionData.description}</div>
    <div>{sessionData.start_date}</div>

    </div>
      
    </div>
}

export default SessionThumb