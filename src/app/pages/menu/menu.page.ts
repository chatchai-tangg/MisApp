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
      title: 'บุคลากร',
      open: false,
      children: [
        {
          title: 'บุคลากร',
          url: '/menu/staff',
          icon: 'person'
        },
        {
          title: 'ขอตำแหน่งวิชาการ',
          url: '/menu/staff-reqposition',
          icon: 'stats'
        },
        {
          title: 'ขอทุนศึกษาต่อ',
          url: '/menu/staffscholar',
          icon: 'school'
        },
        {
          title: 'จำแนกบุคลากรตามการศึกษา',
          url: '/menu/staffdistedu',
          icon: 'school'
        }
      ]
    },
    {
      title: 'นักศึกษา',
      open: false,
      children: [
        {
          title: 'นักศึกษา',
          url: '/menu/student',
          icon: 'person'
        },

      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
