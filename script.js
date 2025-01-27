const imgs = document.querySelectorAll(".header-slide ul img");
const prev_btn = document.querySelector(".prev_control");
const next_btn = document.querySelector(".next_control");

let n = 0;
function slideChange() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
slideChange();

prev_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  slideChange();
});
next_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  slideChange();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (event) => {
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  });
}
