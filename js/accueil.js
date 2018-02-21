function openCate(evt) {
  var i, link;

  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";}
