// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2020 14:33:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
    if( seconds < 10 && seconds >= 0){
        seconds = "0" + seconds;
    };
    if( minutes < 10 && minutes >= 0){
        minutes = "0" + minutes;
    };
    if( hours < 10 && hours >= 0){
        hours = "0" + hours;
    };

    // Output the result in an element with id="demo"
    document.getElementById("cdtime").innerHTML = `${days}d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${hours}h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${minutes}m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${seconds}s`; 
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cdtime").innerHTML = "EXPIRED";
    }
}, 1000);

//Slide Friend//

  $('.center').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}






var c = document.getElementById('canv'), 
    $ = c.getContext("2d");
var w = c.width = window.innerWidth, 
    h = c.height = window.innerHeight;

Snowy();
function Snowy() {
  var snow, arr = [];
  var num = 600, tsc = 1, sp = 1;
  var sc = 1.3, t = 0, mv = 20, min = 1;
    for (var i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
      snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }
  go();
  function go(){
    window.requestAnimationFrame(go);
      $.clearRect(0, 0, w, h);
      $.fillStyle = 'none';
      $.fillRect(0, 0, w, h);
      $.fill();
        for (var i = 0; i < arr.length; ++i) {
          f = arr[i];
          f.t += .05;
          f.t = f.t >= Math.PI * 2 ? 0 : f.t;
          f.y += f.sp;
          f.x += Math.sin(f.t * tsc) * (f.sz * .3);
          if (f.y > h + 50) f.y = -10 - Math.random() * mv;
          if (f.x > w + mv) f.x = - mv;
          if (f.x < - mv) f.x = w + mv;
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      $.moveTo(this.x, this.y);
      $.fillStyle = this.g;
      $.beginPath();
      $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      $.fill();}
  }
}
/*________________________________________*/
window.addEventListener('resize', function(){
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);


   

   