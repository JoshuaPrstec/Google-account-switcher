chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentUrl = tabs[0].url;
  const newUrl = currentUrl.includes('/u/0/') ? currentUrl.replace('/u/0/', '/u/1/') : currentUrl.replace('/u/1/', '/u/0/');
  chrome.tabs.update(tabs[0].id, { url: newUrl });
});
