require('dotenv').config();
const fs = require("fs");
const moment = require("moment");
const keys = require('./keys.js');
const axios = require("axios");
const Spotify = require('node-spotify-api');

let userSelect = process.argv[2];
let userInput = process.argv.slice(3).join(' ');

//Switch Case to identify user command
function command(userSelect) {
    switch (userSelect) {
        case 'concert-this':
            concertThis();
            break;
        case 'spotify-this-song':
            spotifyThisSong();
            break;
        case 'movie-this':
            movieThis();
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
    }
}
command(userSelect, userInput);

//Concert Function using BandsInTown API
function concertThis() {
    let queryURL = 'https://rest.bandsintown.com/artists/' + userInput + '/events?app_id=codingbootcamp';

    axios.get(queryURL).then(
        function (concertResponse) {

            console.log('Artist: ' + concertResponse.data[0].lineup[0]);
            console.log('Venue: ' + concertResponse.data[0].venue.name);
            console.log('City: ' + concertResponse.data[0].venue.city);
            console.log('Date: ' + moment(concertResponse.data[0].datetime).format('MM/DD/YYYY'));
        }
    );
}

//Song Function using Spotify API
function spotifyThisSong() {
    const spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: userInput })
        .then(function (err, songResponse) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            if (!userInput) {
                userInput = 'the sign';
                spotifyThisSong();
            }
            console.log(songResponse.tracks.items[0].artists[0].name);
        })
};

//Movie Function using OMdB API
function movieThis() {
    let queryURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(
        function (movieResponse) {
            if (!userInput) {
                userInput = 'mr nobody';
                movieThis();
            }
            else {
                console.log('Title: ' + movieResponse.data.Title);
                console.log('Release Year: ' + movieResponse.data.Year);
                console.log('OMdB Rating: ' + movieResponse.data.Ratings[0].Value);
                console.log('Rotten Tomatoes Rating: ' + movieResponse.data.Ratings[1].Value);
                console.log('Country: ' + movieResponse.data.Country);
                console.log('Language: ' + movieResponse.data.Language);
                console.log('Plot: ' + movieResponse.data.Plot);
                console.log('Actors: ' + movieResponse.data.Actors);
            };
        });
}

//Random Function using Random.txt File
function doWhatItSays() {
    fs.readFile('random.txt', function(data) {
        let dataArr = data.split(',');
        userSelect = dataArr[0];
        userInput = dataArr[1];
        command(userSelect, userInput);
    });
}