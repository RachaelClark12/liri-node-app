# liri-node-app
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


LIRI understands four different commands:
    1. 'movie-this' - takes the user's input of a move and returns details of the movie
    2. 'concert-this' - takes the user's input of an artist/band and returns details of their next concert 
    3. 'spotify-this-song' - takes the user's input of a song and returns details of the song
    4. 'do-what-it-says' - uses readFile method to access the random.txt file and pull and execute the command and search

# Technology
Technology Used:
    <br>Axios: https://www.npmjs.com/package/axios
    <br>Moment: https://www.npmjs.com/package/moment
    <br>DotEnv: https://www.npmjs.com/package/dotenv

<br>APIs Used:
    <br>Spotify: https://www.npmjs.com/package/node-spotify-api
    <br>OMdB: http://www.omdbapi.com/
    <br>BandsInTown: https://www.artists.bandsintown.com/bandsintown-api

# Functionality
movie-this
1. User can enter the command 'movie-this' followed by a movie name to get details on the movie:
![Screenshot](/screenshots/move-this_user_input.PNG)
2. If user does not enter a movie name, LIRI will return the details of 'Mr. Nobody':
![Screenshot](/screenshots/move-this_no_user_input.PNG)

concert-this
1. User can enter the command 'concert-this' followed by an artist or band name to get details on their next concert:
![Screenshot](/screenshots/concert-this.PNG)

spotify-this-song
1. User can enter the command 'spotify-this-song' followed by a song title to get the details on that song:
![Screenshot](/screenshots/spotify-this-song_user_input.PNG)
2. If user does not enter a song title, LIRI will return the details of 'The Sign by Ace of Bass':
![Screenshot](/screenshots/spotify-this-song_no_user_input.PNG)

do-what-it-says
1. User can enter the command 'do-what-it-says' and LIRI will access a built in text file to perform a random command:
![Screenshot](/screenshots/do-what-it-says.PNG)


# Deployed
Github Repo: https://github.com/RachaelClark12/liri-node-app

# Developer
Rachael A. Clark