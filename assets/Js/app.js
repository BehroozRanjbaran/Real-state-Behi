/*===== CHANGE BACKGROUND HEADER ======*/
function scrollHeader() {
    const header = document.getElementById("header");
    // when the scroll is greater than 50 viewport height
    if(this.scrollY >= 50) header.classList.add("scroll-header");
  }
  
  window.addEventListener('scroll', scrollHeader);