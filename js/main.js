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
// console.log('button', mybutton);

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

const topButton = function(w_width, m_width, w_height, m_height) {
  const width = ((w_width - m_width) / 2) + 20;
  const length = (w_height - m_height) + 80;
  mybutton.style.right = width.toString() + 'px';
  mybutton.style.bottom = length.toString() + 'px';
}

topButton(window.innerWidth, main.clientWidth, window.innerHeight, document.body.clientHeight);

window.addEventListener('resize', function(event){
  console.log('window height', window.innerHeight);
  console.log('document length', document.body.clientHeight);
  console.log('main length:', main.clientHeight);
  topButton(window.innerWidth, main.clientWidth, window.innerHeight, document.body.clientHeight);
})
