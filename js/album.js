const params = new URLSearchParams(location.search)
const id = params.get("id")

function changeNavbarBG() {
    let navbar = document.getElementById("album-navbar")
    let topbar = document.getElementById("top-navbar")
    let scrollValue = window.scrollY;
    
    if (scrollValue < 405) {
        navbar.classList.remove("album-navbar-bg")
        topbar.classList.remove("album-navbar-bg")
    } else {
        navbar.classList.add("album-navbar-bg")
        topbar.classList.add("album-navbar-bg")
    }
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46d53ca825mshdd391743c09b9f9p1a0923jsnbfa4ad16632f',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};


const urlAlbum =  "https://striveschool-api.herokuapp.com/api/deezer/album/"
const urlArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist/"
const urlSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const urlAlbumID = "265655342"
const urlArtistID = "1168"
const searchQuery = "van-halen"
let artistID;

const getAlbumData = async () => {
    try {
        const res = await fetch(urlAlbum + urlAlbumID, options)
        const data = await res.json()
        renderAlbum(data)
    } catch (error) {
        console.log(error)
    }
}

const getArtistData = async () => {
    try {
        const res = await fetch(urlArtist + urlArtistID, options)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const getSearchData = async () => {
    try {
        const res = await fetch(urlSearch + searchQuery, options)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener("scroll", changeNavbarBG)

const renderAlbum = async (data) => {
    console.log(data)

    let albumCover = document.getElementById("album-cover")
    let artistImage = document.getElementById("artist-image")
    let artistTitle = document.getElementById("artist-title")
    let albumYear = document.getElementById("album-year")
    let albumTracks = document.getElementById("album-track-quantity")
    let albumDurationLocation = document.getElementById("album-duration")
    let albumTypeLocation = document.getElementById("album-type")
    let albumTitle = document.getElementById("album-title-big")
    let albumDate = document.getElementById("album-date")

    let albumType = data.record_type
    let albumTypeFirstLetter = albumType.charAt(0)
    let albumTypeFirstLetterUppercase = albumTypeFirstLetter.toUpperCase()
    let albumTypeRemainingLetters = albumType.substring(1)
    let albumTypeFinal = albumTypeFirstLetterUppercase + albumTypeRemainingLetters
    
    albumCover.setAttribute("src", data.cover_big)
    artistImage.setAttribute("src", data.artist.picture_big)
    artistTitle.setAttribute("href", `./artist.html?id=${data.artist.id}`)
    artistTitle.innerText = data.artist.name
    albumYear.innerText = data.release_date.slice(0,4)
    albumTracks.innerText = data.nb_tracks + " Songs"

    let albumDateRaw = data.release_date;
    let albumDateYear = albumDateRaw.slice(0,4)
    let albumDateMonth = albumDateRaw.slice(5,7)
    let albumDateDay = albumDateRaw.slice(8)
    let arrayOfMonths = [
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ]
    
    albumDate.innerText = arrayOfMonths[albumDateMonth-1] + " " + albumDateDay + ", " + albumDateYear;
    

    let albumDuration = data.duration;
    let minutes = Math.floor(albumDuration/60)
    let seconds = albumDuration - minutes*60
   
    albumDurationLocation.innerText = minutes + " min " + seconds + " sec";

    albumTitle.innerText = data.title
    albumTypeLocation.innerText = albumTypeFinal;

    let trackNumber = 1;
    let container = document.getElementById("tracklist")

    for (let i = 0;i<data.tracks.data.length; i++)
    {
        
        let row = document.createElement("tr")
        
        let trackNumberHash = document.createElement("th")
        trackNumberHash.innerText = trackNumber;

        let trackName = document.createElement("td")
        trackName.innerText = data.tracks.data[i].title

        let artistNameP = document.createElement("p")
        let artistNameA = document.createElement("a")
        artistNameA.innerText = data.tracks.data[i].artist.name
        artistNameA.setAttribute("href", `./artist.html?id=${data.tracks.data[i].artist.id}`)
        artistNameP.appendChild(artistNameA)
        

        let trackDuration = document.createElement("td")

        let trackDurationRaw = data.tracks.data[i].duration
        let minutes = Math.floor(trackDurationRaw/60)
        let seconds = trackDurationRaw - minutes*60
        let trackDurationRawInMinSec = minutes + ":" + seconds;
        trackDuration.innerText = trackDurationRawInMinSec;

        trackName.appendChild(artistNameP)
        row.appendChild(trackNumberHash)
        row.appendChild(trackName)
        row.appendChild(trackDuration)
        container.appendChild(row)
        trackNumber++;
    }
}

window.onload = (
    getAlbumData()
)