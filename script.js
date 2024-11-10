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

// Zeige den Button nur beim Scrollen
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Funktion zum Scrollen nach oben
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
