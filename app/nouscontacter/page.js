import React from "react";
import { Typography } from "@mui/material";
import Container from "@mui/material";

const nouscontacter = () => {
    return (
        <Container>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Nous contacter
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Pour nous contacter, veuillez remplir le formulaire ci-dessous:
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Vous pouvez aussi nous contacter:
            </Typography>
        </Container>
    );
}

export default nouscontacter;