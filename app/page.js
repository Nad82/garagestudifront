"use client"
import Link from "next/link"


export default function Home() {
    return (
        <div>
            <header>
                <Link href= "/">Home</Link> 
                <nav>
                    <Link href= "/header">Header</Link>
                </nav>
                <Link href= "/connexion">Connexion</Link>
            </header>
            <main>
                <article>
                    <section>
                        <Link href= "/apropos">Apropos</Link>
                    </section>
                    <section>
                        <Link href= "/services">Services</Link>
                    </section>
                    <section>
                        <Link href= "/vehicule">Vehicules</Link>
                    </section>
                    <aside>
                        <Link href= "/temoignage">Temoignages</Link>
                    </aside> 
                </article>         
            </main>
            <footer>
                <nav>
                    <Link href= "/footer">Footer</Link>
                </nav>
            </footer>
        </div>
    )
}