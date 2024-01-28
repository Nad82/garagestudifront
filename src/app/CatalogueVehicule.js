import React, { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemText, Container } from '@mui/material';
import FormulaireVehicule from '../components/FormulaireVehicule';
import axios from 'axios';

const Vehicules = () => {
    const [vehicules, setVehicules] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const apiUrl = 'https://127.0.0.1:8000/api/vehicules';

    useEffect(() => {
        const fetchData = () => {
            axios.get(apiUrl)
            .then((response) => setVehicules(response.data.vehicules))  
            .catch((error) => console.log(error));
        }
        fetchData();
    }, []);

    const handleSearch = (event) => { setSearchTerm(event.target.value) };

    const filteredVehicules = vehicules.filter((vehicule) => 
        vehicule.ref.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
        <div>
            <TextField
                label="Recherche"
                value={searchTerm}
                onChange={handleSearch}
                fullWidth
                margin='normal'
            />
            <List>
                {filteredVehicules.map((vehicule) => (
                    <ListItem key={vehicule.id}>
                        <ListItemText primary={vehicule.ref} />
                    </ListItem>
                ))}
            </List>
        </div>

        <div>
            <h6>Vehicules</h6>
            <p>{vehicules}</p>
            
        </div>
        <div>
            Se renseigner sur un vehicule:
            <FormulaireVehicule />
        </div>
        </Container>

    );
}

export default Vehicules;