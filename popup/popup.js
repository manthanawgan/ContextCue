// This tells the browser: "Don't run the code inside this function
// until the entire HTML page structure is ready."
document.addEventListener('DOMContentLoaded', () => {
    
    const enableToggle = document.getElementById('enable-toggle');

    // Load the saved state from chrome.storage
    chrome.storage.sync.get(['extensionEnabled'], (result) => {
        enableToggle.checked = !!result.extensionEnabled;
    });

    // Save the state when the toggle is changed
    enableToggle.addEventListener('change', () => {
        const isEnabled = enableToggle.checked;
        chrome.storage.sync.set({ extensionEnabled: isEnabled });
    });

});