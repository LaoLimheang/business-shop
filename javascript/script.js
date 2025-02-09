const toggleButton = document.getElementById("theme-toggle");

// Check if user has a saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference in local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
