import { Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FormulaireTemoignage from '../components/FormulaireTemoignage';
import axios from 'axios';

const Temoignages = () => {
    const [temoignages, setTemoignages] = useState('');
    const apiUrl = 'https://127.0.0.1:8000/api/temoignages';

    useEffect(() => {
        const fetchData = () => {
            axios.get(apiUrl)
                .then((response) => setTemoignages(response.data.temoignages))
                .catch((error) => console.log(error));
        };
        fetchData();
    } , []);

    return (
        <Container>
            <h6>Temoignages</h6>
            <p>{temoignages}</p>

            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Laissez nous aussi votre temoignage, en remplissant le formulaire ci-dessous:
            </Typography>
            <FormulaireTemoignage />
        </Container>
    );
}

export default Temoignages;