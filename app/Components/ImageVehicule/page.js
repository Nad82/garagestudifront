import Image from 'next/image'
import React from 'react'

const ImageVehicule = () => {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Image
                src='/vehiculeVente.jpg'
                alt='Image Vehicule'
                sizes='100vw'
                layout='responsive'
                width={50}
                height={50}
            />
        </div>
    );
};

export default ImageVehicule