var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var currentActiveIndex = -1;

// Обработка клика на кнопках
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    togglePanel(i);
  });
}

// Функция для переключения панелей
function togglePanel(index) {
  if (currentActiveIndex > -1) {
    acc[currentActiveIndex].classList.remove("active");
    panels[currentActiveIndex].style.display = "none";
  }
  
  if (currentActiveIndex !== index) {
    acc[index].classList.add("active");
    panels[index].style.display = "block";
    currentActiveIndex = index;
  } else {
    currentActiveIndex = -1;
  }
}

// Обработчик клавиатуры
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    const nextIndex = (currentActiveIndex + 1) % acc.length;
    togglePanel(nextIndex);
  } else if (e.key === "ArrowLeft") {
    const prevIndex = (currentActiveIndex - 1 + acc.length) % acc.length;
    togglePanel(prevIndex);
  }
});
