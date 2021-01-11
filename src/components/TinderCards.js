import React, { useEffect, useState } from 'react';

import TinderCard from 'react-tinder-card';
import '../styles/TinderCards.css';
import database from '../firebase';


const TinderCards = () => {
    const [people, setPeople] = useState([]);
        // {
        //     name: 'Steve Jobs',
        //     url: 'https://cdn.wallpapersafari.com/88/72/eOcahu.png'
        // },
        // {
        //     name: 'Mark Zuckerberg',
        //     url: 'https://images.hdqwalls.com/download/mark-zuckerberg-to-1280x2120.jpg'
        // },

    

    // Piece of code which runs based on a condition
    useEffect(() => {
       database.collection('people').onSnapshot(snapshot => (
           setPeople(snapshot.docs.map(doc => doc.data()))
       ))

    // this will run once when the component loads and never again
    }, []);
    return (
        
            
            <div className="tinderCards__container">
            {
                people.map(person => (
                    <TinderCard 
                       className="swipe"
                       key={person.name}
                       preventSwipe={['up', 'down']}
                      
                    
                    >
                        <div style={{
                            backgroundImage: "url(" + person.url  + ")"
                        }}
                         className="card">
                             <h3>{person.name}</h3>
                         
                             {/* <img src={person.url} alt="test" className="card" />
                             
                             
                          */}
                        
                       </div>
                    </TinderCard>
                ))
            }
            </div>
        
    );
}


export default TinderCards;