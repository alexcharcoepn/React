import React from 'react'
import {Typography, withWidth,Hidden,Button} from '@material-ui/core'


const Ocult = (props) => {
    return (
        <div>
            <Typography variant="h6" color="initial">
                Ancho:{props.width}

            </Typography>
    
            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  Cheems
                </Button>
            </Hidden>
            <Hidden smUp>
                <Button variant="contained" color="default">
                  Doge
                </Button>
            </Hidden>
       
            <Hidden only={['sm','md']}>
                <Button variant="contained" color="secondary">
                  Gabe
                </Button>
            </Hidden>
            
        </div>
    )
}

export default withWidth()(Ocult)
 