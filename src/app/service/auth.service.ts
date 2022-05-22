
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router , private http: HttpClient) {}
  // fake authorize
  // set token
  setToken(token: string): void{
    localStorage.setItem('token',token)
  }

  //get token
  getToken():string | null{
    return localStorage.getItem('token')
  }

  //islogin
  isLoggedIn(){
    return this.getToken() !== null
  }

  //logout
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  // //login
  login({email, password} : any): Observable<any> {
    //set temp ->> neeed to connect to real api
    if(email === 'abc@gmail.com' && password === '123456'){
      this.setToken('abcdefg')
      return of({name: 'The Duy', email: 'abc@gmail.com'})
    }
    return throwError(new Error('Fail to login'))
  }



  //token authorize
  // login(data: any):Observable<any>{
  //   return this.http.post('http://api.tuoitrehutech.com/api/Login/Login',data)
  // }
  



}
