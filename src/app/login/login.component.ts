import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClientModule,
    private authService: AuthService, 
 
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
      password: ['', Validators.required]
  });
  }


  onSubmit(){

    let obj = {
      
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(obj).subscribe(
      response => {
       
       
     if(response.status=='200'){
     
        alert(response.message)
        this.router.navigateByUrl('/todo')
     }
      else{
        this.router.navigateByUrl('/register')
      }
         
           
        });
  }
}
