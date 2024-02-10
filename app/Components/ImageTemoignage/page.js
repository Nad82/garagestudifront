import React from 'react'
import Image from 'next/image'

const ImageTemoignage = () => {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Image
                src='/temoignageclient.jpg'
                alt='Image Temoignage'
                sizes='100vw'
                layout='responsive'
                width={50}
                height={50}
            />
        </div>
    )
}

export default ImageTemoignage