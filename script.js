let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function decrement() {
    if (count > 0) {
        count = count - 1;
        countEl.innerText = count;
    }
}

function startover() {
    count = 0;
    countEl.innerText = count;
}

const currYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currYear;