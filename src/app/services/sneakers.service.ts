import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sneaker } from '../components/Sneaker';


@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  private apiUrl = 'http://localhost:3000/sneakers'

  constructor(private http: HttpClient) { }
 
  getAll(): Observable<Sneaker[]>{
    return this.http.get<Sneaker[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Sneaker>{
    return this.http.get<Sneaker>(`${this.apiUrl}/${id}`)
  }

  remove(id: number){
    return this.http.delete<Sneaker>(`${this.apiUrl}/${id}`);
  }
}
