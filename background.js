// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({file:"extension.js"});
	chrome.tabs.executeScript({
		code: `document.cookie = 'DWMlocation=${location.origin};path=/';`
	});
});