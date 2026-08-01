# 🎀 K-Pop Concert Tracker – Frontend

This repository contains the Angular frontend of the K-Pop Concert Tracker. The application allows K-Pop fans to save concert information, organize personal memories and view events in a monthly calendar.

## ⭐️ Features

- Add, view, edit and delete concert entries
- Display concerts in a monthly calendar
- Open concert details from the calendar
- Switch between light mode and dark mode
- Adjust the font size
- Responsive layout for desktop and smaller screens
- Permanent data storage through the connected backend

## 📸 Screenshots

Screenshots of the home page, concert form, concert overview and calendar will be added before submission.

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
