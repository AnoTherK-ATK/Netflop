document.getElementById("nav").innerHTML = `<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="assets/img/UIT.svg" class="h-8" alt="UIT" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">NetFlop</span>
</a>
<div class="flex md:order-2">
    <div class="relative sm:block">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Search icon</span>
        </div>
        <input type="text" id="navbar-search"
            class="block max-[400px]:w-24 w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search...">
    </div>
    <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
</div>
<div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
    <ul
        class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-900 md:bg-gray-900 border-gray-700">
        <li>
            <a href="index.html"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page">Home</a>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white md:hover:text-blue-500 focus:text-white border-gray-700 hover:bg-gray-700 md:dark:hover:bg-transparent">Genres
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-content dark:bg-gray-700 dark:divide-gray-600">
                <ul class="grid grid-cols-3 justify-center items-center py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Action</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Adventure</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animation</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Comedy</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Crime</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Documentary</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Drama</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Family</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fantasy</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">History</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Horror</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Music</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mystery</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Romance</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Science
                            Fiction</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TV
                            Movie</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Thriller</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">War</a>
                    </li>
                    <li>
                        <a href="discover.html"
                            class="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Western</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="discover.html"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Trending</a>
                </div>

            </div>
        </li>
        <!-- Please remember, BE -->
        <li>
            <a id="userName" href="upload.html"
                class="${getCookie('role') != 'admin' ? "hidden" : "" } block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Upload</a>
        </li>
        <li>
            <a id="logOut" href="login.html?logout=true"
                class="block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Logout</a>
        </li>
    </ul>
</div>
</div>`

//document.getElementById('userName').innerHTML = getCookie('name');
                    