import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isOpen$ = new BehaviorSubject<boolean>(false);
  $isOpen = this.isOpen$.asObservable();

  constructor() { }

  openModal() {
    this.isOpen$.next(true);
  }
}
