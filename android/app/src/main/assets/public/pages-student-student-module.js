(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-student-student-module"],{

/***/ "./src/app/pages/student/student.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.module.ts ***!
  \*************************************************/
/*! exports provided: StudentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPageModule", function() { return StudentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student.page */ "./src/app/pages/student/student.page.ts");







const routes = [
    {
        path: '',
        component: _student_page__WEBPACK_IMPORTED_MODULE_6__["StudentPage"]
    }
];
let StudentPageModule = class StudentPageModule {
};
StudentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_student_page__WEBPACK_IMPORTED_MODULE_6__["StudentPage"]]
    })
], StudentPageModule);



/***/ }),

/***/ "./src/app/pages/student/student.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-button slot=\"start\" color=\"Dark-tint\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-button>\r\n    <ion-title>student</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>นักเรียน</ion-card-subtitle>\r\n      <!-- <ion-card-title>Card Title</ion-card-title> -->\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div style=\"position: relative;\">\r\n        <canvas id=\"barstdyear\" width=\"100%\" height=\"100%\"></canvas>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/student/student.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/student/student.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWRlbnQvc3R1ZGVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/student/student.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/student/student.page.ts ***!
  \***********************************************/
/*! exports provided: StudentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPage", function() { return StudentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let StudentPage = class StudentPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    get_stdyears() {
        let labels = [];
        let data;
        this.http.get('http://203.158.144.140/APIchart/charts/Stdyears')
            .subscribe((res) => {
            this.list = res.Table;
            this.dyears = res.Table.map(res => res.ACADYEAR);
            this.dtotal = res.Table.map(res => res.TOTAL);
            this.testt();
        });
    }
    ngOnInit() {
        this.get_stdyears();
    }
    testt() {
        var canvas = document.getElementById("barstdyear");
        var ctx = canvas.getContext("2d");
        var myNewChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            type: 'horizontalBar',
            data: {
                labels: this.dyears,
                datasets: [{
                        label: '# จำนวนสถิตินักศึกษา',
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
                        data: this.dtotal,
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    xAxes: [{
                            barThickness: 10,
                            maxBarThickness: 10,
                            minBarLength: 2,
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                },
                legend: {
                    position: "bottom",
                    display: true,
                    labels: {
                        padding: 15,
                        boxWidth: 20
                    }
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('barstdyear'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StudentPage.prototype, "barstdyear", void 0);
StudentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: __webpack_require__(/*! ./student.page.html */ "./src/app/pages/student/student.page.html"),
        styles: [__webpack_require__(/*! ./student.page.scss */ "./src/app/pages/student/student.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StudentPage);



/***/ })

}]);
//# sourceMappingURL=pages-student-student-module.js.map