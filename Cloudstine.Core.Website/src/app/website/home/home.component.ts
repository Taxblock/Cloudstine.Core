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
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  progress: number = 0;
  progress1: number = 0;
  progress2: number = 0;
  breckFor1: any
  breckFor2: any
  breckFor3: any

  // Method to update progress
  updateProgress(newProgress: number): void {
    this.progress = newProgress;
   
  }

  // Method to update progress
  updateProgress1(newProgress: number): void {
    this.progress1 = newProgress;
   
  }

  // Method to update progress
  updateProgress2(newProgress: number): void {
    this.progress2 = newProgress;
  
  }

  ngOnInit() {
    this.simulateProgress()
  }

  async simulateProgress(): Promise<void> {
    for (let i = 0; i <= 100 && this.transferPara; i++) {
      await this.delay(50);
      this.updateProgress(i);
    }

    //this.updateProgress(100);
    this.progress = 0
    if (this.transferPara) {
      this.transferPara = false
      this.SAPServicePara = true
      this.taxWorkspacePara = false;
      this.imgHome = "assets/images/Home_Page/Woman_Power.png"
      this.simulateProgress1()
    }
  }

  async simulateProgress1(): Promise<void> {
    for (let i = 0; i <= 100 && this.SAPServicePara; i++) {
      await this.delay(50);
      // Assuming a different method for progress updates
      this.updateProgress1(i);
    }

    //this.updateProgress1(100);
    this.progress1 = 0
    if (this.SAPServicePara) {
      this.transferPara = false
      this.SAPServicePara = false
      this.taxWorkspacePara = true;
      this.imgHome = "assets/images/Home_Page/indianasian-smart-young-couple-accounting.png"
      this.simulateProgress2()
    }
  }

  async simulateProgress2(): Promise<void> {
    for (let i = 0; i <= 100 && this.taxWorkspacePara; i++) {
      await this.delay(50);
      // Adjust the duration based on your needs
      this.updateProgress2(i);
    }

    //this.updateProgress2(100);
    this.progress2 = 0
    if (this.taxWorkspacePara) {
      this.transferPara = true
      this.SAPServicePara = false
      this.taxWorkspacePara = false;
      this.imgHome = "assets/images/Home_Page/indian-businesswoman.png"
      this.simulateProgress()
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  tranformImage() {
    this.progress = 0;
    this.progress1 = 0;
    this.progress2 = 0;

    this.transferPara = true;
    this.SAPServicePara = false;
    this.taxWorkspacePara = false;

    this.simulateProgress()

    this.imgHome = "assets/images/Home_Page/indian-businesswoman.png"

  }

  SAPServicesImage() {

    this.progress = 0;
    this.progress1 = 0;
    this.progress2 = 0;

    this.SAPServicePara = true;
    this.transferPara = false;
    this.taxWorkspacePara = false;


    this.simulateProgress1()

    this.imgHome = "assets/images/Home_Page/Woman_Power.png"
  }

  taxWorkspaceImage() {

    this.progress = 0;
    this.progress1 = 0;
    this.progress2 = 0;

    this.SAPServicePara = false;
    this.transferPara = false;
    this.taxWorkspacePara = true;

    this.simulateProgress2()
    this.imgHome = "assets/images/Home_Page/indianasian-smart-young-couple-accounting.png"
  }

}
