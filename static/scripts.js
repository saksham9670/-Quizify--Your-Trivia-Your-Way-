document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", (event) => {
            const parent = event.target.closest(".mcq");
            const correctAnswer = parent.querySelector(".correct-answer");
            correctAnswer.style.display = "block";
        });
    });
});
