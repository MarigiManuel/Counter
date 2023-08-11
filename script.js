const countElement = document.getElementById("count");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

let count = 0;

function updateCounter() {
    countElement.textContent = count;
    if (count < 0) {
        countElement.style.color = "red";
    } else if (count > 0) {
        countElement.style.color = "green";
    } else {
        countElement.style.color = "black";
    }
}

decreaseButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

increaseButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Initial counter setup
updateCounter();
