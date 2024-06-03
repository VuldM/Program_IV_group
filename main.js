const mainTheme_1 = document.querySelector(".main__theme_1_btn");
const mainTheme_2 = document.querySelector(".main__theme_2_btn");
const mainTheme_3 = document.querySelector(".main__theme_3_btn");

mainTheme_1.addEventListener("click", function (e) {
  window.location = "./theme_1/theme_1.html";
});
mainTheme_2.addEventListener("click", function (e) {
  window.location = "./theme_2/theme_2.html";
});
mainTheme_3.addEventListener("click", function (e) {
  window.location = "./theme_3/theme_3.html";
});
