// Shows the book's real cover, or a typographic stand-in when the cover image isn't available yet.
export function Cover({ book, className = "" }) {
    if (book.cover) {
        return (
            <img
                className={`cover ${className}`}
                src={import.meta.env.BASE_URL + book.cover}
                alt={`Cover of ${book.title}`}
                loading="lazy"
                decoding="async"
            />
        );
    }
    return (
        <div className={`cover cover--stand-in ${className}`} role="img" aria-label={`Cover of ${book.title}`}>
            <span className="cover__series">From Problems to Patterns</span>
            <span className="cover__title">{book.coverTitle}</span>
            <span className="cover__author">Najaf A. Shaikh</span>
        </div>
    );
}
