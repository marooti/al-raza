import { Component,Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  // imageSrc = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  imageAlt = 'Header'
  visibleSidebar2:any
  constructor() { }
  closeNavbar() {
    this.visibleSidebar2 = false;
  }
  ngOnInit(): void {
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              // this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              // this.delete();
          }
      }
      ]},
      {
          label: 'Navigate',
          items: [{
              label: 'Angular Website',
              icon: 'pi pi-external-link',
              url: "/home/search?",
              // url: '/students'
          },
          {
              label: 'Router',
              icon: 'pi pi-upload'
          }
      ]}
  ];

    
  }
  scrollPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
