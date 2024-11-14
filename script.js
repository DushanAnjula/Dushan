let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader-wrapper').classList.add('fade-out');
        
        setTimeout(function() {
        document.getElementById('loader-wrapper').style.display = 'none'; 
        }, 1000);
    }, 1000);
    });

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwLIlM4JkJZOblYblZuaamw-5cidfTVEVXxw3yPYQR3iesjYkq-rA0oIur3Kvsx_NYYMA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("submit-msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})