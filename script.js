document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    document.getElementById("contact-form").reset();
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the elements with the class "card-title"
    const cardTitles = document.querySelectorAll('.card-title');

    // Add a click event listener to each card title
    cardTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Check if the clicked title is "Web Development", "Mobile Apps", or "Custom Software"
            if (title.textContent === "Web Development" || title.textContent === "Mobile Apps" || title.textContent === "Custom Software") {
                // Redirect to the contact page
                window.location.href = "contact.html";
            }
        });
    });
});