import React from 'react'
import '../styles/form.css'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const Text = (props) => {
  function backPreviousPage(){
    props.history.goBack()
  }
  const {
    title,
    subtitle,
    desc
  } = props.text


  return (
    <div>
      <Paper >
        <Typography  variant='h3' className='titulo'>{title ? title : 'Titulo'}</Typography>
        <Typography  variant='h5' className='titulo'>"{subtitle ? subtitle: 'Subtitulo'}"</Typography>
        <p className='parrafo'>{desc ? desc : 'Descripcion'}</p>
      </Paper>
    </div>

  )
 /*  return (
    <Paper>
    <div>
      <h1 className='titulo'>Lorem Ipsum</h1>
      <h3 className='titulo'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h3>
      <h5 className='titulo'>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
      <p className='parrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio lacus, euismod id iaculis sed, varius ac neque. Pellentesque iaculis massa non ligula pellentesque, ac dignissim justo dapibus. Pellentesque sagittis scelerisque ligula et tristique. Vivamus ut tellus ultricies, placerat neque dictum, imperdiet eros. Vestibulum viverra nec nibh eu mollis. Integer aliquam velit at enim luctus, in venenatis ipsum placerat. Donec aliquet, erat laoreet lobortis placerat, sapien ante mattis mauris, eu euismod odio dui non sapien.</p>
      
      <Button variant="contained" color="primary" onClick={backPreviousPage} >Go Back</Button>
    </div>
    </Paper>
  ) */
}


export default Text
