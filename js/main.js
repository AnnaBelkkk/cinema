// "use strict";
//массив с объектами
const movies = [{
        title: "Вечное сияние чистого разума ",
        CartId: 1,
        year: 2004,
        age: 16,
        genre: 'драма',
        rating: 8,
        img: "../img/cart1.png",
        video: "https://www.youtube.com/embed/hTIrC9875u8",
        content: 'Застенчивый и меланхоличный Джоэл живёт ничем не примечательной серой и унылой жизнью. Но однажды вместо привычного рабочего маршрута молодой человек вдруг садится на электричку в другом направлении и устремляется к морю. На песчаном берегу Джоэл замечает девушку с ярко-синими волосами. На обратном пути они знакомятся в вагоне электрички и парень понимает, что у них с Клементиной очень много общего.'
},
    {
        title: "Драйв",
        CartId: 2,
        year: 2011,
        age: 18,
        genre: 'триллер',
        rating: 7,
        img: "../img/cart2.png",
        video: "https://www.youtube.com/embed/SDhGly0CgvQ",
        content:'Великолепный водитель – при свете дня он выполняет каскадерские трюки на съёмочных площадках Голливуда, а по ночам ведет рискованную игру. Но один опасный контракт – и за его жизнь назначена награда. Теперь, чтобы остаться в живых и спасти свою очаровательную соседку, он должен делать то, что умеет лучше всего – виртуозно уходить от погони.'

    },
    {
        title: "Призрак в доспехах ",
        CartId: 3,
        year: 2017,
        age: 16,
        genre: 'триллер',
        rating: 6,
        img: "../img/cart3.png",
        video:"https://www.youtube.com/embed/15sqcPRjUhU",
        content:'Кибертехнологии подчинили себе все сферы жизни, а самые опасные преступники переместились в виртуальное пространство. Киборг-гибрид, стоящий во главе элитного подразделения полиции, идет по следу могущественного хакера.'
    },
    {
        title: "Зеленая миля",
        CartId: 4,
        year: 1999,
        age: 16,
        genre: 'криминал',
        rating: 9,
        img: "../img/cart4.png",
        video: "https://www.youtube.com/embed/TODt_q-_4C4",
        content: 'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.'
    },
    {
        title: "Бойцовский клуб ",
        CartId: 5,
        year: 1999,
        age: 18,
        genre: 'криминал',
        rating: 9,
        img: "../img/cart5.png",
        video: "https://www.youtube.com/embed/C7-7qQ61QHU",
        content: 'Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить, — саморазрушение.'
    },
    {
        title: "Джентльмены",
        CartId: 6,
        year: 2017,
        age: 18,
        genre: 'комедия',
        rating: 9,
        img: "../img/cart6.png",
        video: "https://www.youtube.com/embed/FvvOBZq_Oog",
        content: 'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса.'
    },
    {
        title: "Сонная Лощина",
        CartId: 7,
        year: 1999,
        age: 16,
        genre: 'ужасы',
        rating: 8,
        img: "../img/cart7.png",
        video: "https://www.youtube.com/embed/ZvyFI0coh6M",
        content: 'Нью-Йорк, 1799 год. Икабода Крэйна, молодого констебля, отправляют в местечко Сонная лощина для расследования загадочных убийств. Все жертвы, как сообщает местное население, погибают от меча всадника без головы.'
    },
    {
        title: "Достать ножи",
        CartId: 8,
        year: 2019,
        age: 16,
        genre: 'детектив',
        rating: 8,
        img: "../img/cart8.png",
        video: "https://www.youtube.com/embed/8VMvCavnFNw",
        content: 'На следующее утро после празднования 85-летия известного автора криминальных романов Харлана Тромби виновника торжества находят мёртвым. Налицо — явное самоубийство, но полиция по протоколу опрашивает всех присутствующих в особняке членов семьи, хотя, в этом деле больше заинтересован частный детектив Бенуа Блан.'
    },
    {
        title: "Сайлент Хилл",
        CartId: 9,
        year: 2006,
        age: 18,
        genre: 'ужасы',
        rating: 7,
        img: "../img/cart9.png",
        video: "https://www.youtube.com/embed/r-ombnmA2xI",
        content: 'Доктора не могут найти лекарство от таинственного заболевания Шэрон, но её мать Роуз отказывается отдавать ребёнка в психиатрическую лечебницу. Вместе с дочерью она отправляется в Сайлент Хилл - город, название которого Шэрон постоянно твердит во сне. Роуз убеждена, что именно здесь она найдёт ответы, в которых так нуждается.'
    }
]
let filteredMovies = movies;
filteredMovies.sort((a, b) => b.year - a.year); //сортируем по убыванию рейтинг
let activeFilters = [];

