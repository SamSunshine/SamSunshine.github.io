// function changeMode() {
//     var body = document.body;

//     // toggle the theme
//     body.classList.toggle("light-theme");
//     let button = document.getElementById('darkmode');

//     // change the button text
//     if (button.innerHTML == "Too bright?") {
//        button.innerHTML = "Too dark?";
//     } else {
//        button.innerHTML = "Too bright?"
//     }
//  }



// function darkmode(){
//   //handleing light/dark switch 
//   const wasDarkmode = localStorage.getItem('darkmode') == 'true';
//   localStorage.setItem('darkmode', !wasDarkmode);
//   const element = document.body;
//   element.classList.toggle('dark-mode', !wasDarkmode);

//   //     let button = document.getElementById('buttonToggle');
//   // //     // change the button text
//   //   if (button.innerHTML == "Too bright?") {
//   //      button.innerHTML = "Too dark?";
//   //   } else {
//   //      button.innerHTML = "Too bright?"
//   //   }

// let theme_switcher=document.querySelector("#switcher")

// let storageValue=localStorage.getItem("theme_state")
// if(storageValue===null){
//     localStorage.setItem("theme_state","disabled_state")
// }else if(storageValue==="enabled_state"){
//     darkMode()
// }


// theme_switcher.addEventListener("click",()=>{
//   storageValue=localStorage.getItem("theme_state")
//   if(storageValue==="disabled_state"){
//       darkMode()
//   }else{
//       lightMode()
//   }
// })

// function darkMode(){
//     localStorage.setItem("theme_state","enabled_state")
//     document.body.classList.add("dark_mode")
//     theme_switcher.setAttribute("src","/Assets/logos/aws.png")
// }

// function lightMode(){
//     document.body.classList.remove("dark_mode")
//     localStorage.setItem("theme_state","disabled_state")
//     theme_switcher.setAttribute("src","/Assets/logos/css.png")
// }
// }




// function onload(){
//   document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') ==='true');

// }


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//For home page
function animateSectionsOnScrollHome() {
  // const fadeInSection = document.querySelector('.fade-in-section');
  const slideUpSection = document.querySelector('.slide-up-section');
  const slideUpSection2 = document.querySelector('.slide-up-section-2');


  // if (isInViewport(fadeInSection)) {
  //   fadeInSection.classList.add('visible');
  // }

  if (isInViewport(slideUpSection)) {
    slideUpSection.classList.add('visible');
  }
  if (isInViewport(slideUpSection2)) {
    slideUpSection2.classList.add('visible');
  }
}

window.addEventListener('scroll', animateSectionsOnScrollHome);

const fadeinSpans = document.querySelectorAll('.fade-in-span');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});


fadeinSpans.forEach(span => {
  fadeInObserver.observe(span);
});

/* Function to access different html file */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


/* 404 */
// * to open in new or same tab */ 
// const openLink = document.getElementById('openLink');
// openLink.addEventListener('click', function (e) {
//   e.preventDefault();

//   const choice = confirm('Embark on a New Tab Adventure? Click OK. ');
//   const linkDestination = openLink.getAttribute('href');

//   if (choice) {
//     // Open link in a new tab
//     window.open(linkDestination, '_blank');
//   } else {
//     // Open link in the same tab
//     window.location.href = linkDestination;
//   }
// });

/* Function for tabs on class nav01 */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " nav01-li-active";
  }
  
  // navigation 
  function myFunctionSideNav() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//  Enlarge images
const images = document.querySelectorAll('.enlargeable');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('enlarged');
  });
});


// JavaScript to add the "fade-in" image class after a delay
window.onload = function () {
  setTimeout(function () {
    document.querySelector(".fade-in-image").classList.add("fade-in");
  }, 500); // Adjust the delay time in milliseconds (e.g., 1000ms = 1 second)
};



