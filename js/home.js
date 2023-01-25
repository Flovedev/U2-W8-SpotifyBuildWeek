const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const urlArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist/"

const artistQueries = ['Coldplay', 'The Beatles', 'Queen', 'Pink Floyd', 'Fleetwood Mac', 'Iron Maiden', 'Black Sabbath', 'AC/DC', 'Taylor Swift', 'Frank Ocean'];

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

const albumCardNode = document.getElementById("album-card-container");
const songCardNode = document.getElementById("song-card-container");


window.onload = async () => {
	try {
		let res = await fetch(url + 'Oasis', options);
		let potato = await res.json();
		let potatojson = potato.data
		console.log(potatojson)

		let albumNames = [];
		let albumImg = [];

		for (let i = 0; i < potatojson.length; i++) {
			const element = potatojson[i];
			if (albumNames.includes(element.album.title)) {
				console.log();
			} else {
				albumNames.push(element.album.title)
				albumImg.push(element.album.cover_medium)
			}
		}

		console.log(albumNames)

		for (let i = 0; i < albumNames.length; i++) {

			let element = potatojson[i];

			albumCardNode.innerHTML += `<div class="col-lg">
			<div class="card mb-3" style="width: 258px; background-color: #312728;">
				<div class="row no-gutters">
					<div class="col-4 d-inline-block">
						<img style="width: 70px;"
							src="${albumImg[i]}"
							alt="...">
					</div>
					<div class="col-md-8 d-flex justify-content-start align-items-center">
						<div class="card-body d-flex align-items-center p-0">
							<h6 class="card-title m-0 ">${albumNames[i]}</h6>
							<div class="play-button ml-auto" onclick="this.classList.toggle('active')">
								<div class="fondo" x="0" y="0"></div>
								<div class="icono ml-auto">
									<div class="parte izquierda" x="0" y="0" width="100" height="100"
										fill="#fff"></div>
									<div class="parte derecha" x="0" y="0" width="100" height="100"
										fill="#fff"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`
		}



		for (let i = 0; i < 14; i++) {
			let element = potatojson[i];

			songCardNode.innerHTML += `<div class="col">
		<div class="card" style="width: 150px;">
			<img id="recently-played-card-img1" class="card-img-top p-2"
				src="${element.album.cover_medium}"
				alt="Card image cap">
			<div class="card-body p-3">
				<h6 id="recently-played-card-title1" class="card-title mb-1 text-truncate">${element.title}</h6>
				<div class="play-button ml-auto bottom-right2"
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
	} catch (error) {
		console.log(error);
	}
};
