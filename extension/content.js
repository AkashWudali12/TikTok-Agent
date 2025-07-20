chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  if (msg.action === 'DOWNLOAD_USER_VIDEOS') {
    // e.g., click a button or change DOM
    console.log("DOWNLOADING TIKTOK VIDS");
    await clickAllTikTokVideoLinks(0);
    sendResponse({status: 'done'});
  }
});

async function clickAllTikTokVideoLinks(idx) {
    // Select all <a> elements
    const links = document.querySelectorAll('a');
    const backlink = window.location.href;
    if (idx >= links.length) {
        return;
    }
    const a = links[idx];
    if (/tiktok\.com\/[^/]+\/video\/\d+/.test(a.href)) {
        console.log(`Clicking link #${idx}:`, a.href);
        a.click(); // CHANGES THE DOM
        await handleTikTokVideoPage(backlink);
    } else {
        console.log(`Skipping link #${idx}:`, a.href);
    }
    clickAllTikTokVideoLinks(idx + 1);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function handleTikTokVideoPage(backlink) {
    console.log("Get Video");
    await delay(100000);
    window.location.href = backlink;
}
