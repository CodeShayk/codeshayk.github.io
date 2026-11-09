import { books, series } from "../data/data.js";
import { Cover } from "./Cover.jsx";

function Book({ book }) {
    return (
        <article className="book" id={book.id}>
            <div className="book__text">
                <p className="book__label">{book.label}</p>
                <h4 className="book__title">{book.title}</h4>
                <p className="book__byline">
                    By Najaf A. Shaikh{book.edition ? ` · ${book.edition}` : ""}
                </p>
                <blockquote className="book__subtitle">{book.subtitle}</blockquote>
                <p className="book__overview">{book.overview}</p>
                <p className="book__actions">
                    <a className="button button--solid" href={book.buy.href} rel="noopener">
                        {book.buy.label}
                    </a>
                    <a className="button button--line" href={book.repoUrl} rel="noopener">
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
                {series.map((s) => (
                    <div className="series" key={s.id} aria-labelledby={`series-${s.id}`}>
                        <header className="series__head">
                            <h3 className="series__title" id={`series-${s.id}`}>{s.name}</h3>
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
