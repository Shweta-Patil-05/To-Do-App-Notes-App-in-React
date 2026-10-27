# Daylight — To-Do & Notes

A responsive React app for keeping daily tasks and loose thoughts in one calm workspace. Built as a Week 04 minor project to practice React fundamentals and modern JavaScript.

The app opens with a demo sign-in page. Enter your name, a valid email address, and a password of at least 8 characters that includes a number to continue to the workspace. Your name appears in the workspace and profile. Sign out by clicking the profile area at the bottom of the sidebar. This is a front-end demonstration only; it does not authenticate users with a server.

## Features

### To-Do app
- Create, edit, complete, and delete tasks
- See pending and completed task status at a glance
- Filter by all, pending, or completed tasks
- Assign a space, priority, and optional due date
- Browse all tasks, today's tasks, upcoming tasks, completed tasks, or a space
- Daily progress card and overdue date styling

### Notes app
- Create, edit, pin, and delete notes
- Search note titles and content
- Organize notes into Work, Personal, and Reading spaces
- Choose a note color and see when each note was last updated
- Responsive card layout

### Shared
- Local storage persistence for tasks and notes
- Reusable components, functional components, hooks, props, conditional and list rendering
- Keyboard shortcuts: `⌘/Ctrl + K` to add a task (or focus note search), `⌘/Ctrl + F` to search notes
- Demo sign-in with name and basic password validation; the supplied name labels the workspace and profile
- Profile editing, workspace settings, custom spaces, global search, task filters, and sort options

## Technologies

- React 18, Vite, JavaScript (ES6+)
- CSS with responsive layouts
- Lucide icons

## Setup

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; use `npm run preview` to preview it locally.

## Project structure

```text
src/
  App.jsx        Application UI, components, state, and interactions
  main.jsx       React entry point
  styles.css     Responsive styling
index.html
```

## GitHub submission

Create a repository on GitHub, then push this project:

```bash
git init
git add .
git commit -m "Build Daylight tasks and notes app"
git branch -M main
git remote add origin <your-github-repository-url>
git push -u origin main
```