console.log(movies[0])


function films(moviesForPaint) {
    document.querySelector(".content2").innerHTML = ''; //очищаем
    if (moviesForPaint == null) {
        moviesForPaint = movies;
    }
    const content2 = document.querySelector(".content2");
    let i = 0;
    let cartsCont = document.createElement("div");
    if (moviesForPaint.length > 0){ //подобится для вывода "нет результатов"
    moviesForPaint.forEach(item => { //проходимся по объектам массива
        i++;
        if (i > 3) {
            i = 1; // когда i достигает 3, мы откатываем в начало, чтобы продолжить разделение
            cartsCont = document.createElement("div"); //создаем новый контейнер, когда i доходит до 3
        }
        cartsCont.classList.add(`carts${i}`); //добавляем классы
        let carts1 = document.createElement("div"); //для каждой карточки добавляем дивы
        carts1.innerHTML = ` 
         <div class="imgandtext" id="cart${item.CartId}" onclick="newPage(${item.CartId})">
                        <p class="titlecard">${item.title}</p>
                        <img class="imgcart" src="${'../img/cart'+item.CartId+'.png'}" alt="#">
                        <div class="rating">рейтинг: ${item.rating}</div>
         </div>` //перезаписываем в блок кусок кода

        cartsCont.append(carts1); //добавляем карточку в общий контейнер, где по три карточки
        content2.append(cartsCont);  //добавляем блоки с карточками в другой большой общий блок

    })
    } else { //если нет результатов
        newshowDialog3(); //вызов модального окна
        filterResetClick(); //сброс фильторов
    }
}
films(movies)



// function getLocationHref(t) {
//     window.location.href = `../page${t}/index.html`;
// } //функция для перехода на новую страницу при клике на карточку


//функция на изменение значений в селекте, передавая айди и имя
function onFilterChange(id, name) {
    let filterValue = document.getElementById(id).value; //получаем значение по айди
    let filter = { filterName: id, value: filterValue, name: name };
    let fiterIndex = activeFilters.findIndex(t => t.filterName == id); //находим индекс массива соответсвующий функции,находим индекс элементов в коллекции, где элемент.фильтрнейм равен ид
    //так как мы берем пустой массив, он будет в дальнейшем заполнятся фильтрами, которые мы выбираем
    if (filterValue === "default") {
        if (fiterIndex > -1) {
            activeFilters.splice(fiterIndex, 1);
        }
        return;
        //удаляем из активных фильтров тот, который поменялся на дефолт
    }
    //если элемента нет,
    if (fiterIndex === -1) {
        activeFilters.push(filter); //то он записывается в этот массив
        filterCarts(filter); //применяем уже другой созданный фильтр
    } else {
        //ссылаемся на начальный массив, полученный массив отфильтровываем, чтобы не менять изначальный массив
        filteredMovies = movies;
        activeFilters.splice(fiterIndex, 1);
        activeFilters.push(filter);
        filterCarts(filter, true);
    } //при изменении фильтра перерисовываем фильтры
    onSortChange("ratingFilter", "rating"); //запуск функции по сортировке
}
//проще говоря фильтруем отфильтрованные объекты

