import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.scss']
})
export class ErpComponent implements OnInit {
  imgHome: any = "assets/images/Home_Page/expert1.png"
  //color
  featuredColor: boolean = true;
  almlColor: boolean = false;
  serverColor: boolean = false;
  backendColor: boolean = false;
  devopsColor: boolean = false;
  featured: any = [
    {
      title: 'APM',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'Logs',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'Automation Testing',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    }
  ]
  alml: any = [
    {
      title: 'AL',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'ML',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
  ]
  serverless: any = [
    {
      title: 'server',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'services',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'server',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
  ]
  backend: any = [
    {
      title: 'backend',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'ml',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
  ]
  devops: any = [
    {
      title: 'devOps',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
    {
      title: 'devOps',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },

    {
      title: 'devOps',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    }, {
      title: 'devOps',
      content: 'Access the records of all successful and failed executions instantly after they are executed.'
    },
  ]
  feature: boolean = true;
  ALML: boolean = false;
  server: boolean = false;
  back: boolean = false;
  develop: boolean = false;
  showImage: boolean = true;
  showImage1: boolean = false;
  showImage2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClickUpload() {
    this.showImage = true;
    this.showImage1 = false;
    this.showImage2 = false;
    this.imgHome = "assets/images/Home_Page/people.png"
  }
  onclickDownload() {
    this.showImage1 = true;
    this.showImage = false;
    this.showImage2 = false;
    this.imgHome = "assets/images/Home_Page/factor.png"
  }
  onClickDelete() {
    this.showImage2 = true;
    this.showImage1 = false;
    this.showImage = false;
    this.imgHome = "assets/images/Home_Page/expert1.png"
  }
  onClickFeatured() {
    this.feature = true;
    this.ALML = false;
    this.server = false;
    this.back = false;
    this.develop = false;
    //
    this.featuredColor = true;
    this.almlColor = false;
    this.serverColor = false;
    this.backendColor = false;
    this.devopsColor = false;
  }
  onClickALML() {
    this.ALML = true;
    this.feature = false;
    this.server = false;
    this.back = false;
    this.develop = false;
    //color
    this.almlColor = true;
    this.featuredColor = false
    this.serverColor = false;
    this.backendColor = false;
    this.devopsColor = false;
  }
  onClickServerLess() {
    this.server = true;
    this.feature = false;
    this.ALML = false;
    this.back = false;
    this.develop = false;
    //color
    this.serverColor = true;
    this.featuredColor = false
    this.almlColor = false;
    this.backendColor = false;
    this.devopsColor = false;
  }
  onClickBackend() {
    this.back = true;
    this.feature = false;
    this.server = false;
    this.ALML = false;
    this.develop = false;
    //
    this.backendColor = true;
    this.serverColor = false;
    this.featuredColor = false
    this.almlColor = false;
    this.devopsColor = false;
  }
  onClickdevopes() {
    this.develop = true;
    this.feature = false;
    this.ALML = false;
    this.server = false;
    this.back = false;
    //
    this.devopsColor = true;
    this.backendColor = false;
    this.serverColor = false;
    this.featuredColor = false
    this.almlColor = false;
  }
}
