/* Открыть, когда кто-то нажимает на элемент span */
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
  }
  
  /* Закрыть, когда кто-то нажимает на символ "x" внутри наложения */
  function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
  }
  

  
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-top").style.top = "0";
  } else {
    document.getElementById("header-top").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  
  
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop >100 || document.documentElement.scrollTop >100) {
    document.getElementById("navigation").style.padding = "10px 0px 5px";
    document.getElementById("logo").style.width = "250px";
    document.getElementById("logo").style.height = "65px";
  } else {
    document.getElementById("navigation").style.padding = "45px 0px 5px";
    document.getElementById("logo").style.width = "270px";
  }
}  


  
  function openPage(pageName, elmnt, color) {
    // Скрыть все элементы class="tabcontent" по умолчанию */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Удалите цвет фона всех ссылок/кнопок вкладок
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Показать содержимое конкретной вкладки
    document.getElementById(pageName).style.display = "block";
  
    // Добавить конкретный цвет кнопки, используемой для открытия содержимого вкладки
    elmnt.style.backgroundColor = color;
  }
  
  // Получите элемент с id="defaultOpen" и нажмите на него
  document.getElementById("defaultOpen").click();
  
  
  
  
