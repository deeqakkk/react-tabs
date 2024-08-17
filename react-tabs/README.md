
# React Tabs Project

This is a simple React project demonstrating a tabbed interface where each tab displays different content. The project is set up using Vite with TypeScript and managed using `pnpm`.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)

## Installation

Before you start, make sure you have `pnpm` and `node.js` installed on your machine.

1. Clone the repository:

    ```bash
    git clone https://github.com/deeqakkk/react-tabs.git
    cd react-tabs
    ```

2. Install dependencies using `pnpm`:

    ```bash
    pnpm install
    ```

## Running the Project

To run the project locally, use the following command:

```bash
pnpm dev
```

This will start the development server, and you can view the application by navigating to `http://localhost:5173` in your web browser.

## Project Structure

The project structure is as follows:

```plaintext
├── public
│   └── vite.svg               # Vite logo used in the project
├── src
│   ├── assets
│   │   └── react.svg          # React logo used in the project
│   ├── App.css                # CSS file for styling the app
│   ├── App.tsx                # Main React component for the application
│   ├── main.tsx               # Entry point of the React application
│   ├── index.html             # HTML template for the application
│   └── vite-env.d.ts          # TypeScript environment definition
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
├── package.json               # Package configuration file
├── pnpm-lock.yaml             # Lockfile for dependencies managed by pnpm
└── README.md                  # Project documentation
```

## Features

- **Tabbed Interface**: The application features a simple tabbed interface where clicking on each tab updates the content displayed.
- **Dynamic Content**: The content for each tab is dynamically rendered based on the selected tab.
- **TypeScript Support**: The project is built using TypeScript, providing type safety and enhanced developer experience.

### Tab Descriptions

The tabs display different content based on the section selected:

1. **Why React**: Discusses the reasons to choose React for building web applications.
2. **Core Features**: Highlights the main features of React that make it a powerful tool.
3. **Related Resources**: Provides resources related to React, such as libraries and documentation.
4. **React vs Js**: Compares React with vanilla JavaScript.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A statically typed superset of JavaScript.
- **pnpm**: A fast, disk space-efficient package manager.
