import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {




  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    console.log('This is client side error');
                    errorMsg = error.error.message;
                } else {
                    console.log('This is server side error');
                    errorMsg = error.error.message;
                }
                Swal.fire({
                  title: 'Error!',
                  text: errorMsg,
                  icon: 'error',
                  confirmButtonText: 'Ok'
                });
                throw error;
            })
        )
}
}



