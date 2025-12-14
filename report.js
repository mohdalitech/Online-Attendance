// report.js
// JavaScript for Attendance Report Page

document.addEventListener("DOMContentLoaded", function () {

    const table = document.getElementById("reportTable");
    const records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];

    /* ================================
       1. Handle No Data Case
    ================================= */
    if (records.length === 0) {
        const row = table.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 5;
        cell.style.textAlign = "center";
        cell.innerText = "No attendance records found.";
        return;
    }

    /* ================================
       2. Populate Attendance Records
    ================================= */
    records.forEach(record => {
        const row = table.insertRow();

        row.insertCell(0).innerText = record.roll;
        row.insertCell(1).innerText = record.name;
        row.insertCell(2).innerText = record.subject;
        row.insertCell(3).innerText = record.date;

        const statusCell = row.insertCell(4);
        statusCell.innerText = "Present";
        statusCell.classList.add("present");
    });

    /* ================================
       3. Highlight Active Navbar Link
    ================================= */
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === "report.html") {
            link.classList.add("active");
        }
    });

});
