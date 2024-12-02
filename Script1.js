document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleAbMe");
    const bio = document.getElementById("abMe");

    toggleButton.addEventListener("click", function () {
        bio.classList.toggle("collapsed");
        toggleButton.textContent = bio.classList.contains("collapsed")
            ? "Read More"
            : "Read Less";
    });
});


