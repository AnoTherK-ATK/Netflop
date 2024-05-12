document.getElementById('upload').addEventListener('submit', function(e) {
    e.preventDefault();
    var file = document.getElementById('file').files[0];
    var formData = new FormData();
    formData.append('file', file);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Upload successful!');
        } else {
            console.log('Upload failed!');
        }
    };
    xhr.send(formData);
});