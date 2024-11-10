// Überprüfen, ob das Cookie gesetzt wurde
if (!document.cookie.split('; ').find(row => row.startsWith('cookiesAccepted='))) {
    document.getElementById('cookie-banner').style.display = 'flex';
}

// Event-Listener für den Zustimmungs-Button
document.getElementById('accept-cookies').addEventListener('click', function() {
    // Setzt ein Cookie, um die Zustimmung zu speichern
    document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60*60*24*365;
    document.getElementById('cookie-banner').style.display = 'none';
});
