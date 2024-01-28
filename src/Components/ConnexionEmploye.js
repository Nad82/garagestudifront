import React from "react";
import { Link, Typography } from "@mui/material";

const ConnexionAdmin = () => {
    return (
        <div>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Connexion Employé
            </Typography>
            <Link href="127.0.0.1:8000/login" variant="body1" style={{ marginTop: "1rem" }}>
                Connexion
            </Link>
        </div>
    );
}

export default ConnexionAdmin;