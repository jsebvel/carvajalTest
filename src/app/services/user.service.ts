import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.serverUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  signOut() {
    localStorage.clear();
  }

  createUser(userInfo) {
    return this.http.post(`${this.baseUrl}/auth/register`, userInfo, this.httpOptions);
  }

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  login(userData) {
    return this.http.post(`${this.baseUrl}/auth/login`, userData, this.httpOptions);

  }

  getToken() {
    return localStorage.getItem('token') ?? null;
  }
}
