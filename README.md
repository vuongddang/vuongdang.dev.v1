<h2 align="center">Personal Website</h2>
<p align="center">
  <em>
    Next.js
    · TypeScript
    · TailwindCSS
    · MDX
  </em>
</p>
 
 <p align="center">
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
</p>

## vuongdang.dev
This is the source code of my personal website & blog.

## Overview
The app is built with NextJS, TypeScript, TailwindCSS and MDX. 

- `src/layouts` - Layout of the app. Used in `src/pages/_app.tsx`
- `src/components` - React components
- `src/pages` - React components. Each page is associated with a route based on its file name.
- `src/shared` - Shared utilities and services
- `content/blog` - MDX files. Each file is a blog post. Each file is parsed and rendered by by next-mdx-remote. The HTML of each blog page is generated at build time. See [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) and `src/pages/blog/[slug].tsx#getStaticProps` for implementation details.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Helpful script to upgrade node to the latest stable version:

```bash
 node -v && sudo n stable && node -v
```