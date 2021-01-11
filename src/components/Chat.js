import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Chat.css';

import Avatar from '@material-ui/core/Avatar';

const Chat = (props) => {
    return (
        <Link to={`/chat/${props.name}`}>
         <div className="chat">
           <Avatar className="chat__image" 
           alt={props.name} src={props.profilePic} />

           <div className="chat__details">
              <h2>{props.name}</h2>
              <p>{props.message}</p>
           </div>

           <p className="chat__timestamp">{props.timestamp}</p> 
        </div>
      </Link>
    )
}

export default Chat;
