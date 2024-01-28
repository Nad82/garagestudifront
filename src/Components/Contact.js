import React from "react";
import { Container, Typography } from "@mui/material";

const Contact = () => {
    return (
        <Container>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
            Contact
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Adresse: 1 rue du garage, 31000 Toulouse
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Telephone: 05 61 00 00 00
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Email: contact@garageparrot.fr
            </Typography>
        </Container>
    );
};

export default Contact;
