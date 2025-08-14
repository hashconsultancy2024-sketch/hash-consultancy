document.getElementById("inquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("formStatus").innerText = "Please fill in all fields.";
        document.getElementById("formStatus").style.color = "red";
        return;
    }

    // You can connect this to your backend email service
    document.getElementById("formStatus").innerText = "Inquiry sent successfully! We'll get back to you.";
    document.getElementById("formStatus").style.color = "green";

    document.getElementById("inquiryForm").reset();
});
