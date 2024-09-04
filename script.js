const shareContainer = document.querySelector(".share-container");
const iconShare = document.querySelector(".icon-share");

iconShare.addEventListener("click", function () {
  if (
    shareContainer.style.display === "none" ||
    shareContainer.style.display === ""
  ) {
    shareContainer.style.display = "inline-flex";
    iconShare.classList.add("active");
  } else {
    shareContainer.style.display = "none";
    iconShare.classList.remove("active");
  }
});
