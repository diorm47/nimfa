document.querySelectorAll(".checkbox-item").forEach((item) => {
  item.addEventListener("click", () => {
    const area = item.querySelector(".checkbox-item__area");
    area.classList.toggle("checkbox-item_selected");
  });
});
