import { Component } from '@angular/core';
//import { ActivePromocodeService } from './active-promocode.service';

@Component({
  selector: 'active-promocode',
  templateUrl: './active-promocode.component.html',
  styleUrls: ['./active-promocode.component.scss'],
})
export class ActivePromocodeComponent {
  activePromocodeList: any;
  constructor() //private activePromocodeService: ActivePromocodeService
  {}

  ngOnInit(): void {
    //this.getActivePromocodeList();
  }

  //   getActivePromocodeList() {
  //     this.activePromocodeService
  //       .getActivePromocodeList()
  //       .subscribe((result: any) => {
  //         this.activePromocodeList = result.Value;
  //       });
  //   }
}
