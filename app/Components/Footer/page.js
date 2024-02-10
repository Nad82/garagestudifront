import React from 'react';
import { Typography, Grid } from '@mui/material'
import Link from 'next/link';
import Contact from '../Contact/page';
import Horaires from '../Horaires/page';


const Footer = () => {
    return (
        <footer xs={6} md={12} style={{backgroundColor: '#3f51b5', color: '#fff', padding: '2rem 0'}}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', alignItems:'left', justifyContent:'left', marginTop:'20px'}}>
                    <Contact/>
                </Grid>
                <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Liens utiles
                    </Typography> 
                    <Link href= "/aPropos" style={{textDecoration: 'none'}}>
                        <Typography variant="body1" align="center" color= "textSecondary">
                            A propos
                        </Typography>
                    </Link>
                    <Link href="/cgu" style={{textDecoration: 'none'}}>
                        <Typography variant="body1" align="center" color= "textSecondary">
                            Conditions générales d'utilisation
                        </Typography>
                    </Link>
                    <Link href="/mentionslegales" style={{textDecoration: 'none'}}>
                        <Typography variant="body1" align="center" color= "textSecondary">
                            Mentions légales
                        </Typography>
                    </Link>
                    <Link href="/nouscontacter" style={{textDecoration: 'none'}}>
                        <Typography variant="body1" align="center" color= "textSecondary">
                            Nous contacter
                        </Typography>
                    </Link>
                    <div>
                        <br/>
                        <br/>
                    </div>
                    <Typography variant="body2" align="center" color= "textSecondary">
                        copyrigth {new Date().getFullYear()} Garage V.Parrot. Tous droits réservés.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', alignItems:'left', justifyContent:'left', marginTop:'20px'}}>
                    <Horaires/>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;