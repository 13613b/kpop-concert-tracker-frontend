# 🎀 K-Pop Concert Tracker – Frontend

This repository contains the Angular frontend of the K-Pop Concert Tracker. The application allows K-Pop fans to save concert information, organize personal memories and view events in a monthly calendar.

## ⭐️ Features

- 🗒️ Add concerts with artist, tour, city, country, date, ticket price and personal notes
- ✔️ View all saved concerts and the total number of entries
- ✍️ Edit and delete existing concert entries
- 📆 Display concerts in a monthly calendar
- 📂 Open concert details directly from the calendar
- ☀️ Switch between light mode and dark mode
- 🔍 Increase or decrease the font size
- 🎶 Open KpopOfficial as an external source for K-Pop information
- 📱 Responsive layout for desktop and smaller screens
- 📊 Store concert data permanently through the connected backend

## 📸 Screenshots

### 🏠 Home page

![Home page](frontend/frontend-app/screenshots/home-desktop.png)

### 📝 Add a concert

![Add a concert](frontend/frontend-app/screenshots/add-concert.png)

### 📋 View saved concerts

![My concerts](frontend/frontend-app/screenshots/my-concerts.png)

### ✍️ Edit a concert

![Edit a concert](frontend/frontend-app/screenshots/edit-concert.png)

### 🗑️ Delete a concert

![Delete confirmation](frontend/frontend-app/screenshots/delete-confirmation.png)

### 📅 Calendar

![Calendar](frontend/frontend-app/screenshots/calendar.png)

### 📂 View concert details in the calendar

![Calendar details](frontend/frontend-app/screenshots/calendar-details.png)

### 📱 Responsive mobile view

![Responsive mobile view](frontend/frontend-app/screenshots/home-mobile.png)

## 🧰 Technologies

### 🎨 Frontend

- Angular 22
- TypeScript
- HTML and CSS
- Bootstrap
- Angular Forms
- Angular HttpClient

## ✅ Prerequisites

- Git
- Node.js and npm
- A running instance of the [backend](https://github.com/13613b/kpop-concert-tracker-backend)

## ⚙️ Installation

```bash
git clone https://github.com/13613b/kpop-concert-tracker-frontend.git
cd kpop-concert-tracker-frontend
npm install
```

## 🚀 Start the application

Start the backend first. Then run:

```bash
npm start
```

Open `http://localhost:4200` in a browser.

## 📖 Usage

### Add a concert

1. Open the home page.
2. Select **Add New Concert**.
3. Enter the concert information and select a date.
4. Select **Add Concert**.

### Edit or delete a concert

1. Open **My Concerts**.
2. Select **Edit** to update an entry.
3. Select **Delete** and confirm the prompt to remove an entry.

### Use the calendar

1. Open **My Calendar**.
2. Navigate with **Previous Month** and **Next Month**.
3. Select a concert to view its details.

### Display settings

- Use the moon or sun button to switch the color theme.
- Use **A-** and **A+** to adjust the font size.

## 🔌 Backend connection

The frontend communicates with the REST API at `http://localhost:3000/api/concerts`.

## 🤖 Use of AI tools

- **ChatGPT / Codex:** Used for explanations, debugging support, responsive layout improvements, Bootstrap integration and documentation.

All suggested code was reviewed and tested as part of the project.

## 👤 Author

Ela-Nur Kuyubasioglu, 2026
