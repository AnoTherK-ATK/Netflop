const apiKey = "2f2c4f80fa170f15fec1e975abc0a486";
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    else return ""
}
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function logOut() {
    deleteCookie('role');
    deleteCookie('name');
    deleteCookie('token');
    window.location.href = "login.html";
}