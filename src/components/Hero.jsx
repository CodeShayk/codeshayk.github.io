import { books } from "../data/data.js";
import { Cover } from "./Cover.jsx";

export function Hero({ author }) {
    return (
        <header className="hero">
            <div className="wrap">
                <nav className="topbar" aria-label="Main">
                    <span className="topbar__name">{author.name}</span>
                    <ul className="topbar__links">
                        <li><a href="#books">Books</a></li>
                        <li><a href="#open-source">Open source</a></li>
                        <li><a href="https://github.com/CodeShayk" rel="noopener">GitHub</a></li>
                    </ul>
                </nav>

                <div className="hero__intro">
                    <h1 className="hero__title">From problems to patterns.</h1>
                    <p className="hero__lede">
                        {author.name} writes practical books for .NET developers on AI engineering,
                        domain-driven design and event sourcing, and maintains the open source
                        libraries that go with them.
                    </p>
                    <p className="hero__actions">
                        <a className="button button--solid" href="#books">Browse the books</a>
                        <a className="button button--line" href="#open-source">See the open source work</a>
                    </p>
                </div>

                <ul className="shelf" aria-label="Books">
                    {books.map((book, i) => (
                        <li className="shelf__item" style={{ "--i": i }} key={book.id}>
                            <a href={`#${book.id}`} aria-label={book.title}>
                                <Cover book={book} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
