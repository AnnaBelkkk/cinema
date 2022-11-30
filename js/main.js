// "use strict";
let voz = document.getElementById("voz");
let movies;

//массив с объектами
movies = [{
        title: "Вечное сияние чистого разума ",
        CartId: 1,
        year: 2004,
        age: 16,
        genre: 'драма',
        rating: 8,
        img: "../img/cart1.jpg"
    },
    {
        title: "Драйв",
        CartId: 2,
        year: 2011,
        age: 18,
        genre: 'триллер',
        rating: 7
    },
    {
        title: "Призрак в доспехах ",
        CartId: 3,
        year: 2017,
        age: 16,
        genre: 'триллер',
        rating: 6
    },
    {
        title: "Зеленая миля",
        CartId: 4,
        year: 1999,
        age: 16,
        genre: 'криминал',
        rating: 9
    },
    {
        title: "Бойцовский клуб ",
        CartId: 5,
        year: 1999,
        age: 18,
        genre: 'криминал',
        rating: 9
    },
    {
        title: "Джентльмены",
        CartId: 6,
        year: 2017,
        age: 18,
        genre: 'комедия',
        rating: 9
    },
    {
        title: "Сонная Лощина",
        CartId: 7,
        year: 1999,
        age: 16,
        genre: 'ужасы',
        rating: 8
    },
    {
        title: "Достать ножи",
        CartId: 8,
        year: 2019,
        age: 16,
        genre: 'детектив',
        rating: 8
    },
    {
        title: "Сайлент Хилл",
        CartId: 9,
        year: 2006,
        age: 18,
        genre: 'ужасы',
        rating: 7
    }
]
let filteredMovies = movies;
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
    moviesForPaint.forEach(item => { //проходимся по объектам массива
        i++;
        if (i > 3) {
            i = 1; // когда i достигает 3, мы откатываем в начало, чтобы продолжить разделение
            cartsCont = document.createElement("div"); //создаем новый контейнер, когда i доходит до 3
        }
        cartsCont.classList.add(`carts${i}`); //добавляем классы
        let carts1 = document.createElement("div"); //для каждой карточки добавляем дивы
        carts1.innerHTML = ` 
         <div class="imgandtext" id="cart${item.CartId}" onclick="getLocationHref(${item.CartId})">
                        <p class="titlecard">${item.title}</p>
                        <img class="imgcart" src="${'../img/cart'+item.CartId+'.jpg'}" alt="#">
                        <div class="genre">жанр: ${item.genre}</div>
                        <div class="rating">рейтинг: ${item.rating}</div>
                        <div class="year">год: ${item.year}</div>
         </div>` //перезаписываем в блок кусок кода
        cartsCont.append(carts1); //добавляем карточку в общий контейнер, где по три карточки
        content2.append(cartsCont);  //добавляем блоки с карточками в другой большой общий блок
    })
}
films(movies)



function getLocationHref(t) {
    window.location.href = `../page${t}/index.html`;
} //функция для перехода на новую страницу при клике на карточку


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



function filterResetClick() {
    let filterEls = document.getElementsByClassName("opt"); //для каждого элемента с классом опт ставим дефоль
    for (let i = 0; i < filterEls.length; i++) {
        filterEls[i].value = "default";
    }
    filteredMovies = movies; //фильтрованому массиву изначальный массив, для обнуления
    activeFilters = []; //очещаем массив с использованными фильтрами
    films(movies); //снова отрисовываем
}



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
function newMovies (id) {
    let newFilms = [];
    filteredMovies.forEach(item => {
        newFilms.push(item);
        newFilms.sort((a, b) => b.year - a.year);
    });
    films(newFilms);
}

