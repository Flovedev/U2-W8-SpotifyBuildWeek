const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const urlArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist/"

const params = new URLSearchParams(location.search)
const id = params.get("artist")

const options = {
	headers: {
		'X-RapidAPI-Key': '7f02b8b79bmshbf21a2cbe7b2fabp1c80c9jsn86f616a6d1cc',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

const getData = async () => {
	try {
		let res = await fetch(url + 'Van Halen', options);
		let data = await res.json();

	} catch (error) {
		console.log(error);
	}
};

const albumCardNode1 = document.getElementById("album-card-container1");
const songCardNode1 = document.getElementById("song-card-container1");

const albumCardNode2 = document.getElementById("album-card-container2");
const songCardNode2 = document.getElementById("song-card-container2");

const artistNode = document.getElementById("artist-name");

let albumNames = [];
let albumShortNames = [];
let albumImg = [];
let albumPreview = [];

window.onload = async () => {
	try {
		let res = await fetch(url + id, options);
		let potato = await res.json();
		let potatojson = potato.data
		console.log(potatojson)

		let albumNames = [];
		let albumImg = [];
		let albumId = [];


		for (let i = 0; i < potatojson.length; i++) {
			const element = potatojson[i];
			if (albumNames.includes(element.album.title)) {

			} else {
				albumShortNames.push(element.album.title_short)
				albumNames.push(element.album.title)
				albumImg.push(element.album.cover_medium)
				albumId.push(element.album.id)
				albumPreview.push(element.preview)
			}
		}

		console.log(albumNames)

		for (let i = 0; i < albumNames.length; i++) {
			if (i < 3) {
				let element = potatojson[i];

				albumCardNode1.innerHTML += `
				<a class="text-decoration-none" href="./album.html?album=${element.album.id}">
					<div class="col-lg-4 flex-grow-1">
						<div class="card mb-3" style="max-width: 470px; background-color: #312728;">
							<div class="row no-gutters">
								<div class="col-4 d-inline-block">
									<img style="width: 90px;" src="${albumImg[i]}" alt="...">
								</div>
							<div class="col-md-8 d-flex justify-content-start align-items-center">
								<h6 class="card-title  m-0 text-elipsis">${albumNames[i]}</h6>
							</div>
						</div>
					</div>
				</a>`

			} else {
				break;
			}
		}

		for (let i = 3; i < albumNames.length; i++) {
			if (i < 6) {
				let element = potatojson[i];

				albumCardNode2.innerHTML += `
				<a class="text-decoration-none" href="./album.html?album=${albumId[i]}">
					<div class="col-lg-4 flex-grow-1">
						<div class="card mb-3" style="max-width: 470px; background-color: #312728;">
							<div class="row no-gutters">
								<div class="col-4 d-inline-block">
									<img style="width: 90px;" src="${albumImg[i]}" alt="...">
								</div>
								<div class="col-md-8 d-flex justify-content-start align-items-center">
									<h6 class="card-title  m-0 text-elipsis">${albumNames[i]}</h6>
								</div>
							</div>
					</div>
				</a>`
			} else {
				break;
			}
		}

		for (let i = 0; i < 6; i++) {
			let element = potatojson[i];

			artistNode.innerHTML = `<h3 class="text-white font-weight-bold">${element.artist.name}</h3>`

			songCardNode1.innerHTML += `<div class="col-lg-2">
		<div class="card mx--1 song-card" style="width:170px;">
			<img id="recently-played-card-img1" class="card-img-top p-2 rounded"
				src="${element.album.cover_medium}"
				alt="Card image cap">
			<div class="card-body p-3">
				<h6 id="recently-played-card-title1" class="card-title mb-1 text-truncate">${element.title}</h6>
				<div class="play-button1 ml-auto bottom-right2"
					onclick="this.classList.toggle('active')">
					<div class="fondo" x="0" y="0"></div>
					<div class="icono ml-auto">
						<div class="parte izquierda" x="0" y="0" width="100" height="100" fill="#fff">
						</div>
						<div class="parte derecha" x="0" y="0" width="100" height="100" fill="#fff">
						</div>
					</div>
				</div>
				<p class="card-text" style="color: rgb(153, 153, 153);">${element.artist.name}</p>
			</div>
		</div>
	</div>`
		}

		for (let i = 6; i < 12; i++) {
			const element = potatojson[i];



			songCardNode2.innerHTML += `<div class="col-lg-2">
	<div class="card mx--1 song-card" style="width:170px;">
		<img id="recently-played-card-img1" class="card-img-top p-2 rounded"
			src="${element.album.cover_medium}"
			alt="Card image cap">
		<div class="card-body p-3">
			<h6 id="recently-played-card-title1" class="card-title mb-1 text-truncate">${element.title}</h6>
			<div class="play-button1 ml-auto bottom-right2"
				onclick="this.classList.toggle('active')">
				<div class="fondo" x="0" y="0"></div>
				<div class="icono ml-auto">
					<div class="parte izquierda" x="0" y="0" width="100" height="100" fill="#fff">
					</div>
					<div class="parte derecha" x="0" y="0" width="100" height="100" fill="#fff">
					</div>
				</div>
			</div>
			<p class="card-text" style="color: rgb(153, 153, 153);">${element.artist.name}</p>
		</div>
	</div>
</div>`

		}

		for (let i = 0; i < albumNames.length; i++) {
			const element = potatojson[i];

			searchCardsNode.innerHTML += `
			<a href="./album.html?album=${element.album.id}">
			<div class="card m-2 look-at-me" style="width: 12rem; height: 16rem;">
				<img src="${albumImg[i]}" class="card-img-top" alt="...">
				<div class="card-body p-1">
			  		<h5 class="card-title albums-to-search">${albumNames[i]}</h5>
				</div>
		  	</div>
		  	</a>`
		} changeBottom(potatojson)

	} catch (error) {
		setInterval(1000, location.reload())
		console.log(error);
	}
};


const searchArtist = (event) => {
	const input = event.target.value
	if (event.key === "Enter") {
		window.location.href = `./index.html?artist=${input}`;
	}
}

const albumsNode = document.getElementById("first-container")
const albumsNode2 = document.getElementById("second-container")
const searchNode = document.getElementById("search-container")
const searchCardsNode = document.getElementById("search-container-cards")
let albumsToNode = document.getElementsByClassName("albums-to-search")

const searchAlbum = (event) => {
	let input = event.target.value
	let filter = input.toLowerCase()

	if (filter.length > 2) {
		albumsNode.classList.add("d-none")
		albumsNode2.classList.add("d-none")
		searchNode.classList.remove("d-none")

		for (let i = 0; i < albumsToNode.length; i++) {
			let textValue = albumsToNode[i].innerHTML
			if (textValue.toLocaleLowerCase().indexOf(filter) > -1) {
				albumsToNode[i].closest(".look-at-me").classList.remove("d-none")

			} else {
				albumsToNode[i].closest(".look-at-me").classList.add("d-none")
			}
		}

	} else if (filter.length === 0) {
		albumsNode.classList.remove("d-none")
		albumsNode2.classList.remove("d-none")
		searchNode.classList.add("d-none")
	}
}

const findAlbumById = (str) => {
	return albumNames.find((album) => album.title.toLowerCase().include(str))
}



function changeBottom(data) {
	let albumArt = document.getElementById("album-cover-mini")
	let songName = document.getElementById("song-name-bottom")
	let artistName = document.getElementById("artist-name-bottom")
	let audioPlayer = document.getElementById("audio-player")

	console.log(albumPreview)

	let playNode = document.getElementsByClassName('play-button1 ml-auto')
	for (let i = 0; i < playNode.length; i++) {
		playNode[i].addEventListener("click", function () {

			songName.innerText = data[i].title
			audioPlayer.setAttribute("src", albumPreview[i])
			albumArt.setAttribute("src", data[i].album.cover_medium)
			artistName.innerText = data[i].artist.name
		})
	}
}