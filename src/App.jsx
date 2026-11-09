import { author } from "./data/data.js";
import { Hero } from "./components/Hero.jsx";
import { Books } from "./components/Books.jsx";
import { OpenSource } from "./components/OpenSource.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <a className="skip-link" href="#books">Skip to books</a>
            <Hero author={author} />
            <main>
                <Books />
                <OpenSource />
            </main>
            <Footer author={author} />
        </>
    );
}
