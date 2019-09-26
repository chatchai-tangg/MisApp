import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  page = [
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Subclass',
      open: false,
      children: [
        {
          title: 'บุคลากร',
          url: '/menu/staff',
          icon: 'logo-ionic'
        },
        {
          title: 'นักศึกษา',
          url: '/menu/student',
          icon: 'logo-google'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
