//get all nav links except contact icons
const nav = document.querySelectorAll('a.nav-link');

//scroll down to each corresponding ID smoothly
nav.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//get back to top button and main element (this is where the scrollbar is)
myButton = document.getElementById("toTop");
main = document.getElementById("main");

//when the user scrolls down 20px from the top of the main tag, show the button
main.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (main.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

//when the user clicks on the button, scroll to the top which is the home id
function topFunction() {
  document.getElementById("home").scrollIntoView({
    behavior: 'smooth'
  })
}

//calculate position of the back to top button using window width, main width, window height and document height
const topButton = function(w_width, m_width, w_height, d_height) {
  const width = ((w_width - m_width) / 2) + 20;
  const length = (w_height - d_height) + 80;
  myButton.style.right = width.toString() + 'px';
  myButton.style.bottom = length.toString() + 'px';
}

//initial position of the button based on window size
topButton(window.innerWidth, main.clientWidth, window.innerHeight, document.body.clientHeight);

//dynamic positioning of the button when the window is resized
window.addEventListener('resize', function(event){
  topButton(window.innerWidth, main.clientWidth, window.innerHeight, document.body.clientHeight);
})
