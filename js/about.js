
// Function for table to hide/show the techs
// function myFunction() {
//   var x = document.getElementById("techs");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// Function for table to hide/show the skills
// function myFunction2() {
//   var x = document.getElementById("skills");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


/* WORK EXPEREIENCE SECTION */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let solns = document.getElementsByClassName("soln");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < solns.length; i++) {
    solns[i].className = solns[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  solns[slideIndex-1].className += " active";
  }

/* EDUCATION SECTION */
filterSelection2("education")
function filterSelection2(c) {
var x, i;
x = document.getElementsByClassName("filterDiv2");
if (c == "all2") c = "";
for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show2");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show2");
}
}


function w3AddClass(element, name) {
var i, arr1, arr2;
arr3 = element.className.split(" ");
arr4 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr3.indexOf(arr4[i]) == -1) {element.className += " " + arr4[i];}
}
}

function w3RemoveClass(element, name) {
var i, arr3, arr4;
arr3 = element.className.split(" ");
arr4 = name.split(" ");
for (i = 0; i < arr4.length; i++) {
  while (arr3.indexOf(arr4[i]) > -1) {
    arr3.splice(arr3.indexOf(arr4[i]), 1);     
  }
}
element.className = arr3.join(" ");
}

// Add active class to the current button (highlight it)
// var btn2Container = document.getElementById("myBtn2Container");
// var btns2 = btn2Container.getElementsByClassName("btn2");
// for (var i = 0; i < btns2.length; i++) {
// btns2[i].addEventListener("click2", function(){
//   var current = document.getElementsByClassName("active2");
//   current[0].className = current[0].className.replace(" active2", "");
//   this.className += " active2";
// });
// }



/* TECHNICAL SECTION */
filterSelection("techs")
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("filterDiv1");
if (c == "all") c = "";
for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}


function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);     
  }
}
element.className = arr1.join(" ");
}

// // Add active class to the current button (highlight it)
// var btn1Container = document.getElementById("myBtn1Container");
// var btns1 = btn1Container.getElementsByClassName("btn1");
// for (var i = 0; i < btns1.length; i++) {
// btns1[i].addEventListener("click", function(){
//   var current = document.getElementsByClassName("active1");
//   current[0].className = current[0].className.replace(" active1", "");
//   this.className += " active1";
// });
// }