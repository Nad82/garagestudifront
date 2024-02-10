import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function pageNotFound () {
    const router = useRouter()


    return (
        <Grid container justifyContent="center" height= "100vh" alignItems="center">
            <Grid item md={3}>
                <Typography
                    variant="h1"
                    align="center"
                    fontWeight={900}
                    sx={{ fontSize: '90px' }}
                    gutterBottom
                >
                    404
                </Typography>
                <Typography 
                variant="h4" 
                align="center" 
                fontWeight={900} 
                gutterBottom>
                    Page not found
                </Typography>
                <Box 
                mt="15px"
                display="flex"
                justifyContent="center"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => router.replace('/')}
                    >
                        Go back home
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
    }


export default pageNotFound