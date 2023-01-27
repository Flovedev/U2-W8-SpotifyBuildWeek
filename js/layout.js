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
            <div class="row px-5 py-2 mx-2 pt-3 top-navbar d-flex" id="top-navbar">
      
      <div class="dropdown ml-auto">
        <button class="btn btn-secondary dropdown-toggle d-flex justify-content-center align-items-center p-1"
          type="button" data-toggle="dropdown" aria-expanded="false" id="account-dropdown">
          <img
            src="https://i.pinimg.com/originals/c5/85/4a/c5854a027ffef745a3e6a082a813f6e4.png"
            class="account-avatar mr-2" alt="" />
          Power tigers
        </button>
        <div class="dropdown-menu">
          <div class="d-flex dropdown-item pr-2">
            <a class="pr-2 text-white" href="#">Account</a><i
              class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
          </div>
          <div class="d-flex dropdown-item pr-2">
            <a class="pr-2 text-white" href="#">Set up your Family Plan</a><i
              class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
          </div>
          <div class="d-flex dropdown-item pr-2">
            <a class="pr-0 text-white" href="#">Profile</a>
          </div>
          <div class="d-flex dropdown-item pr-2">
            <a class="pr-0 text-white" href="#">Support</a><i
              class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
          </div>
          <div class="d-flex dropdown-item pr-2">
            <a class="pr-0 text-white" href="#">Download</a><i
              class="bi bi-box-arrow-up-right ml-auto text-white mr-2"></i>
          </div>
          <div class="d-flex settings dropdown-item">
            <a class="pr-0 text-white" href="#">Settings</a>
          </div>
          <a class="pr-0 pb-0 text-white" href="./login.html">
                            <div class="d-flex dropdown-item">
                                Log Out
                            </div>
                        </a>
        </div>
      </div>
    </div>
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
            <div class="row mx-5 mt-5 album-info d-flex flex-column">
      
      <p class="mb-0">© 2023 Bati, Flo and Amirreza Studios, Inc.</p>
    </div>
    <div class="row bottom-footer mx-5 mt-5">
      <div class="col-lg-1 px-0 mr-5">
        <p class="footer-header">Company</p>
        <p>About</p>
        <p>Jobs</p>
        <p>For the Record</p>
      </div>
      <div class="col-lg-1 px-0 mx-5">
        <p class="footer-header">Communities</p>
        <p>For Artists</p>
        <p>Developers</p>
        <p>Advertising</p>
        <p>Investors</p>
        <p>Vendors</p>
      </div>
      <div class="col-lg-1 px-0 mx-5">
        <p class="footer-header">Useful Links</p>
        <p>Support</p>
        <p>Free Mobile App</p>
      </div>
      <div class="col-lg-1 ml-auto"></div>
      <div class="footer-icons"><i class="bi bi-instagram"></i></div>
      <div class="footer-icons ml-3"><i class="bi bi-twitter"></i></div>
      <div class="footer-icons ml-3"><i class="bi bi-facebook"></i></div>
    </div>
    <div class="row mx-5 my-4 bottom-footer-2">
      <p class="mr-2 my-0">Legal</p>
      <p class="mr-2 my-0">Privacy Center</p>
      <p class="mr-2 my-0">Privacy Policy</p>
      <p class="mr-2 my-0">Cookies</p>
      <p class="mr-2 my-0">About Ads</p>
      <p class="ml-auto my-0">© 2023 Spotify AB</p>
    </div>
`
            getTracklist()
        } else {
            console.log(res)
        }
    } catch (err) {
        setInterval(1000, location.reload())
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
                        <th scope="col" class="numbers-track">${index + 1}</th>
                        <th scope="col"><a href='./album.html?album=${element.album.id}'><img src="${element.album.cover}" alt=""></a></th>
                        <th scope="col">${element.title}</th>
                        <th scope="col">${element.album.id}</th>
                        <th scope="col">${Math.floor(element.duration / 60 * 100) / 100}</th>
                    </tr>`

            });
            changeBottom(resData)
        } else {
            console.log(res)
        }
    } catch (err) {
        setInterval(1000, location.reload())
        console.log(err)
    }

}

function changeBottom(data) {
    let artistName = document.getElementById("artist-name-bottom")
    artistName.innerText = data[0].artist.name

    let songNameContainer = document.getElementById("song-name-bottom")
    let albumArtContainer = document.getElementById("album-cover-mini")
    let numbersToChange = document.querySelectorAll(".numbers-track")
    let audioPlayerContainer = document.getElementById("audio-player")

    console.log(numbersToChange)



    for (let i = 0; i < numbersToChange.length; i++) {
        console.log(numbersToChange[i])
        numbersToChange[i].addEventListener("click", function () {
            songNameContainer.innerText = data[i].title
            audioPlayerContainer.setAttribute("src", data[i].preview)
            albumArtContainer.setAttribute("src", data[i].album.cover_big)
        })
    }
}