searchFastDic = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://fastdic.com/word/" + query});
};

chrome.contextMenus.create({
  title: "Search in FastDic",
  contexts:["selection"],
  onclick: searchFastDic
});