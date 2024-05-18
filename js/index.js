
// pop up video
document.getElementById("open-movie").onclick = function () {
  var openMovie = document.getElementById("movie_popup");
  openMovie.style.display = "flex";
};
document.getElementById("close-movie").onclick = function () {
  var closeMovie = document.getElementById("movie_popup");
  closeMovie.style.display = "none";
};

// toggle mode
let btn = document.getElementById("moon_icoin");

let changeIcon = function (icon) {
  icon.classList.toggle("bi-sun");
};
//changed  color
// const theme = localStorage.getItem('theme');
// if (theme){
//   document.body.classList.add("dark_theme");
// }

btn.onclick = function () {
  const addClass = document.getElementById("darl_mode");
  document.body.classList.toggle("dark_theme");
  // if (document.body.classList.contains("dark_theme")){
  //   localStorage.setItem("theme", "dark_theme");

  // }else{
  //   localStorage.removeItem('theme')
  // }
};

// back to top
window.onscroll = function(){
  scrollFunct();
};
function scrollFunct(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("backTop").style.display = 'block';
    document.getElementById('site-header').style.padding = '10px 0'
  }else{
    document.getElementById("backTop").style.display = 'none';
    document.getElementById('site-header').style.padding = '15px 0'
  }
}

// click to btn scroll to top
document.getElementById('backTop').onclick = function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

// scale header


