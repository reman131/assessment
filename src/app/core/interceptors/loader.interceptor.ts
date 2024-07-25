import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, finalize } from 'rxjs/operators';
import { LoaderService } from '../services/ui/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private noOfRequests = 0;

  constructor(public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('.svg')) {
      return next.handle(req);
    }

    this.showLoader(req);

    return next.handle(req)
      .pipe(
        finalize(() => this.hideLoader(req)),
        catchError((error) => {
          this.hideLoader(req);
          return throwError(() => error);
        })
      );
  }

  private showLoader(req: HttpRequest<any>) {
    this.loaderService.show();
    this.noOfRequests++;
  }

  private hideLoader(req: HttpRequest<any>) {
    if (this.noOfRequests > 0) {
      this.noOfRequests--;
    }
    if (this.noOfRequests <= 0) {
      this.loaderService.hide();
    }
  }
}
