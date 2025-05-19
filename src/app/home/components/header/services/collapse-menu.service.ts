import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapseMenuService {
  private _isOpen = new BehaviorSubject<boolean>(false);
  public isOpen$ = this._isOpen.asObservable();

  public toggle(): void {
    this._isOpen.next(!this._isOpen.value);
  }
}
