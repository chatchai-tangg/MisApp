(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-staff-staff-module"],{

/***/ "./src/app/pages/staff/staff.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.module.ts ***!
  \*********************************************/
/*! exports provided: StaffPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageModule", function() { return StaffPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _staff_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff.page */ "./src/app/pages/staff/staff.page.ts");







const routes = [
    {
        path: '',
        component: _staff_page__WEBPACK_IMPORTED_MODULE_6__["StaffPage"]
    }
];
let StaffPageModule = class StaffPageModule {
};
StaffPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_staff_page__WEBPACK_IMPORTED_MODULE_6__["StaffPage"]]
    })
], StaffPageModule);



/***/ }),

/***/ "./src/app/pages/staff/staff.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-button slot=\"start\" color=\"Dark-tint\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-title>STAFF</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>ประเภทบุคลากร</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div style=\"position: relative;\">\r\n        <canvas id=\"canvas-chart\" width=\"100%\" height=\"100%\"></canvas>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/staff/staff.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/staff/staff.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmL3N0YWZmLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/staff/staff.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/staff/staff.page.ts ***!
  \*******************************************/
/*! exports provided: StaffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPage", function() { return StaffPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StaffPage = class StaffPage {
    constructor(http) {
        this.http = http;
    }
    get_data() {
        this.http.get('http://203.158.144.140/APIchart/charts/Employee')
            .subscribe((res) => {
            this.list = res.Table;
            this.data1 = res.Table.map(res => res.Total);
            this.dataname = res.Table.map(res => res.et_name);
            // console.log(this.data1)
            // console.log(this.dataname)
            this.barChartMethod();
        });
    }
    ngOnInit() {
        this.get_data();
    }
    barChartMethod() {
        var ctx = document.getElementById('canvas-chart').getContext('2d');
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            // The type of chart we want to create
            type: 'pie',
            // The data for our dataset 
            data: {
                labels: this.dataname,
                datasets: [{
                        label: "dataset",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        data: this.data1,
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    position: "bottom",
                    display: true,
                    labels: {
                        padding: 15,
                        boxWidth: 20
                    }
                },
            }
        });
    }
};
StaffPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff',
        template: __webpack_require__(/*! ./staff.page.html */ "./src/app/pages/staff/staff.page.html"),
        styles: [__webpack_require__(/*! ./staff.page.scss */ "./src/app/pages/staff/staff.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], StaffPage);



/***/ })

}]);
//# sourceMappingURL=pages-staff-staff-module.js.map