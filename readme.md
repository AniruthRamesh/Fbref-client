# FBRef Player Statistics Frontend

## Features

- **Default Player Statistics**: Upon accessing the application, users are presented with Cristiano Ronaldo's club domestic league statistics by default.
- **Table Presentation**: Player statistics are displayed in a tabular format, ensuring easy readability and data comprehension.
- **Sortable Statistics**: Users can sort player statistics by season, either in ascending or descending order, with a simple toggle switch.
- **Flexible Criteria Selection**: Interactive dropdown menus allow users to customize their search by selecting specific players, team types, competition scopes, and formats.

## Introduction

The FBRef Player Statistics application enables users to explore detailed football player statistics. Leveraging React and `@tanstack/react-query`, this frontend application ensures high performance.

## Installation

Follow these steps to set up the project on your local development environment:

### Step 1: Extract the Zip File

Extract the provided zip file to your preferred location on your local machine.

### Step 2: Install Dependencies

Open a terminal, navigate to the extracted project folder, and run:

```bash
npm install
```

### Step 3: Start the Development Server

Once the dependencies are installed, start the development server by running:

```bash
npm run dev
```

## Project Structure

The application is structured into several key directories:

- /components: Contains reusable UI components such as dropdowns and data display tables.
- /pages: Hosts the React components representing the application's pages, primarily the Home page.
- /data: Manages static data resources, including dropdown options.
- /api: Handles API calls to the backend, including data fetching and URL construction.

## Documentation

### Accessing Documentation

Documentation for the application is available as HTML files within the client/docs directory of the project. The entry point to this documentation is the index.html file. To view the documentation, simply open the `client/docs/index.html` file in a web browser. This file acts as a dashboard, providing links to detailed documentation for all documented components and modules within the application.
