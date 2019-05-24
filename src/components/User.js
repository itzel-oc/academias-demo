import React from 'react'
import Home from './Home';
import PropTypes from 'prop-types';
import '../styles/form.css'
import Button from '@material-ui/core/Button';
import MediaCard from './Card';
import TextField from '@material-ui/core/TextField';

const User = (props) => {
  function backToHome(){
    props.history.push('/')
    }
    function backPreviousPage(){
      props.history.goBack()
    }
    
    
    
  return (
    <div>
      <h1 class='titulo'>Im a User</h1>

      <MediaCard className='tarjeta'/>


     <Button variant="contained" color="primary" className='boton' onClick={backToHome} >Home</Button>
      <Button variant="contained" color="primary" className='boton'  onClick={backPreviousPage} >Go Back</Button>
      


    </div>
    
  )

  
}



export default User
