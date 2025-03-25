
document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".arrival-text p");
  let index = 0;

  function showLine() {
    if (index < lines.length) {
      lines[index].classList.add("show");
      index++;
      setTimeout(showLine, 1200);
    }
  }

  showLine();

  document.getElementById("enter-site").addEventListener("click", () => {
    document.getElementById("arrival-overlay").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("arrival-overlay").style.display = "none";
    }, 1000);
  });
});
