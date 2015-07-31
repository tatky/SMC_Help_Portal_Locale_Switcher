;(function(global) {
  'use strict';

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse({});
  });

  chrome.pageAction.onClicked.addListener(function(){
    chrome.tabs.getSelected(null, function(tab){
      var a = tab.url.match("(^.\.+com)(.*?)(/documentation.+|/technical_library.+)");
      chrome.storage.sync.get({
        locale1: 'ja',
        locale2: 'en',
        isicenabled: true
      }, function(items) {
        var nowl = a[2];
        var to;
        if(nowl){
          if(nowl == "/" + items.locale1){
            to = items.locale2;
          }else if(nowl == "/" + items.locale2){
            to = items.locale1;
          }else{
            to = items.locale1;
          }
        }else{
            to = items.locale1;
        }
        var newUrl = a[1] + "/" + to + a[3];
        chrome.tabs.update({url: newUrl});
      });
    });
  });

}(this.self || global));
