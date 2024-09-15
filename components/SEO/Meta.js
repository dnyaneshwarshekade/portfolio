import React from 'react';
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>Dnyaneshwar Shekade - DevOps Engineer & Virtualization Expert</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Dnyaneshwar Shekade - DevOps Engineer & Virtualization Expert" />
            <meta name="description"
                content="Dnyaneshwar Shekade's personal portfolio showcasing expertise in DevOps, virtualization, and web hosting. Crafted with a modern design using Next.js and Tailwind CSS." />
            <meta name="author" content="Dnyaneshwar Shekade" />
            <meta name="keywords"
                content="Dnyaneshwar Shekade, DevOps Engineer, Virtualization Expert, Web Hosting Specialist, cloud computing, server management, IT infrastructure, portfolio, technology projects, software engineering" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            {/* Search Engine */}
            <meta name="image" content="/images/logos/fevicon.png" />
            {/* Schema.org for Google */}
            <meta itemProp="name" content="Dnyaneshwar Shekade - DevOps Engineer & Virtualization Expert" />
            <meta itemProp="description"
                content="Dnyaneshwar Shekade's personal portfolio showcasing expertise in DevOps, virtualization, and web hosting. Crafted with a modern design using Next.js and Tailwind CSS." />
            <meta itemProp="image" content="/images/logos/fevicon.png" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Dnyaneshwar Shekade - DevOps Engineer & Virtualization Expert" />
            <meta name="twitter:description"
                content="Dnyaneshwar Shekade's personal portfolio showcasing expertise in DevOps, virtualization, and web hosting. Crafted with a modern design using Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="@dnyanehswarshekade" />
            <meta name="twitter:creator" content="@dnyanehswarshekade" />
            <meta name="twitter:image:src" content="/images/logos/logo_1024.png" />
            {/* Open Graph general (Facebook, Pinterest & Google+) */}
            <meta property="og:title" content="Dnyaneshwar Shekade - DevOps Engineer & Virtualization Expert" />
            <meta property="og:description"
                content="Dnyaneshwar Shekade's personal portfolio showcasing expertise in DevOps, virtualization, and web hosting. Crafted with a modern design using Next.js and Tailwind CSS." />
            <meta property="og:image" content="/images/logos/logo_1200.png" />
            <meta property="og:url" content="http://dnyanehswarshekade.github.io/" />
            <meta property="og:site_name" content="Dnyaneshwar Shekade Portfolio" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:type" content="website" />

            <link rel="icon" href="/images/logos/fevicon.png" />
            <link rel="apple-touch-icon" href="/images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
}
