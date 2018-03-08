

function openCate(evt) {
  var i, link;

  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";}

function header(){
      document.getElementById("defaultOpen").click();
}



  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {

        var objectBottom = $(this).offset().top + $(this).outerHeight();


        if (objectBottom < windowBottom) {
          if ($(this).css("opacity")==0) {
            $(this).fadeTo(100,1);}
        } else {
        }
      });
    }).scroll();
  }); 

function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    document.getElementById('menu').style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('menu').style.backgroundColor = "";
}
