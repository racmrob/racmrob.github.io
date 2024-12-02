ocument.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("readmorebtn");
    const hiddenContent = document.getElementById("hiddenBio");
    const dots = document.getElementById("dots");

    readMoreBtn.addEventListener("click", function () {
        if (hiddenContent.classList.contains("hidden")) {
            hiddenContent.classList.remove("hidden");
            dots.style.display = "none"; 
            readMoreBtn.textContent = "Read Less"; 
        } else {
            hiddenContent.classList.add("hidden");
            dots.style.display = "inline"; 
            readMoreBtn.textContent = "Read More"; 
        }
    });
});

