import React from 'react';
import BoutonNavigation from './BoutonNavigation.js';
import HomeIcon from './HomeIcon.js';
import LogoGarage from './LogoGarage.js';
import Titre from './Titre.js';
import { AppBar, Toolbar,Grid } from '@mui/material';

const StyledToolbar = styled(Toolbar)({ 
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    color: '#000000',
    height: '100px',
    width: '100%',
    padding: '0 20px',
    boxSizing: 'border-box',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '999',
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '1.2rem',
});


export default function Header() {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid xs={4}>
                        <LogoGarage/>
                    </Grid>
                    <Grid xs={8}>
                        <Titre/>
                    </Grid>
                    <Grid xs={2}>
                        <HomeIcon />
                    </Grid>
                    <Grid xs={10}>
                        <BoutonNavigation/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

