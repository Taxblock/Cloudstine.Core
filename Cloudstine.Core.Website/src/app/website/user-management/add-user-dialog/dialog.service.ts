import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isAddUserDialogOpen = new BehaviorSubject<boolean>(false);
  getIsAddUserDialogOpen() {
    return this.isAddUserDialogOpen.asObservable();
  }

  openAddUserDialog() {
    this.isAddUserDialogOpen.next(true);
  }

  closeAddUserDialog() {
    this.isAddUserDialogOpen.next(false);
  }
}
