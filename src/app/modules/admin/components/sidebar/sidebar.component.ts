import { Component, OnInit } from '@angular/core';
import { sideBarData } from 'src/app/mock/mock-sidebarData';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isSidebarClose:boolean = false 

  sideBarData:any[] = sideBarData

  constructor() { }

  ngOnInit(): void {}

  toggleSidebar():void{
    this.isSidebarClose= !this.isSidebarClose
  }

}
