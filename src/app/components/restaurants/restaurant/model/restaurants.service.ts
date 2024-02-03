import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { MEAT_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class RestaurantsService {


  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
  }

}
