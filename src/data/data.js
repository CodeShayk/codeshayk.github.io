const GH = "https://github.com/CodeShayk/";
const NUGET = "https://www.nuget.org/packages/";
const amazonSearch = (title) =>
    "https://www.amazon.com/s?k=" + encodeURIComponent("Najaf A. Shaikh " + title);

export const author = {
    name: "Najaf A. Shaikh",
    role: "Software architect, author and open source maintainer",
    bio: "Passionate technocrat and open source advocate with a keen interest in Generative AI and Application Frameworks.",
    links: [
        { title: "GitHub", href: "https://github.com/CodeShayk" },
        { title: "LinkedIn", href: "https://www.linkedin.com/in/najaf-shaikh/" },
        { title: "Email", href: "mailto:code.shayk@outlook.com" }
    ]
};

export const series = [
    {
        id: "ai",
        name: "AI Series",
        blurb: "Build AI applications, agents and retrieval systems on Microsoft's .NET stack."
    },
    {
        id: "dev",
        name: "Developer Series",
        blurb: "Learn the patterns behind well-built .NET software, one problem at a time."
    }
];

export const books = [
    {
        id: "generative-ai",
        series: "ai",
        label: "AI Series, Book 1",
        badge: { text: "Best Seller", kind: "bestseller" },
        title: "From Problems to Patterns: Generative AI in .NET",
        subtitle: "Build Next-Level AI Applications, Agents, and Tools with Microsoft's Modern Ecosystem",
        edition: "First Edition, 2026",
        cover: "covers/generative-ai.jpg",
        overview:
            "Runnable samples for every section of the book, with a citation index that maps each section to its code. Covers Microsoft.Extensions.AI, RAG, the Agent Framework, MCP and the patterns you need in production.",
        buy: { href: "https://www.amazon.co.uk/dp/B0H1718649", label: "Buy on Amazon" },
        repo: "generative-ai-dotnet-samples"
    },
    {
        id: "agentic-ui",
        series: "ai",
        label: "AI Series, Book 2",
        title: "From Problems to Patterns: Agentic UI in .NET",
        subtitle: "Building Agentic User Interfaces with the AG-UI Protocol in .NET",
        cover: "covers/agentic-ui.jpg",
        overview:
            "One solution with a folder per chapter, from a first AG-UI stream to Blazor, MAUI and desktop clients, tool approvals, generative UI and security. Every agent runs without an API key.",
        buy: { href: "https://www.amazon.co.uk/Problems-Patterns-Building-Interfaces-Protocol-ebook/dp/B0HMJVHVWB", label: "Buy on Amazon" },
        repo: "agentic-ui-dotnet-samples"
    },
    {
        id: "enterprise-rag",
        series: "ai",
        label: "AI Series, Book 3",
        badge: { text: "Coming Soon", kind: "soon" },
        title: "From Problems to Patterns: Enterprise RAG Engineering with .NET",
        subtitle: "Building Grounded, Secure, and Production-Ready Retrieval-Augmented Generation Systems",
        cover: "covers/enterprise-rag.jpg",
        overview:
            "Runnable code for all 25 chapters in one solution, from a first RAG pipeline through hybrid retrieval, reranking, GraphRAG and security to a capstone. Targets .NET 10.",
        buy: null,
        repo: "enterprise-rag-dotnet-samples"
    },
    {
        id: "ai-engineer",
        series: "dev",
        label: "Developer Series",
        badge: { text: "Best Seller", kind: "bestseller" },
        title: "From .NET Developer to AI Engineer",
        subtitle: "Build on the skills you already have to integrate, architect and ship reliable AI-powered applications",
        edition: "First Edition, 2026",
        cover: "covers/ai-engineer.jpg",
        overview:
            "Seventeen chapters of runnable projects that follow one example, the Northwind Assist customer assistant, from a first model call to a production-shaped application.",
        buy: { href: "https://www.amazon.co.uk/Net-Developer-Engineer-AI-powered-applications-ebook/dp/B0HLTSS8QN", label: "Buy on Amazon" },
        repo: "ai-engineer-dotnet-samples"
    },
    {
        id: "ddd-event-sourcing",
        series: "dev",
        label: "Developer Series",
        badge: { text: "New Edition in Review", kind: "review" },
        title: "From Problems to Patterns: Domain-Driven Design and Event Sourcing in .NET",
        subtitle: "Understanding the Patterns, One Problem at a Time",
        edition: "First Edition, 2026",
        cover: "covers/ddd-event-sourcing.jpg",
        overview:
            "Runnable code for all 32 chapters. One Bank Account domain evolves from naive CRUD to a containerised, observable, event-sourced system built on SourceFlow.Net.",
        buy: {
            href: "https://www.amazon.com/Problems-Patterns-Domain-Driven-Sourcing-Understanding-ebook/dp/B0GX32V9F1/",
            label: "Buy on Amazon"
        },
        repo: "dd-event-sourcing-dotnet-samples"
    }
].map((b) => ({ ...b, repoUrl: GH + b.repo }));

