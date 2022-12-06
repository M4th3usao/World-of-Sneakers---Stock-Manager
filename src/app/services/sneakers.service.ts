import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sneaker } from '../components/Sneaker';


@Injectable({
  providedIn: 'root'
})
export class SneakersService {
  private apiUrl = 'http://localhost:3000/sneakers'

  constructor(private http: HttpClient) { }
 
}
