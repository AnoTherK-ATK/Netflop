const apiKey = "2f2c4f80fa170f15fec1e975abc0a486";
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}