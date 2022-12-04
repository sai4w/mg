import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usage } from '../Usage';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UsageService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getUsages(): Observable<Usage[]> {
    return this.http.get<Usage[]>(this.apiUrl);
  }

  deleteUsage(usage: Usage): Observable<Usage> {
    const url = `${this.apiUrl}/${usage.usage_id}`;
    return this.http.delete<Usage>(url);
  }

  updateUsage(usage: Usage): Observable<Usage> {
    const url = `${this.apiUrl}/${usage.usage_id}`;
    return this.http.put<Usage>(url, usage, httpOptions);
  }

  addUsage(usage: Usage): Observable<Usage> {
    return this.http.post<Usage>(this.apiUrl, usage, httpOptions);
  }
}
