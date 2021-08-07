function profileHover(element) {
  element.setAttribute('src', "Assets/Images/Profile-Blink.gif");
}

function profileUnhover(element) {
  element.setAttribute('src', "Assets/Images/Profile.png");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  all_content = document.getElementsByClassName('header');
  var position = "absolute";
  var top = "0px";
  if (window.innerWidth < 720) {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
      position = "fixed";
      top = "-140px";
    }
  }
  else {
    position = "fixed";
  }
  for (i = 0; i < all_content.length; i++) {
    all_content[i].style.position = position;
    all_content[i].style.top = top;
  }
}
