document.addEventListener("DOMContentLoaded", function () {
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


document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const targetId = header.getAttribute("data-target");
            const body = document.getElementById(targetId);

            document.querySelectorAll(".accordion-collapse").forEach((collapse) => {
                if (collapse !== body) {
                    collapse.classList.remove("show");
                }
            });
            body.classList.toggle("show");
        });
    });
});
