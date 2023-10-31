const darkMode = localStorage.getItem("dark-mode");
const toggle = document.getElementById("toggle");

if (darkMode) {
    document.body.classList.add("dark-mode");
    $("#toggle").attr('checked', true);
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", true);
    } else {
      localStorage.removeItem("dark-mode");
    }
  });