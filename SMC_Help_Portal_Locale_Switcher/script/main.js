;(function(global) {
  'use strict';
  $('a:not([href*=document],[href*=technical_library])').attr('data-no-instant', true);
  var j = document.createElement("script");
  j.src = "//cdn.jsdelivr.net/instantclick/3.1.0/instantclick.min.js";
  document.body.insertBefore(j, document.body.lastChild.nextSibling);
  j.onload = function(e){
    var j2 = document.createElement("script");
    j2.innerHTML += "InstantClick.on('receive', function(url, body, title) {";
    j2.innerHTML +=   "$(body).find('a:not([href*=document],[href*=technical_library])').attr('data-no-instant', true);";
    j2.innerHTML +=   "return {";
    j2.innerHTML +=     "body: body,";
    j2.innerHTML +=     "title: title";
    j2.innerHTML +=   "};";
    j2.innerHTML += "});";
    j2.innerHTML += "InstantClick.init();";
    j2.dataset.noInstant=true;
    document.body.insertBefore(j2, document.body.lastChild.nextSibling);
  }
}(this.self || global));
