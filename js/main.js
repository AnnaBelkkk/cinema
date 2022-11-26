// "use strict";
let voz = document.getElementById("voz");
let movies;

//массив с объектами
movies = [{
        title: "Вечное сияние чистого разума ",
        CartId: 1,
        year: 2004,
        age: 16,
        genre: 'drama',
        rating: 8,
        img: "../img/cart1.jpg"
    },
    {
        title: "Драйв",
        CartId: 2,
        year: 2011,
        age: 18,
        genre: 'thriller',
        rating: 7
    },
    {
        title: "Призрак в доспехах ",
        CartId: 3,
        year: 2017,
        age: 16,
        genre: 'thriller',
        rating: 6
    },
    {
        title: "Зеленая миля",
        CartId: 4,
        year: 1999,
        age: 16,
        genre: 'crime',
        rating: 9
    },
    {
        title: "Бойцовский клуб ",
        CartId: 5,
        year: 1999,
        age: 18,
        genre: 'crime',
        rating: 9
    },
    {
        title: "Джентльмены",
        CartId: 6,
        year: 2017,
        age: 18,
        genre: 'comedy',
        rating: 9
    },
    {
        title: "Сонная Лощина",
        CartId: 7,
        year: 1999,
        age: 16,
        genre: 'horror',
        rating: 8
    },
    {
        title: "Достать ножи",
        CartId: 8,
        year: 2019,
        age: 16,
        genre: 'detective',
        rating: 8
    },
    {
        title: "Сайлент Хилл",
        CartId: 9,
        year: 2006,
        age: 18,
        genre: 'horror',
        rating: 7
    }
]
let filteredMovies;
filteredMovies = movies;
let activeFilters = [];

console.log(movies[0])



function films(moviesForPaint) {
    document.querySelector(".content2").innerHTML = '';
    if (moviesForPaint == null) {
        moviesForPaint = movies;
    }
    const content2 = document.querySelector(".content2");
    let i = 0;
    let cartsCont = document.createElement("div");
    moviesForPaint.forEach(item => {
        i++;
        if (i > 3) {
            i = 1;
            cartsCont = document.createElement("div");
        }
        cartsCont.classList.add(`carts${i}`);
        let carts1 = document.createElement("div");
        carts1.innerHTML = `
         <div class="imgandtext" id="cart${item.CartId}" onclick="getLocationHref(${item.CartId})">
                        <p class="titlecard">${item.title}</p>
                        <img class="imgcart" src="${'../img/cart'+item.CartId+'.jpg'}" alt="#">
                        <div class="genre">${item.genre}</div>
                        <div class="raiting">${item.rating}</div>
         </div>`
        cartsCont.append(carts1);
        content2.append(cartsCont);
    })

}
films(movies)

function getLocationHref(t) {
    window.location.href = `../page${t}/index.html`;
    debugger;
}

function onFilterChange(id, name) {
    let filterValue = document.getElementById(id).value;
    let filter = { filterName: id, value: filterValue, name: name };
    let fiterIndex = activeFilters.findIndex(t => t.filterName == id);
    if (filterValue == "default") {
        if (fiterIndex > -1) {
            activeFilters.splice(fiterIndex, 1);
        }
        return;
    }
    if (fiterIndex === -1) {
        activeFilters.push(filter);
        filterCarts(filter);
    } else {
        filteredMovies = movies;
        activeFilters.splice(fiterIndex, 1);
        activeFilters.push(filter);
        filterCarts(filter, true);
    }
    onSortChange("ratingFilter", "rating");
}

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
    let filterEls = document.getElementsByClassName("opt");
    for (let i = 0; i < filterEls.length; i++) {
        filterEls[i].value = "default";
    }
    filteredMovies = movies;
    activeFilters = [];
    films(movies);
}

function onSortChange(id, name) {
    let filterValue = document.getElementById(id).value;
    let sortedMovies = [];
    filteredMovies.forEach(item => {
        sortedMovies.push(item);
    });
    if (filterValue == "asc") {
        sortedMovies.sort((a, b) => a.rating - b.rating);
    } else if (filterValue == "desc") {
        sortedMovies.sort((a, b) => b.rating - a.rating);
    }
    films(sortedMovies);
}