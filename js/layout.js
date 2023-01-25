const url = "https://striveschool-api.herokuapp.com/api/deezer/artist/"

const params = new URLSearchParams(location.search)
const id = params.get("artist")

let artistNode = document.getElementById("main")

window.onload = async () => {
    try {
        let res = await fetch(url + id)
        let resJson = await res.json()
        if (res.ok) {
            console.log(resJson)
            artistNode.innerHTML = `
            <div class="jumbotron pb-1 pl-4 d-flex flex-column" id="artist-jumbotron" style="background-image: url('${resJson.picture_big}')">
            <div class="mt-auto">
                <div class="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightblue"
                        class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <p class="m-1">Verified Artist</p>
                </div>
            </div>
            <h1 class="display-4">${resJson.name}</h1>
            <p class="lead">37,120,733 monthly listeners</p>
            </div>
            <div id="artist-content">
            <div class="m-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="green"
                    class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <button type="button" class="btn btn-outline-light">Follow</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-three-dots"
                    viewBox="0 0 16 16">
                    <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
            </div>
            <div class="d-flex m-4">
                <div class="flex-grow-1">
                    <h5>Popular</h5>
                    <table class="table table-borderless m-3 table-dark bg-transparent">
                        <tbody id="artist-tracks"></tbody>
                    </table>
                    <span>SEE MORE</span>
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
        let res = await fetch(url + 1168 + "/top?limit=5")
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
        console.log(`I Have to render ${input}`)
    }
}