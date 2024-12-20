document.addEventListener("DOMContentLoaded", () => {
    // Calculator Elements
    const calculator = document.getElementById("calculator");

    // Create the calculator screen
    const screen = document.createElement("input");
    screen.type = "text";
    screen.className = "form-control screen";
    screen.id = "screen";
    screen.disabled = true; // Screen is not directly editable
    calculator.appendChild(screen);

    // Create the button panel
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "C", "0", "=", "+"
    ];

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "row";
    calculator.appendChild(buttonContainer);

    buttons.forEach((btn) => {
        const button = document.createElement("button");
        button.className = "btn btn-secondary col-3 py-3";
        button.textContent = btn;
        button.addEventListener("click", () => handleButtonClick(btn));
        buttonContainer.appendChild(button);
    });

    // Handle button clicks
    const handleButtonClick = (value) => {
        if (value === "C") {
            screen.value = "";
        } else if (value === "=") {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error";
            }
        } else {
            screen.value += value;
        }
    };

    // Handle keyboard events for numbers only
    document.addEventListener("keydown", (e) => {
        if (!/[0-9+\-*/.=]/.test(e.key)) {
            alert("Only numbers and operators are allowed!");
            e.preventDefault();
        } else {
            if (e.key === "Enter") {
                handleButtonClick("=");
            } else {
                screen.value += e.key;
            }
        }
    });
});
