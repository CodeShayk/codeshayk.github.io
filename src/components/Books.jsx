import { books, series } from "../data/data.js";
import { Cover } from "./Cover.jsx";

function Book({ book }) {
    return (
        <article className="book" id={book.id}>
            <div className="book__text">
                <p className="book__label">
                    {book.label}
                    {book.badge && (
                        <span className={`badge badge--${book.badge.kind}`}>{book.badge.text}</span>
                    )}
                    {book.level && <span className="badge badge--level">{book.level}</span>}
                </p>
                <h4 className="book__title">{book.title}</h4>
                <p className="book__byline">
                    By Najaf A. Shaikh{book.edition ? ` · ${book.edition}` : ""}
                </p>
                <blockquote className="book__subtitle">{book.subtitle}</blockquote>
                <p className="book__overview">{book.overview}</p>
                <p className="book__actions">
                    {book.buy && (
                        <a className="button button--solid" href={book.buy.href} rel="noopener">
                            {book.buy.label}
                        </a>
                    )}
                    <a className={`button ${book.buy ? "button--line" : "button--solid"}`} href={book.repoUrl} rel="noopener">
                        Companion code
                    </a>
                </p>
                <p className="book__repo">
                    <span className="visually-hidden">Code repository: </span>
                    <code>CodeShayk/{book.repo}</code>
                </p>
            </div>
            <div className="book__cover">
                <Cover book={book} />
            </div>
        </article>
    );
}

export function Books() {
    return (
        <section className="section" id="books" aria-labelledby="books-heading">
            <div className="wrap">
                <h2 className="section__title" id="books-heading">Books</h2>
                <p className="section__intro">
                    From Problems to Patterns has two separate series. Each book starts from a real
                    problem and teaches the pattern that solves it.
                </p>
                <ul className="series-nav" aria-label="Series">
                    {series.map((s) => (
                        <li key={s.id}><a href={`#series-${s.id}`}>{s.name}</a></li>
                    ))}
                </ul>
                {series.map((s) => (
                    <div className="series" key={s.id} id={`series-${s.id}`} aria-labelledby={`series-${s.id}-title`}>
                        <header className="series__head">
                            <h3 className="series__title" id={`series-${s.id}-title`}>From Problems to Patterns: {s.name}</h3>
                            <p className="series__blurb">{s.blurb}</p>
                        </header>
                        {books.filter((b) => b.series === s.id).map((b) => (
                            <Book book={b} key={b.id} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
