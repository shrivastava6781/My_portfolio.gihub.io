

function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    //create 2 spans
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");
    //parent and child both sets their respective classes
    spanParent.classList.add("parent");
    spanChild.classList.add("child");
    //span parent gets child and child gets elem details
    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);
    //elem replaces it's value with paret span
    elem.innerHTML = " ";
    elem.appendChild(spanParent);
  });
}
function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader .child span", {
    x: 100,
    delay: 1.4,
    duration: 2,
    ease: Power3.easeInOut,
    stagger: 0.2,
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      top: 0,
      height: "100%",
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      top: 0,
      height: "0%",
      duration: 1,
      delay: -0.3,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateSvg() {
  var tl = gsap.timeline();
  tl.to("#animated-text", {
    opacity: 1,
    ease: Expo.easeInOut,
  });
}
function animateHomepage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  }).to("#home span .child", {
    y: 0,
    stagger: 0.1,
    duration: 1.5,
    ease: Expo.easeInOut,
    onComplete: function () {
      animateSvg();
    },
  });
}
function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function showCard() {
  document.querySelectorAll(".cnt").forEach(function (cnt) {
    // console.log(cnt);
    var showingImage;
    cnt.addEventListener("mousemove", function (e) {
      document.querySelector("#cursor").children[
        e.target.dataset.index
      ].style.opacity = 1;
      showingImage = e.target;
      // console.log(showingImage);
      document.querySelector("#cursor").children[
        e.target.dataset.index
      ].style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      showingImage.style.filter = "grayscale(1)";
      document.querySelector("#work").style.backgroundColor =
        showingImage.dataset.color;
    });

    cnt.addEventListener("mouseleave", function (e) {
      document.querySelector("#cursor").children[
        showingImage.dataset.index
      ].style.opacity = 0;
      document.querySelector("#cursor").children[
        showingImage.dataset.index
      ].style.transform = "translate(0 px,0 px)";
      showingImage.style.filter = "grayscale(0)";
      document.querySelector("#work").style.backgroundColor =
        showingImage.dataset.color;
    });
    cnt.addEventListener("click", function (e) {
      console.log(window.location);
      window.location.href = e.target.dataset.url;
    });
  });
}
function cvDownload() {
  document.querySelector("#cv").addEventListener("click", function (e) {
    window.location.href =
      "https://drive.google.com/file/d/1Xl4SFx81OyXQG3FwanQ07O2PNWiPXL_U/view?usp=drive_link";
  });
}
function writeMessage() {
  document.querySelector(".msg").addEventListener("click", function (e) {
    window.location.href = "mailto:aadityashrivastava970@gmail.com";
  });
}

revealToSpan();
valueSetters();
loaderAnimation();
animateSvg();
locoInitialize();
showCard();
cvDownload();
writeMessage();