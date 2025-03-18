// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile navigation toggle
const navToggle = document.createElement("button");
navToggle.textContent = "☰ Menu";
navToggle.classList.add("nav-toggle");
document.querySelector("header").prepend(navToggle);

navToggle.addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("show");
});

// Form validation
document.querySelector("#contact form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("#contact input[type='text']").value.trim();
    let email = document.querySelector("#contact input[type='email']").value.trim();
    let message = document.querySelector("#contact textarea").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    this.reset(); // Clears the form
});
