// Funktion zum Anzeigen des Datenschutz-Hinweises 
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("datenschutzModal");
    const closeModal = document.getElementById("closeModal");
    const acceptCookies = document.getElementById("acceptCookies");

    // Prüfen, ob der Benutzer den Hinweis bereits akzeptiert hat
    if (localStorage.getItem("cookiesAccepted") !== "true") {
        // Modal anzeigen
        modal.style.display = "block";
    }

    // Modal schließen, wenn der Benutzer auf das "X" klickt
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // Modal schließen und Zustimmung speichern, wenn "Akzeptieren" geklickt wird
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
});

// Globale Variable zum Speichern der ausgewählten Bewertung
let selectedRating = 0;

// Sterne-Interaktivität: Klick-Event für Sterne
document.querySelectorAll(".star").forEach((star, index) => {
    star.addEventListener("click", function() {
        selectedRating = index + 1; // Speichere die ausgewählte Bewertung
        updateStars(); // Aktualisiere die Sterneanzeige
    });
});

// Aktualisiert die Sternen-Anzeige je nach ausgewählter Bewertung
function updateStars() {
    document.querySelectorAll(".star").forEach((star, index) => {
        // Markiere alle Sterne bis zur ausgewählten Bewertung als ausgewählt
        star.classList.toggle("selected", index < selectedRating);
    });
}

// Funktion zum Absenden der Bewertung
function submitRating() {
    const comment = document.getElementById('comment').value;

    if (selectedRating && comment) {
        const reviewContainer = document.getElementById('reviews');
        
        // Neue Bewertung hinzufügen
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `<strong>${selectedRating} Sterne</strong><p>${comment}</p>`;
        
        reviewContainer.appendChild(review);

        // Formular zurücksetzen
        selectedRating = 0; // Bewertung zurücksetzen
        updateStars(); // Sterneanzeige zurücksetzen
        document.getElementById('comment').value = ''; // Kommentar zurücksetzen
        alert('Danke für Ihre Bewertung!');
    } else {
        alert('Bitte geben Sie eine Bewertung und einen Kommentar ein.');
    }
}
