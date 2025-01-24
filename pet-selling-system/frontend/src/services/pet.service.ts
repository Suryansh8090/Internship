import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPets(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/pet-store-api/pets');
  }
}
