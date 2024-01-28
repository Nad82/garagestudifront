import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const FormulaireTemoignage = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [commentaires, setCommentaires] = useState("");
    const [notes, setNotes] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            nom: nom,
            prenom: prenom,
            commentaires: commentaires,
            notes: notes,
        };
        fetch("https://api/temoignages", {
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
        setCommentaires("");
        setNotes("");
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
                label="Commentaires"
                value={commentaires}
                onChange={(event) => setCommentaires(event.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />
            <TextField
                label="Notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Envoyer
            </Button>
        </form>
    );
};

export default FormulaireTemoignage;