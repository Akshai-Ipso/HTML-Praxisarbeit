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
    const comment = document.getElementById("comment").value;

    if (selectedRating > 0 && comment) {
        addReview(selectedRating, comment);
        resetForm();
    } else {
        alert("Bitte geben Sie eine Bewertung und einen Kommentar ab.");
    }
}

// Fügt eine neue Bewertung in den Reviews-Bereich hinzu
function addReview(rating, comment) {
    const reviews = document.getElementById("reviews");
    
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    // Sterne-Anzeige für die Bewertung
    const ratingSpan = document.createElement("span");
    ratingSpan.classList.add("rating");
    ratingSpan.textContent = "★".repeat(rating);
    reviewDiv.appendChild(ratingSpan);

    // Kommentartext
    const commentP = document.createElement("p");
    commentP.classList.add("comment");
    commentP.textContent = comment;
    reviewDiv.appendChild(commentP);

    reviews.appendChild(reviewDiv);
}

// Setzt das Formular nach dem Absenden zurück
function resetForm() {
    selectedRating = 0;
    updateStars();
    document.getElementById("comment").value = "";
}

