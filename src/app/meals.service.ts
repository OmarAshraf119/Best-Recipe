import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MealsService {
  url = "https://www.themealdb.com/api/json/v1/1/random.php"
  IdURL ="https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  constructor(private http: HttpClient){ }
  
  getRandomMeal(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getMealByID(id:any):  Observable<any> {
    return this.http.get<any>(this.IdURL+id);
  }
}
