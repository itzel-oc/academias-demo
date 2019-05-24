import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';



const SimpleNavBar = () => {
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <AppBar position='static'>
      <Toolbar className= 'barra'>          
        <div className="link-container">        
        
          <NavLink exact to="/" className="link"  activeClassName="selected"><HomeIcon></HomeIcon></NavLink>          
          </div>
    
        <div className="link-container">
          <NavLink to="/text" className="link" activeClassName="selected">text</NavLink>
        </div>
        <div className="link-container">
          <NavLink to="/form" className="link" activeClassName="selected">form</NavLink>
        </div>
        <div className="link-container" id="user-link">
          <NavLink to="/user" className="link" activeClassName="selected">user</NavLink>
        </div>
        </Toolbar>   
      </AppBar>
  )
}

export default SimpleNavBar
