import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginCarasoualComponent } from '../../../Reuseable/login-carasoual/login-carasoual.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,LoginComponent,RouterLink,LoginCarasoualComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(

    private router: Router,

  ) {}
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  togglePassword(fieldNumber: number) {
    if (fieldNumber === 1) {
      this.showPassword1 = !this.showPassword1;
    } else if (fieldNumber === 2) {
      this.showPassword2 = !this.showPassword2;
    }
  }
  onLogin(): void {
    {
     this.router.navigate(['/login']);

     }
   }
 }