//фильтровать массив, перерисовывать или добавлять фильтры
function filterCarts(filter, needRefilter) {
    let buffColl = movies;
    if (activeFilters.length > 0 && !needRefilter) {
        buffColl = filteredMovies;
    } else {
        activeFilters.forEach(item => {
            filterCarts(item, false);
        })
        return;
    }
    filteredMovies = buffColl.filter(t => t[filter.name] == filter.value);
}


//функция на сброс фильторов
function filterResetClick() {
    let filterEls = document.getElementsByClassName("opt"); //для каждого элемента с классом опт ставим дефоль
    for (let i = 0; i < filterEls.length; i++) {
        filterEls[i].value = "default";
    }
    filteredMovies = movies; //фильтрованому массиву изначальный массив, для обнуления
    activeFilters = []; //очещаем массив с использованными фильтрами
    films(movies); //снова отрисовываем
}


//функция на сортировку карточек по рейтингу
function onSortChange(id) {
    //не указана сортировка, то вывод как уже отсортировалось
    let filterValue = document.getElementById(id).value;
    let sortedMovies = [];
    filteredMovies.forEach(item => {
        sortedMovies.push(item);
    });
    // если сортировка указана, то отсортировывем
    if (filterValue == "asc") {
        sortedMovies.sort((a, b) => a.rating - b.rating); //по возрастанию
    } else if (filterValue == "desc") {
        sortedMovies.sort((a, b) => b.rating - a.rating);//по убыванию
    }
    films(sortedMovies);
}

//сортировка для кнопки новинки
// function newMovies () {
//     let newFilms = [];
//     filteredMovies.forEach(item => { //проходим по массиву с объектами
//         newFilms.push(item); //добавляем элементы в новый массив
//         newFilms.sort((a, b) => b.year - a.year); //сортируем по убыванию рейтинг
//     });
//     films(newFilms);
// }


//513 срочка в модуле
//
// import { form } from './../js/module.js';
// console.log((form()))


//функцтя для нового окна
function newPage(id) {
    // window.location.href = `../page${t}/index.html`;
    createBackButton();
    let movie = movies.filter(t => t.CartId == id)[0]; //передача параметра из объекта
    let mainContent = document.querySelector(".main__content");
    let filmInfo = document.createElement("div");
    if (movie.img != null) {
        filmInfo.append(createImgElement(movie));
    }
    filmInfo.append(createFilmInfo(movie))
        if (movie.video != null) {
            filmInfo.append(createElementTraler(movie));
        }
        for (let i = 0; i < mainContent.children.length; i++){
            mainContent.children[i].style.display = 'none';
        }
    mainContent.append(filmInfo);
}



//функция для изображения
function createImgElement(movie) {
    let filmImg = document.createElement("div");
    filmImg.classList.add('img');
    filmImg.innerHTML = `<p class="text">${movie.title}</p><br>`;
    if (movie.img != null) {
        filmImg.innerHTML = filmImg.innerHTML + `<img alt="#" srs=${movie.img}" class ="imgca">`
    }
    return filmImg;
}

//для конпки
function createBackButton() {
    let mainContent = document.querySelector(".header__content");
    let button  = document.createElement("button");
    button.classList.add('btn');
    button.onclick = function () {window.location.href = 'https://annabelkkk.github.io/cinema/html/index.html';};
    button.innerText = "назад";
    mainContent.append(button);
}

//функция для информации
function createFilmInfo(movie) {
    let filmInfo = document.createElement("div");
    filmInfo.classList.add('contenttext');
    filmInfo.innerHTML = `
           <p class="text">Рейтинг:  ${movie.rating}</p>
           <p class="text">Возраст:${movie.age}</p>
           <p class="text">Год производства: ${movie.year}</p>
           <p class="text">Жанр: ${movie.genre}</p>
           <p class="text">Содержание: <br> ${movie.content} </p>
    `
    return filmInfo;
}

//функция для трейлера
function createElementTraler(movie) {
    let filmTrailer = document.createElement("div");
    filmTrailer.classList.add('play');
    filmTrailer.innerHTML = ` <p class = "text">Трейлер:</p>
<br>
<iframe id="playVideo" width="560" height="315" src="${movie.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
return filmTrailer;
}