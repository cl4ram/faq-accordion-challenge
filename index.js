const disclosures = document.querySelectorAll('.js-disclosure');

function toggleDisclosure() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  const element = this.lastElementChild

  if (!isExpanded) {
    element.src = "./assets/images/icon-minus.svg"
    element.alt = "Icon for opened accordion"
  } else if (isExpanded){
    element.src = "./assets/images/icon-plus.svg"
    element.alt = "Icon for closed accordion"
}
}

function init() {
  if (!disclosures.length) {
    return
  }
  
  disclosures.forEach(component => {
    component.dataset.state = 'ready';
    
    const disclosureButtons = component.querySelectorAll('.js-disclosure-btn');
    
    disclosureButtons.forEach(btn => {
      btn.removeAttribute('title');
      btn.removeAttribute('disabled');

      btn.addEventListener('click', toggleDisclosure);
    });
  }); 
  
  
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    init();
  });