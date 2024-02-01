import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  user: any = {};
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit() {
    console.log(JSON.stringify(this.user));
    this.submitted = true;
  }

}
