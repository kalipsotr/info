document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("designForm");
    const inputs = form.querySelectorAll("input, textarea, select");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            const inputGroup = input.closest(".input-group");
            inputGroup.classList.add("focused");
        });

        input.addEventListener("blur", () => {
            const inputGroup = input.closest(".input-group");
            if (input.value.trim() === "") {
                inputGroup.classList.remove("focused");
            }
        });
    });
});
