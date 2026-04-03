window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  loader.style.transition = "opacity 0.5s";
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 500);
});