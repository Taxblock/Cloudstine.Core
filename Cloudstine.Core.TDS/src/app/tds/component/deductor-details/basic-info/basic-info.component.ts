import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
 constructor(
  private router:Router
 ){

 }
  onCancleClick(){
this.router.navigateByUrl('tds/dashboard')
  }
}
