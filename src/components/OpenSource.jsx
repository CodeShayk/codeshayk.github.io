import { featured, packages } from "../data/data.js";

export function OpenSource() {
    return (
        <section className="section section--dark" id="open-source" aria-labelledby="oss-heading">
            <div className="wrap">
                <h2 className="section__title" id="oss-heading">Open source</h2>
                <p className="section__intro">
                    Libraries for .NET, maintained on GitHub.
                </p>

                <article className="featured">
                    <div className="featured__main">
                        <h3 className="featured__name">{featured.name}</h3>
                        <p className="featured__text">{featured.description}</p>
                        <p className="featured__book">
                            Used throughout the book{" "}
                            <a href={`#${featured.book.id}`}>{featured.book.title}</a>.
                        </p>
                    </div>
                    <div className="featured__side">
                        <ul className="facts">
                            {featured.facts.map((f) => <li key={f}>{f}</li>)}
                        </ul>
                        <a className="button button--light" href={featured.href} rel="noopener">
                            View on GitHub
                        </a>
                    </div>
                </article>

                <ul className="packages">
                    {packages.map((p) => (
                        <li className="package" key={p.name}>
                            <div className="package__main">
                                <h3 className="package__name">{p.name}</h3>
                                <p className="package__text">{p.description}</p>
                                <ul className="facts">
                                    {p.facts.map((f) => <li key={f}>{f}</li>)}
                                </ul>
                            </div>
                            <div className="package__side">
                                {p.install && (
                                    <p className="package__install">
                                        <code>{p.install}</code>
                                        <span>{p.installNote}</span>
                                    </p>
                                )}
                                <a className="package__link" href={p.href} rel="noopener">View on GitHub</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
