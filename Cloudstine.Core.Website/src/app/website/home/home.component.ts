import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { HomeMaster } from './home.model';
import { HomeService } from './home.service';
import { AlertService } from '../../core/services/alertService';
import { Router } from '@angular/router';
import { UserProfileService } from 'app/core/services/user-profile.service';

import { RedirectService } from 'app/core/services/redirect.service';
import { environment } from 'environments/environment';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imgHome: any = "assets/images/Home_Page/indian-businesswoman.png"
  transferPara: boolean = true
  SAPServicePara: boolean = false
  taxWorkspacePara: boolean = false;
  
  constructor(
    private router: Router,
    private homeService: HomeService,
    private alertService: AlertService,
    private userService: UserProfileService,
    private redirectService: RedirectService,
    private meta: Meta,
    private titleService: Title,
    private elementRef: ElementRef
  ) {
    this.titleService.setTitle("Taxblock: Accounting & Taxation Compliance Management");
    this.meta.updateTag({ name: 'description', content: "Taxblock is a one-stop shop for Income Tax, GST, Accounting,Tax Technology & Automation. Offering across the globe with a customer satisfaction score of 98%" });
    this.meta.updateTag({ name: 'keywords', content: 'efiling tax, income efiling, income tax efiling, efile taxes india, efiling india, india tax efiling, income tax filing Taxblock,  itr filing, itr efiling, itr filing fy 2022-23, income tax filing fy 2022-23, Taxblock. gst filing' });
 }

  ngOnInit() {
 }
 tranformImage() {
  this. transferPara=true;
   this.imgHome = "assets/images/Home_Page/indian-businesswoman.png"
 }
 SAPServicesImage() {
   this.SAPServicePara = true;
   this.transferPara = false;
   this.taxWorkspacePara = false;
   this.imgHome = "assets/images/Home_Page/Woman_Power.png"
 }
 taxWorkspaceImage() {
   this.SAPServicePara = false;
   this.transferPara = false;
   this.taxWorkspacePara = true;
   this.imgHome = "assets/images/Home_Page/indianasian-smart-young-couple-accounting.png"
 }

  // loadVideo(entry: IntersectionObserverEntry) {
  //   if (entry.isIntersecting) {
  //     this.shouldLoadVideo = true;
  //   }
  // }
}
