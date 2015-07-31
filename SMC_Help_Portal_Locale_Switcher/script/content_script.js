// manifest.jsonの記述にmatchするURLでのみ実行される。
// でもアレコレしたいページのwindowの一部にはアクセスできないコなので、
// background.jsにアイコンを表示するよう指示し、メイン処理のファイルを埋め込む。
;(function(global) {
  'use strict';
  chrome.extension.sendRequest({}, function(res) {});

  chrome.storage.sync.get({
    locale1: chrome.i18n.getUILanguage(),
    locale2: 'en',
    isicenabled: true,
  }, function(items) {
    if(items.isicenabled){
      var s = document.createElement('script');
      s.src = chrome.extension.getURL("script/main.js");
      s.onload = function() {
        this.parentNode.removeChild(this);
      };
      (document.head||document.documentElement).appendChild(s);
    }
  });

}(this.self || global));