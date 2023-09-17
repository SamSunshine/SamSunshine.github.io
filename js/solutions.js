//For solutions page
function animateSectionsOnScroll() {
    const nftMarketSection = document.getElementById('nftMarketSection');
    const propertyManagementSection = document.getElementById('propertyManagementSection');
    const saidTestbedSection = document.getElementById('saidTestbedSection');
  
    //By adding the checks like if (nftMarketSection && isInViewport(nftMarketSection)), you ensure that the element is not null before attempting to access its properties. This will prevent the error from occurring if any of the targeted elements are not found in the DOM.
    if (nftMarketSection && isInViewport(nftMarketSection)) {
      nftMarketSection.classList.add('visible');
    }
  
    if (propertyManagementSection && isInViewport(propertyManagementSection)) {
      propertyManagementSection.classList.add('visible');
    }
  
    if (saidTestbedSection && isInViewport(saidTestbedSection)) {
      saidTestbedSection.classList.add('visible');
    }
  }
  
  window.addEventListener('scroll', animateSectionsOnScroll);
  