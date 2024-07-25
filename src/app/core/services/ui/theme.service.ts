import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { ThemeMode } from '../../models/ui/theme.model';



@Injectable({ providedIn: 'root' })
export class ThemeService {

    private defaultThemeMode: ThemeMode = 'dark';

    private readonly themeModeKey = 'themeMode';

    get themeMode() {
        return localStorage.getItem(this.themeModeKey) as ThemeMode | undefined;
    }
    set themeMode(mode: ThemeMode) {
        localStorage.setItem(this.themeModeKey, mode);
        this.setOverlayMode();
    }

    get isDark() {
        return this.themeMode === 'dark';
    }
    set isDark(isDark: boolean) {
        this.themeMode = isDark ? 'dark' : 'light';
    }

    private _darkModeClass = 'dark-theme';
    get darkModeClass() { return this._darkModeClass }

    constructor(private overlayContainer: OverlayContainer) {
        this.setDefaults()
    }

    setDefaults(): void {
        if (!this.themeMode)
            this.themeMode = this.defaultThemeMode;
        else
            this.setOverlayMode();
    }

    toggleMode(): void {
        this.isDark = !this.isDark;
    }

    // Since certain components (e.g. menu, select, dialog, etc.) are    
    // inside of a global overlay container, an additional step is r-
    // equired for those components to be affected by the theme's css 
    // class selector.
    setOverlayMode(): void {
        if (this.isDark)
            this.overlayContainer.getContainerElement().classList.add(this.darkModeClass);
        else
            this.overlayContainer.getContainerElement().classList.remove(this.darkModeClass);
    }

    getModeClass(): string {
        return (this.isDark) ? this.darkModeClass : '';
    }
}
