import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[imageLoading]'
})
export class ImageLoadingDirective {

  loading: boolean = true;
  errorLoading: boolean = false;

  @HostListener('load') onLoad() {
    this.loading = false;
  }

  @HostListener('error') onError() {
    this.loading = false;
    this.errorLoading = true;
  }

  @HostBinding("class.bg-img-loading") get isLoading() {
    return this.loading;
  }

  @HostBinding("class.bg-img-error") get isErrorLoading() {
    return this.errorLoading;
  }

  constructor() { }

}
