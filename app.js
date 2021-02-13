const searchSongs = () => {
    const searchText = document.getElementById("search-field").value;
    console.log(searchText);

    const url = `https://api.lyrics.ovh/suggest/${searchText}`;

    fetch(url)
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(dataObj => displaySongs(dataObj.data))
        .catch(error => console.log(error))

}
const songSearchResult = document.getElementById("song-search-result");
const displaySongs = (data) => {
    songSearchResult.innerHTML = "";
    data.forEach(song => {
        songSearchResult.innerHTML += `
        <div id="single-song" class="single-result row align-items-center my-3 p-3">
             <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                <p class="author lead">Album by <span>${song.artist.name}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
             </div>
        </div>
        `;

        console.log("Song-Title: ", song.title);
        console.log("Song-Artist: ", song.artist.name);
    });
}