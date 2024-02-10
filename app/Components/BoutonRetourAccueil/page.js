import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const BoutonRetourAccueil = () => {
    return (
        <Link href= "/" style={{textDecoration: 'none'}}>   
                <Button variant="contained" style={{marginTop: '1rem'}}>
                    Retour à l'accueil
                </Button>
        </Link>
    )
}

export default BoutonRetourAccueil