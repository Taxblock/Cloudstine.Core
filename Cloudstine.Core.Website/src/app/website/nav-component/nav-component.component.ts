import { ChangeDetectionStrategy, Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

import { APIService } from '../../core/services/apiService';
import { AlertService } from '../../core/services/alertService';

import { NavComponentService } from './nav-component.service';
import { ResponseCode } from 'app/core/models/ServiceResponse.model';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { IdentityUser } from 'app/shared/Model/identty-user.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss'],

})
export class NavComponent {
  public isLogin: boolean = false;
  public showNav: boolean;
  public services: any;
  public Total: number = 0;
  public ItemCount: number = 0;
  currentRoute: string;

  public currentUser: IdentityUser;
  public showDropdown: boolean;
  returnUrl: string;
  companyName: string;
  showNavBar: boolean = true;
  closeDrop: boolean = false;

  constructor(

    private router: Router,
    private alertService: AlertService,
    private navService: NavComponentService,
    //private cartService: CartService,
    private userService: UserProfileService,
    private route: ActivatedRoute,
    private renderer: Renderer2, private el: ElementRef
  ) {


    this.route.queryParams.subscribe((params) => {

      this.companyName = params['corporateName'];
      let RecheckCorporateName = localStorage.getItem('RecheckCorporateName')
      if (this.companyName != undefined || this.companyName != null) {
        if (RecheckCorporateName != this.companyName && RecheckCorporateName != null) {
          localStorage.removeItem('RecheckCorporateName')
          this.userService.SetUserData(null);
          this.currentUser = null;
          this.Total = 0;
        }
      }
    });
  }

  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        //console.log(this.currentRoute);
        if (this.currentRoute == '/sign-up' || this.currentRoute == '/login' || this.currentRoute == '/error') {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
      }
    });

    // this.userService.currentUserSubject.subscribe((user) => {
    //   setTimeout(() => {
    //     this.currentUser = user;

    //     let userCartVM = this.cartService.getCartData();
    //     if (
    //       userCartVM != null &&
    //       userCartVM.userCartHeader.UserId == null &&
    //       user != null
    //     ) {
    //      // this.SaveCart(userCartVM);
    //     } else {
    //       this.GetCartByUserId();
    //     }
    //   }, 500);
    //   this.currentUser = user;
    // });

    // this.cartService.UserCartData.subscribe((userCartData) => {
    //   setTimeout(() => {
    //     //this.SetServices(userCartData);
    //     if (userCartData && userCartData.userCartServiceDetails && userCartData.userCartServiceDetails.length > 0) {
    //       this.showDropdown = true;
    //     } else {
    //       this.showDropdown = false;
    //     }
    //   }, 500);
    // });

    if (this.userService.CurrentUserValue) {
      this.GetCartByUserId();
    }
  }
  onDashboardClick() {
    window.location.href = environment.CLIENT_APP_URL + 'dashboard';
  }
  onAccountClick() {
    window.location.href = environment.CLIENT_APP_URL + 'user-list';
  }
  onClickPoi() {
    this.router.navigate(["./poi"])
    // Get the native element reference
    const element = this.el.nativeElement.querySelector('.closeDrop');

    // Use Renderer2 to modify the style
    this.renderer.setStyle(element, 'display', 'none');
  }
  onClickERP() {
    this.router.navigate(["./erp"])
  }
  onClickAboutUs() {
    this.router.navigate(["./about"])
  }
  onClickCareers() {
    this.router.navigate(["./careers"])
  }
  onClickCustomer() {
    this.router.navigate(["./customer"])
  }
  contactUs() {
    this.router.navigate(["./contact-us"])
  }
  // SetServices(userCartVM: UserCartVM) {
  //   this.Total = 0;
  //   this.ItemCount = 0;
  //   if (userCartVM != null) {
  //     this.services = userCartVM.userCartServiceDetails;
  //     this.ItemCount = this.services.length;
  //     for (let i = 0; i < this.services.length; i++) {
  //       this.Total += this.services[i].TotalChargeAmount;
  //     }
  //   }
  // }

  GetCartByUserId() {
    this.services = [];
    this.Total = 0;
    if (this.userService.CurrentUserValue && this.userService.CurrentUserValue.UserId) {
      const userId = this.userService.CurrentUserValue.UserId;
      this.navService.GetCartByUserId(userId).subscribe(
        (result: any) => {
          this.services = result.Value;
          this.ItemCount = this.services.length;
          for (let i = 0; i < this.services.length; i++) {
            this.Total += this.services[i].TotalChargeAmount;
          }
        },
        (error: any) => {
          this.alertService.ShowError(error, "Failed to get due to unknown error");
        }
      );
    } else {
      // Handle the case where CurrentUserValue or UserId is null
      console.log("CurrentUserValue or UserId is null");
    }
  }

  // SaveCart(userCartVM: UserCartVM) {
  //   this.cartService.SaveCart(userCartVM).subscribe(
  //     (result: any) => {
  //       result.Value;
  //       // this.alertService.ShowSuccessMessage('added to cart successfully.');
  //     },
  //     (error: any) => {
  //       this.alertService.ShowError(error, "Failed to save to unknown error");

  //     }
  //   );
  // }

  OnSignInClick() {
    if (this.companyName != undefined || this.companyName != null) {
      this.router.navigateByUrl('/login?corporateName=' + this.companyName);
    } else {
      this.router.navigateByUrl('/login');
    }

  }
  OnSignUpClick() {
    this.router.navigateByUrl('/sign-up');
  }

  // signOut() {
  //   this.userService.SetUserData(null);
  //   this.cartService.setCartData(null);
  //   this.currentUser = null;
  //   this.Total = 0;
  //   localStorage.removeItem('OncheckoutClick');
  //   localStorage.setItem('IsFromCorporateLandingPage', 'false');
  //   if (this.companyName != undefined || this.companyName != null) {
  //     this.router.navigateByUrl('/login?corporateName=' + this.companyName);
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }

  // onCheckout() {
  //   if (this.userService.CurrentUserValue) {
  //     let cartData = this.cartService.getCartData();
  //     if (cartData.userCartServiceDetails.length > 0) {
  //       this.cartService.CreateOrder(this.userService.CurrentUserValue.UserId)
  //         .subscribe(
  //           (result: any) => {
  //             this.cartService.setCartData(null);
  //             this.Total = 0;
  //             this.ItemCount = 0;
  //             let response = result.Value;
  //             window.location.href =
  //               environment.CLIENT_APP_URL + 'checkout?orderId=' + response;
  //           },
  //           (error: any) => {
  //             this.alertService.ShowError(error, "Failed add to cart due to unknown error");

  //           }
  //         );
  //     }
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }
}
