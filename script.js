function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('#lyrics-form')
form.addEventListener('submit', el => {
    el.preventDefault();
    document.querySelector('#lyrics').innerHTML = ''
    document.querySelector('#artist').innerHTML = ''
    document.querySelector('#song').innerHTML = ''
    doSubmit();

})

async function doSubmit() {
    const lyrics = document.querySelector('#lyrics')
    const artist = document.querySelector('#artist')
    const song = document.querySelector('#song')

    document.querySelector('#info').innerHTML = `
    <h1> ${artist.value} </h1>
    <h2> ${song.value} </h2>
    `

    const lyricsReponse = await findLyrics(artist.value, song.value);
    const data = await lyricsReponse.json();
    lyrics.innerHTML = data.lyrics;

}