// Add an event listener to the contact form submission
// Prevents the default form submission behavior and validates inputs
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get input values and remove whitespace
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    // Check if any of the fields are empty
    if (name === "" || email === "" || message === "") {
        alert("All fields are required."); // Alert user to fill all fields
        return;
    }
    
    // Regular expression to validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address."); // Alert user for invalid email
        return;
    }
    
    // Show a success message and reset the form
    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    document.getElementById("contact-form").reset(); // Clear form fields
});

// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', (event) => {
    // Select all elements with the class "card-title"
    const cardTitles = document.querySelectorAll('.card-title');

    // Loop through each card title and add a click event listener
    cardTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Redirect user to the contact page when clicking on service cards
            if (title.textContent === "Web Development" || title.textContent === "Mobile Apps" || title.textContent === "Custom Software") {
                window.location.href = "contact.html";
            }
        });
    });
});
