import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scrollTarget: string;

  constructor() { }
  
  setScrollTarget(target:string){
    this.scrollTarget=target;
    // console.log("scrollTarget" , this.scrollTarget)
  
  }
  
  getScrollTarget(){
    return this.scrollTarget
  }
}
