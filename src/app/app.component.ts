import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UrlHistoryService } from './core/services/common/url-history.service';
import { filter } from 'rxjs/operators';
import { ThemeService } from './core/services/ui/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-dashboard';

  constructor(
    private urlHistoryService: UrlHistoryService,
    private router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
    ).subscribe((e: NavigationEnd) => this.urlHistoryService.setUrl(e));
  }

  getModeClass(): string {
    return this.themeService.getModeClass();
  }
}
