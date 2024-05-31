let page = 1;
let genID = -1;
const param = new URLSearchParams(window.location.search);
if (param.has("genre")) {
    genID = param.get("genre");
}
console.log(genID);
async function fetchMovies() {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
    );
    const data = await response.json();
    return data.results;
}

function ChangeToSlug(txt)
{
    var title, slug;
 
    //Lấy text từ thẻ input title 
    title = txt;
 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();
 
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    return slug
}

function elementGen(movie, gen) {
    return `<div class='flex max-w-sm w-full bg-transparent shadow-md rounded-lg overflow-hidden mx-auto h-full'>
    <div class='w-2 bg-gray-800 h-96'></div>

    <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
        >
        <div
            class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent to-75%">
        </div>
        <a href="watch.html?id=${movie.id}&name=${ChangeToSlug(movie.title)}">
        <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity=""
            >
            <div class="poster__info align-self-end w-full">
                <div class="h-32"></div>
                <div class="space-y-6 detail_info">
                    <div class="flex flex-col space-y-2 inner">
                        <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">${movie.title}</h3>
                    </div>
                    <div class="flex flex-col overview">
                        <div class="flex flex-col"></div>
                        <div class="text-xs text-gray-400 mb-2">Overview:</div>
                        <p class="text-xs text-gray-100 mb-6">
                            ${gen == -1 ? movie.ovw : ovw}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </a>
        <img class="absolute inset-0 transform w-full -translate-y-4"
            src=${gen == -1 ? movie.poster_path : "http://image.tmdb.org/t/p/w342" + movie.poster_path} style="filter: grayscale(0);" />
            
            </div>
            
            </div>
`;
}

async function renderMovies(genreID = genID, ppage = 0) {
    const moviesContainer = document.getElementById("movies-container");

    genID = -1;
    await renderHot();
    return;
}

async function fetchHot(id) {
    let data = "";
    const response = await fetch(
        `https://sv.netflop.site/user/getAllFilmsInfo`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${getCookie("token")}`,
            },
        }
    );
    if (response.status === 200) {
        data = await response.json();
        console.log(data);
    }
    let change = [
        {
            id: data[0].uuid,
            title: data[0].filmName,
            release_date: data[0].releaseDate,
            poster_path: `https://sv.netflop.site/public/media/${data[0].uuid}/${data[0].poster}`,
            ovw: data[0].description,
            vote_average: 0,
            vote_count: 0,
        },
    ];
    for (let i = 1; i < data.length; i++) {
        change.push({
            id: data[i].uuid,
            title: data[i].filmName,
            release_date: data[i].releaseDate,
            poster_path: `https://sv.netflop.site/public/media/${data[i].uuid}/${data[i].poster}`,
            ovw: data[i].description,
            vote_average: 0,
            vote_count: 0,
        });
    }
    return change;
}

async function renderHot() {
    genreID = -1;
    let movies = [];
    const moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = "";
    movies = await fetchHot();
    movies.forEach((movie) => {
        const movieCard = elementGen(movie, -1);
        moviesContainer.innerHTML += movieCard;
    });
}

