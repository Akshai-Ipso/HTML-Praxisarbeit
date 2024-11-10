// Funktion zum Anzeigen des Datenschutz-Hinweises
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("datenschutzModal");
    const closeModal = document.getElementById("closeModal");
    const acceptCookies = document.getElementById("acceptCookies");

    // Modal anzeigen
    modal.style.display = "block";

    // Modal schließen, wenn der Benutzer auf das "X" oder "Akzeptieren" klickt
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    acceptCookies.onclick = function () {
        modal.style.display = "none";
        // Setze ein Cookie oder eine lokale Speicherung, um den Hinweis nur einmal anzuzeigen
        localStorage.setItem("cookiesAccepted", "true");
    };

    // Modal schließen, wenn außerhalb des Modals geklickt wird
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Prüfen, ob der Benutzer den Hinweis bereits akzeptiert hat
    if (localStorage.getItem("cookiesAccepted") === "true") {
        modal.style.display = "none";
    }
});
// Globale Variablen zum Speichern der Bewertung und des Kommentars
let selectedRating = 0;

document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function() {
        selectedRating = this.getAttribute("data-value");
        updateStars();
    });
});

// Aktualisiert die Sternen-Anzeige je nach ausgewählter Bewertung
function updateStars() {
    document.querySelectorAll(".star").forEach(star => {
        star.classList.toggle("selected", star.getAttribute("data-value") <= selectedRating);
    });
}

// Funktion zum Absenden der Bewertung
function submitRating() {
    const rating = document.querySelector('.star.selected') ? document.querySelector('.star.selected').dataset.value : null;
    const comment = document.getElementById('comment').value;

    if (rating && comment) {
        const reviewContainer = document.getElementById('reviews');
        
        // Neue Bewertung hinzufügen
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `<strong>${rating} Sterne</strong><p>${comment}</p>`;
        
        reviewContainer.appendChild(review);

        // Formular zurücksetzen
        document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
        document.getElementById('comment').value = '';
        alert('Danke für Ihre Bewertung!');
    } else {
        alert('Bitte geben Sie eine Bewertung und einen Kommentar ein.');
    }
}

// Sterne-Interaktivität
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
    });
});
