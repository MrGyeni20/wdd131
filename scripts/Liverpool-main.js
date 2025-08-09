// === Responsive Nav Menu Toggle (already done) ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('active');
});

// === 1. HTML Form Handling ===
// Assuming there's a form with id="fanForm"
const fanForm = document.getElementById('fanForm');
if (fanForm) {
  fanForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('fanName').value;
    const favPlayer = document.getElementById('favPlayer').value;

    // Save to localStorage
    localStorage.setItem('fanName', name);
    localStorage.setItem('favPlayer', favPlayer);

    // Display using template literal
    const message = `Thanks, ${name}! Your favorite player is ${favPlayer}.`;
    document.getElementById('formMessage').textContent = message;
  });
}

// === 2. JavaScript Object ===
const currentManager = {
  name: "Arne Slot",
  nationality: "Dutch",
  started: 2024,
  style: "Pressing and positional play",
};

console.log(`Current manager: ${currentManager.name} (${currentManager.nationality})`);

// === 3. Array + Array Method ===
const legendaryPlayers = [
  "Steven Gerrard",
  "Kenny Dalglish",
  "Ian Rush",
  "John Barnes",
  "Mohamed Salah"
];

const uppercasedLegends = legendaryPlayers.map(player => player.toUpperCase());
console.log("Legendary Players:", uppercasedLegends);

// === 4. Template Literal Example ===
const userName = localStorage.getItem('fanName');
if (userName) {
  const greeting = `Welcome back, ${userName}!`;
  document.getElementById('userGreeting')?.textContent = greeting;
}



