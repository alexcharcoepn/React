import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,

} from '@material-ui/core'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck'


const Lista = () => {
    return (
        <div>
            <List component='nav'>
                    <ListItem button>
                        <ListItemIcon>
                            <CloudQueueIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Cloud Doge"/>
                        
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DeckIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Desk Doge"/>
                    </ListItem>

            </List>
        </div>
    )
}

export default Lista
