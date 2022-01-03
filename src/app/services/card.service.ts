import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  userWithCard;
  baseUrl = environment.serverUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  createCard(cardData) {

    const newHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    const authorizedHeaders = {
      headers: newHeaders
    }


    return this.httpClient.post(`${this.baseUrl}/card`, cardData, authorizedHeaders);
  }

  updateCard(cardData) {
    return this.httpClient.put(`${this.baseUrl}/card/updateCard`, cardData, this.httpOptions);
  }

  deleteCard(cardId: number) {
    return this.httpClient.delete(`${this.baseUrl}/card/${cardId}`, this.httpOptions);
  }

  getAllCards() {
    return this.httpClient.get(`${this.baseUrl}/card`);

  }

  setUserWithCards(userWithCards) {
    this.userWithCard = userWithCards;
  }

  getUserWithCards = () => this.userWithCard;
}
