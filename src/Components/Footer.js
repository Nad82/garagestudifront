import React from 'react';
import { Typography, Container } from '@mui/material';
import Contact from './Contact';
import Horaires from './Horaires';


const Footer = () => {
    return (
        <footer style={{backgroundColor: '#3f51b5', color: '#fff', padding: '2rem 0'}}>
            <Container>
                <Typography variant="body2" align="center" color= "textSecondary">
                    copyrigth {new Date().getFullYear()} Garage V.Parrot. Tous droits réservés.
                </Typography>
                <div>
                    <Typography variant="h6" align="center" gutterBottom>
                        Liens utiles
                    </Typography> 
                    <Typography variant="body2" align="center" color= "textSecondary">
                        <a href="/APropos"> A Propos</a>
                    </Typography> 
                    <Typography variant="body2" align="center" color= "textSecondary">
                        <a href="/CGU">Conditions générales d'utilisation</a>
                    </Typography>
                    <Typography variant="body2" align="center" color= "textSecondary">
                        <a href="/NousContacter">Nous contacter</a>
                    </Typography>
                    <Typography variant="body2" align="center" color= "textSecondary">
                        <a href='/MentionLegale'>Mentions légales</a>
                    </Typography>
                </div>
                <div>
                    <Contact />
                </div>
                <div>
                    <Horaires/>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;