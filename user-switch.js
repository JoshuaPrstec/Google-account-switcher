chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    // Check if the URL is a Google service and contains '/u/0/' or '/u/1/'
    if (url.includes('google.com') && (url.includes('/u/0/') || url.includes('/u/1/'))) {
        // Switch between '/u/0/' and '/u/1/'
        var newUrl = url.replace('/u/0/', '/u/1/').replace('/u/1/', '/u/0/');
        chrome.tabs.update(tab.id, {url: newUrl});
    }
});
