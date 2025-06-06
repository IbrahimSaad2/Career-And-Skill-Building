import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavbarStateService {
  private _isScrolled = signal<boolean>(true);
  isScrolled = computed(() => this._isScrolled());

  setScrolled(value: boolean) {
    this._isScrolled.set(value);
  }
  
}
