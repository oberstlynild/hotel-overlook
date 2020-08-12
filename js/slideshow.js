let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(image) {
  showDivs(slideIndex += image);
}

function showDivs(image) {
  let slide = document.getElementsByClassName("seperator-slideshow");
  if (image > slide.length) {slideIndex = 1}
  if (image < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slide[slideIndex-1].style.display = "block";  
}