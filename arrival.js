
document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".arrival-text p");
  const enterButton = document.getElementById("enter-site");
  let index = 0;

  function showLine() {
    if (index < lines.length - 1) { // Don't include the button in this loop
      lines[index].classList.add("show");
      index++;
      setTimeout(showLine, 1200);
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

  // Fallback safety net
  setTimeout(() => {
    enterButton.classList.add("show");
  }, 20000);
});
