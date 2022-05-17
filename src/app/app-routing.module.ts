import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/components/login/login.component'
import {HomeComponent} from '../app/components/home/home.component'
import {NotFoundComponent} from '../app/components/not-found/not-found.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // {path: '', redirectTo:'/login', pathMatch:'full' },
  {
    //Lazy loading
    path:'admin' , loadChildren: ()=> 
    import('./modules/admin/admin.module')
    .then((m) => m.AdminModule) 
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
