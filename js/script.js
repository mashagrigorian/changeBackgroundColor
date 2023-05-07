document.addEventListener("DOMContentLoaded", () => {
    const switchButtons = document.querySelectorAll(".switch-button");
  
    switchButtons.forEach(button => {
      button.addEventListener("click", () => {
        const color = button.dataset.color;
        document.body.style.backgroundColor = color;
      });
    });
  });