import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginService } from '../login/login.service';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpService } from './sign-up.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule,FormsModule, SignUpRoutingModule,SharedModule],
  providers: [SignUpService,LoginService],
})
export class SignUpModule {}