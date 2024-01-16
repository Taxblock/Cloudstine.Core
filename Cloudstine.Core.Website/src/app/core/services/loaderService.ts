import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { MatSpinner } from '@angular/material';
// import 'hammerjs';

@Injectable()
export class LoaderService {
  public status:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  display(val:boolean){
    this.status.next(val);
  }
}
