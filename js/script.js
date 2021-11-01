// accordion

const allAccordionItems = document.querySelectorAll(".accordion__item");
const accordionContainer = document.querySelector(".accordion");

const openItems = document.querySelectorAll(".accordion__item.open");
openItems.forEach(
  (item) =>
    (item.querySelector(".accordion__content").style.maxHeight =
      item.querySelector(".accordion__content").scrollHeight + "px")
);

accordionContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".accordion__item");
  if (!clicked) return;
  // close all others
  //allAccordionItems.forEach((item) => item.classList.remove("open"));
  // toggle class
  console.log(clicked);
  clicked.classList.toggle("open");
  const content = clicked.querySelector(".accordion__content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

// allAccordionItems.forEach(function(item) {
//   item.addEventListener()
// })
