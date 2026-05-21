# Online Bookstore Website

The goal is to create a modern, responsive, single-page Online Bookstore featuring a curated collection of classic and contemporary literature. This project is built using semantic HTML5, modern CSS3 layout techniques (including custom variables), and interactive Vanilla JavaScript.

## Group Members & IDs

| Name | Student ID |
| Feryel | STU1234567 |
| Leo | STU2345678 |
| Priscilla | STU3456789 |
| Solene Anquetil | 26170014 |

---

## Feature Breakdown

Our Bookstore website includes several dynamic features structured to provide a professional and interactive user experience:

### 1. Dynamic Light/Dark Mode Toggle
* Location: Positioned in the navigation bar, right beside the *Contact* option.
* Functionality: Clicking the button toggles a ".light-theme class" on the <body> element. This instantly switches the layout between a Deep Night Blue Dark Mode (with glassmorphism cards) and a clean, high-contrast Cream Light Mode. The button text also updates dynamically to show "Light Mode" or "Dark Mode" depending on the active state.

### 2. Interactive "Read More" Collapsible Book Cards
* Location: Button on every book cards. 
* Functionality: To avoid visual clutter, book cards use an interactive accordion expansion toggle. Clicking "Read More" expands individual cards to display an extended synopsis while updating the button control state dynamically ("Read More" vs "- Read More").

### 3. Comprehensive Form Validation
* Location: Embedded within the "Contact Us" section, clickable on the navigation bar and leading to the end of the webpage. 
* Functionality: Fully interactive front-end form validation utilizing client-side RegEx tracking. The script verifies that no field is left blank and ensures that email entries conform to valid structural standards ("^[^\s@]+@[^\s@]+\.[^\s@]+$") prior to allowing successful submissions.

### 4. Real-Time Dynamic Date & Clock Ticker
* Location: Positioned in the website footer.
* Functionality: Uses asynchronous JavaScript intervals to output a continuous live ticker displaying localized chronological data (Day of the week, Date, Month, Year, and structural hour/minute/second updates updated every second).

---

## Division of Tasks & Git Workflow
Our team built this project using a highly collaborative Git workflow. Instead of working in isolation, we structured our development cycles around a shared GitHub repository. Whenever features were completed or refined, they were pushed to the repository, ensuring the entire team could test the integrations, resolve design conflicts, and collectively review changes before finalizing the application.


* **Priscilla (Front-End Structure & Repository Setup)** Priscilla took charge of building the initial foundation of the web application. She set up the central GitHub repository, initialized the workspace, and authored the semantic HTML5 structure for the entire single-page site—including the navigation navbar, hero introduction banner, featured book grids, and the contact module. Once the core layout skeleton and page elements were established, she pushed the base architecture to GitHub, giving the rest of the team a clean, reliable framework to build upon.

* **Leo (Styling, Visual Design & Responsive Layouts)** Leo focused heavily on the user interface design, visual styling, and cross-device responsiveness of the platform. Working in the stylesheet, he defined the modern CSS root variables, implemented the glassmorphism card layouts, configured custom button hover transitions, and wrote media queries to ensure the web pages display flawlessly across all screen sizes. After mapping out the structural visual states, he pushed his theme configurations and layout alignments to the repository for integration.

* **Feryel (Core JavaScript & Interactive Elements)** Feryel was responsible for bringing the website to life by developing the core client-side scripting and dynamic functionality. She programmed the interactive "Read More" expand/collapse toggle for individual book cards and built the logic for the live-updating chronological footer clock. Additionally, she developed the dark/light mode engine to ensure smooth transitions. As she successfully wired up the DOM event listeners and state triggers, she committed and pushed her script changes to the repository.

* **Solene (File Handling & Form Validation)** Solene handled all project files, ensuring the local directory structure, optimized book cover assets, and linked dependencies were cleanly organized and properly deployed. Furthermore, she engineered the client-side JavaScript form validation for the contact section—implementing regular expression tests to verify user input and check email syntax. After executing comprehensive testing, she pushed the verified file packages and validation routines to GitHub.
