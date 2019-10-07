(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







const routes = [
    {
        path: '',
        redirectTo: '/menu/main',
        pathMatch: 'full',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
    },
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
            { path: 'staff', loadChildren: './pages/staff/staff.module#StaffPageModule' },
            { path: 'student', loadChildren: './pages/student/student.module#StudentPageModule' },
            { path: 'staff-reqposition', loadChildren: './pages/staff-reqposition/staff-reqposition.module#StaffReqpositionPageModule' },
            { path: 'staffscholar', loadChildren: './pages/staffscholar/staffscholar.module#StaffscholarPageModule' },
            { path: 'staffdistedu', loadChildren: './pages/staffdistedu/staffdistedu.module#StaffdisteduPageModule' },
        ]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu contentId=\"content\">\n  <ion-header>\n    <ion-toolbar color=\"black\">\n      <ion-title>MENU</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div *ngFor=\"let p of page\">\n      <!-- Standard Menu Item -->\n      <ion-menu-toggle *ngIf=\"p.url\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\">\n          <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n          <ion-label>\n            {{ p.title }}\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <!-- Item with Children -->\n\n      <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.parent-active]=\"p.open\"\n        detail=\"false\">\n        <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n        <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\"></ion-icon>\n        <ion-label>{{ p.title }}</ion-label>\n      </ion-item>\n\n      <!-- Children List for clicked Item -->\n      <ion-list *ngIf=\"p.open\">\n        <ion-menu-toggle>\n          <ion-item *ngFor=\"let sub of p.children\" class=\"sub-item\" [routerLink]=\"sub.url\" routerDirection=\"root\"\n            routerLinkActive=\"active\">\n            <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\n            <ion-label>\n              {{ sub.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuPage = class MenuPage {
    constructor() {
        this.page = [
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
    }
    ngOnInit() {
    }
};
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=8.js.map