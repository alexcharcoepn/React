import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon, IconButton, Typography} from '@material-ui/core'
import {makeStyles,ThemeProvider} from '@material-ui/core/styles'
import themeConf from  './themeConf'
import NavBar from './Components/Navbar'
import Lista from './Components/Lista'
import Ocult from './Components/Ocult'

const useStyle = makeStyles({
  //Nombre de la clase, dentro de esta las propiedades
  //Todo esto es CSS, para ser utilizado en el JSX
  style1:{
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border:0,
    borderRadius:3,
    boxShadow:'0 3px 5px 2px rgba(255,105,135,.3)',
    color:'white',
    height:48,
    padding:'0 30px'
  }

})

function App() {

  //Para usar makeStyle, debemos crear una constante
  //Crear un objeto en este con propiedades


  
  //Es como un hook
  const classes = useStyle()

  return (
    <div >
      
      <ThemeProvider >
        <NavBar/>
        <Button variant="contained" color="default">
          Cheems
        </Button>
      </ThemeProvider>

      <Lista/>
      <Ocult/>
      <hr/>
      <h2>Componentes Material UI</h2>
      <hr/>
      <h3>Tema Global</h3>
      <ThemeProvider theme={themeConf}>
      <Button variant="contained" color="secondary">
        Boton global theme
      </Button>
      <br/>
      <Button variant="contained" color="primary">
        Boton global theme
      </Button>

      </ThemeProvider>
      
      <hr/>
    <h3>Estilos Propios</h3>
    <div>
      <Button className={classes.style1}>
        Personalized Button
      </Button>
    </div>

      <hr/>
      <h3>Botones</h3>
      <div >
      
        <Button color="primary" variant="outlined">
          Color
        </Button>
        <br/>
        {
          //BOTONES
          /*Variant: Fondo del botton: contained,text,outlined
          disableElevation: sombra del boton
          href: para los links, en vez de onClick a un link
          fullWidth: ocupe todo el ancho
          size: tamano de botones: small,medium,large
          
        */}
        <Button 
        variant="contained" 
        color="primary"        
        >
          Outline/Background
        </Button>
        <br/>
        <Button 
        variant="contained" 
        color="primary"
        disableElevation        
        >
          No shadow
        </Button>
        <br/>
        <label>Google Button: </label>
        <Button 
        variant="contained" 
        color="secondary"
        href="https://www.google.com"     
        >
          Google
        </Button>
        <br/>
        <label>Google Button: </label>
        <Button 
        variant="contained" 
        color="secondary"
        href="https://www.google.com" 
        fullWidth    
        >
          Full Width
        </Button>

        <br/>
        <label>Buttons Size: </label>
        <Button variant="contained" color="default" size="small" > Small</Button>
        <Button variant="contained" color="primary" size="medium" > Medium</Button>
        <Button variant="contained" color="secondary" size="large" > Large  </Button>
        </div>    

   <hr/>
   <h3>Iconos</h3>
   <div>
    {/*ICONOS
      color: primary, secondary,etc
      Los de material, son SDG
      -Los iconos provenientes desde Google-Core
        Se asignara el nombre del icono para cambiarlo
        Los de core, son SPAN
   */}
   <DeleteIcon color="primary"/>
   
   <Icon >star</Icon>
   <Icon >room</Icon>

   <Button 
    variant="contained" 
    color="secondary"
    startIcon={<Icon>room</Icon>}
    endIcon={<Icon>android</Icon>}
    >
   </Button>
   <br/>
   <IconButton 
    aria-label="delete">
     <DeleteIcon color="primary"/>
   </IconButton>
   </div>
   <hr/>
    
   <h3>Tipografia</h3>
    <div>
      {
        /*TIPOGRAFIA
        variante: tipo de texto, h1,h2,etc
        color:
        align:center,right,justify
        gutterBottom/paragraph: margen en la parte inferior
        */
      }
      <Typography 
      variant="h6" 
      color="primary"
      align="center"
      paragraph
      >Example</Typography>
      <Typography
      variant="h6" 
      color="primary"
      align="center"
      
      >
        Ejemplo 2
      </Typography>
    </div>
    
    </div>
  );
}

export default App;
