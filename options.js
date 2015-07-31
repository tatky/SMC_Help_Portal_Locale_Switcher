function save_options() {
  var locale1 = document.getElementById('locale1').value;
  var locale2 = document.getElementById('locale2').value;
  var isicenabled = document.getElementById('isicenabled').checked;
  chrome.storage.sync.set({
    locale1: locale1,
    locale2: locale2,
    isicenabled: isicenabled
  }, function(){
    alert("Saved");
  });
}

function restore_options() {
  chrome.storage.sync.get({
    locale1: 'ja-JP',
    locale2: 'en',
    isicenabled: true
  }, function(items) {
    document.getElementById('locale1').value = items.locale1;
    document.getElementById('locale2').value = items.locale2;
    document.getElementById('isicenabled').checked = items.isicenabled;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);
