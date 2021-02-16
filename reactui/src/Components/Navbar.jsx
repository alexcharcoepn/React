import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles=makeStyles(theme=>({
    //Offset: padding for the toolbar
    offset:theme.mixins.toolbar,
    menuButton:{
        marginRight:theme.spacing(2)//8px as measure
    },
    title:{
        flexGrow:1
    }
}))

const Navbar = () => {

    const classes=useStyles()

    return (
        <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
              <IconButton 
                color="inherit" 
                aria-label="menu " 
                className  ={classes.menuButton}>
                  <MenuIcon/>
              </IconButton>
            <Typography variant="h6" className={classes.title }>
              Cheems
            </Typography>
            <Button variant="text" color="inherit" >
              Login
            </Button>
          </Toolbar>
        </AppBar>   
        <div className={classes.offset}/>

        </div>
    )
}

export default Navbar;
