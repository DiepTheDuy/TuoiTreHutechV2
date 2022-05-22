import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  checkboxColor = 'primary';
  hideRequiredControl = new FormControl(false);


  

  //emailFormControl:FormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }

    //this.initForm()    

  }

  
  // fake authorize
  
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {this.router.navigate(['admin'])},
        (error: Error) => alert(error.message)
      );
    }
  }


  // token authorize

  // loginForm: FormGroup

  // initForm(){
  //   this.loginForm= new FormGroup({
  //     username: new FormControl(''),
  //     password: new FormControl(''),
  //   })
  // }

  // loginProcess(){
  //   if(this.loginForm?.valid){
  //     this.auth.login(this.loginForm.value).subscribe(result=>{
  //       if(!result.IsError){
  //         console.log(result.token)
  //         alert('login success')
  //       }else{
  //         alert('login fail')
  //       }
  //     })
  //   }
  // }

}
