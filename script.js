function convertTemp() {
    const input = document.getElementById("tempInput").value;
    const type = document.getElementById("tempType").value;
    const result = document.getElementById("result");

    if (input === "" || isNaN(input)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    const value = parseFloat(input);
    let output = "";

    if (type === "celsius") {
        const f = (value * 9/5) + 32;
        const k = value + 273.15;
        output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }

    if (type === "fahrenheit") {
        const c = (value - 32) * 5/9;
        const k = c + 273.15;
        output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }

    if (type === "kelvin") {
        const c = value - 273.15;
        const f = (c * 9/5) + 32;
        output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    result.textContent = output;
}
