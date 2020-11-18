// For Cursor
// =================

document.body.style.cursor = "none";
var cursor = document.createElement('div');
cursor.classList.add("cursor");
document.body.appendChild(cursor);
var follow = document.createElement('div');
// follow.classList.add("follow");
// document.body.appendChild(follow);

function move(obj, event){
    obj.style = '';
    obj.style.top = event.clientY + "px";
    obj.style.left = event.clientX + "px";
}       

if(cursor){
    window.addEventListener("mousemove", function(event){
        var e = event;
        var t = e.target;
        var f = follow;
        var c = cursor;

        if(t.tagName == "A"){
            c.style.backgroundColor = "transparent";

            f.style.top = t.offsetTop + "px" ;
            f.style.left = t.offsetLeft + "px";
            f.style.width = t.clientWidth + "px";
            f.style.height = t.clientHeight + "px";

            // f.classList.add('on-focus');
        } else{
            move(c, e);
            move(f, e);
            // f.classList.remove("on-focus");
        }
    })
}






// Navigation
//===============
function openNav(){
  y = document.getElementById("nav-menu");
  if(y.className == "nav-menu"){
    y.className += " open";
  }else{
    y.className = "nav-menu"
  }
}




// gsap animation
//====================
const tl1 = gsap.timeline({ defaults: { ease: "Circ.out" } });
// const tl3 = gsap.timeline({ defaults: { ease: "Circ.out" } });

tl1.from(".intro1-main-text", {y: "120%" , duration: 0.5, opacity:0 , stagger:0.1});
tl1.to(".intro1-main-text", {y: "-120%" , duration: 0.5, opacity:0 ,delay:1.5, stagger:0.1});
tl1.to(".intro2", {duration: 0.5, opacity:1});

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".section1",
    // start: "center center",
    scrub:0,
    pin:true
  }
})

tl2.from(".pp1", {opacity:0,  duration: 1})
    .from(".panel div", {x:-100, height:"0%", opacity:0,  duration: 0.5, stagger: 0.5})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".connect-section",
    start: "top center",
  }
})
tl3.from(".connect-section .container", {opacity:0 , duration:1,})



//Work Animation
//==================
var $cursor = $(".cursor-image"),
$overlay = $(".project-title");

function moveCircle(e) {
  TweenLite.to($cursor, 0.5, {
    css: {
      left: e.pageX,
      top: e.pageY
    },
    delay: 0.03
  });
}
$(".a-1").hover(function() {
  $(".cursor-image").css({ "background-image": "url(photos/Art/digital/IMG_3122.jpg)" });
});
$(".a-2").hover(function() {
  $(".cursor-image").css({ "background-image": "url(photos/Art/trad/20200807_112105-01.jpeg)" });
});
$(".a-3").hover(function() {
  $(".cursor-image").css({ "background-image": "url(photos/C/skecth.jpeg)" });
});

var flag = false;
$($overlay).mousemove(function() {
  flag = true;
  TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
  $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
  flag = false;
  TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});