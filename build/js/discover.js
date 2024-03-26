
let page = 1;
let genID = 0;
async function fetchMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
    );
    const data = await response.json();
    return data.results;
}


async function fetchMoviesByGenre(genreId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}`
    );
    const data = await response.json();
    return data.results;
}

async function renderMovies(genreID = 0, ppage = 0) {
    const moviesContainer = document.getElementById("movies-container");
    let movies;
    if(ppage == 0){
        ppage = 1;
        page = 1;
    }
    if(genreID == 0){
        genID = 0;
        movies = await fetchMovies();
    }
    else{
        moviesContainer.innerHTML = "";
        genID = genreID;
        movies = await fetchMoviesByGenre(genreID);
    }

    movies.forEach((movie) => {
        ovw = movie.overview;
        if (ovw.length > 450) {
            ovw = ovw.substring(0, 450) + "...";
        }
        for (let i = 0; i < Math.max(0, 453  - ovw.length); i++) {
            ovw += '    ';
        }
        movie.id = "movie/" + movie.id;
        const movieCard = `
                <div class='flex max-w-sm w-full bg-transparent shadow-md rounded-lg overflow-hidden mx-auto h-full'>
                    <div class='w-2 bg-gray-800 h-96'></div>
            
                    <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                        >
                        <div
                            class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent to-55%">
                        </div>
                        <a href="watch.html?id=${movie.id}">
                        <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity=""
                            >
                            <div class="poster__info align-self-end w-full">
                                <div class="h-32"></div>
                                <div class="space-y-6 detail_info">
                                    <div class="flex flex-col space-y-2 inner">
                                        <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">${movie.title}</h3>
                                    </div>
                                    <div class="flex flex-row justify-between datos">
                                        <div class="flex flex-col datos_col">
                                            <div class="release">${movie.release_date}</div>
                                            <div class="text-sm text-gray-400">Release date:</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overview">
                                        <div class="flex flex-col"></div>
                                        <div class="text-xs text-gray-400 mb-2">Overview:</div>
                                        <p class="text-xs text-gray-100 mb-6">
                                            ${ovw}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <img class="absolute inset-0 transform w-full -translate-y-4"
                            src="http://image.tmdb.org/t/p/w342${movie.poster_path}" style="filter: grayscale(0);" />
                            
                            </div>
                            
                            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}

async function fetchHot(id) {
    const response = await fetch(
        `https://api.themoviedb.org/3/${id}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    const change = {
        id: id,
        title: data.name || data.title,
        release_date: data.first_air_date || data.release_date,
        poster_path: data.poster_path,
        overview: data.overview,
    };
    return change;
}

async function renderHot() {
    let movies = [];
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = "";
    movies.push(await fetchHot("tv/241871"));
    movies.push(await fetchHot("movie/693134"));
    movies.push(await fetchHot("tv/97825"));
    movies.forEach((movie) => {
        ovw = movie.overview;
        if (ovw.length > 450) {
            ovw = ovw.substring(0, 450) + "...";
        }
        for (let i = 0; i < Math.max(0, 453  - ovw.length); i++) {
            ovw += '    ';
        }
        const movieCard = `
                <div class='flex max-w-sm w-full bg-transparent shadow-md rounded-lg overflow-hidden mx-auto h-full'>
                    <div class='w-2 bg-gray-800 h-96'></div>
            
                    <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                        >
                        <div
                            class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent to-70%">
                        </div>
                        <a href="watch.html">
                        <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity=""
                            >
                            <div class="poster__info align-self-end w-full">
                                <div class="h-32"></div>
                                <div class="space-y-6 detail_info">
                                    <div class="flex flex-col space-y-2 inner">
                                        <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">${movie.title}</h3>
                                    </div>
                                    <div class="flex flex-row justify-between datos">
                                        <div class="flex flex-col datos_col">
                                            <div class="release">${movie.release_date}</div>
                                            <div class="text-sm text-gray-400">Release date:</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overview">
                                        <div class="flex flex-col"></div>
                                        <div class="text-xs text-gray-400 mb-2">Overview:</div>
                                        <p class="text-xs text-gray-100 mb-6">
                                            ${ovw}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <img class="absolute inset-0 transform w-full -translate-y-4"
                            src="http://image.tmdb.org/t/p/w342${movie.poster_path}" style="filter: grayscale(0);" />
                            
                            </div>
                            
                            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await renderMovies();

    window.addEventListener("scroll", async () => {
        if (
            Math.round(window.innerHeight + window.scrollY) >=
            document.body.offsetHeight
        ) {
            page++;
            await renderMovies(genID, page);
        }
    });
});


async function searchMovies(search) {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    );
    const data = await response.json();
    const movies = data.results;
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = "";
    movies.forEach((movie) => {
        ovw = movie.overview;
        if (ovw.length > 450) {
            ovw = ovw.substring(0, 450) + "...";
        }
        for (let i = 0; i < Math.max(0, 453  - ovw.length); i++) {
            ovw += '    ';
        }
        const movieCard = `
                <div class='flex max-w-sm w-full bg-transparent shadow-md rounded-lg overflow-hidden mx-auto h-full'>
                    <div class='w-2 bg-gray-800 h-96'></div>
            
                    <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                        >
                        <div
                            class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent to-70%">
                        </div>
                        <a href="watch.html">
                        <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity=""
                            >
                            <div class="poster__info align-self-end w-full">
                                <div class="h-32"></div>
                                <div class="space-y-6 detail_info">
                                    <div class="flex flex-col space-y-2 inner">
                                        <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">${movie.title}</h3>
                                    </div>
                                    <div class="flex flex-row justify-between datos">
                                        <div class="flex flex-col datos_col">
                                            <div class="release">${movie.release_date}</div>
                                            <div class="text-sm text-gray-400">Release date:</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overview">
                                        <div class="flex flex-col"></div>
                                        <div class="text-xs text-gray-400 mb-2">Overview:</div>
                                        <p class="text-xs text-gray-100 mb-6">
                                            ${ovw}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </a>
                        <img class="absolute inset-0 transform w-full -translate-y-4"
                            src="http://image.tmdb.org/t/p/w342${movie.poster_path}" style="filter: grayscale(0);" />
                            
                            </div>
                            
                            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}