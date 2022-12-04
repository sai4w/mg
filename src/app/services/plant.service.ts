import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../Plant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
  
  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl+'plants');
  }

  deletePlant(plant: Plant): Observable<Plant> {
    const url = `${this.apiUrl}delete-plant/${plant.plant_id}`;
    return this.http.delete<Plant>(url);
  }

  updatePlant(plant: Plant): Observable<Plant> {
    const url = `${this.apiUrl}update-plant/${plant.plant_id}`;
    return this.http.put<Plant>(url, plant, httpOptions);
  }

  addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(this.apiUrl+'add-plant', plant, httpOptions);
  }
}
