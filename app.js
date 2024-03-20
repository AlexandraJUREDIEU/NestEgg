 /**
   * Affiche la Navbar de façon différente en fonction de la largeur (supérieur à 980)
   */  
 if (window.innerWidth > 980){
    document.querySelector(".ico-menu-hamburger").setAttribute("style", "display: none");
    document.querySelector(".ul-nav-header").setAttribute("style", "display: flex");
    document.querySelector("nav").classList.remove("nav-primary");
    document.querySelector("nav").classList.add("nav-secondary");
  } else {
    document.querySelector(".ico-menu-hamburger").setAttribute("style", "display: flex");
    document.querySelector(".nav-primary").setAttribute("style", "display: none");
    document.querySelector("nav").classList.add("nav-primary");
    document.querySelector("nav").classList.remove("nav-secondary");
  }
