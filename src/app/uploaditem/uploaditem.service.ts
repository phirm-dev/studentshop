import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploaditemService {

  api = '/api/item';
  getHttpHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    return httpOptions;
  }

  constructor(private http: HttpClient) { }

  createItem(data) {
    return this.http.post(this.api, data, this.getHttpHeaders());
  }

  getItem() {
    return this.http.get(this.api, this.getHttpHeaders());
  }

  uploadPictures(id: string, data) {
    return this.http.post(`${this.api}/upload/${id}`, data, this.getHttpHeaders());
  }
}
