// Get the button element from the popup
const btn = document.getElementById('downloadBtn');

// Add a click listener
btn.addEventListener('click', () => {
    console.log('Download User Videos clicked');
    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
        setTimeout(() => {
            chrome.tabs.sendMessage(tab.id, {action: 'DOWNLOAD_USER_VIDEOS'}, response => {
                console.log('Reply from content:', response);
            });
        }, 100)
    });
});
