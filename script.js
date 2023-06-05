function calculateHourlyPay() {
    const yearlyWageInput = document.getElementById("yearly-wage");
    const hourlyPayInput = document.getElementById("hourly-pay");
    const resultDiv = document.getElementById("result");

    const yearlyWage = parseFloat(yearlyWageInput.value);
    if (!isNaN(yearlyWage)) {
        const hourlyPay = yearlyWage / 2080; // Assuming 2080 working hours in a year (40 hours per week, 52 weeks per year)
        hourlyPayInput.value = hourlyPay.toFixed(2);
        resultDiv.textContent = `Hourly Pay: $${hourlyPay.toFixed(2)}`;
    }
}

function calculateYearlyWage() {
    const yearlyWageInput = document.getElementById("yearly-wage");
    const hourlyPayInput = document.getElementById("hourly-pay");
    const resultDiv = document.getElementById("result");

    const hourlyPay = parseFloat(hourlyPayInput.value);
    if (!isNaN(hourlyPay)) {
        const yearlyWage = hourlyPay * 2080; // Assuming 2080 working hours in a year (40 hours per week, 52 weeks per year)
        yearlyWageInput.value = yearlyWage.toFixed(2);
        resultDiv.textContent = `Yearly Wage: $${yearlyWage.toFixed(2)}`;
    }
}