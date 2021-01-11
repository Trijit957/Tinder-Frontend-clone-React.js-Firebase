import React from 'react';
import '../styles/Chats.css';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
           <Chat 
              name="Steve Jobs"
              message="YO what's up!"
              timestamp="40 seconds ago"
              profilePic="https://cdn.wallpapersafari.com/88/72/eOcahu.png"
           /> 
           <Chat 
              name="Mark Zuckerberg"
              message="How are you?"
              timestamp="50 seconds ago"
              profilePic="https://images.hdqwalls.com/download/mark-zuckerberg-to-1280x2120.jpg"
           />
           <Chat 
              name="Jeff Bezos"
              message="Cool man!!!"
              timestamp="30 minutes ago"
              profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
           />
           <Chat 
              name="Elon Musk"
              message="Yeah, Dude!"
              timestamp="1 hour ago"
              profilePic="https://api.time.com/wp-content/uploads/2015/05/elon-musk.jpg"
           />
        </div>
    )
}

export default Chats;
