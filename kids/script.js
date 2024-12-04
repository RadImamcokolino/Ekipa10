// script.js

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Preverimo, če je uporabnik že izbral temo v preteklosti
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

// Funkcija za preklop teme
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    // Shranimo izbrano temo v localStorage, da se ohrani tudi po ponovnem nalaganju strani
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// script.js

// Funkcija za prikaz trenutnega datuma v slovenskem formatu
function displayDate() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');  // Dodamo 0 pred enomestnim dnem
  const month = (today.getMonth() + 1).toString().padStart(2, '0');  // Dodamo 0 pred enomestnim mesecem
  const year = today.getFullYear();

  // Oblikujemo datum v slovenskem formatu: dd. mm. yyyy
  const formattedDate = `${day}. ${month}. ${year}`;

  // Prikazujemo datum v elementu z ID-jem 'date'
  document.getElementById('date').textContent = `Danes je: ${formattedDate}`;
}

// Funkcija za preklapljanje "prikaži več"
function toggleText(id) {
  const moreText = document.getElementById(id);
  const btn = moreText.previousElementSibling; // Gumb je pred besedilom

  // Preverimo, če je besedilo trenutno skrito
  if (moreText.style.display === "none") {
      moreText.style.display = "inline"; // Prikazujemo besedilo
      btn.textContent = "Prikaži manj"; // Spremenimo gumb
  } else {
      moreText.style.display = "none"; // Skrijemo besedilo
      btn.textContent = "Prikaži več"; // Spremenimo gumb nazaj
  }
}

// Klic funkcije za prikaz trenutnega datuma, ko se stran naloži
window.onload = displayDate;
