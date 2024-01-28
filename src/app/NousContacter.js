import React from "react";
import { Typography } from "@mui/material";
import FormulaireGarage from "../components/FormulaireGarage";
import Contact from "../components/Contact";

const NousContacter = () => {
    return (
        <Container>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Nous contacter
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Pour nous contacter, veuillez remplir le formulaire ci-dessous:
            </Typography>
            <FormulaireGarage />
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Vous pouvez aussi nous contacter:
            </Typography>
            <Contact />
        </Container>
    );
}

export default NousContacter;