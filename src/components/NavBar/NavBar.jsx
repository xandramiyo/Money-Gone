import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import './NavBar.css'
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <AppBar 
            position="static" 
            className="alignItems justifyContent" 
        >
            <Toolbar sx={{ justifyContent: "center"}}>

                <Link to=""><Button >
                    <Typography color="text.primary" href="">Daily View</Typography>
                </Button></Link>
                <Link to="/spending"><Button>
                    <Typography color="text.primary" href="/spending">Spending</Typography>
                </Button></Link>
                <Button onClick={handleLogOut}>
                    <Typography color="text.primary" >Log Out</Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}