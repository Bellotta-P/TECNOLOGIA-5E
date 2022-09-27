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
        'Bearer BQBbwMoKzWiewtb8jy2COeosJw4uliMRO1gL_hu8o7bkLTjUnOzUpTb88wP65XG9vDNlZi_HZve2IdVLlQ4Dmv-YhXjI-ugo9FeLLNdp_lmmQuM-OC7zQHfHwt4H5SSupyqTko9EAzqVzHX7rFlO5afa2C87eQa7WzLrCq58lyTmoavrmcH4zSxeD4uBUPz-hIQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBbwMoKzWiewtb8jy2COeosJw4uliMRO1gL_hu8o7bkLTjUnOzUpTb88wP65XG9vDNlZi_HZve2IdVLlQ4Dmv-YhXjI-ugo9FeLLNdp_lmmQuM-OC7zQHfHwt4H5SSupyqTko9EAzqVzHX7rFlO5afa2C87eQa7WzLrCq58lyTmoavrmcH4zSxeD4uBUPz-hIQ'
    });
    
    return this.http.get(url, { headers });
  }

}

