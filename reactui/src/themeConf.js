//Archivo para las configuracioens, a sobreescribir

import {createMuiTheme} from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import lightGreen from '@material-ui/core/colors/lightGreen'


const themeConf=createMuiTheme({
    palette:{
        primary:{
            main: lightGreen[900]
        },
        secondary:{
            main:purple[500]
        }
    }
})

export default themeConf;
