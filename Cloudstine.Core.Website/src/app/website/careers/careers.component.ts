import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  careerMaster:any={};
  resumeFileList: FileList;
  designationList:any=[
    {
      DesignationName:'Human Resources'
    },
    {
      DesignationName:'Business Development or Sale'
    },
    {
      DesignationName:'Digital Marketing'
    },
    {
      DesignationName:'Content Writer'
    },
    {
      DesignationName:'Backend Engineer'
    },
    {
      DesignationName:'Frontend Engineer'
    },
    {
      DesignationName:'UI UX Developer'
    },
    {
      DesignationName:'Tester'
    },
    {
      DesignationName:'Product Manager'
    },
    {
      DesignationName:'Business Analyst'
    },
    {
      DesignationName:'Accountant'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  OnResumeSelected(event) {
    this.resumeFileList = event.target.files;
  }
  saveCareers(careersForm: NgForm): void {
    console.log(JSON.stringify(this.careerMaster));
  }
}
