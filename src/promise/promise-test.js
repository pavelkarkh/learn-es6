let moviesList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    moviesList.appendChild(img);
}

function getData(url) {
    return new Promise(function(res, rej) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET' ,url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                console.log(json);
                
                res(json);
            } else {
                rej(xhr.statusText);
            }
        };
        xhr.onerror = function(err) {
            rej(err);
        }
        xhr.send();
    });
}

let searchString = 'Spider Man';
// 2acd673a
getData(`http://omdbapi.com/?apikey=2acd673a&t=${searchString}`)
    .then(movie => addMovieToList(movie))
    .catch(err => console.log(err));