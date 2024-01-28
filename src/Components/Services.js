import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';


const Services = () => {
    const [services, setServices] = useState('');
    const apiUrl = 'https://127.0.0.1:8000/api/services';

    useEffect(() => {
        const fetchData = () => {
            axios.get(apiUrl)
                .then((response) => setServices(response.data.services))
                .catch((error) => console.log(error));
        };
        fetchData();
    } , []);

    return (
        <Container>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Services
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Voici les services que nous proposons:
            </Typography>
            <p>{services}</p>
        </Container>
    );
}

export default Services;