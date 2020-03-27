import React from "react";
import SessionThumb from './SessionThumb';
import './Sessions.scss';

const Sessions = (obj) => {

    console.log('sessionsData',obj)
    return <div className="session-container" >
    {
        obj.sessionsData.map((itemData)=>
        {
            return <SessionThumb key={itemData.id} sessionData={itemData}></SessionThumb>
        })
        
    }

    </div>
}

export default Sessions;
