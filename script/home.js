var i = 0;
var txt = "Lorem ipsum typing effect!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    obj = $(".part1 h1");
    obj.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
