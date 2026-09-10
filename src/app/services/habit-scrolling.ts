import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Papa from 'papaparse';

@Injectable({
  providedIn: 'root',
})

export class HabitScrolling {
  constructor(private http: HttpClient) {}

  getCSVdata(): Observable<any> {
    return new Observable((observer) => {
      this.http.get('/assets/sleep_doomscrolling_habits.csv', { responseType: 'text' })
      .subscribe({
        next: (data) => {
          const res = Papa.parse(data, { header: true, skipEmptyLines: true });
          observer.next(res.data);
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }
}