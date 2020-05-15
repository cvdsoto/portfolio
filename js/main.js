const nav = document.querySelectorAll('a.nav-link');

nav.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

mybutton = document.getElementById("toTop");
console.log('button', mybutton);

// When the user scrolls down 20px from the top of the document, show the button
main = document.getElementById("main");

main.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (main.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.getElementById("home").scrollIntoView({
    behavior: 'smooth'
  })
}

// window.addEventListener('resize', function(event){
//   console.log('width', window.innerWidth);
//   if (window.innerWidth > 1670) {
//     mybutton.style.right = "5em";
//   } else if (window.innerWidth > 1126) {
//     mybutton.style.right = "6em";
//   } else if (window.innerWidth > 1076){
//     mybutton.style.right = "20em";
//   }
// })
