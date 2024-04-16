const param = new URLSearchParams(window.location.search);
const id = param.get("id");
var countId;
let rate = 0;
let cnt = 0;
let isUpVoted = false;
let isDownVoted = false;

async function fetchRating() {
    const response = await fetch(
        `https://api.themoviedb.org/3/${id}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data;
}

async function renderRating() {
    const rating = await fetchRating();
    countId = document.getElementById("count");
    document.title = (rating.name || rating.title) + " - NetFlop";
    countId.innerHTML = rating.vote_count + " votes";
    rate = rating.vote_average;
    cnt = rating.vote_count;
}

$(document).ready(function () {
    $("#up").click(function () {
        $("#up").toggleClass("bg-green-400");
        $("#down").removeClass("bg-green-400");
    });
    $("#down").click(function () {
        $("#down").toggleClass("bg-green-400");
        $("#up").removeClass("bg-green-400");
    });
});

function upVote() {
    if (isUpVoted) {
        cnt -= 1;
        countId.innerHTML = cnt + " votes";
        isUpVoted = false;
        return;
    }
    else if (isDownVoted) {
        cnt += 2;
        countId.innerHTML = cnt + " votes";
        isUpVoted = true;
        isDownVoted = false;
        return;
    } else {
        cnt += 1;
        countId.innerHTML = cnt + " votes";
        isUpVoted = true;
        isDownVoted = false;
        return;
    }
}

function downVote() {
    if (isDownVoted) {
        cnt += 1;
        countId.innerHTML = cnt + " votes";
        isDownVoted = false;
        return;
    }
    else if (isUpVoted) {
        cnt -= 2;
        countId.innerHTML = cnt + " votes";
        isDownVoted = true;
        isUpVoted = false;
        return;
    } else {
        cnt -= 1;
        countId.innerHTML = cnt + " votes";
        isDownVoted = true;
        isUpVoted = false;
        return;
    }
}

