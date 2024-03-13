const acc = document.getElementsByClassName("label-container");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    const isItemActive = this.classList.contains("active");
    const element = this.lastElementChild

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    

    if (isItemActive) {
        element.src = "./assets/images/icon-minus.svg"
        element.alt = "Icon for opened accordion"
    } else if (!isItemActive){
        element.src = "./assets/images/icon-plus.svg"
        element.alt = "Icon for closed accordion"
    }
  });
}