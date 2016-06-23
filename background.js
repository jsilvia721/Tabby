
chrome.browserAction.onClicked.addListener(function(tabs) {
  
  // Send a message to the active tab
  // function func(){
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    var foundSelected = false;
    for(var i = 0; i <= tabs.length; i++){
      if(i == tabs.length){
        i = 0;
      } 
      if (tabs[i].active){
        foundSelected = true;
      }
      // Finding the next tab.
      else if (foundSelected){
        // Selecting the next tab.
        chrome.tabs.update(tabs[i].id, {active: true});
        chrome.tabs.reload(tabs[i].id);
        return;
      }
    }
    // var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});
//   timer = setTimeout(func, 2000);
// }
// var timer = setTimeout(func, 2000);
// This block is new!
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "open_new_tab" ) {
//       chrome.tabs.create({"url": request.url});
//     }
//   }
// );
// https://www.sitepoint.com/delay-sleep-pause-wait/
// http://stackoverflow.com/questions/37996288/switch-chrome-tabs-and-refresh-every-5-seconds-javascript