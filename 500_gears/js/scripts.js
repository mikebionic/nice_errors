
setTimeout(function(){
  el = document.getElementsByTagName('body');
  el[0].className = el[0].className.replace("loading", "");
  // .removeClass('loading');
}, 1000);

