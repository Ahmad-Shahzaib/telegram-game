// app.js
window.onload = function() {
    // Check if the app is opened from within the Telegram environment
    if (window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
        // Check if the user object and the user ID exist
        let userId = Telegram.WebApp.initDataUnsafe.user.id || "198453545"; // Use default ID if user ID not found
        alert('User ID: ' + userId); // Alert user ID
    } else {
        alert('198453545'); // Alert default ID if not opened from Telegram
    }
};
