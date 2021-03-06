import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss']
})
export class SidebarLinkComponent implements OnInit {

  @Input() item:any
  @Input() miniSidebar:any
  isCloseSubmenu:boolean= true

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }


  toggleSubmenu(){
    this.isCloseSubmenu =!this.isCloseSubmenu
  }
}
