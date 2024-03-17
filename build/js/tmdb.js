const apiKey = '';
let page = 1;

async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`);
    const data = await response.json();
    return data.results;
}

async function renderMovies() {
    const moviesContainer = document.getElementById('movies-container');
    const movies = await fetchMovies();

    movies.forEach(movie => {
        const movieCard = `
            <div class="border rounded-lg overflow-hidden">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-full">
                <div class="p-4">
                    <h2 class="font-bold text-lg mb-2">${movie.title}</h2>
                    <p class="text-gray-700">${movie.overview}</p>
                </div>
            </div>
        `;
        moviesContainer.innerHTML += movieCard;
    });
}

document.getElementById('load-more').addEventListener('click', async () => {
    page++;
    await renderMovies();
});

document.addEventListener('DOMContentLoaded', async () => {
    await renderMovies();
});