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

const displaySongs = (data)=>{
    data.forEach(song => {
        console.log("Song-Title: ",song.title);
        console.log("Song-Artist: ",song.artist.name);        
    });
}