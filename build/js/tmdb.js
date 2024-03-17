const apiKey = "2f2c4f80fa170f15fec1e975abc0a486";
let page = 1;

async function fetchMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
    );
    const data = await response.json();
    return data.results;
}

async function renderMovies() {
    const moviesContainer = document.getElementById("movies-container");
    const movies = await fetchMovies();

    movies.forEach((movie) => {
        const movieCard = `
            <div>
                <div class='flex max-w-sm w-full bg-transparent shadow-md rounded-lg overflow-hidden mx-auto h-full'>
                    <div class='w-2 bg-gray-800'></div>
            
                    <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                        >
                        <div
                            class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent">
                        </div>
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
                                            ${movie.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="absolute inset-0 transform w-full -translate-y-4"
                            src="http://image.tmdb.org/t/p/w342${movie.poster_path}" style="filter: grayscale(0);" />
                            <div class="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                            <a class="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700 mb-0 mt-100"
                                href="watch.html" target="_blank" data-unsp-sanitized="clean">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </svg>
    
                                <div class="text-sm text-white ml-2">Watch</div>
                            </a>
                            </div>
                            </div>
                            
                            </div>
            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await renderMovies();

    window.addEventListener('scroll', async () => {
        if (Math.round(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            page++;
            await renderMovies();
        }
    });
});