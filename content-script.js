// background.jsからアイコンがクリックされた通知を受け取ると実行される
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "iconClick") {
    hide();
  }
});

function hide() {

  var forEach = Array.prototype.forEach;
  var section = document.querySelectorAll('body');
  forEach.call(section, function (elem) {
    elem.style.backgroundColor = '#000';
    elem.style.color = "#000";
    elem.style.opacity = 0;
  });

  const uttr = new SpeechSynthesisUtterance()
  document.onmouseover = function (e) {
    var tag = e.target.tagName;
      var array = ['HTML','HEADER','BODY','ARTICLE','MAIN','NAV','UL','SECTION','TABLE','FOOTER'];
      if(!array.includes(tag)) {
      
        var text = e.target.innerText;
        if (text.length < 300) {
          console.log(text);
          speechSynthesis.cancel();
          uttr.text = text
          speechSynthesis.speak(uttr)
        }
      } else {
        speechSynthesis.cancel();
      }
  }
}