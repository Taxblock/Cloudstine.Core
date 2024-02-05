import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digitalservices',
  templateUrl: './digitalservices.component.html',
  styleUrls: ['./digitalservices.component.scss']
})
export class DigitalservicesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  onClickProductPOI() {
    // this._router.navigate(['/poi']);
  }
  onClickProductERI() {
    //this._router.navigate(['/erp']);
  }
  onClickProduct() {

  }
  onClickContactUS() {
    this._router.navigate(['/contact-us']);
  }
}
