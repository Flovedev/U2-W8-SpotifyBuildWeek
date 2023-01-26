const url = "https://striveschool-api.herokuapp.com/api/deezer/artist/"

const options = {
    headers: {
        'X-RapidAPI-Key': '46d53ca825mshdd391743c09b9f9p1a0923jsnbfa4ad16632f',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const params = new URLSearchParams(location.search)
const id = params.get("artist")
// const id = "972"

let artistNode = document.getElementById("main")

window.onload = async () => {
    try {
        let res = await fetch(url + id, options)
        let resJson = await res.json()
        if (res.ok) {
            console.log(resJson)
            artistNode.innerHTML = `
            <div class="jumbotron pb-1 pl-4 mb-0 d-flex flex-column" id="artist-jumbotron" style="background-image: url('${resJson.picture_xl}')">
            <div class="mt-auto">
                <div class="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3D91F4" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                    </svg>
                    <p class="m-1">Verified Artist</p>
                </div>
            </div>
            <h1 class="display-4">${resJson.name}</h1>
            <p class="lead">A lot of monthly listeners</p>
            </div>
            <div id="artist-content">
            <div class="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="green"
                    class="bi bi-play-circle-fill mr-4" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <button type="button" class="btn btn-outline-light mr-4">Follow</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#808080" class="bi bi-three-dots"
                    viewBox="0 0 16 16">
                    <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
            </div>
            <div class="d-flex p-4">
                <div class="flex-grow-1">
                    <h5>Popular</h5>
                    <table class="table table-borderless m-3 table-dark bg-transparent">
                        <tbody class="" id="artist-tracks"></tbody>
                    </table>
                    <div id="artist-content-see" onclick="">
                        <span>SEE MORE</span>
                    </div>
                </div>
                <div class="mx-5 pr-5" id="artist-pick">
                    <h5>Artist pick</h5>
                    <div class="d-flex">
                        <img src="${resJson.picture}"
                            alt="">
                        <div class="ml-1">
                            <div class="d-flex mb-1">
                                <img src="${resJson.picture_small}"
                                    alt="">
                                <span class="m-0">Posted By ${resJson.name}</span>
                            </div>
                                <p class="m-0">${resJson.name} Best Of</p>
                                <span>Playlist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`
            getTracklist()
        } else {
            console.log(res)
        }
    } catch (err) {
        console.log(err)
    }
}

const getTracklist = async () => {
    try {
        let tracksNode = document.getElementById("artist-tracks")
        let res = await fetch(url + id + "/top?limit=5", options)
        let resJson = await res.json()
        let resData = resJson.data
        if (res.ok) {
            console.log(resData)

            resData.forEach(function callback(element, index) {
                tracksNode.innerHTML += `
                    <tr>
                        <th scope="col">${index + 1}</th>
                        <th scope="col"><a href='./album.html?album=${element.album.id}'><img src="${element.album.cover}" alt=""></a></th>
                        <th scope="col">${element.title}</th>
                        <th scope="col">${element.album.id}</th>
                        <th scope="col">${Math.floor(element.duration / 60 * 100) / 100}</th>
                    </tr>`
            });
        } else {
            console.log(res)
        }
    } catch (err) {
        console.log(err)
    }
}

const searchArtist = (event) => {
    const input = event.target.value
    if (event.key === "Enter") {

    }
}

const searchAlbum = (event) => {
    const input = event.target.value
    if (input.length > 3) {
        console.log(`I have to render ${input}`)
    }
}

const addToSaved = (event) => {
    const savedNode = document.getElementById('saved-songs')
    const title = event
    savedNode.innerHTML += `<li class="px-1 text-truncate">${title}</li>`
}