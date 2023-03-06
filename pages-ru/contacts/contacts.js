
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
  }
  
  
  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
  }
  
  
  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header-top").style.top = "0";
    } else {
      document.getElementById("header-top").style.top = "-40px";
    }
    prevScrollpos = currentScrollPos;
    
    
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop >100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navigation").style.padding = "7px 0px 3px";
      document.getElementById("logo").style.width = "250px";
      document.getElementById("logo").style.height = "65px";
    } else {
      document.getElementById("navigation").style.padding = "35px 0px 10px";
      document.getElementById("logo").style.width = "270px";
    }
  }
  