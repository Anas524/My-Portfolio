// =======================
// DOM ELEMENTS
// =======================

// keeps track of the last reverse class to play smooth back-and-forth
let lastReverseAnimation = "";

const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const projectOne = document.querySelector(".p1");
const projectTwo = document.querySelector(".p2");
const projectThree = document.querySelector(".p3");

// =======================
// COLORS / POSITIONS
// =======================

const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// which corner is open? ('' means none)
let activeCorner = "";

// =======================
// CLOSE EVERYTHING
// =======================

function closeAllCorners() {
  // button labels
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  // button colors
  [tlBtn, trBtn, blBtn, brBtn].forEach((btn) => {
    btn.style.background = bgColor;
    btn.style.color = textColor;
    btn.style.zIndex = "100";
  });

  // hide content
  tlContent.style.transform = tlHidden;
  trContent.style.transform = trHidden;
  blContent.style.transform = blHidden;
  brContent.style.transform = brHidden;

  activeCorner = "";
}

// =======================
// RESPONSIVE BEHAVIOUR
// =======================

function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      if (window.innerWidth <= 1100) {
        tlActive = "translateX(0) translateY(0)";
        tlContent.style.transform = "translateX(0vw) translateY(0)";
        tlContent.style.width = "100vw";
        tlContent.style.height = "100vh";
        tlContent.style.top = "0";
        tlContent.style.display = "flex";
        tlContent.style.alignItems = "center";
        tlContent.style.justifyContent = "center";
        tlContent.style.background = "var(--bg-transparent)";
        tlContent.style.zIndex = "200";
        tlBtn.style.zIndex = "300";
      } else {
        tlActive = "translateX(5vw) translateY(0)";
        tlContent.style.transform = "translateX(5vw) translateY(0)";
        tlContent.style.width = "30vw";
        tlContent.style.height = "0";
        tlContent.style.top = "10vh";
        tlContent.style.display = "block";
      }
      break;

    case "top-right":
      if (window.innerWidth <= 1100) {
        trActive = "translateX(0) translateY(0)";
        trContent.style.transform = "translateX(0vw) translateY(0)";
        trContent.style.width = "100vw";
        trContent.style.height = "100vh";
        trContent.style.top = "0";
        trContent.style.display = "flex";
        trContent.style.alignItems = "center";
        trContent.style.justifyContent = "center";
        trContent.style.background = "var(--bg-transparent)";
        trContent.style.zIndex = "200";
        trBtn.style.zIndex = "300";
      } else {
        trActive = "translateX(-5vw) translateY(0)";
        trContent.style.transform = "translateX(-5vw) translateY(0)";
        trContent.style.width = "30vw";
        trContent.style.height = "0";
        trContent.style.top = "10vh";
        trContent.style.display = "block";
      }
      break;

    case "bottom-left":
      if (window.innerWidth <= 600) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        blBtn.style.zIndex = "300";
        projectOne.style.width = "70%";
        projectOne.style.margin = "auto auto 0.5rem";
        projectTwo.style.width = "70%";
        projectTwo.style.margin = "auto auto 0.5rem";
        projectThree.style.width = "70%";
        projectThree.style.margin = "auto auto 0.5rem";
      } else if (window.innerWidth <= 1100) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        blBtn.style.zIndex = "300";
        projectOne.style.width = "40%";
        projectOne.style.margin = "auto auto 0.5rem";
        projectTwo.style.width = "40%";
        projectTwo.style.margin = "auto auto 0.5rem";
        projectThree.style.width = "40%";
        projectThree.style.margin = "auto auto 0.5rem";
      } else {
        blActive = "translateX(10vw) translateY(7vh)";
        blContent.style.transform = "translateX(10vw) translateY(7vh)";
        blContent.style.width = "15rem";
        blContent.style.height = "0";
        blContent.style.top = "40vh";
        blContent.style.display = "block";
        projectOne.style.width = "100%";
        projectTwo.style.width = "100%";
        projectThree.style.width = "100%";
      }
      break;

    case "bottom-right":
      if (window.innerWidth <= 1100) {
        brActive = "translateX(0) translateY(0)";
        brContent.style.transform = "translateX(0vw) translateY(0)";
        brContent.style.width = "100vw";
        brContent.style.height = "100vh";
        brContent.style.bottom = "0";
        brContent.style.display = "flex";
        brContent.style.flexDirection = "column";
        brContent.style.alignItems = "center";
        brContent.style.justifyContent = "center";
        brContent.style.background = "var(--bg-transparent)";
        brContent.style.zIndex = "200";
        brBtn.style.zIndex = "300";
      } else {
        brActive = "translateX(-5vw) translateY(0)";
        brContent.style.transform = "translateX(-5vw) translateY(0)";
        brContent.style.width = "22rem";      // card-sized block, not huge 30vw
        brContent.style.height = "auto";
        brContent.style.bottom = "18vh";      // same as CSS, comfortably above bottom
        brContent.style.display = "block";
      }
      break;

    default:
      // nothing open
      break;
  }
}

