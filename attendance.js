// attendance.js
// JavaScript for Attendance Page

document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       1. Get Subject Name
    ================================= */
    const title = document.getElementById("subjectTitle");

    const params = new URLSearchParams(window.location.search);
    let subject = params.get("sub");

    // Fallback if user came directly
    if (!subject) {
        subject = localStorage.getItem("selectedSubject") || "Unknown Subject";
    }

    title.innerText = subject + " - Attendance Page";

    /* ================================
       2. Auto Set Today’s Date
    ================================= */
    const dateInput = document.querySelector('input[type="date"]');
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;

    /* ================================
       3. Form Submission Logic
    ================================= */
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelectorAll("input")[0].value.trim();
        const roll = form.querySelectorAll("input")[1].value.trim();
        const dept = form.querySelectorAll("input")[2].value.trim();
        const date = form.querySelectorAll("input")[3].value;

        // Basic validation
        if (!name || !roll || !dept || !date) {
            alert("Please fill all details before submitting.");
            return;
        }

        // Attendance record object
        const attendanceRecord = {
            subject: subject,
            name: name,
            roll: roll,
            department: dept,
            date: date
        };

        // Fetch existing records
        let records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

        // Save new record
        records.push(attendanceRecord);
        localStorage.setItem("attendanceRecords", JSON.stringify(records));

        alert("Attendance marked successfully!");

        // Clear form except date
        form.reset();
        dateInput.value = today;
    });

    /* ================================
       4. Navbar Active Highlight
    ================================= */
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === "attendance.html") {
            link.classList.add("active");
        }
    });
});
