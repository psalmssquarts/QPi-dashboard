# 🌿 QPi PlantCare Dashboard

A responsive React dashboard designed to simulate plant health monitoring using mock sensor data. The dashboard provides a clean, agriculture-inspired interface for viewing plant conditions, identifying plants that require attention, and demonstrating modern React development practices.


# 🌿 Project Overview

The **QPi PlantCare Dashboard** is a frontend web application built with **React (Create React App)**. It simulates an agricultural monitoring system by displaying plant sensor data such as moisture, temperature, and light intensity.

The application automatically refreshes sensor readings to imitate real-time monitoring and allows users to filter and view only plants with critical moisture levels.

This project demonstrates how React can be used to build responsive dashboards using reusable components and modern React Hooks.

## 🌐 Live Demo

View the live application here:

https://qpi-dashboard.vercel.app

## 📂 GitHub Repository

https://github.com/psalmssquarts/QPi-dashboard.git

# ✨ Features

* 🌱 Display plant information in reusable cards.
* 💧 Monitor moisture levels.
* 🌡 Display plant temperature.
* ☀ Display light intensity.
* 🚨 Automatically determine plant health status.
* ⚠ Filter to show only critical plants.
* 🔄 Automatic sensor data refresh using `useEffect`.
* 📱 Responsive design for desktop and mobile devices.
* 🌾 Agricultural-themed background.
* 🏢 QPi branding with company logo.

# 🏗️ Architecture

The project follows a **component-based architecture**, where each component has a specific responsibility.

### App Component

The `App` component acts as the application's root and renders the Dashboard.

App
 │
 ▼
Dashboard

### Dashboard Component

The Dashboard is responsible for:

* Displaying the application title and logo.
* Displaying dashboard statistics.
* Managing plant data using React state.
* Automatically refreshing plant data.
* Filtering critical plants.
* Rendering PlantCard components.

### PlantCard Component

The PlantCard is a reusable component responsible for displaying:

* Plant name
* Moisture
* Temperature
* Light intensity
* Plant health status

Each card receives its information through **props**.

### Utility Function

The `healthLogic.js` utility contains the business logic responsible for determining plant status.

Example:

* Moisture > 60 → Good
* Moisture between 30–60 → Warning
* Moisture < 30 → Critical

Separating this logic from the UI improves code organization and maintainability.

# ⚛️ React Concepts Demonstrated

This project demonstrates several core React concepts:

* Functional Components
* Component-Based Architecture
* JSX
* Props
* State Management using `useState`
* Side Effects using `useEffect`
* Event Handling
* Conditional Rendering
* Rendering Lists with `map()`
* Separation of Concerns
* Responsive Design using CSS Flexbox and Media Queries

# 📁 Project Structure

src/
│
├── assets/
│   ├── farm-background.jpg
│   └── qpi-logo.png
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

# 🚀 Installation Instructions

## Clone the repository

git clone <https://github.com/psalmssquarts/QPi-dashboard.git>

## Navigate into the project

cd qpi-plantcare-dashboard

## Install dependencies

npm install

## Start the development server

npm start

The application will open at:

http://localhost:3000



# 🔮 Future Improvements

Some planned enhancements include:

* 🌦 Weather API integration.
* 📊 Interactive charts for plant analytics.
* 🌍 Real-time IoT sensor integration.
* ☁ Backend database for persistent plant records.
* 👤 User authentication.
* 📧 Email and SMS alerts for critical plants.
* 🌐 Dark mode.
* 🔍 Search and sort functionality.
* 📈 Historical sensor trends.


# 👨‍💻 Author

**Eng Samuel Njuguna**

Frontend Developer 

This project was developed as part of my journey in learning modern React development and building practical dashboard applications for agricultural technology.

# 📄 License

This project is intended for educational, learning, and portfolio purposes.
