# 🌿 QPi PlantCare Dashboard

## Project Architecture

src/
│
├── assets/
│   ├── qpi-logo.png
│   └── farm-background.jpg
│
├── components/
│   ├── Dashboard.js
│   └── PlantCard.js
│
├── data/
│   └── plants.js
│
├── utils/
│   └── healthLogic.js
│
├── App.js
├── App.css
└── index.js

## Component Responsibilities

### App.js

The root component of the application. It renders the `Dashboard` component and serves as the application's entry point.

### Dashboard.js

The `Dashboard` component manages the main interface of the application.

Its responsibilities include:

* Displaying the dashboard title and QPi logo.
* Displaying summary statistics (Total Plants, Healthy Plants, Critical Plants).
* Rendering the **Show Critical Plants** button.
* Rendering all plant cards.
* Managing the application's state.
* Automatically refreshing sensor data using `useEffect`.

### PlantCard.js

A reusable component responsible for displaying information about a single plant.

Each card displays:

* Plant name
* Moisture level
* Temperature
* Light intensity
* Plant health status

The component receives its data from the Dashboard using **props**.

## Automatic Data Refresh

The dashboard automatically refreshes plant sensor values using React's `useEffect` hook together with a timer of 10 seconds. This simulates real-time monitoring of plants .

## User Interaction

The dashboard includes a **Show Critical Plants** button that allows users to filter the displayed plants and focus only on those requiring immediate attention.

## healthLogic.js

healthLogic.js contains the business logic used to determine whether a plant's status is Good, Warning, or Critical based on its moisture level. Separating this logic from the UI improves maintainability and makes the code easier to reuse.