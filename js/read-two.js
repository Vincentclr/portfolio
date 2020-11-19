function myFunctionTwo() {
  var dots = document.getElementById("dots-two");
  var moreText = document.getElementById("more-two");
  var btnText = document.getElementById("myBtn-two");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
