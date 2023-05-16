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




function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active3", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active3";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("w3-black", "w3-red");
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace("w3-red", "w3-black");
    }
  }


// Hamburger menu  
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }
