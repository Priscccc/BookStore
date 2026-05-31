function toggleCard(button) {
    // 1. Find the parent card
    const card = button.closest('.card');
    
    // 2. Expand or collapse the card
    card.classList.toggle('expanded');
    
    // 3. Change the button text
    button.innerHTML = card.classList.contains('expanded') ? "- Read More" : "Read More";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Get the form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // 2. Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 3. Check that all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // 4. Validate the email format
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // If everything is correct
    alert("Form submitted successfully!");
});

function updateDateTime() {
    const now = new Date(); // Get the current date and time
    
    // Format the date and time properly in English
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    
    const dateTimeString = now.toLocaleDateString('en-US', options);
    
    // Display the result in the HTML element with the id "current-date"
    document.getElementById('current-date').textContent = dateTimeString;
}

// Update the display every second
setInterval(updateDateTime, 1000);

// Run the function immediately when the page loads
updateDateTime();

// --- Dark/Light Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    // Adds or removes the 'light-theme' class to/from the <body>
    document.body.classList.toggle('light-theme');
    
    // Changes the button text based on the current mode
    if (document.body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Light Mode';
    }
});