import { Directive, HostListener, Input } from '@angular/core';
import { UrlHistoryService } from 'src/app/core/services/common/url-history.service';

@Directive({
    selector: '[navigateBack]'
})
export class NavigateBackDirective {

    @Input() navigateBack: string = '/';

    @HostListener('click') onClick() {
        this.urlHistoryService.back(this.navigateBack)
    }

    constructor(private urlHistoryService: UrlHistoryService) { }

}
