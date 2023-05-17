const textareaEL = document.getElementById("textarea");
const totalCounterEL = document.getElementById("total-counter");
const remainingCounterEL = document.getElementById("remaining-counter");
textareaEL.addEventListener("keyup", () => {
    updateCounter();
});
updateCounter();
function updateCounter() {
    totalCounterEL.innerText = textareaEL.value.length;
    remainingCounterEL.innerText =
        textareaEL.getAttribute("maxLength") - textareaEL.value.length;
}
