export function Footer({ author }) {
    return (
        <footer className="footer">
            <div className="wrap footer__inner">
                <div>
                    <p className="footer__name">{author.name}</p>
                    <p className="footer__bio">{author.bio}</p>
                </div>
                <ul className="footer__links">
                    {author.links.map((l) => (
                        <li key={l.title}><a href={l.href} rel="noopener">{l.title}</a></li>
                    ))}
                </ul>
                <p className="footer__copy">Copyright © 2026 {author.name}</p>
            </div>
        </footer>
    );
}
