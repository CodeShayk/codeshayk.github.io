import { libraries, nugetUrl } from "../data/data.js";

export function OpenSource() {
    return (
        <section className="section section--dark" id="open-source" aria-labelledby="oss-heading">
            <div className="wrap">
                <h2 className="section__title" id="oss-heading">Open source</h2>
                <p className="section__intro">
                    Libraries for .NET, maintained on GitHub.
                </p>

                <ul className="libraries">
                    {libraries.map((lib) => (
                        <li key={lib.name}>
                            <article className="library">
                                <div className="library__main">
                                    <h3 className="library__name">{lib.name}</h3>
                                    <p className="library__text">{lib.description}</p>
                                    {lib.book && (
                                        <p className="library__book">
                                            Used throughout the book{" "}
                                            <a href={`#${lib.book.id}`}>{lib.book.title}</a>.
                                        </p>
                                    )}
                                    {lib.install && (
                                        <p className="library__install">
                                            <code>{lib.install}</code>
                                            {lib.installNote && <span>{lib.installNote}</span>}
                                        </p>
                                    )}
                                    {lib.alsoOn && (
                                        <p className="library__also">
                                            Also on NuGet:{" "}
                                            {lib.alsoOn.map((pkg, i) => (
                                                <span key={pkg.id}>
                                                    <a href={nugetUrl(pkg.id)} rel="noopener">{pkg.id}</a>
                                                    {pkg.beta ? " (beta)" : ""}
                                                    {i < lib.alsoOn.length - 1 ? ", " : ""}
                                                </span>
                                            ))}
                                        </p>
                                    )}
                                </div>
                                <div className="library__side">
                                    <ul className="facts">
                                        {lib.facts.map((f) => <li key={f}>{f}</li>)}
                                    </ul>
                                    <div className="library__buttons">
                                        <a className="button button--light" href={lib.href} rel="noopener">
                                            View on GitHub
                                        </a>
                                        {lib.nuget && (
                                            <a className="button button--ghost" href={lib.nuget} rel="noopener">
                                                View on NuGet
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
