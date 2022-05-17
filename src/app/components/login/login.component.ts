import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide = true;
  checkboxColor= 'primary'
  hideRequiredControl = new FormControl(false);
  //emailFormControl:FormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log('hello')
  }

}
