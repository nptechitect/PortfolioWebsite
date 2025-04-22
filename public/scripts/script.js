
// Add drop shadow when over the project card
document.querySelectorAll("section.projectCard").forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    if (event.target.tagName != "SECTION") { return; }
    event.target.style.boxShadow = "2px 2px 5px black";
  });
  element.addEventListener("mouseleave", (event) => {
    if (event.target.tagName != "SECTION") { return; }
    event.target.style.boxShadow = "none";
  })
});


// Make skill icons pop up when pointer is over them.
document.querySelectorAll(".skillIcon").forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    if (event.target.tagName != "DIV") { return; }
    event.target.style.maxWidth = "75px";
  });
  element.addEventListener("mouseleave", (event) => {
    if (event.target.tagName != "DIV") { return; }
    event.target.style.maxWidth = "50px";
  })
})

document.querySelectorAll("#message").forEach((element) => {
  element.addEventListener("selectionchange", (event) => {
    const length = event.target.value.length;
    const max = event.target.attributes.maxlength.value;
    const charCount = event.target.nextElementSibling;

    // Update the character count/max string
    charCount.innerHTML = length + "/" + max;

    // Change color to warn user is almost out of characters
    if (length >= 200 && length < 250) {
      charCount.style.color = "orange";
    } else if (length >= 250) {
      charCount.style.color = "red";
    } else {
      charCount.style.color = "black";
    }

  })
});