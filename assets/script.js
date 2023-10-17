// const url = 'https://moviesdatabase.p.rapidapi.com/titles/' + randomMovie;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6fc878ca7dmsh54f220e8a9d0858p1024cdjsnae2015bc4e22',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

var movies = [{
    name: 'Batman Begins',
    id: 'tt0372784'
}, {
    name: 'Spider-Man: No Way Home',
    id: 'tt10872600'
}, {
    name: 'Nope',
    id: 'tt10954984'
}, {
    name: 'A Quiet Place',
    id: 'tt6644200'
}, {
    name: 'Black Panther',
    id: 'tt1825683'
}, {
    name: 'Get Out',
    id: 'tt5052448'
}, {
    name: 'Fantastic Beasts and Where to Find Them',
    id: 'tt3183660'
}, {
    name: 'Arrival',
    id: 'tt2543164'
}, {
    name: 'Hunt for the Wilderpeople',
    id: 'tt4698684'
}, {
    name: 'Inception',
    id: 'tt1375666'
}, {
    name: 'Interstellar',
    id: 'tt0816692'
}, {
    name: 'Citizen Kane',
    id: 'tt0033467'
}, {
    name: 'Psycho',
    id: 'tt0054215'
}, {
    name: 'Pride & Prejudice',
    id: 'tt0414387'
}, {
    name: 'Teenage Mutant Ninja Turtles',
    id: 'tt0100758'
}, {
    name: 'The Phantom of the Opera',
    id: 'tt0293508'
}, {
    name: 'The Master of Disguise',
    id: 'tt0295427'
}, {
    name: 'Horton Hears a Who!',
    id: 'tt0451079'
}, {
    name: 'Joker',
    id: 'tt7286456'
}, {
    name: 'The Amazing Spider-Man',
    id: 'tt0948470'
}, {
    name: 'Avengers: Endgame',
    id: 'tt4154796'
}, {
    name: 'Thor: Love and Thunder',
    id: 'tt10648342'
}, {
    name: 'Uncharted',
    id: 'tt1464335'
}, {
    name: 'Signs',
    id: 'tt0286106'
}, {
    name: 'Tangled',
    id: 'tt0398286'
}, {
    name: 'Scooby-Doo',
    id: 'tt0267913'
}, {
    name: 'Forrest Gump',
    id: 'tt0109830'
}, {
    name: 'The Shawshank Redemption',
    id: 'tt0111161'
}, {
    name: 'The Dark Knight',
    id: 'tt0468569'
}, {
    name: 'Everything Everywhere All at Once',
    id: 'tt0107120'
}, {
    name: 'Jojo Rabbit',
    id: 'tt2584384'
}, {
    name: 'Devil',
    id: 'tt1314655'
}, {
    name: 'The Lord of the Rings: The Return of the King',
    id: 'tt0167260'
}, {
    name: 'Us',
    id: 'tt6857112'
}, {
    name: 'Me Before You',
    id: 'tt2674426'
}, {
    name: 'Charlie and the Chocolate Factory',
    id: 'tt0367594'
}, {
    name: 'The Emoji Movie',
    id: 'tt4877122'
},  {
    name: 'Batman & Robin',
    id: 'tt0118688'
}, {
    name: 'RRR',
    id: 'tt8178634'
}, {
    name: 'Dungeons & Dragons',
    id: 'tt0190374'
}, {
    name: 'Dungeons & Dragons: Honor Among Thieves',
    id: 'tt2906216'
}, {
    name: 'The Vast of Night',
    id: 'tt6803046'
}, {
    name: 'Monty Python and the Holy Grail',
    id: 'tt0071853'
}, {
    name: 'Top Gun',
    id: 'tt0092099'
}]

console.log(movies[4].name)
console.log(movies.length)

const fetchMovies = function() {
        fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('failed to fetch data');
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error)
        })
}

fetchMovies()
