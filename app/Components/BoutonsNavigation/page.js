"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GarageIcon from '@mui/icons-material/Garage';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import Link from 'next/link';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState('apropos');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        };
    return (
        <Box sx={{ width: 500, flexGrow: 1}}>
                <BottomNavigation 
                sx={{ width: 500 }} 
                value={value} 
                onChange={handleChange}
                >
                    <Link href="/aPropos">
                        <BottomNavigationAction 
                            label="A Propos" 
                            value="apropos"
                            icon={<GarageIcon />} 
                        />
                    </Link>
                    <Link href="/services">
                        <BottomNavigationAction 
                            label= "Services"
                            value="services"
                            icon={<CarRepairIcon />} 
                            />
                    </Link>
                    <Link href="/vehicules">
                        <BottomNavigationAction
                            label="Vehicules"
                            value="vehicules"
                            icon={<DirectionsCarIcon />}
                        />
                    </Link>
                    <Link href="/temoignages">
                        <BottomNavigationAction 
                            label="Temoignages" 
                            value="temoignages"
                            icon={<RateReviewIcon />} 
                        />
                    </Link>
                    <Link href="/nouscontacter">
                        <BottomNavigationAction 
                            label="Nous contacter"
                            value="nouscontacter"
                            icon={<ContactPageIcon />} 
                        />
                    </Link>
                </BottomNavigation>
        </Box>
    );
}