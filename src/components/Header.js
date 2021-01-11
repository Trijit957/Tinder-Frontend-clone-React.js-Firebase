import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Header.css';

const Header = (props) => {
  const history = useHistory();

    return (
        <div className="header">
          {
            props.backButton ? (
              <IconButton onClick={() => history.replace(props.backButton)}>
                <ArrowBackIosIcon fontSize="large" className="" />
              </IconButton>
              
            ) : (
              <IconButton>
               <PersonIcon fontSize="large"/>
              </IconButton>

            )
          }
            
            
            <Link to="/">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="tinder_logo" className="logo" />
            </Link>
             
             <Link to="/chat">
               <IconButton>
                  <ForumIcon fontSize="large" />
               </IconButton>
             </Link>
             
            
        </div>
    
    );
}

export default Header;