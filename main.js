(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app-injector.service.ts":
/*!*************************************!*\
  !*** ./src/app-injector.service.ts ***!
  \*************************************/
/*! exports provided: AppInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
var AppInjector = /** @class */ (function () {
    function AppInjector() {
    }
    AppInjector.setInjector = function (injector) {
        AppInjector.injector = injector;
    };
    AppInjector.getInjector = function () {
        return AppInjector.injector;
    };
    return AppInjector;
}());



/***/ }),

/***/ "./src/app/angular/angular.component.css":
/*!***********************************************!*\
  !*** ./src/app/angular/angular.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXIvYW5ndWxhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/angular/angular.component.html":
/*!************************************************!*\
  !*** ./src/app/angular/angular.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n    <mat-tab label=\"Angular\">\n        <app-data  imageBaseUrl=\"/assets/images/angular/\" [data]=\"angularData.angular\"></app-data>\n    </mat-tab>\n    <mat-tab label=\"Topic\">\n        <app-data imageBaseUrl=\"/assets/images/angular/\" [data]=\"angularData.angular\"></app-data>\n    </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/angular/angular.component.ts":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _files_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/angular */ "./src/app/files/angular.ts");
/* harmony import */ var _files_angularQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../files/angularQuestion */ "./src/app/files/angularQuestion.ts");





var AngularComponent = /** @class */ (function () {
    function AngularComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.angularData = '';
        this.expandAll = false;
        this.angularData = _files_angular__WEBPACK_IMPORTED_MODULE_3__["data"];
    }
    AngularComponent.prototype.getHtml = function (val) {
        return this.sanitizer.bypassSecurityTrustScript(val);
    };
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.angularData = _files_angular__WEBPACK_IMPORTED_MODULE_3__["data"];
        }
        else if (event.index == 1) {
            this.angularData = _files_angularQuestion__WEBPACK_IMPORTED_MODULE_4__["questions"];
        }
    };
    AngularComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! ./angular.component.html */ "./src/app/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.css */ "./src/app/angular/angular.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _data_structure_data_structure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-structure/data-structure.component */ "./src/app/data-structure/data-structure.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javascript/javascript.component */ "./src/app/javascript/javascript.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/css.component */ "./src/app/css/css.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'css', component: _css_css_component__WEBPACK_IMPORTED_MODULE_8__["CssComponent"] },
    {
        path: 'data-structure', component: _data_structure_data_structure_component__WEBPACK_IMPORTED_MODULE_4__["DataStructureComponent"]
    },
    {
        path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_5__["AngularComponent"]
    },
    {
        path: 'javascript', component: _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_6__["JavascriptComponent"]
    },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #20232a;\r\n    height: 60px;\r\n    padding-left: 150px;\r\n    position: fixed;\r\n    z-index: 99;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    margin-bottom: 10px;\r\n}\r\n.main-body{\r\n    width: 100%;\r\n    margin:auto;\r\n}\r\n.scroll-to-top {\r\n    position: fixed;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    opacity: 0;\r\n    z-index: 1;\r\n    transition: all .2s ease-in-out;\r\n   }\r\n.show-scrollTop {\r\n    opacity: 1;\r\n    transition: all .2s ease-in-out;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLCtCQUErQjtHQUNoQztBQUNBO0lBQ0MsVUFBVTtJQUNWLCtCQUErQjtHQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5tYWluLWJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcbi5zY3JvbGwtdG8tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICB9XHJcbiAgIC5zaG93LXNjcm9sbFRvcCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"header\">\r\n    <app-header></app-header>\r\n</div>\r\n<div class=\"space\">\r\n\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"main-body\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\r\n    <button (click)=\"scrollToTop()\">\r\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example arrow_upward icon\">arrow_upward</mat-icon>\r\n    </button>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(document) {
        this.document = document;
        this.windowScrolled = false;
        this.title = 'my-app';
    }
    AppComponent.prototype.onWindowScroll = function () {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    };
    AppComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/service */ "./src/app/services/service.ts");