window.addEventListener("resize", handleWindowResize);

// =======================
// OPEN A CORNER
// =======================

function openCorner(corner) {
  // toggle off if same corner is open: play reverse, then close
  if (activeCorner === corner) {
    switch (corner) {
      case "top-left":    playClosingAnimation("reverse-animate-top-left");    break;
      case "top-right":   playClosingAnimation("reverse-animate-top-right");   break;
      case "bottom-left": playClosingAnimation("reverse-animate-bottom-left"); break;
      case "bottom-right":playClosingAnimation("reverse-animate-bottom-right");break;
    }
    return; // playClosingAnimation will reset labels/colors/content
  }

  // otherwise, close everything first
  closeAllCorners();

  // mark which corner is active and style the active button
  activeCorner = corner;
  switch (corner) {
    case "top-left":
      tlBtn.innerHTML = "&uarr;<br/>About";
      tlBtn.style.background = bgColorAlt;
      tlBtn.style.color = textColorAlt;
      // run face animation (TL)
      playAnimation("animate-top-left", "reverse-animate-top-left");
      break;

    case "top-right":
      trBtn.innerHTML = "&uarr;<br/>Experience";
      trBtn.style.background = bgColorAlt;
      trBtn.style.color = textColorAlt;
      // run face animation (TR)
      playAnimation("animate-top-right", "reverse-animate-top-right");
      break;

    case "bottom-left":
      blBtn.innerHTML = "Projects<br/>&darr;";
      blBtn.style.background = bgColorAlt;
      blBtn.style.color = textColorAlt;
      // run face animation (BL)
      playAnimation("animate-bottom-left", "reverse-animate-bottom-left");
      break;

    case "bottom-right":
      brBtn.innerHTML = "Contact<br/>&darr;";
      brBtn.style.background = bgColorAlt;
      brBtn.style.color = textColorAlt;
      // run face animation (BR)
      playAnimation("animate-bottom-right", "reverse-animate-bottom-right");
      break;
  }

  // size/position the active content pane
  handleWindowResize();
}

// =======================
// BUTTON CLICK HANDLERS
// =======================

tlBtn.addEventListener("click", () => openCorner("top-left"));
trBtn.addEventListener("click", () => openCorner("top-right"));
blBtn.addEventListener("click", () => openCorner("bottom-left"));
brBtn.addEventListener("click", () => openCorner("bottom-right"));

// start with everything closed
closeAllCorners();

// Play animation function
function playAnimation(animation, reverseAnimation) {
  // Remove all the animation classes from heroImage
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;
    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      break;
    case "bottom-left":
      blBtn.style.background = bgColor;
      blBtn.style.color = textColor;
      blContent.style.transform = blHidden;
      break;
    case "bottom-right":
      brBtn.style.background = bgColor;
      brBtn.style.color = textColor;
      brContent.style.transform = brHidden;
      break;

    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(function () {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}