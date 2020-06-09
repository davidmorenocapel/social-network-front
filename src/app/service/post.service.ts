import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  //Coger todos los post 
  getAllPost(){
    return this.http.get<any>(environment.APIROOT + '/publication/getall')
  }

  get
}
