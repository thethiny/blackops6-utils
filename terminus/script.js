function validateAndCalculate() {
    const _x = document.getElementById("x");
    const _y = document.getElementById("y");
    const _z = document.getElementById("z");
    const x = _x.value;
    const y = _y.value;
    const z = _z.value;
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = "";

    const regex = /^[0-2]?[0-2]$/;
    let state = true;
    ["x", "y", "z"].forEach(variable => {
        const element = document.getElementById(variable);
        if (!regex.test(element.value)) {
            if (state) {
                errorDiv.textContent = `${variable} must be a 2-digit integer using 0, 1, or 2 only.`;
            }
            clearResults();
            state = false;
            element.style.borderColor = "red";
            return;
        }
        element.style.borderColor = "green";
    });

    if (x == y) {
        _x.style.borderColor = "red";
        _y.style.borderColor = "red";
        errorDiv.textContent = "Values of x, y, and z must be different.";
    }
    if (x == z) {
        _x.style.borderColor = "red";
        _z.style.borderColor = "red";
        errorDiv.textContent = "Values of x, y, and z must be different.";
    }
    if (y == z) {
        _z.style.borderColor = "red";
        _y.style.borderColor = "red";
        errorDiv.textContent = "Values of x, y, and z must be different.";
    }

    if (x === y || y === z || x === z) {
        errorDiv.textContent = "Values of x, y, and z must be different.";
        clearResults();
        return;
    }

    const val1 = 2 * parseInt(x) + 11;
    const val2 = 2 * parseInt(z) + parseInt(y) - 5;
    const val3 = Math.abs(parseInt(y) + parseInt(z) - parseInt(x));

    assignResults(val1, val2, val3);
}

function assignResults(res1 = "", res2 = "", res3 = "") {
    document.getElementById("result1").value = res1;
    document.getElementById("result2").value = res2;
    document.getElementById("result3").value = res3;
}

function clearResults() {
    assignResults();
}
