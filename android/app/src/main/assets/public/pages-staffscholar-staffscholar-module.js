(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-staffscholar-staffscholar-module"],{

/***/ "./src/app/pages/staffscholar/staffscholar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/staffscholar/staffscholar.module.ts ***!
  \***********************************************************/
/*! exports provided: StaffscholarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffscholarPageModule", function() { return StaffscholarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _staffscholar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staffscholar.page */ "./src/app/pages/staffscholar/staffscholar.page.ts");







const routes = [
    {
        path: '',
        component: _staffscholar_page__WEBPACK_IMPORTED_MODULE_6__["StaffscholarPage"]
    }
];
let StaffscholarPageModule = class StaffscholarPageModule {
};
StaffscholarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_staffscholar_page__WEBPACK_IMPORTED_MODULE_6__["StaffscholarPage"]]
    })
], StaffscholarPageModule);



/***/ }),

/***/ "./src/app/pages/staffscholar/staffscholar.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/staffscholar/staffscholar.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-button slot=\"start\" color=\"Dark-tint\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-title>staffscholar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>บุคลากรขอทุนศึกษาต่อ</ion-card-subtitle>\r\n      <!-- <ion-card-title>Card Title</ion-card-title> -->\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div style=\"position: relative;\">\r\n        <canvas id=\"Chartscholar\" width=\"100%\" height=\"100%\"></canvas>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/staffscholar/staffscholar.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/staffscholar/staffscholar.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmc2Nob2xhci9zdGFmZnNjaG9sYXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/staffscholar/staffscholar.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/staffscholar/staffscholar.page.ts ***!
  \*********************************************************/
/*! exports provided: StaffscholarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffscholarPage", function() { return StaffscholarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StaffscholarPage = class StaffscholarPage {
    constructor(http) {
        this.http = http;
    }
    get_reqscholar() {
        let labels = [];
        let data;
        this.http.get('http://203.158.144.140/APIchart/charts/Reqscholar')
            .subscribe((res) => {
            this.list = res.Table;
            this.dataposition = res.Table.map(res => res.ภายในประเทศ);
            this.datanameposition = res.Table.map(res => res.ต่างประเทศ);
            // console.log(this.dataposition)
            // console.log(this.datanameposition)
            // this.get_reqscholar();
        });
    }
    ngOnInit() {
        this.get_reqscholar();
        this.Chartscholar();
    }
    Chartscholar() {
        var ctxscholar = document.getElementById('Chartscholar').getContext('2d');
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctxscholar, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
                labels: ['ศึกษาต่อภายในประเทศ (ภาคปกติ)', 'ศึกษาต่อภายในประเทศ (ภาคนอกเวลา)'],
                datasets: [{
                        label: 'ผู้ขอทุนการศึกษา',
                        data: ['257', '24'],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                legend: {
                    labels: {},
                },
            }
        });
    }
};
StaffscholarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staffscholar',
        template: __webpack_require__(/*! ./staffscholar.page.html */ "./src/app/pages/staffscholar/staffscholar.page.html"),
        styles: [__webpack_require__(/*! ./staffscholar.page.scss */ "./src/app/pages/staffscholar/staffscholar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], StaffscholarPage);



/***/ })

}]);
//# sourceMappingURL=pages-staffscholar-staffscholar-module.js.map