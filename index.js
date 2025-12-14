// index.js
// JavaScript for Home Page (index.html)

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       1. Handle Subject Selection
    ================================= */
    const subjectLinks = document.querySelectorAll(".subject-grid a");

    subjectLinks.forEach(link => {
        link.addEventListener("click", function () {
            const subjectCode = this.textContent.trim();

            // Store selected subject for next page
            localStorage.setItem("selectedSubject", subjectCode);

            // Professional feedback (optional but good)
            console.log("Selected Subject:", subjectCode);
        });
    });

    /* ================================
       2. Highlight Active Navbar Link
    ================================= */
    const navLinks = document.querySelectorAll(".navbar a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    /* ================================
       3. Auto Update Footer Year
    ================================= */
    const footerText = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();

    footerText.innerHTML = `© ${currentYear} Online Attendance System | Developed by Student`;
});