/* harmony import */ var _services_service1_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/service1.service */ "./src/app/services/service1.service.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var src_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/interceptor */ "./src/interceptor/index.ts");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/sort/sort.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _hashing_hashing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hashing/hashing.component */ "./src/app/hashing/hashing.component.ts");
/* harmony import */ var _bst_bst_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bst/bst.component */ "./src/app/bst/bst.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _data_structure_data_structure_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data-structure/data-structure.component */ "./src/app/data-structure/data-structure.component.ts");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./angular/angular.component */ "./src/app/angular/angular.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _data_data_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data/data.component */ "./src/app/data/data.component.ts");
/* harmony import */ var _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./javascript/javascript.component */ "./src/app/javascript/javascript.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./css/css.component */ "./src/app/css/css.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _sort_sort_component__WEBPACK_IMPORTED_MODULE_10__["SortComponent"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_11__["HighchartsChartComponent"],
                _hashing_hashing_component__WEBPACK_IMPORTED_MODULE_12__["HashingComponent"],
                _bst_bst_component__WEBPACK_IMPORTED_MODULE_13__["BSTComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
                _data_structure_data_structure_component__WEBPACK_IMPORTED_MODULE_18__["DataStructureComponent"],
                _angular_angular_component__WEBPACK_IMPORTED_MODULE_19__["AngularComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_20__["SafePipe"],
                _data_data_component__WEBPACK_IMPORTED_MODULE_21__["DataComponent"],
                _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_22__["JavascriptComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _css_css_component__WEBPACK_IMPORTED_MODULE_25__["CssComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"]
            ],
            providers: [
                _services_service1_service__WEBPACK_IMPORTED_MODULE_7__["Service1Service"],
                src_interceptor__WEBPACK_IMPORTED_MODULE_9__["httpInterceptorProviders"],
                { provide: _services_service__WEBPACK_IMPORTED_MODULE_6__["HeroService"], useExisting: _services_service1_service__WEBPACK_IMPORTED_MODULE_7__["Service1Service"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bst/bst.component.css":
/*!***************************************!*\
  !*** ./src/app/bst/bst.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-collection{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.item span{\r\n   padding-left: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnN0L2JzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYnN0L2JzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY29sbGVjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaXRlbSBzcGFue1xyXG4gICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/bst/bst.component.html":
/*!****************************************!*\
  !*** ./src/app/bst/bst.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div>BST - Binary Search Tree</div> \n  <input [(ngModel)]=\"randomNo\" >\n  <button (click)=\"generateRandomData(false)\">Add</button>\n  <button (click)=\"generateRandomData(true)\">AddAVL</button>\n  <button (click)=\"clear()\">Clear</button>\n  <button (click)=\"search()\">Search</button>\n  <button (click)=\"remove()\">Delete</button>\n  <button (click)=\"height()\">Hieght</button>{{h}}\n  <ul>\n    BST\n   \n    <li>\n      Combination of list and array\n    </li>\n    <li>\n      Left node should be less\n    </li>\n    <li>\n      Right node should be equal or greater\n    </li>\n    <li>\n      Take O log(n) in search delete and insert\n    </li>\n  </ul>\n  <ul>\n    <li>\n      BST takes O(n) time for search delete n insert in worst case due to its height. To fix this We use AVL or Red black tree\n    </li>\n    <li>\n      AVL :- Its Balanced binary tree\n    </li>\n    <li>\n      Its height is log(n);\n    </li>\n    <li>\n      Height absolute difference is always  <=1\n    </li>\n    <li>\n      while inserting or deleting node we maintian the height by rotation\n    </li>\n  </ul>\n<div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <ul>\n      Tree Traversal :- loop through tree item\n      <li>\n      <button (click)=\"preOrder()\">PreOrder</button>    :-  Print before recursion :- print from top to bottom left \n      </li>\n      <li>\n        <button (click)=\"inOrder()\">InOrder</button>  :-  Print between recursion, print in sorted\n      </li>\n      <li>\n        <button (click)=\"postOrder()\"> PostOrder</button>   :-  Print after recursion\n      </li>\n      <li>\n        <button (click)=\"inLineOrder()\"> INLineOrder</button>   :-  print horizontally : BFS:- Breadth first search\n      </li>\n      \n    </ul>\n  </div>\n  <div class=\"col-sm-6\">\n    {{orderData}}\n  </div>\n</div>\n\n<div *ngFor=\"let data of BSTData\" class=\"item-collection\">\n  <div *ngFor=\"let item of data\" class=\"item\">\n    <span>{{item}}</span> \n  </div>\n</div>\n\n\n<div>\n  <pre>\n    <code>\n      /*                  Right rotation \n        50            40                  E                     C\n      /    \\         /   \\               /  \\                  /  \\\n     40     80     30     50            C    F     ====>      B     E\n    /  \\                 /   \\        /  \\                        /   \\\n  30   45               45    80      B    D                      D      F\n   \n    \n    1. CE  move to the right\n    2. Highest elemnt of left ie. D :- node.left.right goes to lowest place of right\n    ie :- node.right.left\n      \n        D                                       D                                \n       /                                       /\n      B   ====> Require right rotation        B    ===> Require left right rotaion\n     /                                         \\ \n    A \n    \n        D                                       D                                \n         \\                                       \\\n          F   ====> Require left rotation         F     ===> Require right left rotaion\n           \\                                     / \n             H                                  E\n    \n     \n    */\n    </code>\n  </pre>\n</div>"

/***/ }),

/***/ "./src/app/bst/bst.component.ts":
/*!**************************************!*\
  !*** ./src/app/bst/bst.component.ts ***!
  \**************************************/
/*! exports provided: BSTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSTComponent", function() { return BSTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BSTComponent = /** @class */ (function () {
    function BSTComponent() {
        this.data = '';
        this.orderData = [];
    }
    BSTComponent.prototype.ngOnInit = function () {
        this.generateRandomData(true);
        this.data = '';
        for (var i = 0; i <= 10; i++) {
            this.addAVL(i);
            console.log(11111111111, this.data);
        }
        this.displayData();
    };
    BSTComponent.prototype.clear = function () {
        this.data = '';
        this.randomNo = 0;
        this.BSTData = [];
    };
    BSTComponent.prototype.generateRandomData = function (AVL) {
        if (this.randomNo) {
            if (!this.data) {
                this.data = { data: this.randomNo };
            }
            else {
                if (AVL) {
                    this.addAVL(this.randomNo);
                }
                else {
                    this.add(this.randomNo);
                }
            }
            this.displayData();
        }
        this.randomNo = Math.floor(Math.random() * 100);
    };
    BSTComponent.prototype.displayData = function () {
        var data = this.data;
        var temp = [];
        getData(data, 0);
        function getData(data, index) {
            if (!data || (!data.data && data.data != 0)) {
                return;
            }
            var val = data ? data.data : '';
            if (temp[index] || temp[index] == 0) {
                temp[index].push(val);
            }
            else {
                temp[index] = [val];
            }
            var l = getData(data.left, index + 1);
            var r = getData(data.right, index + 1);
        }
        this.BSTData = temp;
    };
    BSTComponent.prototype.search = function () {
        var msg = this.randomNo + " Not found";
        var self = this;
        find(this.data);
        function find(data) {
            if (!data) {
                return;
            }
            if (data.data == self.randomNo) {
                msg = self.randomNo + ' found';
                return;
            }
            if (data.data < self.randomNo) {
                find(data.right);
            }
            else {
                find(data.left);
            }
        }
        alert(msg);
    };
    BSTComponent.prototype.remove = function () {
        var self = this;
        find(this.data, self.randomNo);
        console.log(this.data);
        function find(data, deleteValue) {
            if (!data) {
                return;
            }
            if (data.data == deleteValue) {
                if (!data.left && !data.right) {
                    delete data.data;
                }
                else {
                    if (!data.left) {
                        data.data = data.right.data;
                        data.left = data.right.left;
                        data.right = data.right.right;
                    }
                    else {
                        var lowest = getLowest(data.right);
                        data.data = lowest;
                        if (!lowest) {
                            return;
                        }
                        find(data.right, lowest);
                    }
                }
                return;
            }
            if (data.data < self.randomNo) {
                find(data.right, deleteValue);
            }
            else {
                find(data.left, deleteValue);
            }
        }
        function getLowest(data) {
            if (!data.left) {
                return data.data;
            }
            return getLowest(data.left);
        }
        console.log(this.data);
        this.displayData();
    };
    BSTComponent.prototype.add = function (val1) {
        insert(this.data, val1);
        function insert(node, val) {
            if (node.data <= val) {
                if (!node.right) {
                    node.right = { data: val };
                }
                else {
                    insert(node.right, val);
                }
            }
            else {
                if (!node.left) {
                    node.left = { data: val };
                }
                else {
                    insert(node.left, val);
                }
            }
        }
    };
    BSTComponent.prototype.addAVL = function (val1) {
        if (!this.data) {
            this.data = { data: val1 };
            return;
        }
        var self = this;
        insert(this.data, val1);
        function insert(node, val) {
            if (node.data <= val) {
                if (!node.right) {
                    node.right = { data: val };
                }
                else {
                    insert(node.right, val);
                    if (node.right && self.getBalanceFactor(node) < -1) {
                        if (node.right.data <= val) {
                            self.leftRotation(node);
                        }
                        else {
                            self.rotateRightLeft(node);
                        }
                    }
                }
            }
            else {
                if (!node.left) {
                    node.left = { data: val };
                }
                else {
                    insert(node.left, val);
                    if (node.left && self.getBalanceFactor(node) > 1) {
                        if (node.left.data > val) {
                            self.rightRotation(node);
                        }
                        else {
                            self.rotateLeftRight(node);
                        }
                    }
                }
            }
        }
    };
    BSTComponent.prototype.rightRotation = function (node) {
        var valueToReplace = node.data;
        var leftHighest = node.left.right;
        node.data = node.left.data;
        node.left = node.left.left;
        var rightNNode = null;
        if (node.right) {
            rightNNode = JSON.parse(JSON.stringify(node.right));
        }
        else {
            node.right = {};
        }
        node.right.data = valueToReplace;
        node.right.right = rightNNode;
        node.right.left = leftHighest;
        this.displayData();
        //   6          4
        //  4  9       2     6
        //                  5   9
        // 2  5
    };
    BSTComponent.prototype.leftRotation = function (node) {
        var valueToReplace = node.data;
        var rightLowest = node.right.left;
        node.data = node.right.data;
        node.right = node.right.right;
        var leftNode = null;
        if (node.left) {
            leftNode = JSON.parse(JSON.stringify(node.left));
        }
        else {
            node.left = {};
        }
        node.left.data = valueToReplace;
        node.left.left = leftNode;
        node.left.right = rightLowest;
        this.displayData();
    };
    BSTComponent.prototype.height = function () {
        this.h = this.getHeight(this.data);
    };
    BSTComponent.prototype.rotateLeftRight = function (node) {
        this.leftRotation(node.left);
        this.rightRotation(node);
    };
    BSTComponent.prototype.rotateRightLeft = function (node) {
        this.rightRotation(node.right);
        this.leftRotation(node);
    };
    BSTComponent.prototype.getHeight = function (node) {
        var height = 0;
        if (!node) {
            return -1;
        }
        height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        return height;
    };
    BSTComponent.prototype.getBalanceFactor = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    BSTComponent.prototype.preOrder = function () {
        var data = this.data;
        var self = this;
        this.orderData = [];
        loop1(data);
        function loop1(data) {
            if (!data) {
                return;
            }
            self.orderData.push(data.data);
            loop1(data.left);
            loop1(data.right);
        }
    };
    BSTComponent.prototype.postOrder = function () {
        var data = this.data;
        var self = this;
        this.orderData = [];
        loop1(data);
        function loop1(data) {
            if (!data) {
                return;
            }
            loop1(data.left);
            loop1(data.right);
            self.orderData.push(data.data);
        }
    };
    BSTComponent.prototype.inOrder = function () {
        var data = this.data;
        var self = this;
        this.orderData = [];
        loop1(data);
        function loop1(data) {
            if (!data) {
                return;
            }
            loop1(data.left);
            self.orderData.push(data.data);
            loop1(data.right);
        }
    };
    BSTComponent.prototype.inLineOrder = function () {
        var data = this.data;
        var self = this;
        var queue = [];
        this.orderData = [];
        queue.push(data.left);
        queue.push(data.right);
        this.orderData.push(data.data);
        while (queue.length) {
            data = queue.shift();
            this.orderData.push(data.data);
            if (data.left) {
                queue.push(data.left);
            }
            if (data.right) {
                queue.push(data.right);
            }
        }
        this.orderData = this.orderData;
    };
    BSTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bst',
            template: __webpack_require__(/*! ./bst.component.html */ "./src/app/bst/bst.component.html"),
            styles: [__webpack_require__(/*! ./bst.component.css */ "./src/app/bst/bst.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BSTComponent);
    return BSTComponent;
}());



/***/ }),

/***/ "./src/app/css/css.component.css":
/*!***************************************!*\
  !*** ./src/app/css/css.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.border{\r\n    border:1px solid red;\r\n   \r\n}\r\n.box{\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    border: 1px solid rgb(46, 122, 192)\r\n}\r\n.box-item{\r\n    display: inline-block;\r\n    width: 33.33%;\r\n    height: 200px;\r\n    vertical-align: top;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n.q_border{\r\n   \r\n    width: 80%;\r\n    margin:auto;\r\n    height: 100px;\r\n    margin-top: 50px;\r\n    padding-top: 18px;\r\n    box-sizing: border-box;\r\n}\r\n.border_y{\r\n    border: 1px solid yellowgreen;\r\n}\r\n.q_padding{\r\n   padding-top: 100px;\r\n}\r\n.q_margin{\r\n    margin-top: 100px;\r\n}\r\n.flex{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 120px;\r\n    background-color: Silver;\r\n    margin-bottom: 10px;\r\n}\r\n.flex-container {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 240px;\r\n    background-color: Silver;\r\n    margin-bottom: 10px;\r\n}\r\n.flex-item {\r\n    background-color: DeepSkyBlue;\r\n    width: 20%;\r\n    height: 100px;\r\n    margin: 5px;\r\n}\r\n.flex-item1 {\r\n    background-color: DeepSkyBlue;\r\n    width: 20%;\r\n    margin: 5px;\r\n}\r\n.btn{\r\n   margin: 16px; \r\n}\r\n.border1{\r\n    border:1px solid rebeccapurple\r\n}\r\n/*//////////////////////Grid*/\r\n.grid-container{\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    background-color: #2196F3;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    width: 600px;\r\n    height:400px;\r\n    margin: auto;\r\n    margin-top:15px;\r\n    margin-bottom: 30px;\r\n}\r\n.grid-item{\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n/*Tricks*/\r\n.center1{\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n.center2{\r\n    margin: auto;\r\n    width: 50%;\r\n    text-align: center;}\r\n.center3 {\r\n    height: 200px;\r\n    position: relative;\r\n  }\r\n.center3 p {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    \r\n  }\r\n/*Basic*/\r\n.p-box1{\r\n    height: 300px;\r\n    width: 600px;\r\n    border: 1px solid yellowgreen;\r\n    position: relative;\r\n}\r\n.p-box2{\r\n    height: 100px;\r\n    width: 300px;\r\n    border: 1px solid salmon;\r\n}\r\n.p-relative{\r\n    position: relative;\r\n    top: 80px;\r\n    left: 150px;\r\n}\r\n.p-fixed{\r\n    width: 40px;\r\n    height: 40px;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0px;\r\n}\r\n.p-absolute{\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 100px;\r\n}\r\n.p-sticky{\r\n    position: sticky;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3NzL2Nzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0dBQ0csWUFBWTtBQUNmO0FBQ0E7SUFDSTtBQUNKO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQSxTQUFTO0FBRVQ7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQixDQUFDO0FBRXZCO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDOztFQUVsQztBQUNGLFFBQVE7QUFFUjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBRUksZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Nzcy9jc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9yZGVye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcbiAgIFxyXG59XHJcbi5ib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDYsIDEyMiwgMTkyKVxyXG59XHJcbi5ib3gtaXRlbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnFfYm9yZGVye1xyXG4gICBcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ib3JkZXJfeXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xyXG59XHJcbi5xX3BhZGRpbmd7XHJcbiAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4ucV9tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBTaWx2ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogU2lsdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEZWVwU2t5Qmx1ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmZsZXgtaXRlbTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRGVlcFNreUJsdWU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmJ0bntcclxuICAgbWFyZ2luOiAxNnB4OyBcclxufVxyXG4uYm9yZGVyMXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmViZWNjYXB1cnBsZVxyXG59XHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9HcmlkKi9cclxuLmdyaWQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5ncmlkLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLypUcmlja3MqL1xyXG5cclxuLmNlbnRlcjF7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jZW50ZXIye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICBcclxuLmNlbnRlcjMge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNlbnRlcjMgcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbiAgfSBcclxuLypCYXNpYyovXHJcblxyXG4ucC1ib3gxe1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wLWJveDJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2FsbW9uO1xyXG59XHJcbi5wLXJlbGF0aXZle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbn1cclxuLnAtZml4ZWR7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcbi5wLWFic29sdXRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG59XHJcbi5wLXN0aWNreXtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/css/css.component.html":
/*!****************************************!*\
  !*** ./src/app/css/css.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Tricks\">\n    <div>\n      <h6>// clear float</h6>\n      <p>If we have use float and element size is bigger that its parent then\n        goes to below to avoid that use clear fix increase parent size fit in </p>\n      <div>\n        <div> .clearfix::after </div>\n        <div> content: \"\";</div>\n        <div> clear: both;</div>\n        <div> display: table;</div>\n        <div>  </div>\n      </div>\n    </div>\n    <p>\n      // use vertical-align :-top :- if div goes to bottom\n    </p>\n    <p>\n      Take item to centre\n    </p>\n    <p>1. Padding, text-align</p>\n    <div class=\"border center1\">\n      <div> padding: 20px; </div>\n      <div>text-align: center;\n      </div>\n    </div>\n    <p>2. margin, width</p>\n    <div class=\"border center2\">\n      <div> margin: auto; </div>\n      <div> width: 50%;</div>\n    </div>\n    <p>3. position, transform</p>\n    <div>\n      /* If the text has multiple lines, add the following: */\n      <div> .center p </div>\n      <div> line-height: 1.5;</div>\n      <div> display: inline-block;</div>\n      <div> vertical-align: middle;</div>\n\n    </div>\n    <div class=\"border center3\">\n      <div> position: absolute;</div>\n      <div> top: 50%;</div>\n      <div> left: 50%;</div>\n      <div> transform: translate(-50%, -50%);</div>\n      <p>\n        Center\n      </p>\n    </div>\n    <p>4. flex</p>\n    <div [style.height]=\"'300px'\" class=\"flex\">\n      <div [style.margin]=\"'auto'\" class=\"flex-item\"> margin: auto; </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Grid\">\n    <div class=\"question\">\n      <ul>\n        <li>display :grid, inline-grid takes only required space //makes Grid</li>\n        <li>grid-template-columns: auto auto auto; 80px 200px auto; makes 3 column based on value</li>\n        <li>grid-template-rows: 80px 200px; works on row</li>\n        <li>grid-column-gap: 50px;</li>\n        <li>grid-raw-gap: 50px;</li>\n        <li>grid-gap: 50px 100px; row column</li>\n      </ul>\n      <div>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style={'display':'grid'}\">Grid</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'display':'inline-grid'}\">Inline grid</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-template-columns':'auto auto'}\">auto auto</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-template-columns':' 80px 200px auto'}\"> 80px 200px auto\n          </mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-template-rows':'40px 100px'}\">Template rows</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-column-gap':'25px'}\">column gap</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-row-gap':'25px'}\"> raw gap</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-gap':'25px 50px'}\">Gap</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div [ngStyle]=\"style\" class=\"grid-container\">\n        <div class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n    <div class=\"question\">\n      <div>\n        <p>\n          justify-content: space-evenly,space-around,space-between,center,start,end :- horizontal alignment\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style2={'justify-content':''}\">Reset</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'start'}\">start</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'center'}\">center</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'end'}\">end</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'space-evenly'}\">space-evenly</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'space-between'}\">space-between</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'space-around'}\">space-around</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div [ngStyle]=\"style1\" class=\"grid-container\">\n        <div class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n    <div class=\"question\">\n      <div>\n        <h6>\n          align-content: space-evenly,space-around,space-between,center,start,end; :- vertical handle\n        </h6>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style2={'align-content':''}\">Reset</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'start'}\">start</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'center'}\">center</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'end'}\">end</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'space-evenly'}\">space-evenly</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'space-between'}\">space-between</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'space-around'}\">space-around</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div [ngStyle]=\"style2\" class=\"grid-container\">\n        <div class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n    <h2>\n      Grid -item\n    </h2>\n    <div class=\"question\">\n      <div>\n        <ul>\n          <li> grid-row-start: 1 grid-row-end :3 grid-column-start: 1 grid-column-end :3 same</li>\n          <li> grid-column: 1 / 5; start at 1 and end at 5</li>\n          <li> grid-column: 1 / span 3; start at 1 take 3 column</li>\n          <li> grid-row: 1 / 4;</li>\n          <li> grid-row: 1 / span 2;</li>\n          <li> grid-area: 1 / 2 / 5 / 6; row from 1-5 column 5-6</li>\n          <li> grid-area: 2 / 1 / span 2 / span 3;. row start 2 left 2 span column start at 1 left 3 span</li>\n        </ul>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style3={'grid-row-start':'1'}\">grid-row-start</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-column':'1/5'}\">grid-column 1/5</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-column':'1 / span 3'}\">grid-column 1 / span 3</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-row':'1 / 4'}\">grid-row 1/4</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-row':'1 / span 2'}\">grid-row 1/span 2</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-area':'1/2/5/6'}\">grid-area 1</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-area':'2 / 1 / span 2 / span 3'}\">grid-area 2</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div class=\"grid-container\">\n        <div [ngStyle]=\"style3\" class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Basic\">\n    <div>\n      <div class=\"box\">\n        <div class=\"box-item border\">\n          <div class=\"q_border border_y\">\n            <p> border : 1px solid yellow</p>\n          </div>\n        </div>\n        <div class=\"box-item border q_padding\">\n          100px\n          padding-top: 100px;\n          <div>Leave space inside div</div>\n        </div>\n        <div class=\"box-item border\">\n          100px\n          <div class=\"q_margin border_y\">\n            margin-top: 100px;\n            <div>Leave space form outside div</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"box\">\n        <div class=\"box-item border\">\n          <div class=\"q_border border_y\">\n            <div class=\"code\">\n              box-sizing: border-box;\n            </div>\n            <div>margin padding take from its width</div>\n          </div>\n        </div>\n        <div class=\"box-item border q_padding\">\n          text-align: center;\n          <div>text-align: justify; justify,left right center gives space </div>\n        </div>\n        <div class=\"box-item border\">\n          <div>\n            display :block //start with new line takes width 100%\n          </div>\n          <div>\n            display :inline // inline with same line don't take height and width\n          </div>\n          <div>\n            display :inline-block // same line takes width and height\n          </div>\n        </div>\n      </div>\n      <div class=\"box\">\n        <div>\n          <h6>positions positioned using the top, bottom, left, and right</h6>\n          <div class=\"pos1\">\n            <p>1.Static :-Default</p>\n            <div class=\"p-box1\">\n              box1\n              <div class=\"p-box2\">\n                box 2\n              </div>\n            </div>\n          </div>\n          <div class=\"pos1\">\n            <p> 2. relative :- its moves from its original position</p>\n            <div class=\"p-box1\">\n              box1\n              <div class=\"p-box2 p-relative\">\n                box 2\n                <div> position: relative;</div>\n                <div> top: 80px;</div>\n                <div> left: 150px;</div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pos1\">\n            <p>3 fixed :-position remains fixed to the viewport</p>\n            <div class=\"p-box1\">\n              box1\n              <div> position: fixed;</div>\n              <div> bottom: 0px;</div>\n              <div> left: 0px;</div>\n              box2\n\n              <div class=\"p-box2 p-fixed\">\n                fixed\n              </div>\n            </div>\n          </div>\n          <div class=\"pos1\">\n            <p>absolute :-If parent is not positioned it get\n              relative to the body. its get relative to its parent. just like fixed get relative to view port\n            </p>\n            <div class=\"p-box1\">\n              box1\n              <div class=\"p-box2 p-absolute\">\n                box2\n                <div> position: absolute;</div>\n                <div> bottom: 100px</div>\n                <div> left: 100px </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"pos1\">\n            <p> 5. sticky :- get sticky like menu with scroll </p>\n            <div class=\"p-box1\" [ngStyle]=\"{'overflow':'scroll'}\" [style.height]=\"'300px'\">\n              box1\n              <!-- <div>\nSample text for scroll\n              </div> -->\n              <div>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,\n                nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec\n                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis\n                sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.\n                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet\n                sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non\n                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem\n                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\n                lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec\n                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis\n                sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.\n                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet\n                sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non\n                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem\n                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\n                lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec\n                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis\n                sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.\n                Nunc sagittis </div>\n              <div class=\"p-box2 p-sticky\">\n                box2\n                <div> position: sticky;</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-sticky\"></div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Flex\">\n    <div class=\"flex-container1\">\n      <h1>\n        Flex\n      </h1>\n      <p>\n        Flex : adjust automatically\n      </p>\n      <div class=\"flex\">\n        <div class=\"flex-item border\">Item1</div>\n        <div class=\"flex-item border\">Item2</div>\n        <div class=\"flex-item border\">Item3</div>\n        <div class=\"flex-item border\">Item4</div>\n      </div>\n      <div>\n        <p>\n          justify-content :flex-start :- Handle flex-items horizontally\n        </p>\n        <p>\n          flex-start, flex-end, center, space-between, space-around\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"justifyContent='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='space-between'\">Space-between</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='space-around'\">space-around</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [style.justify-content]=\"justifyContent\" class=\"flex\">\n          <div class=\"flex-item border1\">Item1</div>\n          <div class=\"flex-item border1\">Item2</div>\n          <div class=\"flex-item border1\">Item3</div>\n          <div class=\"flex-item border1\">Item4</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          align-items: flex-start || handel vertical\n        </p>\n        <p>\n          align-items: flex-start,flex-end,center,baseline,stretch : vertical\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"alignItem='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='baseline'\">Baseline</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='stretch'\">Stretch</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [style.align-items]=\"alignItem\" class=\"flex-container\">\n          <div [ngStyle]=\"{'padding-top': '20px'}\" [style.height]=\"'100px'\" class=\"flex-item1 border1\">Item1</div>\n          <div [ngStyle]=\"{'padding-top': '10px'}\" [style.height]=\"'75px'\" class=\"flex-item1 border1\">Item2</div>\n          <div [ngStyle]=\"{'padding-top': '30px'}\" [style.height]=\"'120px'\" class=\"flex-item1 border1\">Item3</div>\n          <div [ngStyle]=\"{'padding-top': '5px'}\" class=\"flex-item1 border1\">Item4</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          flex-wrap: wrap; less space content goes to next line\n        </p>\n        <p>\n          flex-wrap: wrap|| nowrap\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"wrap='wrap'\">Wrap</mat-button-toggle>\n          <mat-button-toggle (click)=\"wrap='nowrap'\">No wrap</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [style.flex-wrap]=\"wrap\" class=\"flex-container\">\n          <div class=\"flex-item border1\">Item1</div>\n          <div class=\"flex-item border1\">Item2</div>\n          <div class=\"flex-item border1\">Item3</div>\n          <div class=\"flex-item border1\">Item4</div>\n          <div class=\"flex-item border1\">Item5</div>\n          <div class=\"flex-item border1\">Item6</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          align-content: flex-start || align to baseline\n        </p>\n        <p>\n          align-content:stretch,flex-start,flex-end,center,space-between,space-around :\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"alignContent='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='space-between'\">Space between</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='space-around'\">Space around</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [ngStyle]=\"{'align-content':alignContent,'flex-wrap':'wrap'}\" class=\"flex-container\">\n          <div class=\"flex-item border1\">Item1</div>\n          <div class=\"flex-item border1\">Item2</div>\n          <div class=\"flex-item border1\">Item3</div>\n          <div class=\"flex-item border1\">Item4</div>\n          <div class=\"flex-item border1\">Item5</div>\n          <div class=\"flex-item border1\">Item6</div>\n        </div>\n\n        <h2>Flex -item</h2>\n        <div class=\"question\">\n          <p>\n            order : 3 \\\\ change the position of child\n          </p>\n          <p>\n            margin-left :auto \\\\ it will push all item to left\n          </p>\n          <p>\n            margin: auto; \\\\to takes item in center\n          </p>\n          <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n            <mat-button-toggle (click)=\"style={'order':'3'}\">Order</mat-button-toggle>\n            <mat-button-toggle (click)=\"style={'margin-left':'auto'}\">Margin left</mat-button-toggle>\n            <mat-button-toggle (click)=\"style={'margin':'auto'}\">margin auto</mat-button-toggle>\n          </mat-button-toggle-group>\n          <p>Example with 1 div</p>\n          <div class=\"flex\">\n            <div [ngStyle]=\"style\" class=\"flex-item border1\">Item1</div>\n          </div>\n          <p>Example with 3 div</p>\n          <div class=\"flex\">\n            <div [ngStyle]=\"style\" class=\"flex-item border1\">Item1</div>\n            <div [ngStyle]=\"style\" [style]=\"style.order\" class=\"flex-item border1\">Item2</div>\n            <div [ngStyle]=\"style\" class=\"flex-item border1\">Item3</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          align-self :- flex-start \\\\ child override the align-item\n        </p>\n        <p>\n          flex-start,flex-end,center,baseline,stretch\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"alignSelf='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='baseline'\">Baseline</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='stretch'\">Stretch</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div class=\"flex-container\">\n          <div [style.align-self]=\"alignSelf\" [style.height]=\"'100px'\" class=\"flex-item1 border1\">Item1</div>\n          <div [ngStyle]=\"{'padding-top': '20px'}\" [style.align-self]=\"alignSelf\" [style.height]=\"'75px'\"\n            class=\"flex-item1 border1\">Item2</div>\n          <div [ngStyle]=\"{'padding-top': '10px'}\" [style.align-self]=\"alignSelf\" [style.height]=\"'120px'\"\n            class=\"flex-item1 border1\">Item3</div>\n          <div [ngStyle]=\"{'padding-top': '30px'}\" class=\"flex-item border1\">Don;t have any align </div>\n          <div [ngStyle]=\"{'padding-top': '5px'}\" [style.align-self]=\"alignSelf\" class=\"flex-item1 border1\">Item4</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <ul>\n          <li> flex:2 :number of places it will take its take all the space</li>\n          <li> flex-basis:100px for width</li>\n          <li> flex-shrink:3 decrease size flex-grow:3 increase size</li>\n        </ul>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style={'flex':'2'}\">Flex 2</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'flex-basis':'100px'}\">Flex basis</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'flex-shrink':'3'}\">Flex-shrink</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'flex-grow':'3'}\">Flex-grow</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div class=\"flex\">\n          <div [ngStyle]=\"{'flex':style.flex}\" class=\"flex-item border1\">Flex 2</div>\n          <div [ngStyle]=\"{'flex-basis':style['flex-basis']}\" class=\"flex-item border1\">Flex basic</div>\n          <div [ngStyle]=\"{'flex-shrink':style['flex-shrink']}\" class=\"flex-item border1\">Flex-shrink</div>\n          <div [ngStyle]=\"{'flex-grow':style['flex-grow']}\" class=\"flex-item border1\">Flex-grow</div>\n          <div *ngIf=\"style['flex-shrink']\" class=\"flex-item border1\">Extra to check flex shrink</div>\n          <div *ngIf=\"style['flex-shrink']\" class=\"flex-item border1\">flex shrink It will shrink first</div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/css/css.component.ts":
/*!**************************************!*\
  !*** ./src/app/css/css.component.ts ***!
  \**************************************/
/*! exports provided: CssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponent", function() { return CssComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CssComponent = /** @class */ (function () {
    function CssComponent() {
        this.justifyContent = 'flex-start';
        this.alignItem = 'flex-start';
        this.alignSelf = 'flex-start';
        this.alignContent = 'flex-start';
        this.wrap = 'wrap';
        this.style = '';
        this.style1 = '';
        this.style2 = '';
        this.style3 = '';
    }
    CssComponent.prototype.ngOnInit = function () {
    };
    CssComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-css',
            template: __webpack_require__(/*! ./css.component.html */ "./src/app/css/css.component.html"),
            styles: [__webpack_require__(/*! ./css.component.css */ "./src/app/css/css.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CssComponent);
    return CssComponent;
}());



/***/ }),

/***/ "./src/app/data-structure/data-structure.component.css":
/*!*************************************************************!*\
  !*** ./src/app/data-structure/data-structure.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-data-structure{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1zdHJ1Y3R1cmUvZGF0YS1zdHJ1Y3R1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtc3RydWN0dXJlL2RhdGEtc3RydWN0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZGF0YS1zdHJ1Y3R1cmV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/data-structure/data-structure.component.html":
/*!**************************************************************!*\
  !*** ./src/app/data-structure/data-structure.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Sort\">\n    <app-sort></app-sort>\n  </mat-tab>\n  <mat-tab label=\"List\">\n    <app-list></app-list>\n  </mat-tab>\n  <mat-tab label=\"BST\">\n    <app-bst></app-bst>\n  </mat-tab>\n  <mat-tab label=\"Hashing\">\n    <app-hashing></app-hashing>\n  </mat-tab>\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/data-structure/data-structure.component.ts":
/*!************************************************************!*\
  !*** ./src/app/data-structure/data-structure.component.ts ***!
  \************************************************************/
/*! exports provided: DataStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStructureComponent", function() { return DataStructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataStructureComponent = /** @class */ (function () {
    function DataStructureComponent() {
    }
    DataStructureComponent.prototype.ngOnInit = function () {
    };
    DataStructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-structure',
            template: __webpack_require__(/*! ./data-structure.component.html */ "./src/app/data-structure/data-structure.component.html"),
            styles: [__webpack_require__(/*! ./data-structure.component.css */ "./src/app/data-structure/data-structure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataStructureComponent);
    return DataStructureComponent;
}());



/***/ }),

/***/ "./src/app/data/data.component.css":
/*!*****************************************!*\
  !*** ./src/app/data/data.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/data/data.component.html":
/*!******************************************!*\
  !*** ./src/app/data/data.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n    <mat-expansion-panel *ngFor=\"let data1 of data; let i =index\">\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h6>\n                    {{i+1}} {{data1.question}}\n\n                </h6>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"text_background\">\n            <div *ngFor=\"let response of data1.responses\">\n                <div class=\"question_value\">\n                    <p> {{response.value}}</p>\n                </div>\n                <div ngClass=\"mt5\" *ngIf=\"response.image\" class=\"code_snippet\">\n                     <mat-divider></mat-divider>\n                    <img [src]=\"imageBaseUrl + response.image\">\n                     <mat-divider></mat-divider>\n\n                </div>\n                <div class=\"question_description\">\n                    <div *ngFor=\"let val of response.desc\">\n                        <p> {{val}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/*!****************************************!*\
  !*** ./src/app/data/data.component.ts ***!
  \****************************************/
/*! exports provided: DataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataComponent", function() { return DataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataComponent = /** @class */ (function () {
    function DataComponent() {
        this.imageBaseUrl = '';
    }
    DataComponent.prototype.ngOnInit = function () {
        console.log(22222222, this.imageBaseUrl);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataComponent.prototype, "imageBaseUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataComponent.prototype, "data", void 0);
    DataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.css */ "./src/app/data/data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/files/angular.ts":
/*!**********************************!*\
  !*** ./src/app/files/angular.ts ***!
  \**********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
    "angular": [{
            "question": "Angular Command",
            "responses": [{
                    "value": "npm install -g @angular/cli@latest",
                },
                {
                    "value": "ng generate directive highlight",
                },
                {
                    "value": "ng serve",
                },
                {
                    "value": "ng generate service heroes/hero",
                },
                {
                    "value": "ng generate pipe safe",
                },
                {
                    "value": "ng generate component xyz CREATE",
                    "desc": [
                        "CREATE src/app/xyz/xyz.component.html (18 bytes)",
                        "CREATE src/app/xyz/xyz.component.spec.ts (607 bytes)",
                        "CREATE src/app/xyz/xyz.component.ts (263 bytes)",
                        "CREATE src/app/xyz/xyz.component.css (0 bytes)",
                        "UPDATE src/app/app.module.ts (535 bytes)"
                    ],
                },
            ]
        },
        {
            "question": "Selector",
            "responses": [{
                    "value": "'app-server' or selector: '[app-server]' or selector: '.app-server'",
                },
                {
                    "value": '<app-server></app-server> or <div app-server></div> or <div    class="app-server"></div>',
                }
            ]
        },
        {
            "question": "Angular.json",
            "responses": [{
                    "value": "Angular use angular.json file to build the code.",
                },
                {
                    "value": "Angular contain entry point for our application like index.html and style files, CLIBuilder command",
                },
                {
                    "value": " Required script get added at our index.html page(main.ts, polyfills.js)",
                },
                {
                    "value": "main.ts create the browser environment to run our application \\ platformBrowserDynamic().bootstrapModule(AppModule)\
            ",
                },
                {
                    "type": "text",
                    "value": 'AppModule contain all the component and bootstrap the main component',
                    "desc": ["{", "declarations: [AppComponent, AngularBasicComponent,MyPipePipe] --  Contain component and pipes ",
                        "Providers:[services] --add services get injected",
                        "Import:[FormsModule,browserModule,MatTabsModule] --Import FormsModule to use ngModel in AppModule",
                        "bootstrap:AppComponent",
                        "}"
                    ]
                }
            ]
        },
        {
            "question": "polyfill",
            "responses": [{
                    "value": "a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers.",
                },
            ]
        },
        {
            "question": "Components",
            "responses": [{
                    "value": "Building block of Angular applications. Can be reused"
                },
                {
                    "value": "Components lifecycle events :- You can respond to events in the lifecycle of a component or directive",
                },
                {
                    value: '@Component({',
                    desc: [
                        '      selector: "app - tet",',
                        '      templateUrl: :./tet.component.html,',
                        '      styleUrls: ["./ tet.component.css"],',
                        '      changeDetection: ChangeDetectionStrategy.OnPush,',
                        '      encapsulation: ViewEncapsulation.ShadowDom,',
                        '      providers: [{provide: HeroService, useValue: {name: "abhishek tet1"}}],',
                        '      animations: []',
                        '     })',
                    ]
                },
                {
                    "value": "ngOnChanges :- Called before ngOnInit(), called on data-bound input properties change.",
                    "desc": [
                        "Note that this happens very frequently so any operation you perform here impacts performance significantly",
                        "if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges()"
                    ]
                },
                {
                    "value": "ngOnInit  :- Called once, after the first ngOnChanges()",
                },
                {
                    "value": "ngDoCheck :-use for custom detect changes. Detect and act upon changes that Angular can't or won't detect on its own. Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run",
                },
                {
                    "value": "ngAfterContentInit :-Called once after the first ngDoCheck().",
                },
                {
                    "value": "ngAfterContentChecked :- Called after ngAfterContentInit() and every subsequent ngDoCheck().",
                },
                {
                    "value": "ngAfterViewInit :- Called once after the first ngAfterContentChecked()",
                },
                {
                    "value": "ngAfterViewChecked :- Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked",
                },
                {
                    "value": "ngOnDestroy :- Called immediately before Angular destroys the directive or component",
                },
            ]
        },
        {
            "question": "Component Interaction",
            "responses": [{
                    "value": "Child to parent ------Input & Output",
                    "image": "./parent2child1.png",
                },
                {
                    "image": "./parent2child2.png",
                },
                {
                    "value": "Parent to child -- Local variable",
                    "desc": [
                        'Parent access child by creating a template reference variable for the child element  #timer',
                    ]
                },
                {
                    "image": "./parent2child3.png",
                },
                {
                    "image": "./parent2child4.png",
                },
                {
                    "value": "@ViewChild() -- Inject the child component into the parent as a ViewChild.",
                    "image": "./parent2child5.png"
                },
                {
                    "image": "./parent2child6.png"
                },
                {
                    "value": "Parent and children communicate via a service"
                },
                {
                    "value": "Event EventEmitter"
                }
            ]
        },
        {
            "question": " Dynamic component loader",
            "responses": [{
                    "value": "ComponentFactoryResolver to add components dynamically. At runtime",
                    "desc": [
                        'The anchor directive  :- Define anchor point to tell Angular where to insert components',
                        ' <ng-template adHost></ng-template>'
                    ]
                }]
        },
        {
            "question": "Angular elements",
            "responses": [{
                    "value": " Angular elements are Angular components packaged as custom elements (Web Components) create new custom tag which work with any framework and lib. less code of angular",
                }]
        },
        {
            "question": "Template",
            "responses": [{
                    "value": "a template is a chunk of HTML. Within a template, you can use special syntax to leverage many of Angular's features.",
                }]
        },
        {
            "question": "Interpolation",
            "responses": [{
                    "value": "It get changed {{...}} <h3>Current customer: {{ currentCustomer }}</h3>",
                }]
        },
        {
            "question": "Pipes",
            "responses": [{
                    "value": "Transforming Data Using Pipes",
                    "desc": ["{{ birthday | date | uppercase}}", "{{name|localization}}",
                        "It can be pure or not",
                        "pure:false it wil run on every change detection",
                        "pure :false, slow the app",
                        "Pure it will run only if its value changed this is benefits over service"
                    ]
                }]
        },
        {
            "question": "Data binding // Template syntax ",
            "responses": [{
                    "desc": [
                        "Interpolation   - {{name}}",
                        "Property binding  -<input [value]='firstName'> ",
                        "Event binding     -  <button (click)='readRainbow($event)'>",
                        "Attribute binding  - <div [attr.role]='myAriaRole'> ",
                        "Class binding    -   <div [class.extra-sparkle]='isDelightful'> ",
                        "Style binding    -  <div [style.width.px]='mySize'>	",
                        "Two-way data binding with ngModel	 	<my-cmp [(title)]='name'>",
                        "<p>Card No.: {{cardNumber | myCardNumberFormatter}}</p> : pipe",
                        "<p>Employer: {{employer?.companyName}}</p> check null",
                    ]
                }]
        },
        {
            "question": "HTML attribute and the DOM property",
            "responses": [{
                    "value": "HTML attribute and the DOM property are different things, even when they have the same name. (attr/property :- id,property:textContent,attr:area*)",
                    "desc": ['define attributes on your HTML elements. browser parse and convert it into object node and object  property',
                        'In Angular, the only role of HTML attributes is to initialize element and directive state',
                        'Template binding works with properties and events, not attributes.',
                        'Attributes initialize DOM properties and then they are done. Property values can change; attribute values cant.',
                        '<input [attr.disabled]="condition ? "disabled" : null">',
                        'There is one exception to this rule. Attributes can be changed by setAttribute(), which re-initializes corresponding DOM properties',
                    ]
                }]
        },
        {
            "question": "Binding Property",
            "responses": [{
                    "value": '<img [src]="heroImageUrl"> ||<app-hero-detail [hero]="currentHero"></app-hero-detail> || <div [ngClass]="{special: isSpecial}"></div>',
                    "desc": [
                        'Event binding',
                        '<button (click)="onSave()">Save</button>',
                        '<app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>',
                        '<div (myClick)="clicked=12" clickable>click me</div>',
                    ]
                },
                { value: 'Two-way :- <input [(ngModel)]="name">' },
                { value: 'Attribute  :- <button [attr.aria-label]="help">help</button>' },
                { value: 'Class :- <div [class.special]="isSpecial">Special</div>' },
                { value: ' Style <button [style.color]="isSpecial ? "red" : "green">' },
                { value: ' [style]="styleExpression"' }
            ]
        },
        {
            "question": "Template expression operators",
            "responses": [{
                    "desc": [
                        '<p>Item json pipe: {{item | json}}</p>',
                        ' <p>The item name is: {{item?.name}}</p>   ',
                        ' Sometimes a binding expression triggers a type error during AOT compilation ',
                        ' <p>The items undeclared best by date is: {{$any(item).bestByDate}}</p>',
                    ]
                }]
        },
        {
            "question": "Directives",
            "responses": [{
                    "value": "Building block of Angular applications. Can be reused",
                    "desc": [
                        '  attribute directives :- change the appearance or behavior of an element, component or another directive.',
                        "e.g [ngClass] and [ngStyle], [NgModel]",
                        '  structural directives. -- change the DOM layout by adding and removing DOM elements.. ',
                        'ngFor ,ngIf,NgSwitch =>* means going to change dom',
                        '  Components directives --directives with a template',
                    ]
                }]
        },
        {
            "question": "Custom directive",
            "responses": [{
                    "value": "it is like component don't have template .we can change style by using ElementRef add event using HostListener.",
                    "desc": ["we can also create custom structural directive "]
                }]
        },
        {
            "question": "Injector",
            "responses": [{
                    "value": "An object in the Angular dependency-injection system. can find a named dependency in its cache or create a dependency using a configured provider",
                    "desc": ["An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.",
                        "hierarchy of injectors at the NgModule and component level",
                        "You can configure injectors with different providers that can provide different implementations of the same dependency e.g useClass,useValue,useExisting"
                    ]
                }]
        },
        {
            "question": "Injectable",
            "responses": [{
                    "value": "Service get inserted at root or at module level",
                    "desc": [" @Injectable({providedIn: root,}) :- service get injected at root level",
                        "@NgModule({providers: [UserService]}) :- service get injected at module level",
                        "providedIn in better that providers array.",
                    ]
                }]
        },
        {
            "question": "Tree-shaking and @Injectable()",
            "responses": [{
                    "value": "providedIn property is preferable to the @NgModule()",
                    "desc": ["providedIn in better that providers array.", "if service is not used in any component then it wont be added in our bundle :- Called Tree shaking",
                        "Tree-shaking :- While optimization in bundle don't add injectable services that is not used",
                        "@Injectable({",
                        "providedIn: UserModule",
                        "})",
                        "@NgModule({",
                        "providers: [UserService],",
                        "})",
                    ]
                }]
        },
        {
            "question": "Dependency injection",
            "responses": [{
                    "value": "Single instance in the entire app, unless you configure another provider with a child injector",
                    "desc": ["@Injectable() creating service instances and inject the service in component", "Class asks for dependencies from external sources rather than creating them itself",
                        "DI framework provides declared dependencies to a class when that class is instantiated",
                        "supply data to a component from an injectable service class"
                    ]
                },
                {
                    value: "Configure service to provider",
                    desc: [
                        "In the @Injectable() decorator for the service itself.",
                        "In the @NgModule() decorator for an NgModule.",
                        "In the @Component() decorator for a component.",
                    ]
                },
                {
                    "value": "Multiple service instances (sandboxing)",
                    "desc": ["Provide services at component level"]
                }
            ]
        },
        {
            "question": "Providers",
            "responses": [{
                    "value": "configuring providers, you can make services available to the parts of your application that need them",
                    "desc": [
                        "default behavior is for the injector to instantiate that class with new",
                        "{ provide: HeroService, useClass:Service1Service } :- give instance of Service1Service. if Service1Service its not already provided it will work",
                        "{ provide: HeroService, useExisting:Service1Service } :- uses existing service.Service1Service already should be provide ,instance should be there ",
                        "{ provide: HeroService, useValue:{name:'abhishek yadav' } :- pass value to it"
                    ]
                },
                {
                    value: "Non-class dependencies :-want to add object without any type"
                },
                {
                    value: "1. String token :- used for non class dependency",
                    desc: [
                        " { provide: 'CONFIG', useValue: {name:'abhishek' }",
                        "constructor(@Inject('CONFIG') public Config: any) {}",
                        "As its uses string instead of type it is prone to error. can be overridden by other developer or other lib"
                    ]
                },
                {
                    value: "2. Injection Token :- used for non class dependency",
                    desc: [
                        "export const APP_CONFIG = new InjectionToken<any>('');",
                        "{ provide: APP_CONFIG, useValue: {name:'abhishek' }",
                        "constructor(@Inject(APP_CONFIG) public Config: any) {}",
                    ]
                },
                {
                    value: "Factory providers :-To create a changeable, dependent value based on information unavailable before run time, you can use a factory provider",
                    desc: [
                        "export let heroServiceProvider =",
                        "{",
                        "provide: HeroService,",
                        "     useFactory: heroServiceFactory,",
                        "     deps: [Logger, UserService]//pass these 2 heroServiceFactory based on its value instances             get set",
                        "};	",
                        " const heroServiceFactory = (logger: Logger, userService: UserService) => {",
                        " return new HeroService(logger, userService.user.isAuthorized);",
                        "};",
                    ]
                }
            ]
        },
        {
            "question": "@Self @SkipSelf @Host @Optional",
            "responses": [{
                    "value": "constructor( @Optional() @Host private heroService: HeroService){}",
                    "desc": ["@Self :- the injector only looks at the component's injector for its providers",
                        "@SkipSelf : - skip the local injector and look up in the hierarchy ",
                        " @Optional() // ok if the logger doesn't exist",
                        " @Host()     // it will in self and its parent",
                        "e.g :-Directive we have used in component the directive look in it self and it parent component",
                        " <ng-content></ng-content>:- in this child can access to till its parent"
                    ]
                }]
        },
        {
            "question": "To break circular dependencies ",
            "responses": [{
                    "value": "providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }],",
                    "desc": ["forwardRef() Allows to refer to references which are not yet defined."]
                }]
        },
        {
            "question": "Routing",
            "responses": [{
                    "value": "Bases on path component get loaded",
                    "desc": [
                        "      create app.routing module add in app.module  ",
                        "      add path in routes array"
                    ]
                },
                {
                    image: "routes1.png"
                },
                {
                    value: "Nested route add route-outlet and matching url get loaded"
                }]
        },
        {
            "question": "Read param from url ",
            "responses": [{
                    "value": "constructor(private route: ActivatedRoute) {}",
                    "desc": [
                        "  this.route.queryParams.subscribe(params => {",
                        "      this.name = params['name'];",
                        "      });",
                    ]
                }, {
                    value: "this.router.navigate(['/heroes', { id: heroId }])"
                },
                {
                    value: 'PathLocationStrategy—the default "HTML5 pushState" style.'
                },
                {
                    value: 'HashLocationStrategy—the "hash URL" style.'
                }
            ]
        },
        {
            "question": "Interceptors  ",
            "responses": [{
                    "value": "inspect and transform HTTP requests from your application to a server.",
                    "desc": ["caching,adding header,logging"]
                }]
        },
        {
            "question": "Internationalization",
            "responses": [{
                    "value": "Localizing your app :- dates, times, numbers, and currencies ",
                }]
        },
        {
            "question": "Schematic",
            "responses": [{
                    "value": "create code like angular cli command",
                    "desc": ["schematic is a template-based code generator that supports complex logic"]
                }]
        },
        {
            "question": "service worker and PWA progressive web app",
            "responses": [{
                    "value": "manage caching of application",
                    "desc": [
                        "cache application like installing native application",
                        "update happened in background",
                        "it download manifest from server :which file to cache. inform new version available downloaded and cached",
                    ]
                }]
        },
        {
            "question": "Getter",
            "responses": [{
                    "value": "getter :-  get fullName(){} :-html {{ fullName }}",
                }]
        },
        {
            "question": "Change detection",
            "responses": [{
                    "value": "Synch UI with state of data",
                    "desc": [
                        "When it runs save current state as previous state for next time running",
                        "Event(click) changes state it trigger change detection",
                        "Event, Promises and setTimeout, setInterval trigger change detection"
                    ]
                }]
        },
        {
            "question": "Calling method directly form view",
            "responses": [{
                    "value": "If you use functional inside expressions it will get called on every change detection  {{getFullName()}}",
                    "desc": ["getFullName will get called on every time change detection run. Not good",
                        "Change detection get called in component even event ocurred at outside of this component",
                    ]
                }, {
                    value: "Solution",
                    desc: [
                        "1. changeDetection: ChangeDetectionStrategy.OnPush :-  change detection work only in this component if event occur in it or if its input changes",
                        "2. Use pure pipe :- during change detection pure pipe get called only when its input changes"
                    ]
                }]
        },
        {
            "question": "Track by",
            "responses": [{
                    "value": "ngFor if we change the array it will re-render the view again. track by only changed element get re-render",
                    "desc": ["When we have more record like 1k then it is useful"]
                }]
        },
        {
            "question": "Content projection",
            "responses": [{
                    "value": "<ng-content></ng-content> :- <home>it will get inserted in home template where we right <ng-content></ng-content> </home>",
                }]
        },
        {
            "question": "ViewProviders and providers",
            "responses": [{
                    "value": "view provider its service get access in view but not in <ng-content>",
                    "desc": [
                        " @Component({",
                        "    providers: [UserService]",
                        "  })",
                        "  @Component({",
                        "      viewProviders: [UserService]",
                        "    })",
                    ]
                }]
        },
        {
            "question": "View encapsulation",
            "responses": [{
                    "value": "CSS styles are encapsulated into the component's view and don't affect the rest of the application",
                },
                {
                    value: "encapsulation: ViewEncapsulation.ShadowDom",
                    desc: ["encapsulate css. its style remain separate from rest of the dom. its children will get its style"]
                },
                {
                    value: "encapsulation: ViewEncapsulation.none",
                    desc: ["style goes to global level",
                        "If same style in parent and child last style get applied as last loaded to the UI"
                    ]
                },
                {
                    value: "encapsulation: ViewEncapsulation.Emulated",
                    desc: ["By default :-its children will not get its styling. it add host to id and its content"]
                }
            ]
        },
        {
            "question": "Shadow DOM",
            "responses": [{
                    "value": "Style and behavior hidden from other component .like video tag",
                }]
        },
        {
            "question": "Form",
            "responses": [{
                    "value": "1. Reactive forms",
                    "desc": ["more scalable, reusable, and testable .model get handle explicitly"]
                },
                {
                    image: "form1.png",
                },
                {
                    value: "profileForm.value to get",
                    desc: ["this.profileForm.setValue({}) takes complete object   this.profileForm.patchValue({}) can update single property"]
                },
                {
                    value: "FormBuilder :- Its service provide reactive form module",
                    image: "form2.png"
                },
                {
                    value: "Dynamic forms: FormArray :- its uses FormArray its an alternative to FormGroup. used to create dynamic form ",
                    image: "form3.png",
                    desc: [
                        "To change the controls in the array, use the push, insert, removeAt or clear methods in FormArray itself."
                    ]
                },
                {
                    value: "formGroup => FormControl => Make group of form control based on object dynamic form will get created change that object form will change",
                    desc: []
                },
                {
                    value: "2. Template-driven forms :-",
                    desc: [
                        "rely on directives in the template to create and manipulate the underlying object model. 2 way binding."
                    ]
                },
            ]
        },
        {
            "question": " Custom form validation",
            "responses": [{
                    "value": "In reactive form we just pass function to formcontrol along with other validator",
                    "image": "form4.png",
                    "desc": [
                        "  in Template-driven forms we create the directive and add to the input field",
                    ]
                }]
        },
        {
            "question": "Template variables ",
            "responses": [{
                    "value": "Building block of Angular applications. Can be reused",
                    "desc": [' <input #phone placeholder="phone number" />', '<button (click)="callPhone(phone.value)">Call</button>']
                }]
        },
        {
            question: "Differential loading",
            responses: [{
                    value: "create 2 bundle for application 1. small for modern browser . 2. large for old browser",
                }]
        },
        {
            question: "Eager loading",
            responses: [{
                    value: "module or component get loaded at launch opposite of lazy loading",
                }]
        },
        {
            question: "Angular CLI builders",
            responses: [{
                    value: "we can add command or modify existing command like  ng build,ng test and ng lint",
                    desc: [
                        "we create 1 node project with schema (input format),builder.json file which has copy-package in it	",
                        "we right logic in our file index.js give its reference in builder.json file",
                        "run command tsc it will convert .ts file to .js file",
                        "we import node project inside our angular project package.json file.", "devDependencies '@example/copy-file':'file:../command-builder",
                        "we can create command like ng run builder-test:copy-package by adding it in angular.json file",
                    ]
                }]
        },
        {
            question: "pass data on navigation",
            responses: [{
                    value: "const navigationExtraData = this.router.getCurrentNavigation()",
                    desc: [
                        "this.router.navigate(['home'], data); pass data read in home component //navigationExtraData.extras.data"
                    ]
                }]
        },
        {
            question: "Zone.js",
            responses: [{
                    value: "It work similar to javascript event loop",
                    desc: [
                        " JavaScript event loop",
                        " Its contain Heap,Stack and Queue",
                        " Heap :- Its has all the data in it like object",
                        " stack :- When our code execute function get stored in stack.",
                        "Function calls form a stack of frame set",
                        " Queue :- Queue store the message, message is link to function and it call the function",
                        "Runtime handle the message from old one. message get removed",
                        "from queue and its function get called",
                        "calling a function creates a new stack frame for that",
                        "function's use",
                        "The processing of functions continues until the stack is once again empty",
                        "Then, the event loop will process the next message in the queue (if there is one)",
                        "while (queue.waitForMessage()) {",
                        "queue.processNextMessage()",
                    ],
                },
                {
                    value: "message :- setTimeout, setInterval, event",
                    desc: [
                        "  messages are added anytime an event occurs and there is an event listener attached to it",
                        "  If there is no listener, the event is lost",
                        "  If 1 message is being held then other have to w8.  ",
                        "  setTimeout called with 2 parameter. seconde parameter tell add this to queue after this time",
                    ]
                },
                {
                    value: "Zone :-  A zone is an execution context that persists across async tasks.",
                    desc: [
                        " Angular handle the async operation like setInterval,setTimeout,promise,event in zone after that it trigger the change detection		   ",
                        " While Zone.js can monitor all the states of synchronous and asynchronous operations Angular additionally provides a service called NgZone",
                        "ngZone.runOutsideAngular(func) => does to trigger change detection ",
                        "ngZone.run(func) => detect changes run. There are some 3rd party API zone does not handle e.g 		 ",
                        "                    New async API(Event drive API) is not handled by Zone, so you need to use ngZone.run() run change detection",
                        " IF you don't want to run change detection on few events like ['scroll', 'mousemove'];			",
                        "  create file zone-flags.ts => add =>(window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove'];	",
                        "  Import file in  Polyfills.ts  import `./zone-flags`; before import 'zone.js'; ",
                        " If you don't want to run change detection on your app automatically then disable it by",
                        "                Remove the zone.js import from polyfills.ts:			  ",
                        " main.ts => bootstrapModule(AppModule, { ngZone: 'noop' })",
                    ]
                }
            ]
        },
        {
            question: "Angular Material",
            responses: [{
                    value: "Material Design components for Angular, its new easy to use compare to bootstrap. its new has less feature",
                    desc: [
                        "  run ng add @angular/material it will add @angular/material && @angular/cdk",
                        "  it will add css theme path in angular.json => styles []",
                        "  ./node_modules/@angular/material/prebuilt-themes/indigo-pink.css ",
                        "  or you can import in .css file  => @import '~@angular/material/prebuilt-themes/indigo-pink.css';",
                        "  Add module BrowserAnimationsModule in app.moudle.ts imports. and component you want to use like MatSliderModule,MatTabsModule",
                    ]
                }]
        },
        {
            question: "Angular Animation",
            responses: [{
                    value: "use for animation. State of element changes from one state to other like 'Open'=>'closed or 'closed'=>'Open' ",
                    desc: [,
                        "when change the value of isOpen based on 'open','closed','abhi', it will  pick mentioned style with transition delay",
                    ]
                },
                {
                    image: "animation1.png"
                }
            ]
        },
        {
            question: "Observable",
            responses: [{
                    value: "Tt work on producer and consumer logic",
                    desc: [
                        "RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
                    ]
                },
                {
                    image: "observable1.png",
                },
                {
                    value: "Observers :-Observers are just objects with three callbacks	",
                    desc: [
                        "  {",
                        "      next(x) { console.log('got value ' + x); },",
                        "      error(err) { console.error('something wrong occurred: ' + err); },",
                        "      complete() { console.log('done'); }",
                        "    }",
                    ]
                },
                {
                    value: "RxJS Operators",
                    desc: [
                        "   Operators are functions. 2 type",
                        "   1. Pipeable Operators  :- can be piped - takes oberable gives new observable ",
                        "   2. Creation Operators :- standalone function",
                        "   const observable = from([1, 2, 3]); array",
                        "   of :- Converts the arguments to an observable sequence",
                        "          of(1, 2, 3)",
                        "        .pipe(map((x) => x * x),filter((v) => !(v % 2)))",
                        "        .subscribe((v) => console.log(`value: ${v}`));	",
                        "const observable = interval(1000);",
                        "var itswllRun4Time = observable.pipe(take(4))	"
                    ]
                },
            ]
        },
        {
            question: "Subject",
            responses: [{
                    value: "special type of Observable that allows values to be multicasted to many Observers. ",
                    image: "subject1.png",
                    desc: [
                        "        its do the work of both oberable and observer",
                        "        Every Subject is an Observable.",
                        "        Every Subject is an Observer.",
                        "     //  While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.		",
                        "     Observable and subject :-Subject is multicasted ,Observable is unicast Observable	",
                        "     BehaviorSubject :-	Its maintain the last emitted value when you subscribe it get emitted first",
                        "                             const subject = new BehaviorSubject(0); // first value will be 0",
                        "                          its always maintain the current value like last next value.",
                        "                         ",
                        "     ReplaySubject :-  const subject = new ReplaySubject(2); when new subscriber it last 2 value emitted",
                        "     AsyncSubject :- const subject = new AsyncSubject(); // when subject.complete() then only last value get emitted",
                        "     asyncScheduler :- code run in aync",
                        "                       var observable = new Observable((proxyObserver) => {proxyObserver.next(1);proxyObserver.next(2)proxyObserver.complete();",
                        "                       }).pipe(observeOn(asyncScheduler));",
                    ]
                },]
        },
        {
            question: "<ng-template> and <ng-container>",
            responses: [{
                    value: "Use as a grouping element",
                    desc: [
                        "<ng-template> :- It is never displayed html directly. Use for structural directives such as: ngIf, ngFor, ngSwitch",
                        "<ng-container> : simple syntax. can be used direclty with html no need of extra directive like *ngIf	"
                    ]
                }]
        },
        {
            question: "if else",
            responses: [{
                    desc: [
                        ' <div *ngIf="condition else elseBlock">div1</div> ',
                        ' <div #elseBlock> div2</div> '
                    ]
                }]
        }
    ]
};


/***/ }),

/***/ "./src/app/files/angularQuestion.ts":
/*!******************************************!*\
  !*** ./src/app/files/angularQuestion.ts ***!
  \******************************************/
/*! exports provided: questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
var questions = {
    angular: [{
            question: "AOT",
            responses: [{
                    value: "Angular provides two types of compilation:",
                    desc: [
                        "1.JIT(Just-in-Time) compilation - compiles inside the browser during runtime.",
                        "2. AOT(Ahead-of-Time) compilation. compiles during the build time"
                    ]
                }]
        },
        {
            question: "Angular Universal",
            responses: [{
                    value: "render applications on the server-side :better SEO. fast loading",
                    desc: []
                }]
        },
        {
            question: "async pipe",
            responses: [{
                    value: "<div>{{ time | async }}</div>	",
                    desc: [
                        "when value get resolved by promise or obserable value get printed."
                    ]
                }]
        },
        {
            question: "What happens if you use script tag inside template?",
            responses: [{
                    value: "angular consider unsafe code and automatically sanitizes it. remove it form view",
                    desc: []
                }]
        },
        {
            question: "What are template statements",
            responses: [{
                    value: " A template statement responds to an event raised by a binding target such as an element, component, or directive",
                    desc: [
                        " <button (click)='editProfile()'>Edit Profile</button>"
                    ]
                }]
        },
        {
            question: "What are angular elements",
            responses: [{
                    value: "providing a way to use Angular components in non-Angular environments.used as basic html tag	",
                    desc: []
                }]
        },
        {
            question: "What are custom elements",
            responses: [{
                    value: "kooo",
                    desc: []
                }]
        },
        {
            question: "What are custom elements",
            responses: [{
                    value: "Custom elements (or Web Components) ",
                    desc: [
                        "which extends HTML	. allowing you to define a tag whose content is created and controlled by JavaScript code"
                    ]
                }]
        },
        {
            question: "What is router outlet ",
            responses: [{
                    value: " <router-outlet></router-outlet>",
                    desc: [
                        " <!-- Routed components go here -->	",
                        " <a routerLink='/todosList' >List of todos</a>",
                        " <a routerLink='/todosList1' routerLinkActive='active'>List of todos</a>",
                    ]
                }]
        },
        {
            question: "What is router state",
            responses: [{
                    value: "RouterState is a tree of activated routes	",
                    desc: []
                }]
        },
        {
            question: "What is activated route",
            responses: [{
                    value: "information about a route associated with a component loaded in an outlet",
                    desc: [
                        "  constructor(route: ActivatedRoute)",
                        "  route.params.pipe(map(p => p.id))",
                        "  route.url.pipe(map(segments => segments.join('')))",
                        "  route.data.pipe(map(d => d.user))",
                    ]
                }]
        },
        {
            question: "What is the purpose of Wildcard route",
            responses: [{
                    value: "kooo",
                    desc: [
                        " { path: '**', component: PageNotFoundComponent }"
                    ]
                }]
        },
        {
            question: "What is metadata rewriting",
            responses: [{
                    value: "converts the expression initializing the fields such as useClass, useValue, useFactory",
                    desc: []
                }]
        },
        {
            question: "What is the purpose of any type cast function",
            responses: [{
                    value: "To disable type error",
                    desc: [
                        "template:  '{{ $any(user).contacts.email }}'",
                        "template:   '{{ $any(this).contacts.email }}'",
                    ]
                }]
        },
        {
            question: "Non null type assertion operator",
            responses: [{
                    value: "{{contact!.email}} handle null",
                    desc: []
                }]
        },
        {
            question: "What is zone",
            responses: [{
                    value: "A Zone is an execution context that persists across async tasks	",
                    desc: [
                        "Angular relies on zone.js to run Angular's change detection processes when native JavaScript operations raise events"
                    ]
                }]
        },
        {
            question: "How to inject the dynamic script in angular",
            responses: [{
                    value: "Using DomSanitizer we can inject the dynamic Html,Style,Script,Url.",
                    desc: [
                        "htmlSnippet: string = this.sanitizer.bypassSecurityTrustScript(<script>safeCode()</script>);",
                        "<div [innerHtml]='htmlSnippet'></div>"
                    ]
                }]
        },
        {
            question: "Angular Ivy",
            responses: [{
                    value: "new rendering engine for Angular",
                    desc: [
                        "   enable ng new ivy-demo app --enable-ivy",
                        "   add in existing project tsconfig.app.json->angularCompilerOptions-> 'enableIvy': true",
                        "  Generated code that is easier to read and debug at runtime",
                        "  Faster re-build time",
                        "  Improved payload size",
                        "  Improved template type checking",
                        "  used with AOT"
                    ]
                }]
        },
        {
            question: "Angular Language Service",
            responses: [{
                    value: 'The Angular Language Service is a way to get completions, errors, hints, and navigation inside your Angular templates.',
                    desc: [
                        "   npm install --save-dev @angular/language-service",
                        "   and install vs code extensions angular language service.",
                    ]
                }]
        },
        {
            question: "Web workers",
            responses: [{
                    value: 'its run in background does not freeze the screen',
                    desc: []
                }]
        },
        {
            question: "codelyzer",
            responses: [{
                    value: 'Provides set of tslint rules3',
                    desc: []
                }]
        },
        {
            question: "What are the case types in Angular",
            responses: [{
                    value: '23',
                    desc: [
                        " 1. camelCase  :-Symbols, properties, methods, pipe names, non-component directive selectors,",
                        " 2. UpperCamelCase (or PascalCase): Class names, including classes that define components, interfaces, NgModules, directives, and pipes",
                        " 3. dash-case (or 'kebab-case'): file names",
                        " 4. UPPER_UNDERSCORE_CASE :-All constants",
                    ]
                }]
        },
        {
            "question": "Decorators",
            "responses": [{
                    "value": "Class Decorators:- @Component({...}),@Directive({...}),@Pipe({...}),@Injectable(),@NgModule()",
                    "desc": [
                        "field decorators :- @Input() myProperty;  <my-cmp [myProperty]='someExpression'>). ",
                        "field decorators :- @Output() myEvent = new EventEmitter();  <my-cmp (myEvent)='doSomething()'>).",
                        "@HostBinding('class.valid') isValid;  bind element property",
                        "@HostListener('click', ['$event']) onClick(e)  bind event",
                    ]
                }]
        },
        {
            question: "What is platform in Angular",
            responses: [{
                    value: '',
                    desc: [
                        "context in which an Angular application runs",
                        "it run in browser (platform-browser). it can also run on server (platform-server)",
                    ]
                }]
        },
        {
            question: "How do you select an element with in a component template ",
            responses: [{
                    value: '@ViewChild',
                    desc: [
                        "<input #uname>",
                        "@ViewChild('uname') input;",
                        "console.log(this.input.nativeElement.value);",
                    ]
                }]
        },
        {
            question: "How do you detect route change in Angular",
            responses: [{
                    value: 'this.router.events.subscribe((event: Event) => {})',
                    desc: []
                }]
        },
        {
            question: "What is the purpose of differential loading in CLI",
            responses: [{
                    value: '23',
                    desc: [
                        "create 2 build ES2015 for modern browser. ES5 syntax for old browser"
                    ]
                }]
        },
        {
            question: "How do you upgrade angular version",
            responses: [{
                    value: 'ng update //ng update @angular/cli @angular/core',
                    desc: []
                }]
        },
        {
            question: "What are the ways to trigger change detection in Angular",
            responses: [{
                    value: '23',
                    desc: [
                        "You can inject either ApplicationRef or NgZone, or ChangeDetectorRef into your component ",
                        "ApplicationRef.tick():change detection run on entire tree",
                        "NgZone.run(callback) :-",
                        "ChangeDetectorRef.detectChanges() :- run in its component and its children",
                    ]
                }]
        },
        {
            question: "change detection",
            responses: [{
                    value: 'change detection run and angular update the view',
                    desc: [
                        "it run because of ",
                        "1.When component load call ApplicationRef.tick() ",
                        "2.Event listener",
                        "3. HTTP request",
                        "4. MacroTasks, such as setTimeout() or setInterval()  ",
                        "5. MicroTasks, such as Promise.then() 	",
                        "6. Other async operations :- WebSocket.onmessage() and Canvas.toBlob()",
                    ]
                }]
        },
        {
            question: "difference between interpolated content and innerHTML",
            responses: [
                {
                    value: "<div >{{htmlSnippet}}</div> && <div [innerHTML]='htmlSnippet'></div>",
                    desc: [
                        " innerHTML get interpreted and script get removed. ",
                        "in interpolation it does not get interpreted print as text content	want to attach html then only innerHTML will work not {{}}	   "
                    ]
                }
            ]
        },
        {
            question: "What is RxJS",
            responses: [{
                    value: "RxJS is a library for composing asynchronous and callback-based code using Observables it uses operators for processing observables.",
                    desc: []
                }
            ]
        },
        {
            question: "What is an observable",
            responses: [{
                    value: "An Observable is a unique Object similar to a Promise that can help manage async code. ",
                    desc: [
                        "The observables are created using new keyword.its can emit multiple value"
                    ]
                }
            ]
        },
        {
            question: "What is an observer?",
            responses: [{
                    value: " Consumer what will get",
                    desc: [
                        "       Observer is an interface for a consumer of push-based notifications delivered by an Observable	",
                        "      const observer = {",
                        "     next: x => console.log('Observer got a next value: ' + x),",
                        "     error: err => console.error('Observer got an error: ' + err),",
                        "     complete: () => console.log('Observer got a complete notification'),",
                        "}"
                    ]
                }
            ]
        },
        {
            question: "What is the difference between promise and observable",
            responses: [{
                    value: "adf",
                    desc: [
                        "    Observable	",
                        "    Declarative: it will not run until you subscribe it",
                        "    Provide multiple values over time",
                        "    Provides chaining and subscription to handle complex applications",
                        "    Promise",
                        "    Execute immediately on creation",
                        "    Provide only one",
                    ]
                }
            ]
        },
        {
            question: "subject",
            responses: [{
                    value: " While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast",
                    desc: []
                }
            ]
        },
        {
            question: "What are observable creation functions ",
            responses: [{
                    desc: [
                        "    from a promise :-const observable = from(fetch('/api/endpoint')); ",
                        "    from counter:-  const observable = ajax('/api/data');",
                        "    from an event:-  const el = document.getElementById('custom-element');",
                        "                     const observable = fromEvent(el, 'mousemove'); ",
                        "    form ajax   :-   const observable = ajax('/api/data')	",
                    ]
                }
            ]
        },
        {
            question: "asdf",
            responses: [{
                    value: "adf",
                    desc: []
                }
            ]
        },
        {
            question: "asdf",
            responses: [{
                    value: "adf",
                    desc: []
                }
            ]
        },
        {
            question: "asdf",
            responses: [{
                    value: "adf",
                    desc: []
                }
            ]
        },
    ]
};


/***/ }),

/***/ "./src/app/files/javascript.ts":
/*!*************************************!*\
  !*** ./src/app/files/javascript.ts ***!
  \*************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
        question: "syntax parser",
        responses: [{
                value: "A program that read your code and determine and what it does and if its grammar is valid",
            }]
    },
    {
        question: "Lexical environment",
        responses: [{
                value: "where something sit physically in the code you write",
                desc: []
            }]
    },
    {
        question: "Execution context",
        responses: [{
                value: " Wrapper to help manage the code that is running, when function is called new execution context is crated",
                desc: []
            }]
    },
    {
        question: "Global",
        responses: [{
                value: "Not inside function",
                desc: []
            }]
    }, {
        question: "Hoisting",
        responses: [{
                value: "Memory get allocated for variable and function while Execution context get created",
                desc: []
            }]
    }, {
        question: "Scope",
        responses: [{
                value: "Where variable is available in your code",
                desc: []
            }]
    }, {
        question: "Let",
        responses: [{
                desc: [
                    "block scope",
                    "not Hoisting",
                    "can not redeclare",
                    "get different variable in Memory each time loop run"
                ]
            }]
    }, {
        question: "Types in JavaScript",
        responses: [{
                value: "1. Primitive Types",
                desc: [
                    "types of data that represent single data",
                    "that is not a object",
                    "Value type we can not change that we have reassign value",
                    "Value type"
                ]
            },
            {
                value: "2.Non Primitive Types",
                desc: [
                    "Array and object",
                    "reference type"
                ]
            }
        ]
    }, {
        question: "Dynamic type",
        responses: [{
                value: "We don't tell what kind of data we variable hold its get decided at runtime",
                desc: []
            }]
    },
    {
        question: "Object",
        responses: [{
                value: "Key value pair var obj  = new Object()",
                desc: []
            }]
    },
    {
        question: "Object literal",
        responses: [{
                value: "var obj = {}",
                desc: []
            }]
    },
    {
        question: "Function",
        responses: [{
                value: "Function are object,we can attach property, it has property NAME,CODE ",
                desc: []
            }]
    },
    {
        question: "First class function",
        responses: [{
                value: "Everything we can do with other types we can do with function.Assign them to variable,pass them, create them on fly",
                desc: []
            }]
    },
    {
        question: "Function statement",
        responses: [{
                value: "don't return anything",
                desc: []
            }]
    },
    {
        question: "Function expression",
        responses: [{
                value: "unit of code that results in a value. it doesn't have to save variable",
                desc: []
            }]
    },
    {
        question: "Anonymous  function",
        responses: [{
                value: "function does not have name",
                desc: [
                    "with reference with a variable"
                ]
            }]
    },
    {
        question: " Mutated & Immutable",
        responses: [{
                desc: [
                    "Mutated :changed, array,object",
                    "Immutable :cant changed, primitive type , var let const"
                ]
            }]
    },
    {
        question: "this",
        responses: [{
                value: "from where function is being called",
                desc: []
            }]
    },
    {
        question: "Call Apply and Bind",
        responses: [{
                value: "Change to this",
                desc: [
                    "   var changedThis = myFunction.bind(this);changedThis();",
                    "   myFunction.call(this,param1,param2);  pass parameter ",
                    "    myFunction.apply(this,[param1,param2]); pass array ",
                    "///////////////////////////",
                    " var obj ={",
                    "     name:'abhi',",
                    "     print:function(val){  ",
                    "      console.log(val,this.name)",
                    "   }",
                    "   }",
                    "   obj.print('hi ')",
                    "   var obj2 ={",
                    "     name:'rohit'",
                    "   }",
                    "   obj.print.call(obj2,'hello ')",
                ]
            }]
    },
    {
        question: "Curring",
        responses: [{
                value: "Crating copy of function parameter with some preset parameter :/ used in mathematical ",
                desc: [
                    " function multi(a,b){",
                    "     return a*b;",
                    " }         ",
                    " var multiby2 = multi.bind(this,2);",
                    " multiby2(4);",
                ]
            }]
    },
    {
        question: "Inheritance",
        responses: [{
                value: "Object get access to properties and method of another object",
                desc: []
            }]
    },
    {
        question: "Prototype ",
        responses: [{
                value: "All object in JavaScript has property prototype which is reference to other object",
                desc: [
                    "it get used by new operator"
                ]
            }]
    },
    {
        question: "New",
        responses: [{
                value: "var john = new User() , new will create new object var ={} .if you don't return value then JavaScript will return new object that is crated by new",
                desc: [
                    "this will get return from the function",
                    "Function constructor :-Normal function that is used to construct a object",
                    "The 'this' variable point to new empty object. and that object is get return automatically ",
                ]
            },
            {
                value: " Construct a object with a function  ",
                image: "./assets/images/new.png",
            },
        ]
    },
    {
        question: "Inheritance 1",
        responses: [{
                value: "  function User(fname,lname){",
                desc: [
                    "     this.name= fname",
                    "      this.lName =lname;",
                    "  }  ",
                ]
            },
            {
                value: "  User.prototype.getFullName = function(){",
                desc: [
                    " return this.name +this.lName;",
                    "}"
                ]
            },
            {
                value: "function SmartUser(fname,lname,age){",
                desc: [
                    "      User.call(this,fname,lname);",
                    "      this.age = age;",
                    "  }",
                    " SmartUser.prototype =  User.prototype;",
                    " //   SmartUser.prototype = Object.create(User.prototype);",
                    "   SmartUser.prototype.fullDetail = function(){",
                    "          return 'my full details is ' this.name +''+this.lname +'age ='+ this.age;",
                    "   }",
                    "   var smartUser = new SmartUser('abhishek','yadav',27);",
                    "   console.log(smartUser.getFullName())",
                    "   console.log(smartUser.name)",
                    "   console.log(smartUser.lName)",
                    "   console.log(smartUser.age)",
                    "   console.log(smartUser.fullDetail())",
                ]
            },
            {
                value: " Don't use method inside function if we have multiple object function get method get repeated in Memory",
                desc: [
                    "User.prototype.getFullName = function(){",
                    "return this.name +this.lname;",
                    "            }",
                    "instead of that Assign that method to prototype it will get crated only once in Memory                             ",
                    "Function constructor :-Normal function that is used to construct a object",
                    "The 'this' variable point to new empty object. and that object is get return automatically ",
                ]
            },
        ]
    },
    {
        question: " Pure Prototype Inheritance :- ",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: [
                    "  Var user = {",
                    "      name:'default',",
                    "      lName:'default',",
                    "      getFullName:function(){",
                    "          return this.name+ this.lName",
                    "      }",
                    "  }",
                    " var john = Object.create(user)"
                ]
            }]
    },
    {
        question: "class",
        responses: [{
                value: "JavaScript does not have class internally it uses prototype : its Synthetic sugar around object",
                desc: []
            }]
    },
    {
        question: "Inheritance 2 class",
        responses: [{
                desc: [
                    "     class User{",
                    "         constructor(name,lname){",
                    "               this.name = name;",
                    "              this.lName = lname;",
                    "            }",
                    "                getFullName(){",
                    "              return this.name + this.lName;",
                    "            }",
                    "       }",
                    "    class SmartUser extends User{",
                    "                  constructor(name,lname){",
                    "                         super(name,lname);",
                    "                         this.age = age;",
                    "                   }",
                    "                    fullDetail = function(){",
                    "                           return 'my full details is +' this.name +' '+this.lname +'age ='+ this.age;",
                    "                     }",
                    "     }                                    ",
                    "            ",
                    "    var smartUser = new SmartUser('abhishek','yadav',27);",
                    "    console.log(smartUser.getFullName())",
                    "    console.log(smartUser.name)",
                    "    console.log(smartUser.lName)",
                    "    console.log(smartUser.age)",
                    "    console.log(smartUser.fullDetail())",
                ]
            }]
    },
    {
        question: "use strict",
        responses: [{
                value: "Add extra rule while it parse the code like if we Assign value to variable without declaring it name ='abhishek' throw error",
                desc: []
            }]
    },
    {
        question: "Library like jquery",
        responses: [{
                value: "xxxxxxxxxxxx",
                image: "./assets/images/lib-like-jquery.png",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
    {
        question: "33333333",
        responses: [{
                value: "xxxxxxxxxxxx",
                desc: []
            }]
    },
];


/***/ }),

/***/ "./src/app/hashing/hashing.component.css":
/*!***********************************************!*\
  !*** ./src/app/hashing/hashing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhc2hpbmcvaGFzaGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hashing/hashing.component.html":
/*!************************************************!*\
  !*** ./src/app/hashing/hashing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hashing works!\n</p>\n\n<div>\n  <ul>\n    <li>\n      Data get stored in array\n    </li>\n    <li>\n      Hast table:- javascript object uses hashing. Other language use hashing for dictionary like python\n    </li>\n    <li>\n      hash table :- holy grail of data structure take constant time in find insert delete O(1)\n    </li>\n    <li>\n      Hash function :- Hashing uses hash function which return the hashcode like index which is used to access and store\n      the data\n    </li>\n    <li>\n      hash = hashfunc(key) <br>\n      index = hash % array_size<br>\n      Hash function should be good it should have less collision\n    </li>\n    <li>\n      Some time different keys gives same hashcode this is called hashing collision\n      To fix this we user\n      1. Linear probing - (open addressing or closed hashing)\n      2. Separate chaining (open hashing)\n    </li>\n    <li>\n      Linear Probing :-\n      <ul>\n        <li>\n          If hashcode alreay has value then we find the next empty cell<br>\n        </li>\n        <li>\n          It is better than Open hashing if we maintain the load factor <br>\n        </li>\n        <li>\n          increase array size if number element increases ie thresold load factor <br>\n        </li>\n        <li>\n          Load factor = No of item in array/ array size == 0.667\n        </li>\n        <li>\n          linear probing function :- P(x) = ax +b;\n        </li>\n      </ul>\n    <li>\n      Separate chaining (open hashing) :- We uses link list to store the key and value\n    </li>\n    <li>\n      Probing function :- We need good probing function that will repeat n place.\n      Dont get stuck repeating same thing\n    </li>\n  </ul>\n</div>\n<div>\n\n</div>"

/***/ }),

