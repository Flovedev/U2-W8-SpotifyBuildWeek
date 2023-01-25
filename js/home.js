/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f02b8b79bmshbf21a2cbe7b2fabp1c80c9jsn86f616a6d1cc',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

function getArtistData(query, index) {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + query, options)
    .then(response => response.json())
    .then(response => {
        const items = response.data;
        items.forEach(item => {
            const cardImg = document.querySelectorAll(`#good-morning-card-img${index+1}`);
            cardImg.forEach((img) => {
                img.src = img.album.cover_medium;
            });

            const cardArtist = document.querySelectorAll(`#good-morning-card-artist${index+1}`);
            cardArtist.forEach((name) => {
                name.innerText = name.artist.name;
            });
        });
    }).catch(err => console.error(err));
}

const artistQueries = ['Coldplay', 'The Beatles', 'Queen', 'Pink Floyd', 'Fleetwood Mac', 'Iron Maiden', 'Black Sabbath', 'AC/DC', 'Taylor Swift', 'Frank Ocean'];

for (let i = 0; i < artistQueries.length; i++) {
    getArtistData(artistQueries[i], i);
}

function getAlbumData(query, index) {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + query, options)
    .then(response => response.json())
    .then(response => {
        const items = response.data;
        items.forEach(item => {
            const cardImg = document.querySelectorAll(`#recently-played-card-img${index+1}`);
            cardImg.forEach((img, i) => {
                img.src = items[i].album.cover_medium;
            });

            const cardTitle = document.querySelectorAll(`#recently-played-card-title${index+1}`);
            cardTitle.forEach((title, i) => {
                title.innerText = items[i].album.title
            });

            const cardArtist = document.querySelectorAll(`#recently-played-card-artist${index+1}`);
            cardArtist.forEach((name, i) => {
                name.innerText = items[i].artist.name;
            });
        });
    }).catch(err => console.error(err));
}

const albumQueries = ['Eminem', 'Van Halen', 'Oasis', 'Dr Dre', 'Radiohead', 'The Weekend', 'Brent Faiyaz', 'Adele'];

for (let i = 0; i < albumQueries.length; i++) {
    getAlbumData(albumQueries[i], i);
}

function getShowData(query, index) {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + query, options)
    .then(response => response.json())
    .then(response => {
        const items = response.data;
        items.forEach(item => {
            const cardImg = document.querySelectorAll(`#shows-card-img${index+1}`);
            cardImg.forEach((img, i) => {
                img.src = items[i].album.cover_medium;
            });

            const cardTitle = document.querySelectorAll(`#shows-card-title${index+1}`);
            cardTitle.forEach((title, i) => {
                title.innerText = items[i].album.title
            });

            const cardArtist = document.querySelectorAll(`#show-card-artist${index+1}`);
            cardArtist.forEach((name, i) => {
                name.innerText = items[i].artist.name;
            });
        });
    }).catch(err => console.error(err));
}

const showQueries = ['No Such Thing As A Fish', 'Power Pizza', 'Demoni Urbani', 'Daily Cogito', 'Locanda Del Drag', 'Mindfulness in Vo', 'Mitologia: le mera', 'Podcast'];

for (let i = 0; i < showQueries.length; i++) {
    getShowData(showQueries[i], i);
}













































/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7f02b8b79bmshbf21a2cbe7b2fabp1c80c9jsn86f616a6d1cc',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

getData = async (query) => {
	try {
		const res = await fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options);
		const data = await res.json();
		console.log(data);
	} catch(error) {
		console.log(error);
	}
};

getDataColdplay = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img1");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist1");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataBeatles = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img2");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist2");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataQueen = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img3");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist3");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataPinkFloyd = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img4");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist4");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataFleetwoodMac = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img5");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist5");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataIronMaiden = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img6");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist6");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataBlackSabbath = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img7");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist7");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataAcDc = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img8");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist8");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataTaylorSwift = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img9");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist9");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataFrankOcean = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#good-morning-card-img10");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardArtist = document.querySelectorAll("#good-morning-card-artist10");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataEminem = (query) => {
    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img1");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title1");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist1");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataVanHalen = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img2");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title2");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist2");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataMetallica = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img3");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title3");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist3");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataDrDre = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img4");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title4");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist4");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataRadiohead = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img5");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title5");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist5");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataTheWeekend = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img6");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title6");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist6");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataBrentFaiyaz = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img7");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title7");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist7");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};

getDataAdele = (query) => {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + `${query}`, options)
	.then(response => response.json())
	.then(response => {
		const items = response.data;
		items.forEach(item => {
			const cardImg = document.querySelectorAll("#recently-played-card-img8");
			cardImg.forEach((img, i) => {
				img.src = items[i].album.cover_medium;
			});

			const cardTitle = document.querySelectorAll("#recently-played-card-title8");
			cardTitle.forEach((title, i) => {
				title.innerText = items[i].album.title;
			});

			const cardArtist = document.querySelectorAll("#recently-played-card-artist8");
			cardArtist.forEach((name, i) => {
				name.innerText = items[i].artist.name;
			});
		});
	}).catch(err => console.error(err));
};


window.onload = () => {
getDataColdplay("Coldplay"),
getDataBeatles("The Beatles"),
getDataQueen("Queen"),
getDataPinkFloyd("Pink Floyd"),
getDataFleetwoodMac("Fleetwood Mac"),
getDataIronMaiden("Iron Maiden"),
getDataBlackSabbath("Black Sabbath"),
getDataAcDc("AC/DC"),
getDataTaylorSwift("Taylor Swift"),
getDataFrankOcean("Frank Ocean")





getDataEminem("Eminem"),
getDataVanHalen("Van Halen"),
getDataMetallica("Metallica"),
getDataDrDre("Dr Dre"),
getDataRadiohead("Radiohead"),
getDataTheWeekend("The Weekend"),
getDataBrentFaiyaz("Brent Faiyaz"),
getDataAdele("Adele")
}

*/



  