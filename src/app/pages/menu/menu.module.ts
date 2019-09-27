import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full',
    component: MenuPage
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
      { path: 'staff', loadChildren: './pages/staff/staff.module#StaffPageModule' },
      { path: 'student', loadChildren: './pages/student/student.module#StudentPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
