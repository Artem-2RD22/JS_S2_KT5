let catsCont = document.getElementById('catsCont');
catsCont.classList.add('container');

cats.forEach((cat, index) => {
  let slideDiv = document.createElement('div');
  slideDiv.classList.add('mySlides');

  let numberText = document.createElement('div');
  numberText.classList.add('numbertext');
  numberText.textContent = `${index + 1} / ${cats.length}`;
  slideDiv.appendChild(numberText);
  
  let link = document.createElement('a');
  link.href =`/cat.html?cat=${index + 1}`;
  slideDiv.appendChild(link);

  let img = document.createElement('img');
  img.src = cat.img_link;
  img.style.height = '450px';
  link.appendChild(img);

  catsCont.appendChild(slideDiv);
});

let prevLink = document.createElement('a');
prevLink.className = 'prev';
prevLink.innerHTML = '&#10094;';
prevLink.setAttribute('onclick', 'plusSlides(-1)');
catsCont.appendChild(prevLink);

let nextLink = document.createElement('a');
nextLink.className = 'next';
nextLink.innerHTML = '&#10095;';
nextLink.setAttribute('onclick', 'plusSlides(1)');
catsCont.appendChild(nextLink);

let captionContainer = document.createElement('div');
captionContainer.className = 'caption-container';
let caption = document.createElement('p');
caption.id = 'caption';
captionContainer.appendChild(caption);
catsCont.appendChild(captionContainer);

let rowDiv = document.createElement('div');
rowDiv.className = 'row';
cats.forEach((cat, index) => {
  let columnDiv = document.createElement('div');
  columnDiv.className = 'column';

  let img = document.createElement('img');
  img.className = 'demo';
  img.src = cat.img_link;
  img.style.width = '100px';
  img.style.height = '100px';
  img.setAttribute('onclick', `currentSlide(${index + 1})`);
  img.alt = cat.name; // Используем имя кота в качестве альтернативного текста

  columnDiv.appendChild(img);
  rowDiv.appendChild(columnDiv);
});
catsCont.appendChild(rowDiv);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') { // Стрелка вправо
    plusSlides(1);
  }
  if (event.key === 'ArrowLeft') { // Стрелка влево
    plusSlides(-1);
  }
});
