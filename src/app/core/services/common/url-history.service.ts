import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UrlHistoryService {

    private _urlHistoryArray: string[] = [];

    constructor(private router: Router) { }

    setUrl(_url: NavigationEnd) {
        const url = _url.url;
        this._urlHistoryArray.push(url);
    }

    back(fullbackPath: string = '/'): void {
        this._urlHistoryArray.pop();

        if (this._urlHistoryArray.length == 0)
            this.router.navigate([fullbackPath]);
        else {
            // The second pop is to avoid the duplication 
            // of  previous  url  when  navigating  back.
            this._urlHistoryArray.pop();
            history.back()
        }
    }
}
