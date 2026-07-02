// ===============================
// CodeAlpha Premium Calculator
// Developed by Malaika Khan
// ===============================

// Elements
const display = document.getElementById("display");
const expression = document.getElementById("expression");
const historyList = document.getElementById("historyList");

let currentInput = "";
let history = [];

// ===============================
// Update Display
// ===============================
function updateDisplay() {
    display.value = currentInput || "0";
}

// ===============================
// Append Value
// ===============================
function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

// ===============================
// Clear Display
// ===============================
function clearDisplay() {
    currentInput = "";
    expression.textContent = "";
    updateDisplay();
}

// ===============================
// Delete Last Character
// ===============================
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
// ===============================
// Calculate Result
// ===============================
function calculate() {

    try {

        expression.textContent = currentInput;

        let result = eval(currentInput);

        display.value = result;

        history.unshift(currentInput + " = " + result);

        updateHistory();

        currentInput = result.toString();

    }

    catch {

        display.value = "Error";

        currentInput = "";

    }

}
// ===============================
// Update History
// ===============================
function updateHistory() {

    historyList.innerHTML = "";

    history.forEach(function(item){

        let li = document.createElement("li");

        li.textContent = item;

        historyList.appendChild(li);

    });

}
// ===============================
// Theme Toggle
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeToggle.textContent = "☀️";

    }

    else{

        themeToggle.textContent = "🌙";

    }

});
