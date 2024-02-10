import React from "react"


export const metadata = {
    title: 'Garage V.Parrot',
    description: 'Site web du garage V.Parrot',
    icon:'/logo.png',
    description:'Site web du garage V.Parrot, situé à Toulouse, spécialisé dans la réparation de véhicules de toutes marques.',
}

export default function RootLayout({ children }) {
    
    return (
        <html lang="fr">
            <head>
                <meta charSet="utf-8" />
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />
                <meta name="viewport"content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                {children}     
            </body>
        </html>
    )
}