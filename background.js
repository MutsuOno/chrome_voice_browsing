// Extensionのアイコンがクリックされたらcontent-script.jsに通知
chrome.browserAction.onClicked.addListener(function (tab) {

  chrome.tabs.sendMessage(tab.id, "iconClick");
});
