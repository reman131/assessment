import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';

export const Http_Interceptor_Providers = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  // Other interceptors...
];
