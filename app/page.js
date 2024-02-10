"use client"
import { Box} from "@mui/material"
import React from "react"
import Header from "./Components/Header/page"
import Footer from "./Components/Footer/page"
import Typography from '@mui/material/Typography';
import ImageAccueil from "./Components/ImageAccueil/page"





export default function Home() {
    
    return (
        <Box>
            <Header/>
            <ImageAccueil/>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'20px'}}>
                <Typography variant='h4' color='primary' style={{marginBottom:'20px'}}>Bienvenue sur le site du Garage V.Parrot</Typography>
            </div>
            <Footer/>
        </Box>
    )
}