const param = new URLSearchParams(window.location.search);
const id = param.get("id");
var countId;
let rate = 0;
let cnt = 0;

async function fetchRating() {
    const response = await fetch(
        `https://api.themoviedb.org/3/${id}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data;
}

async function renderRating() {
    const rating = await fetchRating();
    countId = document  .getElementById("count");
    document.title = (rating.name || rating.title) + " - NetFlop";
    countId.innerHTML = rating.vote_count + " votes";
    rate = rating.vote_average;
    cnt = rating.vote_count;
}

function upVote() {
    cnt += 1;
    countId.innerHTML = cnt + " votes";
}

function downVote() {
    cnt -= 1;
    countId.innerHTML = cnt + " votes";
}

