chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
     
      chrome.tabs.update(tabId, {selected: true});
    }
  }
);


 // var firstHref = $("a[href^='http']").eq(0).attr("href");

      // console.log(firstHref);

      // This line is new!
      // chrome.runtime.sendMessage({"message": "switch_tab"});