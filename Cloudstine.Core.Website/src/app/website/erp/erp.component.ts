import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.scss']
})
export class ErpComponent implements OnInit {
  imgHome: any = "assets/images/Home_Page/expert1.png"
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
  constructor() { }

  ngOnInit(): void {
  }
  onclickDownload() {
    this.imgHome = "assets/images/Home_Page/people.png"
  }
  onClickDelete() {
    this.imgHome = "assets/images/Home_Page/factor.png"
  }
  onClickUpload() {
    this.imgHome = "assets/images/Home_Page/expert1.png"
  }
}
