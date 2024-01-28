import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const FormulaireV = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            message: message,
        };
        fetch("https://api/formulaireV", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json()) 
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nom"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Prenom"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Telephone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
                Envoyer
            </Button>
        </form>
    );
};
