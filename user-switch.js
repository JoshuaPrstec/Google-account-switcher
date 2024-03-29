chrome.action.onClicked.addListener((tab) => {
  let url = tab.url;
  // Check if the URL is a Google service and contains 'u/1' or 'u/0'
  if (url.includes('google.com') && (url.includes('u/1') || url.includes('u/0'))) {
    // Toggle between 'u/1' and 'u/0'
    let newUrl = url.replace(/u\/([01])/, (match, p1) => {
      return `u/${p1 === '0' ? '1' : '0'}`;
    });
    chrome.tabs.update(tab.id, { url: newUrl });
  } else if (url.includes('google.com') && !url.includes('u/0') && !url.includes('u/1')) {
    // Replace 'pli=1' or 'authuser=0' with 'authuser=1'
    let newUrl = url.replace(/(pli=1)|(authuser=0)/g, 'authuser=1');
    // Ensure only the first instance of 'authuser=1' is replaced when 'authuser=0' was not present
    if (!url.includes('authuser=0')) {
      newUrl = newUrl.replace('authuser=1', 'authuser=0');
    }
    chrome.tabs.update(tab.id, { url: newUrl });
  }
});
