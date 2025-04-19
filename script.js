const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Function to validate and show personal info
function validateAndShowInfo(e) {
    // Prevent form submission and page refresh
    if (e) {
        e.preventDefault();
    }
    
    const readerEmail = document.querySelector("#reader-email").value;
    if (!readerEmail || readerEmail.trim() === "" || !emailRegex.test(readerEmail)) {
        alert(`Invalid email: ${readerEmail}`);
    } else {
        document.querySelector("#personal-info-container").classList.remove("d-none");
        document.querySelector("#reader-email-gather-container").classList.add("d-none")
    }
}

// Add click event listener
document.querySelector("#reader-email-btn").addEventListener("click", validateAndShowInfo);

// Add Enter key support
document.querySelector("#reader-email").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        validateAndShowInfo(e);
    }
});

// Add click handlers to all view more buttons
document.querySelectorAll(".credibitity-view-more").forEach(button => {
  button.addEventListener("click", (event) => {
    // Find the parent credibility-item that contains this button
    const section = event.target.closest(".credibility-item");
    
    // Find the content section within this credibility-item
    const content = section.querySelector(".section-content");
    
    // Toggle the d-none class
    content.classList.toggle("d-none");
    
    // Update button text
    const isHidden = content.classList.contains("d-none");
    event.target.textContent = isHidden ? "▼ VIEW MORE" : "▲ VIEW LESS";
  });
});