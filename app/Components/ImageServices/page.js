import React from 'react'
import Image from 'next/image'


const ImageServices = () => {
    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
        <Image
            src='/services.jpg'
            alt='Image Services'
            sizes='100vw'
            layout='responsive'
            width={50}
            height={100}
        />
        </div>
    )
}

export default ImageServices