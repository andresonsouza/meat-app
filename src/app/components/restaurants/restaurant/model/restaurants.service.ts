import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { MEAT_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { ErrorHandler } from '../../../../app.error-handler';

@Injectable()
export class RestaurantsService {


  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
    .pipe(catchError(ErrorHandler.handleError));
  }

}
