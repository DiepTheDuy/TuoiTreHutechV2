import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component'
import { HomeComponent } from './components/home/home.component';

//page components
import { ClassListComponent } from './components/page/class-major/class-list/class-list.component';
import { MajorListComponent } from './components/page/class-major/major-list/major-list.component';
import { StudentListComponent } from './components/page/class-major/student-list/student-list.component';
import { UnionListComponent } from './components/page/unions/union-list/union-list.component';

const routes: Routes = [
  {path:'', component: AdminDashboardComponent , children:[
    { path: 'home' , component: HomeComponent },
    { path: 'union-list' , component: UnionListComponent },
    { path: 'class-list' , component: ClassListComponent },
    { path: 'major-list' , component: MajorListComponent },
    { path: 'student-list' , component: StudentListComponent },
    { path: '' , redirectTo: '/admin/home' , pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
