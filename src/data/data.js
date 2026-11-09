const data = {
    developer: {
        name: "CØDE SHΔYK",
        links: [{
            icon: "📁",
            href: "https://github.com/CodeShayk",
            title: "Github"
        },
        {
            icon: "💼",
            href: "https://linkedin.com/in/CodeShayk",
            title: "linkedIn"
        },
        {
            icon: "✉️",
            href: "mailto:code.shayk@outlook.com",
            title: "Email"
        }],
        description: "Platform Architecture & Open Source Enthusiast"
    },
    books: [
        {
            id: 1,
            icon: "📘",
            name: "From Problems to Patterns — Domain-Driven Design and Event Sourcing in .NET",
            description: "A practical guide to Domain-Driven Design and Event Sourcing in .NET, by Najaf A. Shaikh.",
            tags: [{ name: "DDD" }, { name: "Event Sourcing" }, { name: ".NET" }],
            links: [{
                icon: "🛒",
                href: "https://www.amazon.com/Problems-Patterns-Domain-Driven-Sourcing-Understanding-ebook/dp/B0GX32V9F1/",
                title: "Amazon"
            }]
        },
        {
            id: 2,
            icon: "📗",
            name: "Implementing DDD, CQRS and Event Sourcing",
            description: "The book and code bundle, by Najaf A. Shaikh.",
            tags: [{ name: "DDD" }, { name: "CQRS" }, { name: "Event Sourcing" }],
            links: [{
                icon: "📖",
                href: "https://leanpub.com/sh/SQXfBoMO",
                title: "Leanpub"
            }]
        }
    ],
    projects: [
        {
            id: 1,
            icon: "🔀",
            name: "SourceFlow.Net",
            description: "A lightweight, extensible .NET 9 framework for event-sourced applications using DDD and CQRS, with aggregates, sagas, EF Core persistence, event replay and OpenTelemetry support.",
            tags: [{ name: ".NET 9" }, { name: "DDD" }, { name: "CQRS" }, { name: "Event Sourcing" }],
            links: [
                { icon: "💻", href: "https://github.com/CodeShayk/SourceFlow.Net", title: "Code" },
                { icon: "🏷️", href: "https://github.com/CodeShayk/SourceFlow.Net/releases/latest", title: "Latest release" }
            ]
        },
        {
            id: 2,
            icon: "🧪",
            name: "DD Event Sourcing .NET Samples",
            description: "Companion code for From Problems to Patterns, with working examples of domain-driven design and event sourcing in .NET.",
            tags: [{ name: ".NET" }, { name: "DDD" }, { name: "Event Sourcing" }],
            links: [
                { icon: "💻", href: "https://github.com/CodeShayk/dd-event-sourcing-dotnet-samples", title: "Code" }
            ]
        }
    ],
    copyright: {
        disclaimer: "Copyright (c) 2026  CØDE SHΔYK. Built with ❤️ and hosted on GitHub Pages."
    }
}

export { data }
