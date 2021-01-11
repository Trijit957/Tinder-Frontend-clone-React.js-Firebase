import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../styles/ChatScreen.css';



const ChatScreen = () => {
    
    const [messages, setMessages] = useState([

     {   
         name: "Steve Jobs",
         image: "https://cdn.wallpapersafari.com/88/72/eOcahu.png",
         message: "What's up?"
     },
     {   
        name: "Steve Jobs",
        image: "https://cdn.wallpapersafari.com/88/72/eOcahu.png",
        message: "What's up?"
     },
     {   
        message: "Hows it going!"
     },

    ]);

    const handleSendMessage = e => {
        e.preventDefault();
        // console.log(e.target.name.value);
        let inputValue = document.querySelector('#inputValue').value.trim();
        if(inputValue)
        {
            setMessages([...messages, {message: inputValue}]);
            
        }
        
    }


    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH STEVE JOBS ON 10/08/20</p>
            {
                messages.map(message => (
                    
                        message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                         className="chatScreen__image"
                         src={message.image}
                         alt={message.name}
                         />
                      <p className="chatScreen__text">{message.message}</p>
                    </div>
                        
                        ) : (
                    
                    
                    <div className="chatScreen__message">
                        
                      <p className="chatScreen__textUser">{message.message}</p>
                    </div>

                        )

                        

                    
                
                )
            )

        }

       
            <form className="chatScreen__input">
                <input 
                     type="text" 
                     id="inputValue"
                     className="chatScreen__inputField" 
                     placeholder="Type a message..."
                />
                <button 
                     type="submit" 
                     onClick={handleSendMessage}
                     className="chatScreen__inputButton"
                >
                    SEND</button>
            </form>
      




        </div>
    );
}


export default ChatScreen;