/***/ "./src/app/hashing/hashing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hashing/hashing.component.ts ***!
  \**********************************************/
/*! exports provided: HashingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashingComponent", function() { return HashingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HashingComponent = /** @class */ (function () {
    function HashingComponent() {
        this.arr = [];
    }
    HashingComponent.prototype.ngOnInit = function () {
        this.arr.length = 100;
        this.setValue('name', 'abhishek');
        this.setValue('lName', 'yadav');
        this.setValue('age', '20');
        this.setValue('like', 'everything');
        console.log(this.getValue('name'));
        console.log(this.getValue('lName'));
        console.log(this.getValue('age'));
        console.log(this.getValue('like'));
        console.log(this.arr);
    };
    HashingComponent.prototype.setValue = function (key, value) {
        var hashCode = this.hashFunction(key);
        var index = hashCode % this.arr.length;
        this.arr[index] = [key, value];
    };
    HashingComponent.prototype.setValueLinearProbing = function (key, value) {
        var hashCode = this.hashFunction(key);
        var index = hashCode % this.arr.length;
        while (this.arr[index]) {
            index = (index + 1) % this.arr.length;
        }
        this.arr[index] = [key, value];
    };
    HashingComponent.prototype.setValueQuaraticProbing = function (key, value) {
        var hashCode = this.hashFunction(key);
        var index = hashCode % this.arr.length;
        var h = 0;
        while (this.arr[index]) {
            index = (h * h) % this.arr.length;
            h++;
        }
        this.arr[index] = [key, value];
    };
    HashingComponent.prototype.setValueDoubleHashing = function (key, value) {
        var hashCode = this.hashFunction(key);
        var hashCode2 = this.hashFunction(key);
        var index = hashCode % this.arr.length;
        var index2 = hashCode2 % this.arr.length;
        var h = 0;
        while (this.arr[index]) {
            index = (index + index2) % this.arr.length;
        }
        this.arr[index] = [key, value];
    };
    HashingComponent.prototype.getValue = function (key) {
        var hashCode = this.hashFunction(key);
        var index = hashCode % this.arr.length;
        return this.arr[index];
    };
    HashingComponent.prototype.hashFunction = function (str) {
        var ascii = 0;
        for (var i = 0; i < str.length; i++) {
            ascii += (str[i].charCodeAt() * 10) + i + 1;
        }
        return ascii % 2069;
    };
    HashingComponent.prototype.hashFunction2 = function (str) {
        var ascii = 0;
        for (var i = 0; i < str.length; i++) {
            ascii += (str[i].charCodeAt()) + i + 1;
        }
        return ascii % 2069;
    };
    HashingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hashing',
            template: __webpack_require__(/*! ./hashing.component.html */ "./src/app/hashing/hashing.component.html"),
            styles: [__webpack_require__(/*! ./hashing.component.css */ "./src/app/hashing/hashing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HashingComponent);
    return HashingComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar {\r\n    line-height: 60px;\r\n    font-size: 16px;\r\n}\r\n.nav-bar .active{\r\n    color: rgb(97, 218, 251);\r\n}\r\n.nav-bar a{\r\n    color: var(--white);\r\n    padding-left: 13px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5uYXYtYmFyIC5hY3RpdmV7XHJcbiAgICBjb2xvcjogcmdiKDk3LCAyMTgsIDI1MSk7XHJcbn1cclxuLm5hdi1iYXIgYXtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <nav>\n      <a routerLinkActive=\"active\" routerLink=\"/home\">Home</a>\n      <a routerLinkActive=\"active\" routerLink=\"/angular\">Angular</a>\n      <a routerLinkActive=\"active\" routerLink=\"/data-structure\">Data Structure</a>\n      <a routerLinkActive=\"active\" routerLink=\"/javascript\">Javascript</a>\n      <a routerLinkActive=\"active\" routerLink=\"/css\">CSS</a>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.border{\r\n    border:1px solid red;\r\n   \r\n}\r\n.box{\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    border: 1px solid rgb(46, 122, 192)\r\n}\r\n.box-item{\r\n    display: inline-block;\r\n    width: 33.33%;\r\n    height: 200px;\r\n    vertical-align: top;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n}\r\n.q_border{\r\n   \r\n    width: 80%;\r\n    margin:auto;\r\n    height: 100px;\r\n    margin-top: 50px;\r\n    padding-top: 18px;\r\n    box-sizing: border-box;\r\n}\r\n.border_y{\r\n    border: 1px solid yellowgreen;\r\n}\r\n.q_padding{\r\n   padding-top: 100px;\r\n}\r\n.q_margin{\r\n    margin-top: 100px;\r\n}\r\n.flex{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 120px;\r\n    background-color: Silver;\r\n    margin-bottom: 10px;\r\n}\r\n.flex-container {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 240px;\r\n    background-color: Silver;\r\n    margin-bottom: 10px;\r\n}\r\n.flex-item {\r\n    background-color: DeepSkyBlue;\r\n    width: 20%;\r\n    height: 100px;\r\n    margin: 5px;\r\n}\r\n.flex-item1 {\r\n    background-color: DeepSkyBlue;\r\n    width: 20%;\r\n    margin: 5px;\r\n}\r\n.btn{\r\n   margin: 16px; \r\n}\r\n.border1{\r\n    border:1px solid rebeccapurple\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksb0JBQW9COztBQUV4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7R0FDRyxZQUFZO0FBQ2Y7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9yZGVye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcbiAgIFxyXG59XHJcbi5ib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDYsIDEyMiwgMTkyKVxyXG59XHJcbi5ib3gtaXRlbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnFfYm9yZGVye1xyXG4gICBcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ib3JkZXJfeXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xyXG59XHJcbi5xX3BhZGRpbmd7XHJcbiAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4ucV9tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBTaWx2ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogU2lsdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEZWVwU2t5Qmx1ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmZsZXgtaXRlbTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRGVlcFNreUJsdWU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmJ0bntcclxuICAgbWFyZ2luOiAxNnB4OyBcclxufVxyXG4uYm9yZGVyMXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmViZWNjYXB1cnBsZVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Home works"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/javascript/javascript.component.css":
/*!*****************************************************!*\
  !*** ./src/app/javascript/javascript.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phdmFzY3JpcHQvamF2YXNjcmlwdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/javascript/javascript.component.html":
/*!******************************************************!*\
  !*** ./src/app/javascript/javascript.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Basic\">\n      <app-data imageBaseUrl=\"/assets/images/javascript\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data  imageBaseUrl=\"/assets/images/javascript\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/javascript/javascript.component.ts":
/*!****************************************************!*\
  !*** ./src/app/javascript/javascript.component.ts ***!
  \****************************************************/
/*! exports provided: JavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptComponent", function() { return JavascriptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/javascript */ "./src/app/files/javascript.ts");



var JavascriptComponent = /** @class */ (function () {
    function JavascriptComponent() {
        this.jsData = _files_javascript__WEBPACK_IMPORTED_MODULE_2__["data"];
    }
    JavascriptComponent.prototype.ngOnInit = function () {
    };
    JavascriptComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.jsData = _files_javascript__WEBPACK_IMPORTED_MODULE_2__["data"];
        }
        else if (event.index == 1) {
            this.jsData = 2;
        }
    };
    JavascriptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-javascript',
            template: __webpack_require__(/*! ./javascript.component.html */ "./src/app/javascript/javascript.component.html"),
            styles: [__webpack_require__(/*! ./javascript.component.css */ "./src/app/javascript/javascript.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JavascriptComponent);
    return JavascriptComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <button (click)=\"start()\">start</button>\n</p>\n<div class=\"row\">\n  <div class=\"col-sm-7\">\n    <ul>\n      <li>\n        Best for deleting and inserting the data takes O(n) times better than array\n      </li>\n      <li>\n        Finding element takes O(n) time loop throuh all. Array is fast Binary sarch \n      </li>\n      <li>\n        Link list is made of node each node is point to the next node\n      </li>\n      <li>\n        Singly link list : Current node point to next\n        Doubly link list : Current node point to next and previous node\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-5\">\n    <div>\n      <h4>Code</h4>\n    </div>\n    <pre>\n      <code [innerHTML]=code[1]></code>\n    </pre>\n    <pre>\n      <code [innerHTML]=code[0]></code>\n    </pre>\n  </div>\n \n</div>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.head = null;
        this.size = 0;
        this.code = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.code[0] = "\n    LinkList() {\n      const self: any = this;\n      var obj = {\n        head: null,\n        size: 0,\n        insertAt: (element: any, index: any) => {\n          if (index > self.size) {\n            return;\n          }\n          self.size++\n          var newNode = { element: element, next: null };\n          if (index == 0) {\n            newNode.next = self.head;\n            self.head = newNode;\n          } else {\n            var cur = self.head;\n            var it = 0;\n            var prev: any = '';\n            while (it < index) {\n              it++;\n              prev = cur;\n              cur = cur.next;\n            }\n  \n            newNode.next = cur;\n            prev.next = newNode\n          }\n  \n        },\n        removeFrom: (index) => {\n          if (index > self.size) {\n            return\n          }\n          var it = 0;\n          var cur = self.head;\n          while (it < index - 1) {\n            it++;\n            cur = cur.next;\n          }\n          cur.next = cur.next.next;\n          self.size--\n        },\n        removeElement: (element) => {\n          var cur = self.head;\n          var prev = cur;\n          while (cur) {\n            if (cur.element == element) {\n              prev.next = cur.next\n              return;\n            }\n            prev = cur;\n            cur = cur.next;\n          }\n          self.size--\n        },\n        add: (val) => {\n          self.size++\n          var newNode = { element: val, next: null };;\n          if (!self.head) {\n            self.head = newNode\n          } else {\n            var current = self.head\n            while (current.next) {\n              current = current.next\n            }\n            current.next = newNode;\n          }\n        },\n        isEmpty: () => {\n          return !!self.head\n        },\n        size_Of_List: () => {\n          return self.size;\n        },\n        PrintList: () => {\n          var current = self.head\n          while (current) {\n            console.log(current.element);\n            current = current.next\n          }\n  \n        }\n      }\n      return obj\n    }\n    ";
        this.code[1] = "{\n      \"element\": \"inset item a 0\",\n      \"next\": {\n        \"element\": \"List Item 1\",\n        \"next\": {\n          \"element\": \"List Item 2\",\n          \"next\": {\n            \"element\": \"List Item 3\",\n            \"next\": {\n              \"element\": \"List Item 4\",\n              \"next\": {\n                \"element\": \"List Item 5\",\n                \"next\": {\n                  \"element\": \"List Item 6\",\n                  \"next\": {\n                    \"element\": \"List Item 7\",\n                    \"next\": {\n                      \"element\": \"List Item 9\",\n                      \"next\": null\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    ";
    };
    ListComponent.prototype.start = function () {
        this.head = null;
        this.size = 0;
        var list1 = this.LinkList();
        var i = 0;
        while (i < 10) {
            list1.add('List Item ' + i);
            i++;
        }
        list1.insertAt('inset item a 0', 0);
        list1.removeFrom(1);
        list1.removeElement('List Item 8');
        list1.PrintList();
    };
    ListComponent.prototype.LinkList = function () {
        var self = this;
        var obj = {
            head: null,
            size: 0,
            insertAt: function (element, index) {
                if (index > self.size) {
                    return;
                }
                self.size++;
                var newNode = { element: element, next: null };
                if (index == 0) {
                    newNode.next = self.head;
                    self.head = newNode;
                }
                else {
                    var cur = self.head;
                    var it = 0;
                    var prev = '';
                    while (it < index) {
                        it++;
                        prev = cur;
                        cur = cur.next;
                    }
                    newNode.next = cur;
                    prev.next = newNode;
                }
            },
            removeFrom: function (index) {
                if (index > self.size) {
                    return;
                }
                var it = 0;
                var cur = self.head;
                while (it < index - 1) {
                    it++;
                    cur = cur.next;
                }
                cur.next = cur.next.next;
                self.size--;
            },
            removeElement: function (element) {
                var cur = self.head;
                var prev = cur;
                while (cur) {
                    if (cur.element == element) {
                        prev.next = cur.next;
                        return;
                    }
                    prev = cur;
                    cur = cur.next;
                }
                self.size--;
            },
            add: function (val) {
                self.size++;
                var newNode = { element: val, next: null };
                ;
                if (!self.head) {
                    self.head = newNode;
                }
                else {
                    var current = self.head;
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = newNode;
                }
            },
            isEmpty: function () {
                return !!self.head;
            },
            size_Of_List: function () {
                return self.size;
            },
            PrintList: function () {
                var current = self.head;
                console.log(JSON.stringify(current));
                while (current) {
                    console.log(current.element);
                    current = current.next;
                }
            }
        };
        return obj;
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 Error\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe1'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/service.ts":
/*!*************************************!*\
  !*** ./src/app/services/service.ts ***!
  \*************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
        this._observableEmitter = {};
        this.data = [
            {
                id: "1",
                name: "abhi32",
                lastName: "yadav"
            },
            {
                id: "2",
                name: "abhishek",
                lastName: "yadav"
            },
            {
                id: "3",
                name: "Naruto",
                lastName: "yadav"
            }
        ];
        this.abhi = 'abhishek';
    }
    HeroService.prototype.getData = function () {
        return this.data;
    };
    HeroService.prototype.getHeroes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
    };
    HeroService.prototype.getHero = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data.filter(function (x) { return x.id == id; }));
    };
    HeroService.prototype.emitData = function (key, opts) {
        if (this._observableEmitter[key]) {
            this._observableEmitter[key].emit(opts);
        }
    };
    HeroService.prototype.getEmitter = function (key) {
        if (key) {
            this._observableEmitter[key] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            return this._observableEmitter[key];
        }
    };
    HeroService.prototype.heatApi = function () {
        this.http.post("http://localhost:8082/api/addComment", {
            "courseListIcon": "...",
            "description": "TEST",
            "iconUrl": "..",
            "longDescription": "...",
            "url": "new-url"
        })
            .subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    HeroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/services/service1.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/service1.service.ts ***!
  \**********************************************/
/*! exports provided: Service1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service1Service", function() { return Service1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var Service1Service = /** @class */ (function () {
    function Service1Service(http) {
        this.http = http;
        this._observableEmitter = {};
        this.data = [
            {
                id: "1",
                name: "Service1Service",
                lastName: "yadav"
            },
            {
                id: "2",
                name: "abhishek",
                lastName: "yadav"
            },
            {
                id: "3",
                name: "Naruto",
                lastName: "yadav"
            }
        ];
        this.abhi = 'abhishek';
    }
    Service1Service.prototype.getData = function () {
        return this.data;
    };
    Service1Service.prototype.getHeroes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
    };
    Service1Service.prototype.getHero = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data.filter(function (x) { return x.id == id; }));
    };
    Service1Service.prototype.emitData = function (key, opts) {
        if (this._observableEmitter[key]) {
            this._observableEmitter[key].emit(opts);
        }
    };
    Service1Service.prototype.getEmitter = function (key) {
        if (key) {
            this._observableEmitter[key] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            return this._observableEmitter[key];
        }
    };
    Service1Service.prototype.heatApi = function () {
        this.http.post("http://localhost:8082/api/addComment", {
            "courseListIcon": "...",
            "description": "TEST",
            "iconUrl": "..",
            "longDescription": "...",
            "url": "new-url"
        })
            .subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    Service1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Service1Service);
    return Service1Service;
}());



/***/ }),

/***/ "./src/app/sort/sort.component.css":
/*!*****************************************!*\
  !*** ./src/app/sort/sort.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highcharts-figure, .highcharts-data-table table {\r\n    min-width: 310px; \r\n    max-width: 800px;\r\n    margin: 1em auto;\r\n}\r\n\r\n#container {\r\n    height: 400px;\r\n}\r\n\r\n.highcharts-data-table table {\r\n\tfont-family: Verdana, sans-serif;\r\n\tborder-collapse: collapse;\r\n\tborder: 1px solid #EBEBEB;\r\n\tmargin: 10px auto;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmax-width: 500px;\r\n}\r\n\r\n.highcharts-data-table caption {\r\n    padding: 1em 0;\r\n    font-size: 1.2em;\r\n    color: #555;\r\n}\r\n\r\n.highcharts-data-table th {\r\n\tfont-weight: 600;\r\n    padding: 0.5em;\r\n}\r\n\r\n.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {\r\n    padding: 0.5em;\r\n}\r\n\r\n.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {\r\n    background: #f8f8f8;\r\n}\r\n\r\n.highcharts-data-table tr:hover {\r\n    background: #f1f7ff;\r\n}\r\n\r\nbutton{\r\n    margin: 5px;\r\n}\r\n\r\n.pl_5{\r\npadding-left: 5px;\r\n}\r\n\r\n.ml_5{\r\n    margin-left: 5px;\r\n    }\r\n\r\n.fr{\r\n        float:right;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29ydC9zb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtJQUNiLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCOztBQUNBO1FBQ0ksV0FBVztJQUNmIiwiZmlsZSI6InNyYy9hcHAvc29ydC9zb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlnaGNoYXJ0cy1maWd1cmUsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiAzMTBweDsgXHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAxZW0gYXV0bztcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRhYmxlIHtcclxuXHRmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGgge1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxufVxyXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRkLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRoLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIGNhcHRpb24ge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aGVhZCB0ciwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWY3ZmY7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5wbF81e1xyXG5wYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ubWxfNXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZnJ7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/sort/sort.component.html":
/*!******************************************!*\
  !*** ./src/app/sort/sort.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sort works!\r\n</p>\r\n<div>\r\n  <input [(ngModel)]=\"totalReord\" type=\"number\">\r\n  <button type=\"button\" (click)=\"generateRandomData()\" class=\"btn btn-primary\">Reset</button>\r\n  <input class=\"pl_5 ml_5\" (change)=\"checked = !checked\" type=\"checkbox\" [checked]=\"checked\">\r\n  <span *ngIf=\"time\" class=\"pl_5 fr\">time {{time}}</span>\r\n\r\n</div>\r\n<div class=\"button\">\r\n  <button type=\"button\" (click)=\"bubbleSort(1)\" class=\"btn btn-primary\">bubble Sort </button>\r\n  <button type=\"button\" (click)=\"insertionSort(2)\" class=\"btn btn-primary\">Insertion sort</button>\r\n  <button type=\"button\" (click)=\"heapSort(7)\" class=\"btn btn-primary\">heap Sort</button>\r\n\r\n  <button type=\"button\" (click)=\"selectionSort(3)\" class=\"btn btn-primary\">Selection sort</button>\r\n  <button type=\"button\" (click)=\"shellSort(4)\" class=\"btn btn-primary\">Shell sort</button>\r\n  <button type=\"button\" (click)=\"quickSort(5)\" class=\"btn btn-primary\">quick Sort</button>\r\n  \r\n  <button type=\"button\" (click)=\"mergeSort(6)\" class=\"btn btn-primary\">Merge sort</button>\r\n \r\n</div>\r\n<div id=\"container\"> </div>\r\n<div class=\"explain\">\r\n  <div [ngSwitch]=\"active\">\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"1\">\r\n      bubble sort\r\n      <ul>\r\n        <li>Highest element goes to end</li>\r\n        <li>\r\n         Compare with next element if its greater then swap\r\n        </li>\r\n        <li>\r\n          Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.\r\n        </li>\r\n        <li>\r\n          To much swap if starting element it Big\r\n          </li>\r\n          <li>\r\n            slow so many data to many swap\r\n          </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"2\">\r\n      <div>Insertion sort</div>\r\n      <ul>\r\n        <li>\r\n         If current (a[i]) element is greater than its prvious element(a[i--]) shift previous element by\r\n         a[j+1] = a[j]; and a[j+1] = a[i] \r\n         </li>\r\n        <li>\r\n        We check in previous value shift all value which are greater than current value and place current\r\n        value at its place ie. array remail sorted till i \r\n        </li>\r\n         <li>\r\n          Time Complexity: O(n*2)\r\n         </li>\r\n         <li>\r\n         To much swap if ending element it small\r\n         </li>\r\n         <li>\r\n          slow so many data to many swap\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"3\">\r\n      <div>Selection sort</div>\r\n      <ul>\r\n        <li>\r\n          Small element comes at first\r\n         </li>\r\n        <li>\r\n          selet the smallest element replace with current :- repeat \r\n        </li>\r\n         <li>\r\n          Time Complexity: O(n2)\r\n         </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"4\">\r\n      Shell sort\r\n      <li>\r\n       It work as insertion sort. we compare a[j] with a[j-h] and swap keep doing it till h =1\r\n      </li>\r\n      <li>\r\n       Instead of comparing to all element we sort with h gap  h = 3h +1 && h < data.length\r\n       we keep decreasing the gap till 1\r\n      </li>\r\n      <li>\r\n       sorting alogrithm : O(n*n)\r\n      </li>\r\n    </div>\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"5\">\r\n      quick sort\r\n      <li>\r\n        Divide and conqure\r\n      </li>\r\n      <li>\r\n        We create partition use it in recursion. Partition we divide array in 2 parts based\r\n        pivot value that is last element\r\n      </li>\r\n      <li>\r\n        It get divided into 2 parts left is less than pivot value and right is greater\r\n      </li>\r\n      <li>\r\n       sorting alogrithm : O(n*n)\r\n      </li>\r\n    </div>\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"6\">\r\n      Merge sort\r\n      <ul>\r\n        <li>\r\n          Divide and conqure ie. divide and merge \r\n        </li>\r\n        <li>\r\n        Best sorting alogrithm : O(nlog(n))\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"sort_elment\" *ngSwitchCase=\"7\">\r\n      Heap Sort\r\n      <ul>\r\n        <li>Priority queue</li>\r\n        <li>heapify :- current node should be grater than its children</li>\r\n        <li>\r\n          parent is greater than child. priority queue Max heap or min heap\r\n        </li>\r\n        <li>\r\n          heap visualize as array nearly binary tree\r\n        </li>\r\n        <li>\r\n          We have to heapify only n/2 element (Because lower half does not have any child)\r\n        </li>\r\n        <li>\r\n          For sorting heapify array. create new array of result with same size<br>\r\n          Now replace first element with last elemnt<br>\r\n          store first element in different array (result) in last position<br>\r\n          now reduce the array size by 1<br>\r\n          keep doing till arr.length ==0         \r\n\r\n        </li>\r\n      </ul>\r\n      <pre>\r\n        <code [innerHTML]=\"code[7]\"></code>\r\n      </pre>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sort/sort.component.ts":
/*!****************************************!*\
  !*** ./src/app/sort/sort.component.ts ***!
  \****************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



var SortComponent = /** @class */ (function () {
    function SortComponent() {
        this.chartOptions = {};
        this.randomData = [];
        this.totalReord = 1000;
        this.checked = false;
        this.time = 0;
        this.dataForGraph = [];
        this.active = 0;
        this.code = [];
    }
    SortComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.generateRandomData();
        }, 1000);
        this.code.length = 10;
        this.code[7] = "\n    heapify(arr) {\n      var n = Math.floor(arr.length / 2);\n      for (var i = n; i >= 0; i--) {\n        heapifyAtIndex(arr, i)\n      }\n      function heapifyAtIndex(arr, i) {\n        var largest = i;\n        var left = 2 * i + 1\n        var right = 2 * i + 2\n        if (arr[largest] < arr[left]) {\n          largest = left;\n        }\n        if (arr[largest] < arr[right]) {\n          largest = right;\n        }\n  \n        if (i !== largest) {\n          const temp = arr[largest];\n          arr[largest] = arr[i]\n          arr[i] = temp;\n          if (2 * largest < arr.length) {\n            heapifyAtIndex(arr, largest)\n          }\n        }\n      }\n      return arr;\n    }\n  \n    ";
    };
    SortComponent.prototype.generateRandomData = function () {
        this.active = 0;
        this.time = 0;
        if (this.totalReord) {
            this.totalReord = this.totalReord * 1;
        }
        this.randomData = [];
        for (var i = 0; i < this.totalReord; i++) {
            this.randomData.push(Math.floor(Math.random() * 1000));
        }
        //  this.randomData = [4,6,3,2,1,9,7]
        this.renderGraph();
    };
    SortComponent.prototype.renderGraph = function () {
        var _this = this;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            plotOptions: {
                series: {
                    animation: false
                }
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                }
            },
            series: [{
                    name: '',
                    showInLegend: false,
                    data: this.randomData
                }]
        };
        return new Promise(function (resolve, reject) {
            highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('container', _this.chartOptions, function (chart) {
                setTimeout(function () {
                    resolve(true);
                }, 0);
            });
        });
    };
    SortComponent.prototype.bubbleSort = function (activeIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var t1, data, i, j, temp, t2, dif;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.active = activeIndex;
                        this.time = 0;
                        t1 = new Date();
                        data = this.randomData;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < data.length)) return [3 /*break*/, 6];
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < data.length - i)) return [3 /*break*/, 5];
                        if (!(data[j] > data[j + 1])) return [3 /*break*/, 4];
                        temp = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = temp;
                        if (!!this.checked) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.renderGraph()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        j++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (!this.checked) return [3 /*break*/, 8];
                        t2 = new Date();
                        dif = t2.getTime() - t1.getTime();
                        this.time = dif / 1000;
                        return [4 /*yield*/, this.renderGraph()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SortComponent.prototype.insertionSort = function (activeIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var t1, i, key, j, t2, dif;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.active = activeIndex;
                        this.time = 0;
                        t1 = new Date();
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.randomData.length)) return [3 /*break*/, 8];
                        key = this.randomData[i];
                        j = i - 1;
                        _a.label = 2;
                    case 2:
                        if (!(j >= 0 && this.randomData[j] > key)) return [3 /*break*/, 5];
                        this.randomData[j + 1] = this.randomData[j];
                        j = j - 1;
                        if (!!this.checked) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.renderGraph()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5:
                        this.randomData[j + 1] = key;
                        if (!!this.checked) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.renderGraph()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 1];
                    case 8:
                        if (this.checked) {
                            t2 = new Date();
                            dif = t2.getTime() - t1.getTime();
                            this.time = dif / 1000;
                            this.renderGraph();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SortComponent.prototype.selectionSort = function (activeIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var t1, i, minIndex, min, j, temp, t2, dif;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.active = activeIndex;
                        this.time = 0;
                        t1 = new Date();
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.randomData.length)) return [3 /*break*/, 4];
                        minIndex = -1;
                        min = this.randomData[i];
                        for (j = i + 1; j < this.randomData.length; j++) {
                            if (min > this.randomData[j]) {
                                minIndex = j;
                                min = this.randomData[j];
                            }
                        }
                        if (!(minIndex != -1)) return [3 /*break*/, 3];
                        temp = this.randomData[i];
                        this.randomData[i] = this.randomData[minIndex];
                        this.randomData[minIndex] = temp;
                        if (!!this.checked) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.renderGraph()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (this.checked) {
                            t2 = new Date();
                            dif = t2.getTime() - t1.getTime();
                            this.time = dif / 1000;
                            this.renderGraph();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SortComponent.prototype.shellSort = function (activeIndex) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var t1, h, i, valueToInsert, j, temp, t2, dif;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.active = activeIndex;
                        this.time = 0;
                        t1 = new Date();
                        h = 1;
                        while (h < this.randomData.length / 3) {
                            h = 3 * h + 1;
                        }
                        _a.label = 1;
                    case 1:
                        if (!(h > 0)) return [3 /*break*/, 8];
                        i = h;
                        _a.label = 2;
                    case 2:
                        if (!(i < this.randomData.length)) return [3 /*break*/, 7];
                        valueToInsert = this.randomData[i];
                        j = i;
                        _a.label = 3;
                    case 3:
                        if (!(j >= h && this.randomData[j - h] > valueToInsert)) return [3 /*break*/, 6];
                        temp = this.randomData[j];
                        this.randomData[j] = this.randomData[j - h];
                        this.randomData[j - h] = temp;
                        if (!!this.checked) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.renderGraph()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        j = j - h;
                        return [3 /*break*/, 3];
                    case 6:
                        i++;
                        return [3 /*break*/, 2];
                    case 7:
                        h = (h - 1) / 3;
                        return [3 /*break*/, 1];
                    case 8:
                        if (this.checked) {
                            t2 = new Date();
                            dif = t2.getTime() - t1.getTime();
                            this.time = dif / 1000;
                            this.renderGraph();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SortComponent.prototype.quickSort = function (activeIndex) {
        this.active = activeIndex;
        this.time = 0;
        var t1 = new Date();
        var self = this;
        qS(0, this.randomData.length - 1);
        function qS(left, right) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var partisionPoint;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (left >= right) {
                                return [2 /*return*/];
                            }
                            partisionPoint = self.partition(left, right);
                            if (!!self.checked) return [3 /*break*/, 2];
                            return [4 /*yield*/, self.renderGraph()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            qS(left, partisionPoint - 1);
                            qS(partisionPoint + 1, right);
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (this.checked) {
            var t2 = new Date();
            var dif = t2.getTime() - t1.getTime();
            this.time = dif / 1000;
            this.renderGraph();
        }
    };
    SortComponent.prototype.mergeSort = function (activeIndex) {
        var _this = this;
        this.active = activeIndex;
        this.time = 0;
        var t1 = new Date();
        var data = this.randomData;
        if (!this.checked) {
            this.dataForGraph = [];
            this.merge1(JSON.parse(JSON.stringify(data)), 0);
            var time = 0;
            var _loop_1 = function (i) {
                time += 200;
                setTimeout(function (x) {
                    _this.randomData = _this.dataForGraph[i];
                    _this.renderGraph();
                }, time);
            };
            for (var i = 0; i < this.dataForGraph.length; i++) {
                _loop_1(i);
            }
        }
        else {
            this.randomData = this.merge(data);
        }
        if (this.checked) {
            var t2 = new Date();
            var dif = t2.getTime() - t1.getTime();
            this.time = dif / 1000;
            this.renderGraph();
        }
    };
    SortComponent.prototype.heapSort = function (activeIndex) {
        this.randomData = this.heapify(this.randomData);
        var data = this.randomData.slice(0);
        var arr = this.randomData.slice(0);
        this.active = activeIndex;
        this.time = 0;
        var t1 = new Date();
        while (arr.length > 0) {
            var temp = arr[arr.length - 1];
            data[arr.length - 1] = arr[0];
            arr[0] = temp;
            arr.length--;
            arr = this.heapify(arr);
        }
        this.randomData = data;
        var t2 = new Date();
        var dif = t2.getTime() - t1.getTime();
        this.time = dif / 1000;
        this.renderGraph();
    };
    SortComponent.prototype.merge = function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var right = arr.splice(0, arr.length / 2);
        var left = arr;
        return this.mergeTwoArray(this.merge(left), this.merge(right));
    };
    SortComponent.prototype.merge1 = function (arr, start) {
        if (arr.length <= 1) {
            return arr;
        }
        var mid = Math.ceil(arr.length / 2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid, arr.length);
        ;
        var leftres = this.merge1(left, start);
        var rightRes = this.merge1(right, start + mid);
        var ret = this.mergeTwoArray(leftres, rightRes);
        var k = 0;
        var ogArray = this.randomData.slice(0);
        for (var i = start; i < (start + arr.length); i++) {
            this.randomData[i] = ret[k];
            ogArray[i] = ret[k++];
        }
        this.dataForGraph.push(ogArray.slice(0));
        return ret;
    };
    SortComponent.prototype.partition = function (left, right) {
        left--;
        var pivot = right;
        var arr = this.randomData;
        while (left < right) {
            var i = 0;
            while (arr[++left] < arr[pivot]) {
            }
            while (right > 0 && arr[--right] > arr[pivot]) {
            }
            if (left >= right) {
                break;
            }
            else {
                var temp = arr[right];
                arr[right] = arr[left];
                arr[left] = temp;
            }
        }
        var temp = arr[pivot];
        arr[pivot] = arr[left];
        arr[left] = temp;
        return left;
    };
    SortComponent.prototype.mergeTwoArray = function (arr1, arr2) {
        var totalLength = arr1.length + arr2.length;
        var result = [];
        var pos1 = 0;
        var pos2 = 0;
        while (result.length !== totalLength) {
            if (!arr1[pos1]) {
                result.push(arr2[pos2]);
                pos2++;
            }
            else if (!arr2[pos2]) {
                result.push(arr1[pos1]);
                pos1++;
            }
            else {
                if (arr1[pos1] > arr2[pos2]) {
                    result.push(arr2[pos2]);
                    pos2++;
                }
                else {
                    result.push(arr1[pos1]);
                    pos1++;
                }
            }
        }
        return result;
    };
    SortComponent.prototype.heapify = function (arr) {
        var n = Math.floor(arr.length / 2);
        for (var i = n; i >= 0; i--) {
            heapifyAtIndex(arr, i);
        }
        function heapifyAtIndex(arr, i) {
            var largest = i;
            var left = 2 * i + 1;
            var right = 2 * i + 2;
            if (arr[largest] < arr[left]) {
                largest = left;
            }
            if (arr[largest] < arr[right]) {
                largest = right;
            }
            if (i !== largest) {
                var temp = arr[largest];
                arr[largest] = arr[i];
                arr[i] = temp;
                if (2 * largest < arr.length) {
                    heapifyAtIndex(arr, largest);
                }
            }
        }
        return arr;
    };
    SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sort',
            template: __webpack_require__(/*! ./sort.component.html */ "./src/app/sort/sort.component.html"),
            styles: [__webpack_require__(/*! ./sort.component.css */ "./src/app/sort/sort.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/interceptor/index.ts":
/*!**********************************!*\
  !*** ./src/interceptor/index.ts ***!
  \**********************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptor */ "./src/interceptor/interceptor.ts");


var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _interceptor__WEBPACK_IMPORTED_MODULE_1__["LoggingInterceptor"], multi: true }
];


/***/ }),

/***/ "./src/interceptor/interceptor.ts":
/*!****************************************!*\
  !*** ./src/interceptor/interceptor.ts ***!
  \****************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        var ok;
        console.log("i m called");
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] ? 'succeeded' : ''; }, function (error) { return ok = 'failed'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " \"" + req.urlWithParams + "\"\n             " + ok + " in " + elapsed + " ms.";
        }));
    };
    LoggingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_injector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-injector.service */ "./src/app-injector.service.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).then(function (moduleRef) {
    _app_injector_service__WEBPACK_IMPORTED_MODULE_5__["AppInjector"].setInjector(moduleRef.injector);
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\workspace\alogrithm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map