function profileHover(element) {
  element.setAttribute('src', "Assets/Images/Profile-Blink.gif");
}

function profileUnhover(element) {
  element.setAttribute('src', "Assets/Images/Profile.png");
}

window.onscroll = function() {scrollFunction()};
window.addEventListener('resize', scrollFunction);

/* Adjust the header when scrolling down */
function scrollFunction() {
  all_content = document.getElementsByClassName('header');
  visible_header = document.getElementById('visible-header');
  ecg_image = document.getElementsByClassName('ecg');
  var position = "absolute";
  var top = "0px";
  var header_opacity = 1;
  var ecg_opacity = 1;

  // Adjust navbar positioning when scrolling down
  if (document.body.scrollTop > visible_header.offsetTop || document.documentElement.scrollTop > visible_header.offsetTop) {
    position = "fixed";
    top = "-130px";
    header_opacity = 0.8;
    ecg_opacity = 0;
  }

  if (window.innerWidth <= 930) {
    ecg_opacity = 0;
  }

  // Set CSS
  for (i = 0; i < all_content.length; i++) {
    all_content[i].style.position = position;
    all_content[i].style.top = top;
    all_content[i].style.opacity = header_opacity;
  }
  for (j = 0; j < ecg_image.length; j++) {
    ecg_image[j].style.opacity = ecg_opacity;
  }
}

/* Remove the hash from the URL when the page is reloaded to prevent page jumps */
function anchorLinks() {
  if (location.hash != '') {
      window.history.replaceState('', document.title, location.href.replace(/#.*$/, ''));
  }
}

anchorLinks();
