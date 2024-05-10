const param = new URLSearchParams(window.location.search);
const id = param.get("id");
var countId;
let rate = 0;
let cnt = 0;
let isUpVoted = false;
let isDownVoted = false;