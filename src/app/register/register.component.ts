import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClientModule,
    private authService: AuthService, 
 
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', ],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
  })
  }
  onSubmit(){
    let obj = {
      
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    this.authService.register(obj).subscribe(
      response => {
       
       
     if(response.status=='200'){
      if(response.data.domain!=null && response.data.domain!='')
      {
    
        this.router.navigateByUrl('/todo')
      }
      else{
        this.router.navigateByUrl('/home')
      }
         
           
        }
       
        else{
          
        this.router.navigateByUrl('/login')
             
       
         }
    
      },
      error => {

     
      }
    );
  }


}
