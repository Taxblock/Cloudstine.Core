import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }
  consultNow(){
    this._router.navigate(['/contact-us']);
  }
}
