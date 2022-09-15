//========selecting element=========//
const toTopBtn = document.querySelector(".toTop");
const logoLightMode = document.querySelector(".logo");
const sectionsGray = document.querySelectorAll(".bggray");
const landingHolder = document.querySelector(".landing__holder");
const landingPic2 = document.querySelector(".landing__pic2");

//landing holder respoinsive  width
const goodScale = function () {
  const landingHolderWidth = landingHolder.getBoundingClientRect().width;
  landingHolder.style.height = `${landingHolderWidth / 2}px`;
  landingPic2.style.height = `${landingHolderWidth / 4}px`;
  landingPic2.style.width = `${landingHolderWidth / 4}px`;
};
window.addEventListener("scroll", goodScale);
// =============== Dark and light Mode
let mode = true;
const darkActive = function () {
  document.documentElement.style.setProperty("--bk1-color", "#000");
  document.documentElement.style.setProperty("--form1-color", "#292929");
  document.documentElement.style.setProperty("--text1-color", "#fff");
  sectionsGray.forEach((el) => (el.style.backgroundColor = "#000"));
};
const lightActive = function () {
  document.documentElement.style.setProperty("--bk1-color", "#ffffff");
  document.documentElement.style.setProperty("--form1-color", "#e7e7e7");
  document.documentElement.style.setProperty("--text1-color", "#000");
  sectionsGray.forEach((el) => (el.style.backgroundColor = "#ebebeb"));
};

//Switch from dark mode to light mode
logoLightMode.addEventListener("click", function (e) {
  const imgLogo = e.currentTarget.querySelector("img");
  if (mode) {
    imgLogo.style.right = "90%";
    imgLogo.style.transform = " rotate(-240deg)";
    mode = false;
    lightActive();
  } else {
    imgLogo.style.right = "0";
    imgLogo.style.transform = " rotate(0)";
    mode = true;

    darkActive();
  }
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 160) {
    toTopBtn.style.bottom = "40px";
    toTopBtn.style.opacity = 100;
  } else {
    toTopBtn.style.bottom = "-50px";
    toTopBtn.style.opacity = 0;
  }
});
