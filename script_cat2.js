let catsCont = document.getElementById('catsCont');
let params = new URLSearchParams(document.location.search);

const cur_cat = params.get('cat') || 1; // ID кота из параметра URL или 1 по умолчанию

cats.forEach((cat) => {
    let wrapper = document.createElement('div');
    cat.id == 1 ? wrapper.classList.add('image-wrapper', 'wrapper-1') : wrapper.classList.add('image-wrapper')

    let catCard = document.createElement('div'); //создание карточки для каждого кота
    catCard.classList.add('cat-card');

    let catName = document.createElement('div'); //имя
    catName.classList.add('cat-name');
    catName.textContent = cat.name;

    let catImg = document.createElement('img'); //картинка
    catImg.classList.add('cat-img');
    catImg.src = cat.img_link;

    let catAgeRate = document.createElement('div'); //возраст, оценка
    catAgeRate.classList.add('cat-age-rate');
    catAgeRate.textContent = `Возраст: ${cat.age} Оценка: ${cat.rate}`;

    let catDesc = document.createElement('div'); //описание
    catDesc.classList.add('cat-desc');
    catDesc.textContent = cat.description;

    let catId = document.createElement('div'); //порядковый номер
    catId.classList.add('cat-id');
    catId.textContent = `id: ${cat.id}`;

    if (cat.favourite) {
        let favoriteStar = document.createElement('span'); //добавление звездочки если кот в избранном
        favoriteStar.classList.add('favorite-star');
        favoriteStar.textContent = '★';
        catName.appendChild(favoriteStar);
    }
    //формирование карточки

    catCard.appendChild(catId);
    catCard.appendChild(catName);
    catCard.appendChild(catImg);
    catCard.appendChild(catAgeRate);
    catCard.appendChild(catDesc);
    //добавление карточки
    wrapper.appendChild(catCard);
    catsCont.appendChild(wrapper);
});

const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const leftButtonSmall = document.querySelector('.carousel-left-small');
const rightButtonSmall = document.querySelector('.carousel-right-small');
const imageContainer = document.querySelector('.image-container');


let track = 0;

let counter = 1;

const moveImagesLeft = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

const moveImagesRight = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

rightButton.addEventListener('click', () => {
    moveImagesLeft();
});

rightButtonSmall.addEventListener('click', () => {
    moveImagesLeft();
});

leftButton.addEventListener('click', () => {
    moveImagesRight();
});

leftButtonSmall.addEventListener('click', () => {
    moveImagesRight();
});

const targetCatIndex = cats.findIndex(cat => cat.id == cur_cat);
if (targetCatIndex > 0) {
    for (let i = 0; i < targetCatIndex; i++) {
        moveImagesLeft();
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') { // Стрелка вправо
        moveImagesLeft();
    }
    if (event.key === 'ArrowLeft') { // Стрелка влево
        moveImagesRight();
    }
});