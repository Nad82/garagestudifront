import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../Logo/page';
import Link from 'next/link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{flexGrow: 1}} style={{display:'flex', justifyContent:'space-between' }}>
                <IconButton
                    aria-label="home"
                    href="/"
                    sx={{ mr: 2 }}
                >
                    <Logo />
                </IconButton>
                <div role="presentation" onClick={handleClick} style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            href="/aPropos"
                            aria-label='aPropos'
                            underline='hover'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                A propos
                            </Button>
                        </Link>
                        <Link
                            href="/services"
                            aria-label='services'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Services
                            </Button>
                        </Link>
                        <Link
                            href="/vehicule"
                            aria-label='vehicules'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Vehicules
                            </Button>
                        </Link>
                        <Link
                            href="/temoignages"
                            aria-label='temoignages'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Temoignages
                            </Button>
                        </Link>
                        <Link
                            href="/nouscontacter"
                            aria-label='contact'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Contact
                            </Button>
                        </Link>
                    </Breadcrumbs>
                </div>
                <Button
                    xs={1}
                    color='inherit'
                    href="https://127.0.0.1:8000//login"
                >Connexion Employe</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
