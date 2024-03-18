chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    // Check if the URL is a Google service and contains '/1/' or '/0/'
    if (url.includes('google.com') && (url.includes('/1/') || url.includes('/0/'))) {
        // Toggle between '1' and '0'
        var newUrl = url.replace(/\/([01])\//, function(match, p1) {
            return `/${p1 === '0' ? '1' : '0'}/`;
        });
        chrome.tabs.update(tab.id, {url: newUrl});
    }
});
