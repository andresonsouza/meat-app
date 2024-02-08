import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;

    if (error instanceof HttpErrorResponse) {
      errorMessage = `${error.status} ao obter a URL ${error.url} - ${error.statusText}`
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => new Error(errorMessage))

  }
}
