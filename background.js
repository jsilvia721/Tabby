chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
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
        return;
      }
  	}
    // var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "open_new_tab" ) {
//       chrome.tabs.create({"url": request.url});
//     }
//   }
// );