document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".arrival-text p");
  const enterButton = document.getElementById("enter-site");
  let index = 0;

  function showLine() {
    if (index < lines.length) {
      lines[index].classList.add("show");
      index++;
      setTimeout(showLine, 400);  // faster pacing
    } else {
      enterButton.classList.add("show");
    }
  }

  showLine();

  enterButton.addEventListener("click", () => {
    document.getElementById("arrival-overlay").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("arrival-overlay").style.display = "none";
    }, 1000);
  });

  // Safety fallback if something stalls
  setTimeout(() => {
    enterButton.classList.add("show");
  }, 15000); // fallback at 15 seconds max
});