const sourceFlow = {
    name: "SourceFlow.Net",
    description:
        "A lightweight, extensible framework for building event-sourced .NET applications with domain-driven design and CQRS. It provides aggregates, sagas, Entity Framework Core persistence, event replay and OpenTelemetry tracing.",
    facts: [".NET 9", "DDD", "CQRS", "Event Sourcing", "Cloud Supported"],
    href: GH + "SourceFlow.Net",
    install: "dotnet add package SourceFlow.Net",
    nuget: NUGET + "SourceFlow.Net",
    alsoOn: [
        { id: "SourceFlow.Stores.EntityFramework" },
        { id: "SourceFlow.Cloud.AWS" },
        { id: "SourceFlow.Cloud.Azure", beta: true },
        { id: "SourceFlow.Cloud.GCP", beta: true }
    ],
    book: { id: "ddd-event-sourcing", title: "Domain-Driven Design and Event Sourcing in .NET" }
};

const others = [
    {
        name: "Abacus Run",
        description:
            "An AI enabled workflow runtime and HTTP host for durable, observable workflows, built on Microsoft Agent Framework. Adds retries, checkpoints, approvals, event history and server-sent events.",
        facts: [".NET 10", "Agent Runtime", "Workflow Engine", "Human in Loop", "Server Side Events", "Microsoft Agent Framework"],
        install: "dotnet add package Abacus.Run --version 1.0.0",
        installNote: "GitHub Packages feed",
        href: GH + "Abacus-Run"
    },
    {
        name: "ActiveForge",
        description:
            "An Active Record-style ORM for .NET with first-class providers for SQL Server, PostgreSQL and MongoDB.",
        facts: ["ORM", "Active Record", "Domain Driven", "SQL Server", "PostgreSQL", "MongoDB"],
        install: "dotnet add package ActiveForge.Core",
        nuget: NUGET + "ActiveForge.Core",
        alsoOn: [
            { id: "ActiveForge.SqlServer" },
            { id: "ActiveForge.PostgreSQL" },
            { id: "ActiveForge.MongoDB" },
            { id: "ActiveForge.SQLite" }
        ],
        href: GH + "ActiveForge"
    },
    {
        name: "DataFuse",
        description:
            "Like GraphQL, but for your heterogeneous backends. Aggregates SQL databases, REST APIs and other sources into strongly typed objects from declarative configuration.",
        facts: [".NET 10", "Data Aggregator", "Query Engine", "Heterogeneous Stores", "Configuration Driven"],
        href: GH + "DataFuse.Net",
        install: "dotnet add package DataFuse.Integration",
        nuget: NUGET + "DataFuse.Integration",
        alsoOn: [
            { id: "DataFuse.Adapters.Abstraction" },
            { id: "DataFuse.Adapters.SQL" },
            { id: "DataFuse.Adapters.EntityFramework" },
            { id: "DataFuse.Adapters.MongoDB" },
            { id: "DataFuse.Adapters.WebAPI" }
        ]
    },
    {
        name: "FeatureOne",
        description:
            "Feature toggles for .NET, with SQL and file storage providers or your own storage backend.",
        facts: [".NET Standard 2.1", ".NET 9", ".NET 10", "Feature Flag", "Conditional Toggles", "Multi Providers", "OpenFeature Compliant"],
        install: "dotnet add package FeatureOne",
        nuget: NUGET + "FeatureOne",
        alsoOn: [
            { id: "FeatureOne.SQL" },
            { id: "FeatureOne.File" }
        ],
        href: GH + "FeatureOne"
    }
];

export const libraries = [sourceFlow, ...others];

export const nugetUrl = (id) => NUGET + id;
