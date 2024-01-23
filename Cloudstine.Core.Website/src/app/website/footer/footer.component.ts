import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NavigationEnd,Event, Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';



@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
currentRoute:string;
showfooter:boolean=true

  constructor(@Inject(DOCUMENT) private document: Document , private router: Router , ) {

  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        //console.log(this.currentRoute);
        if (this.currentRoute == '/login' || this.currentRoute == '/error'|| this.currentRoute == '/user-management/users' || this.currentRoute == '/user-management/access-control' || this.currentRoute == '/user-profile') {
          this.showfooter = false;
        } else {
          this.showfooter = true;
        }
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 980, behavior: 'smooth' });
    this.router.navigate(['/services']); // Update the URL manually
  }

  onServiceLinkClick(serviceId:string){
    console.log("click" , serviceId)
   // this._scrollService.setScrollTarget(serviceId);
    this.router.navigate(['/services'])
    // this.router.navigate(['/services']);

  }

  setColor(theme: any) {
    let data = this.document.getElementById('color-opt') as HTMLLinkElement;
    data.href = './assets/css/colors/' + theme + '.css';
  }
  setTheme(theme: any) {
    let data = this.document.getElementById('theme-opt') as HTMLLinkElement;
    data.href = './assets/css/' + theme + '.css';
  }
  // loadStyle(styleName: string) {
  //   const head = this.document.getElementsByTagName('head')[0];

  //   let themeLink = this.document.getElementById(
  //     'client-theme'
  //   ) as HTMLLinkElement;
  //   if (themeLink) {
  //     themeLink.href = styleName;
  //   } else {
  //     const style = this.document.createElement('link');
  //     style.id = 'client-theme';
  //     style.rel = 'stylesheet';
  //     style.href = `${styleName}`;

  //     head.appendChild(style);
  //   }
  // }
}
