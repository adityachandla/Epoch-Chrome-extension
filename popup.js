chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  var localElement = document.getElementById("localTime");
  var gmtElement = document.getElementById("gmtTime");
  var string = selection[0]
  if(string.length == 10 || string.length == 13) {
    var value = parseInt(string)
    if(string.length == 10){
      value *= 1000;
    }
    var date = new Date(value)
    localElement.innerHTML = date;
    gmtElement.innerHTML = date.toUTCString();
  }else{
	  localElement.innerHTML = "Invalid String"
	  gmtElement.innerHTML = "Invalid String"
  }
});
