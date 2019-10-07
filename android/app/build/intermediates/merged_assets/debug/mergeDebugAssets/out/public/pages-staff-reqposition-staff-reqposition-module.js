(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-staff-reqposition-staff-reqposition-module"],{

/***/ "./src/app/pages/staff-reqposition/staff-reqposition.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/staff-reqposition/staff-reqposition.module.ts ***!
  \*********************************************************************/
/*! exports provided: StaffReqpositionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffReqpositionPageModule", function() { return StaffReqpositionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _staff_reqposition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-reqposition.page */ "./src/app/pages/staff-reqposition/staff-reqposition.page.ts");







const routes = [
    {
        path: '',
        component: _staff_reqposition_page__WEBPACK_IMPORTED_MODULE_6__["StaffReqpositionPage"]
    }
];
let StaffReqpositionPageModule = class StaffReqpositionPageModule {
};
StaffReqpositionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_staff_reqposition_page__WEBPACK_IMPORTED_MODULE_6__["StaffReqpositionPage"]]
    })
], StaffReqpositionPageModule);



/***/ }),

/***/ "./src/app/pages/staff-reqposition/staff-reqposition.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/staff-reqposition/staff-reqposition.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-button slot=\"start\" color=\"dark\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-button>\n    <ion-title>\n      <h4>บุคลากรที่สามารถยื่นขอตำแหน่งวิชาการ</h4>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>บุคลากรที่สามารถยื่นขอตำแหน่งวิชาการ</ion-card-subtitle>\n      <!-- <ion-card-title>Card Title</ion-card-title> -->\n    </ion-card-header>\n    <ion-card-content>\n      <div style=\"position: relative;\">\n        <canvas id=\"Chartreqposition\" width=\"100%\" height=\"100%\"></canvas>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/staff-reqposition/staff-reqposition.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/staff-reqposition/staff-reqposition.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YWZmLXJlcXBvc2l0aW9uL3N0YWZmLXJlcXBvc2l0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/staff-reqposition/staff-reqposition.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/staff-reqposition/staff-reqposition.page.ts ***!
  \*******************************************************************/
/*! exports provided: StaffReqpositionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffReqpositionPage", function() { return StaffReqpositionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StaffReqpositionPage = class StaffReqpositionPage {
    constructor(http) {
        this.http = http;
    }
    get_reqposition() {
        this.http.get('http://203.158.144.140/APIchart/charts/Reqposition')
            .subscribe((res) => {
            this.list = res.Table;
            this.etname = res.Table.map(res => res.ประเภท);
            this.countreq = res.Table.map(res => res.จำนวน);
            console.log(this.etname);
            this.Chartreqposition();
        });
    }
    ngOnInit() {
        this.get_reqposition();
    }
    Chartreqposition() {
        var ctxreq = document.getElementById('Chartreqposition').getContext('2d');
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctxreq, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset      
            data: {
                labels: this.etname,
                datasets: [{
                        label: "ผู้ที่สามารถยื่นขอตำแหน่งวิชาการ",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        data: this.countreq,
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
                    },
                    render: 'value'
                },
            }
        });
    }
};
StaffReqpositionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-reqposition',
        template: __webpack_require__(/*! ./staff-reqposition.page.html */ "./src/app/pages/staff-reqposition/staff-reqposition.page.html"),
        styles: [__webpack_require__(/*! ./staff-reqposition.page.scss */ "./src/app/pages/staff-reqposition/staff-reqposition.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], StaffReqpositionPage);



/***/ })

}]);
//# sourceMappingURL=pages-staff-reqposition-staff-reqposition-module.js.map