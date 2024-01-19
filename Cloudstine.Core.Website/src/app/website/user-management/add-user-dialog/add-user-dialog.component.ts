import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  newUser: any = {};
  constructor() { }

  ngOnInit(): void {
  }

   onSubmit() {
    // Add logic to save the new user (e.g., send a request to a backend service)
    console.log('New User:', this.newUser);

    // Reset the form after submission
    this.newUser = {};
  }

}
