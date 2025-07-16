// Display current year in footer
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Display last modified date in footer
const modifiedEl = document.getElementById("modified");
modifiedEl.textContent = document.lastModified;

// Wind Chill Calculation (Fahrenheit)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

// Get temperature and wind speed values from DOM
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chillEl = document.getElementById("chill");

// Apply wind chill formula if conditions are met
if (temp <= 50 && speed > 3) {
  const windChill = calculateWindChill(temp, speed).toFixed(1);
  chillEl.textContent = `${windChill}°F`;
} else {
  chillEl.textContent = "N/A";
}
