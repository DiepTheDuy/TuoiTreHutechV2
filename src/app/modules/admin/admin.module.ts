import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';

// import form material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatBadgeModule} from '@angular/material/badge';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { UnionListComponent } from './components/page/unions/union-list/union-list.component';
import { ClassListComponent } from './components/page/class-major/class-list/class-list.component';
import { MajorListComponent } from './components/page/class-major/major-list/major-list.component';
import { StudentListComponent } from './components/page/class-major/student-list/student-list.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    SidebarLinkComponent,
    UnionListComponent,
    ClassListComponent,
    MajorListComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatBadgeModule,
  ]
})
export class AdminModule { }
