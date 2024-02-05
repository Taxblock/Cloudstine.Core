import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serviceslist',
  templateUrl: './serviceslist.component.html',
  styleUrls: ['./serviceslist.component.scss']
})
export class ServiceslistComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  onClickProductPOI() {
    //this._router.navigate(['/poi']);
  }
  onClickProductERI() {
   // this._router.navigate(['/erp']);
  }
  onClickProduct() {

  }
  onClickSignup() {
   // this._router.navigate(['/sign-up']);
  }
}
