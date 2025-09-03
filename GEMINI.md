# GEMINI.md

## Project Overview

This is a web application built with React, Vite, TypeScript, shadcn-ui, and Tailwind CSS. It appears to be a landing page for a premium car detailing service called "Del Rey Spa Automotivo". The application is structured with a main `App.tsx` that handles routing, and several components that make up the different sections of the page.

## Building and Running

### Prerequisites

- Node.js and pnpm

### Development

To run the development server:

```bash
pnpm install
pnpm run dev
```

The application will be available at `http://localhost:5173`.

### Build

To create a production build:

```bash
pnpm run build
```

The output will be in the `dist` directory.

### Lint

To lint the codebase:

```bash
pnpm run lint
```

### Preview

To preview the production build locally:

```bash
pnpm run preview
```

## Development Conventions

*   **Component-Based Architecture:** The application is built with a component-based architecture, with components located in the `src/components` directory.
*   **Styling:** Styling is done with Tailwind CSS and shadcn-ui.
*   **Routing:** Routing is handled by `react-router-dom`.
*   **Path Aliases:** The `@` alias is configured to point to the `src` directory.
*   **TypeScript:** The project uses TypeScript.
