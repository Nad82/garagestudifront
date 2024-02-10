import React from 'react'
import Image from 'next/image'

const ImageAccueil = () => {

    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
        <Image
            src='/accueil.jpg'
            alt='Image Accueil'
            sizes='100vw'
            layout='responsive'
            width={50}
            height={50}
        />
        </div>
    );
};

export default ImageAccueil