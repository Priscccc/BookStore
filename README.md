# Online Bookstore Website

A modern, responsive, single-page web application featuring a curated collection of classic and contemporary literature, built with semantic HTML5, CSS3, and interactive Vanilla JavaScript.

## Group Members & IDs

| Feryel | 26170030 |
| Leo | 26170072 |
| Priscilla | 26170021 |
| Solene Anquetil | 26170014 |

---

## Part 1 — Project Presentation & User Manual

### What is Online Bookstore?
Online Bookstore is a front-end web application that lets users browse a catalogue of featured books, read detailed synopses, and contact the store. It features a modern "glassmorphism" design and includes interactive elements like a dynamic dark/light mode toggle. All functionality is handled client-side without the need for a backend database.

### Prerequisites
- A modern web browser (Google Chrome, Mozilla Firefox, Safari, Edge).
- No backend installation, package manager, or framework is required.

### How to Run
From the root of the project directory, simply open the `index.html` file in your web browser.

### User Manual

**Main Interface**
| Element | Description |
|---|---|
| Navigation Bar | Sticky header with anchor links to smoothly scroll to "Home", "Featured Books", and "Contact". |
| Theme Toggle | A button on the top right to switch the website's color palette between Deep Night Blue (Dark Mode) and Cream (Light Mode). |
| Book Grid | A responsive layout displaying featured books. Resize the window to see it adapt to mobile devices. |
| Footer | Displays a real-time, localized chronological clock updated every second. |

**Interacting with Books & Forms**
- **Read More:** Click the "Read More" button on any book card to expand the card and view the full extended synopsis. Click again to collapse it.
- **Contact Us:** Fill in the Name, Email, and Message fields. The form will visually alert you if any field is empty or if the email format is invalid.

---

## Part 2 — Project Structure & Implementation

### Directory Layout
Our project follows a clean and organized file structure to clearly separate content, presentation, and behavior:
* **`index.html`**: The core semantic HTML5 file containing the structure of our single-page application.
* **`style.css`**: The central stylesheet utilizing modern CSS3 techniques (CSS root variables, glassmorphism, responsive Flexbox).
* **`script.js`**: The Vanilla JavaScript file responsible for DOM manipulation, event listening, and logic.
* **`images/`**: A dedicated folder containing all the optimized book cover assets used in the application.

### Complex & Core Features
* **Interactive "Read More" Collapsible Book Cards:** To avoid visual clutter, book cards use an interactive accordion expansion toggle. Clicking the button triggers a JavaScript function that expands the individual card to display an extended synopsis, while dynamically updating the button's text state (switching between "Read More" and "- Read More").
* **Real-Time Dynamic Date & Clock Ticker:** Located in the footer, this feature uses asynchronous JavaScript intervals (`setInterval`) to output a continuous live ticker. It dynamically formats and displays localized chronological data and updates it every second.
* **Comprehensive Form Validation:** Fully interactive front-end form validation utilizing client-side RegEx tracking. The script verifies that no field is left blank and ensures that email entries conform to valid structural standards (`^[^\s@]+@[^\s@]+\.[^\s@]+$`) before allowing successful submissions.
* **[BONUS] Dynamic Light/Dark Mode Toggle:** We implemented a complete theming engine. Positioned in the navigation bar, this toggle button uses JavaScript to add or remove a `.light-theme` class on the `<body>` element. This instantly switches the CSS variables, transitioning the layout from a Deep Night Blue Dark Mode to a clean Cream Light Mode.

---

## Part 3 — Division of Tasks & Git Workflow

Our team built this project using a highly collaborative Git workflow, utilizing a central GitHub repository. To maintain a clean and organized version control history, we divided our primary responsibilities by technology stack, ensuring that our pushes did not conflict while building the application.

* **Priscilla (Repository Setup & Core HTML Structure):** Priscilla took charge of setting up the shared GitHub repository and building the foundational structure of the website. She authored the complete `index.html` file using semantic HTML5, creating the skeleton for the navigation bar, the hero banner, the featured book grids, and the contact form structure. She pushed this core markup to the repository, providing the framework for the rest of the team to build upon.
* **Feryel (UI/UX Design & CSS Architecture):** Feryel focused entirely on the visual presentation and layout of the platform. She was responsible for the `style.css` file, where she defined modern CSS root variables, implemented the glassmorphism effects for the book cards, and wrote all the media queries to ensure the website was fully responsive. She also designed the styling for the complex light/dark mode transition, pushing her continuous CSS updates to perfectly wrap Priscilla's HTML structure.
* **Solene (Core JavaScript & Interactivity):** Solene brought the website to life by handling the dynamic behavior and logic in the `script.js` file. She programmed the interactive "Read More" expand/collapse toggles, built the asynchronous real-time chronological clock in the footer, and engineered the strict client-side form validation using RegEx. She pushed her JavaScript routines to the repository, successfully linking all the DOM elements together.
* **Leo (Quality Assurance, Asset Management & UI Integration):** Leo played a crucial role in ensuring the final product was polished and bug-free. Since the team struggled with building complex button animations from scratch, Leo took charge of sourcing, configuring, and integrating the open-source Uiverse buttons into the project. Furthermore, he managed and optimized the `images/` directory assets for faster loading, and conducted extensive cross-device testing. He worked closely with everyone to debug alignment issues and ensure the HTML, CSS, and JS merged seamlessly.

---

## Part 4 — Problems Encountered

Developing this project as a team exposed us to several technical and organizational challenges that we had to overcome:

### 1. Git Collaboration & Merge Conflicts
As a team of four working concurrently on a single repository, coordinating our pushes was initially difficult. Because the JavaScript (`script.js`) and CSS (`style.css`) files heavily relied on the exact IDs and class names defined in the `index.html`, we encountered merge conflicts and broken links early on. We had to establish a strict communication rule: always pull the latest main branch before making local changes, and communicate before pushing.

### 2. JavaScript DOM Manipulation & State Management
Managing the state of the DOM with Vanilla JavaScript proved to be much harder than expected. Specifically, ensuring the "Read More" collapsible cards expanded properly without breaking the responsive grid layout required constant tweaking. Additionally, implementing the Dark/Light mode toggle forced us to carefully map CSS root variables so that the JavaScript class toggle on the `<body>` element would cleanly transition all colors without causing visual bugs.

### 3. CSS Specificity & Integrating External Components
We struggled significantly with designing highly polished, animated UI buttons from scratch. While utilizing open-source components from *Uiverse* solved our aesthetic problem, it created a new technical one: CSS specificity conflicts. The external Uiverse code sometimes overrode our global styles or misaligned within our Flexbox containers. Resolving this required careful inspection using browser dev tools to adjust padding, margins, and class priorities without breaking the button animations.

---

## Part 5 — What We Learnt

### Working with Vanilla JavaScript
We moved beyond basic scripts to handle real-time user interactions:
- Binding event listeners (`click`, `submit`) to specific DOM elements.
- Navigating the DOM tree using methods like `closest()` to target specific components dynamically.
- Implementing asynchronous timing functions (`setInterval`) for real-time UI updates.
- Using Regular Expressions (RegEx) for strict client-side data validation.

### Working as a Team (Git & Separation of Concerns)
Splitting a web project across multiple people introduced coordination challenges. We learnt that dividing responsibilities by technology stack (HTML vs. CSS vs. JS) is highly effective for avoiding code overlap. By defining clear roles and practicing regular repository updates (pulling before pushing), we managed to develop independently and integrate our code smoothly via GitHub.