document.querySelectorAll("section.projectCard").forEach((element) => {
  console.log(element);
  element.addEventListener("mouseenter", (event) => {
    if (event.target.tagName != "SECTION") { return; }
    event.target.style.boxShadow = "2px 2px 5px black";
  });
  element.addEventListener("mouseleave", (event) => {
    if (event.target.tagName != "SECTION") { return; }
    event.target.style.boxShadow = "none";
  })
});