export class MovieServiceClient {
    findYowisMovie(){
        return fetch('http://www.omdbapi.com/?apikey=60409d33&s=Yowis')
         .then(response => response.json())
    }
}