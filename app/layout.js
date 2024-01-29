

export const metadata = {
    title: 'Garage V.Parrot',
    description: 'Site web du garage V.Parrot',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="utf-8" />
                <meta name="title" content={metadata.title} />
                <meta name="description" content={metadata.description} />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </head>
            <body>{children}</body>
        </html>
    )
}