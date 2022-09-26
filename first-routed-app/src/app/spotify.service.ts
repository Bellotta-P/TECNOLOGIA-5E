import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCyuThCGiu7Nri1NHnghbzNqeZnDNFdehjG0UBwg8culJwT25TUj0RU_acYh1jxOc00q1aZcPsvxO3RNtirZdbTbHf0beInuZC7Gqa0mf9hrzQAA-J_0qTQjLowzlVylvkhtji6BHfwLAJ-bFQFKork6WF_B8sljHE7DHdoKCcAaf5_3jPPjGheAWBqiwL6_Io'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

