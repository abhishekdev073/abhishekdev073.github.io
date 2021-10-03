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
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node/node.component */ "./src/app/node/node.component.ts");
/* harmony import */ var _mongoose_mongoose_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mongoose/mongoose.component */ "./src/app/mongoose/mongoose.component.ts");
/* harmony import */ var _dot_net_dot_net_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dot-net/dot-net.component */ "./src/app/dot-net/dot-net.component.ts");
/* harmony import */ var _react_react_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./react/react.component */ "./src/app/react/react.component.ts");
/* harmony import */ var _aws_aws_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aws/aws.component */ "./src/app/aws/aws.component.ts");
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sql/sql.component */ "./src/app/sql/sql.component.ts");















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
    {
        path: 'mongodb', component: _mongoose_mongoose_component__WEBPACK_IMPORTED_MODULE_10__["MongooseComponent"]
    },
    {
        path: 'dotnet', component: _dot_net_dot_net_component__WEBPACK_IMPORTED_MODULE_11__["DotNetComponent"]
    },
    {
        path: 'react', component: _react_react_component__WEBPACK_IMPORTED_MODULE_12__["ReactComponent"]
    },
    {
        path: 'aws', component: _aws_aws_component__WEBPACK_IMPORTED_MODULE_13__["AwsComponent"]
    },
    {
        path: 'node', component: _node_node_component__WEBPACK_IMPORTED_MODULE_9__["NodeComponent"]
    }, {
        path: 'sql', component: _sql_sql_component__WEBPACK_IMPORTED_MODULE_14__["SqlComponent"]
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

module.exports = "\n <div class=\"header\">\n    <app-header></app-header>\n</div>\n<div class=\"space\">\n\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"main-body\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n<div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\n    <button (click)=\"scrollToTop()\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example arrow_upward icon\">arrow_upward</mat-icon>\n    </button>\n  </div>"

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
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./node/node.component */ "./src/app/node/node.component.ts");
/* harmony import */ var _mongoose_mongoose_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mongoose/mongoose.component */ "./src/app/mongoose/mongoose.component.ts");
/* harmony import */ var _dot_net_dot_net_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dot-net/dot-net.component */ "./src/app/dot-net/dot-net.component.ts");
/* harmony import */ var _react_react_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./react/react.component */ "./src/app/react/react.component.ts");
/* harmony import */ var _aws_aws_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./aws/aws.component */ "./src/app/aws/aws.component.ts");
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sql/sql.component */ "./src/app/sql/sql.component.ts");
































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
                _node_node_component__WEBPACK_IMPORTED_MODULE_26__["NodeComponent"],
                _mongoose_mongoose_component__WEBPACK_IMPORTED_MODULE_27__["MongooseComponent"],
                _dot_net_dot_net_component__WEBPACK_IMPORTED_MODULE_28__["DotNetComponent"],
                _react_react_component__WEBPACK_IMPORTED_MODULE_29__["ReactComponent"],
                _aws_aws_component__WEBPACK_IMPORTED_MODULE_30__["AwsComponent"],
                _sql_sql_component__WEBPACK_IMPORTED_MODULE_31__["SqlComponent"],
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
                _services_service__WEBPACK_IMPORTED_MODULE_6__["HeroService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/aws/aws.component.html":
/*!****************************************!*\
  !*** ./src/app/aws/aws.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Basic\">\n      <app-data  imageBaseUrl=\"/assets/images/angular/\" [data]=\"data\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data imageBaseUrl=\"/assets/images/angular/\" [data]=\"data\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/aws/aws.component.scss":
/*!****************************************!*\
  !*** ./src/app/aws/aws.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F3cy9hd3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/aws/aws.component.ts":
/*!**************************************!*\
  !*** ./src/app/aws/aws.component.ts ***!
  \**************************************/
/*! exports provided: AwsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsComponent", function() { return AwsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_aws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/aws */ "./src/app/files/aws.ts");



var AwsComponent = /** @class */ (function () {
    function AwsComponent() {
    }
    AwsComponent.prototype.ngOnInit = function () {
        this.data = _files_aws__WEBPACK_IMPORTED_MODULE_2__["data"];
    };
    AwsComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.data = _files_aws__WEBPACK_IMPORTED_MODULE_2__["data"];
        }
        else if (event.index == 1) {
            this.data = _files_aws__WEBPACK_IMPORTED_MODULE_2__["data"];
        }
    };
    AwsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aws',
            template: __webpack_require__(/*! ./aws.component.html */ "./src/app/aws/aws.component.html"),
            styles: [__webpack_require__(/*! ./aws.component.scss */ "./src/app/aws/aws.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AwsComponent);
    return AwsComponent;
}());



/***/ }),

/***/ "./src/app/bst/bst.component.css":
/*!***************************************!*\
  !*** ./src/app/bst/bst.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-collection{\n    display: flex;\n    justify-content: center;\n}\n.item span{\n   padding-left: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnN0L2JzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYnN0L2JzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tY29sbGVjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLml0ZW0gc3BhbntcbiAgIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbiJdfQ== */"

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

/***/ "./src/app/css/css.component.html":
/*!****************************************!*\
  !*** ./src/app/css/css.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Tricks\">\n    <div>\n      <h6>// clear float</h6>\n      <p>If we have use float and element size is bigger that its parent then\n        goes to below to avoid that use clear fix increase parent size fit in </p>\n      <div>\n        <div> .clearfix::after </div>\n        <div> content: \"\";</div>\n        <div> clear: both;</div>\n        <div> display: table;</div>\n        <div> </div>\n      </div>\n    </div>\n    <p>\n      // use vertical-align :-top :- if div goes to bottom\n    </p>\n    <p>\n      Take item to centre\n    </p>\n    <p>1. Padding, text-align</p>\n    <div class=\"border center1\">\n      <div> padding: 20px; </div>\n      <div>text-align: center;\n      </div>\n    </div>\n    <p>2. margin, width</p>\n    <div class=\"border center2\">\n      <div> margin: auto; </div>\n      <div> width: 50%;</div>\n    </div>\n    <p>3. position, transform</p>\n    <div>\n      /* If the text has multiple lines, add the following: */\n      <div> .center p </div>\n      <div> line-height: 1.5;</div>\n      <div> display: inline-block;</div>\n      <div> vertical-align: middle;</div>\n\n    </div>\n    <div class=\"border center3\">\n      <div> position: absolute;</div>\n      <div> top: 50%;</div>\n      <div> left: 50%;</div>\n      <div> transform: translate(-50%, -50%);</div>\n      <p>\n        Center\n      </p>\n    </div>\n    <p>4. flex</p>\n    <div [style.height]=\"'300px'\" class=\"flex\">\n      <div [style.margin]=\"'auto'\" class=\"flex-item\"> margin: auto; </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Grid\">\n    <div class=\"question\">\n      <ul>\n        <li>display :grid, inline-grid takes only required space //makes Grid</li>\n        <li>grid-template-columns: auto auto auto; 80px 200px auto; makes 3 column based on value</li>\n        <li>grid-template-rows: 80px 200px; works on row</li>\n        <li>grid-column-gap: 50px;</li>\n        <li>grid-raw-gap: 50px;</li>\n        <li>grid-gap: 50px 100px; row column</li>\n      </ul>\n      <div>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style={'display':'grid'}\">Grid</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'display':'inline-grid'}\">Inline grid</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-template-columns':'auto auto'}\">auto auto</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-template-columns':' 80px 200px auto'}\"> 80px 200px auto\n          </mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-template-rows':'40px 100px'}\">Template rows</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-column-gap':'25px'}\">column gap</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-row-gap':'25px'}\"> raw gap</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'grid-gap':'25px 50px'}\">Gap</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div [ngStyle]=\"style\" class=\"grid-container\">\n        <div class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n    <div class=\"question\">\n      <div>\n        <p>\n          justify-content: space-evenly,space-around,space-between,center,start,end :- horizontal alignment\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style2={'justify-content':''}\">Reset</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'start'}\">start</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'center'}\">center</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'end'}\">end</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'space-evenly'}\">space-evenly</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'space-between'}\">space-between</mat-button-toggle>\n          <mat-button-toggle (click)=\"style1={'justify-content':'space-around'}\">space-around</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div [ngStyle]=\"style1\" class=\"grid-container\">\n        <div class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n    <div class=\"question\">\n      <div>\n        <h6>\n          align-content: space-evenly,space-around,space-between,center,start,end; :- vertical handle\n        </h6>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style2={'align-content':''}\">Reset</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'start'}\">start</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'center'}\">center</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'end'}\">end</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'space-evenly'}\">space-evenly</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'space-between'}\">space-between</mat-button-toggle>\n          <mat-button-toggle (click)=\"style2={'align-content':'space-around'}\">space-around</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div [ngStyle]=\"style2\" class=\"grid-container\">\n        <div class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n    <h2>\n      Grid -item\n    </h2>\n    <div class=\"question\">\n      <div>\n        <ul>\n          <li> grid-row-start: 1 grid-row-end :3 grid-column-start: 1 grid-column-end :3 same</li>\n          <li> grid-column: 1 / 5; start at 1 and end at 5</li>\n          <li> grid-column: 1 / span 3; start at 1 take 3 column</li>\n          <li> grid-row: 1 / 4;</li>\n          <li> grid-row: 1 / span 2;</li>\n          <li> grid-area: 1 / 2 / 5 / 6; row from 1-5 column 5-6</li>\n          <li> grid-area: 2 / 1 / span 2 / span 3;. row start 2 left 2 span column start at 1 left 3 span</li>\n        </ul>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style3={'grid-row-start':'1'}\">grid-row-start</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-column':'1/5'}\">grid-column 1/5</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-column':'1 / span 3'}\">grid-column 1 / span 3</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-row':'1 / 4'}\">grid-row 1/4</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-row':'1 / span 2'}\">grid-row 1/span 2</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-area':'1/2/5/6'}\">grid-area 1</mat-button-toggle>\n          <mat-button-toggle (click)=\"style3={'grid-area':'2 / 1 / span 2 / span 3'}\">grid-area 2</mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div class=\"grid-container\">\n        <div [ngStyle]=\"style3\" class=\"grid-item\">1</div>\n        <div class=\"grid-item\">2</div>\n        <div class=\"grid-item\">3</div>\n        <div class=\"grid-item\">4</div>\n        <div class=\"grid-item\">5</div>\n        <div class=\"grid-item\">6</div>\n        <div class=\"grid-item\">7</div>\n        <div class=\"grid-item\">8</div>\n        <div class=\"grid-item\">9</div>\n        <div class=\"grid-item\">10</div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Basic\">\n    <div>\n      <div class=\"box\">\n        <div class=\"box-item border\">\n          <div class=\"q_border border_y\">\n            <p> border : 1px solid yellow</p>\n          </div>\n        </div>\n        <div class=\"box-item border q_padding\">\n          100px\n          padding-top: 100px;\n          <div>Leave space inside div</div>\n        </div>\n        <div class=\"box-item border\">\n          100px\n          <div class=\"q_margin border_y\">\n            margin-top: 100px;\n            <div>Leave space form outside div</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"box\">\n        <div class=\"box-item border\">\n          <div class=\"q_border border_y\">\n            <div class=\"code\">\n              box-sizing: border-box;\n            </div>\n            <div>margin padding take from its width</div>\n          </div>\n        </div>\n        <div class=\"box-item border q_padding\">\n          text-align: center;\n          <div>text-align: justify; justify,left right center gives space </div>\n        </div>\n        <div class=\"box-item border\">\n          <div>\n            display :block //start with new line takes width 100%\n          </div>\n          <div>\n            display :inline // inline with same line don't take height and width\n          </div>\n          <div>\n            display :inline-block // same line takes width and height\n          </div>\n        </div>\n      </div>\n      <div class=\"box\">\n        <div>\n          <h6>positions positioned using the top, bottom, left, and right</h6>\n          <div class=\"pos1\">\n            <p>1.Static :-Default</p>\n            <div class=\"p-box1\">\n              box1\n              <div class=\"p-box2\">\n                box 2\n              </div>\n            </div>\n          </div>\n          <div class=\"pos1\">\n            <p> 2. relative :- its moves from its original position</p>\n            <div class=\"p-box1\">\n              box1\n              <div class=\"p-box2 p-relative\">\n                box 2\n                <div> position: relative;</div>\n                <div> top: 80px;</div>\n                <div> left: 150px;</div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pos1\">\n            <p>3 fixed :-position remains fixed to the viewport</p>\n            <div class=\"p-box1\">\n              box1\n              <div> position: fixed;</div>\n              <div> bottom: 0px;</div>\n              <div> left: 0px;</div>\n              box2\n\n              <div class=\"p-box2 p-fixed\">\n                fixed\n              </div>\n            </div>\n          </div>\n          <div class=\"pos1\">\n            <p>absolute :-If parent is not positioned it get\n              relative to the body. its get relative to its parent. just like fixed get relative to view port\n            </p>\n            <div class=\"p-box1\">\n              box1\n              <div class=\"p-box2 p-absolute\">\n                box2\n                <div> position: absolute;</div>\n                <div> bottom: 100px</div>\n                <div> left: 100px </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"pos1\">\n            <p> 5. sticky :- get sticky like menu with scroll </p>\n            <div class=\"p-box1\" [ngStyle]=\"{'overflow':'scroll'}\" [style.height]=\"'300px'\">\n              box1\n              <!-- <div>\nSample text for scroll\n              </div> -->\n              <div>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum,\n                nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec\n                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis\n                sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.\n                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet\n                sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non\n                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem\n                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\n                lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec\n                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis\n                sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.\n                Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet\n                sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non\n                fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem\n                ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\n                lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec\n                congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis\n                sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue.\n                Nunc sagittis </div>\n              <div class=\"p-box2 p-sticky\">\n                box2\n                <div> position: sticky;</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"p-sticky\"></div>\n        </div>\n      </div>\n\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Flex\">\n    <div class=\"flex-container1\">\n      <h1>\n        Flex\n      </h1>\n      <p>\n        Flex : adjust automatically\n      </p>\n      <div class=\"flex\">\n        <div class=\"flex-item border\">Item1</div>\n        <div class=\"flex-item border\">Item2</div>\n        <div class=\"flex-item border\">Item3</div>\n        <div class=\"flex-item border\">Item4</div>\n      </div>\n      <div>\n        <p>\n          justify-content :flex-start :- Handle flex-items horizontally\n        </p>\n        <p>\n          flex-start, flex-end, center, space-between, space-around\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"justifyContent='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='space-between'\">Space-between</mat-button-toggle>\n          <mat-button-toggle (click)=\"justifyContent='space-around'\">space-around</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [style.justify-content]=\"justifyContent\" class=\"flex\">\n          <div class=\"flex-item border1\">Item1</div>\n          <div class=\"flex-item border1\">Item2</div>\n          <div class=\"flex-item border1\">Item3</div>\n          <div class=\"flex-item border1\">Item4</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          align-items: flex-start || handel vertical\n        </p>\n        <p>\n          align-items: flex-start,flex-end,center,baseline,stretch : vertical\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"alignItem='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='baseline'\">Baseline</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignItem='stretch'\">Stretch</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [style.align-items]=\"alignItem\" class=\"flex-container\">\n          <div [ngStyle]=\"{'padding-top': '20px'}\" [style.height]=\"'100px'\" class=\"flex-item1 border1\">Item1</div>\n          <div [ngStyle]=\"{'padding-top': '10px'}\" [style.height]=\"'75px'\" class=\"flex-item1 border1\">Item2</div>\n          <div [ngStyle]=\"{'padding-top': '30px'}\" [style.height]=\"'120px'\" class=\"flex-item1 border1\">Item3</div>\n          <div [ngStyle]=\"{'padding-top': '5px'}\" class=\"flex-item1 border1\">Item4</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          flex-wrap: wrap; less space content goes to next line\n        </p>\n        <p>\n          flex-wrap: wrap|| nowrap\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"wrap='wrap'\">Wrap</mat-button-toggle>\n          <mat-button-toggle (click)=\"wrap='nowrap'\">No wrap</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [style.flex-wrap]=\"wrap\" class=\"flex-container\">\n          <div class=\"flex-item border1\">Item1</div>\n          <div class=\"flex-item border1\">Item2</div>\n          <div class=\"flex-item border1\">Item3</div>\n          <div class=\"flex-item border1\">Item4</div>\n          <div class=\"flex-item border1\">Item5</div>\n          <div class=\"flex-item border1\">Item6</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          align-content: flex-start || align to baseline\n        </p>\n        <p>\n          align-content:stretch,flex-start,flex-end,center,space-between,space-around :\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"alignContent='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='space-between'\">Space between</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignContent='space-around'\">Space around</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div [ngStyle]=\"{'align-content':alignContent,'flex-wrap':'wrap'}\" class=\"flex-container\">\n          <div class=\"flex-item border1\">Item1</div>\n          <div class=\"flex-item border1\">Item2</div>\n          <div class=\"flex-item border1\">Item3</div>\n          <div class=\"flex-item border1\">Item4</div>\n          <div class=\"flex-item border1\">Item5</div>\n          <div class=\"flex-item border1\">Item6</div>\n        </div>\n\n        <h2>Flex -item</h2>\n        <div class=\"question\">\n          <p>\n            order : 3 \\\\ change the position of child\n          </p>\n          <p>\n            margin-left :auto \\\\ it will push all item to left\n          </p>\n          <p>\n            margin: auto; \\\\to takes item in center\n          </p>\n          <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n            <mat-button-toggle (click)=\"style={'order':'3'}\">Order</mat-button-toggle>\n            <mat-button-toggle (click)=\"style={'margin-left':'auto'}\">Margin left</mat-button-toggle>\n            <mat-button-toggle (click)=\"style={'margin':'auto'}\">margin auto</mat-button-toggle>\n          </mat-button-toggle-group>\n          <p>Example with 1 div</p>\n          <div class=\"flex\">\n            <div [ngStyle]=\"style\" class=\"flex-item border1\">Item1</div>\n          </div>\n          <p>Example with 3 div</p>\n          <div class=\"flex\">\n            <div [ngStyle]=\"style\" class=\"flex-item border1\">Item1</div>\n            <div [ngStyle]=\"style\" [style]=\"style.order\" class=\"flex-item border1\">Item2</div>\n            <div [ngStyle]=\"style\" class=\"flex-item border1\">Item3</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <p>\n          align-self :- flex-start \\\\ child override the align-item\n        </p>\n        <p>\n          flex-start,flex-end,center,baseline,stretch\n        </p>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"alignSelf='flex-start'\">Flex Start</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='flex-end'\">Flex end</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='center'\">Center</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='baseline'\">Baseline</mat-button-toggle>\n          <mat-button-toggle (click)=\"alignSelf='stretch'\">Stretch</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div class=\"flex-container\">\n          <div [style.align-self]=\"alignSelf\" [style.height]=\"'100px'\" class=\"flex-item1 border1\">Item1</div>\n          <div [ngStyle]=\"{'padding-top': '20px'}\" [style.align-self]=\"alignSelf\" [style.height]=\"'75px'\"\n            class=\"flex-item1 border1\">Item2</div>\n          <div [ngStyle]=\"{'padding-top': '10px'}\" [style.align-self]=\"alignSelf\" [style.height]=\"'120px'\"\n            class=\"flex-item1 border1\">Item3</div>\n          <div [ngStyle]=\"{'padding-top': '30px'}\" class=\"flex-item border1\">Don;t have any align </div>\n          <div [ngStyle]=\"{'padding-top': '5px'}\" [style.align-self]=\"alignSelf\" class=\"flex-item1 border1\">Item4</div>\n        </div>\n      </div>\n      <div class=\"question\">\n        <ul>\n          <li> flex:2 :number of places it will take its take all the space</li>\n          <li> flex-basis:100px for width</li>\n          <li> flex-shrink:3 decrease size flex-grow:3 increase size</li>\n        </ul>\n        <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n          <mat-button-toggle (click)=\"style={'flex':'2'}\">Flex 2</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'flex-basis':'100px'}\">Flex basis</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'flex-shrink':'3'}\">Flex-shrink</mat-button-toggle>\n          <mat-button-toggle (click)=\"style={'flex-grow':'3'}\">Flex-grow</mat-button-toggle>\n        </mat-button-toggle-group>\n        <div class=\"flex\">\n          <div [ngStyle]=\"{'flex':style.flex}\" class=\"flex-item border1\">Flex 2</div>\n          <div [ngStyle]=\"{'flex-basis':style['flex-basis']}\" class=\"flex-item border1\">Flex basic</div>\n          <div [ngStyle]=\"{'flex-shrink':style['flex-shrink']}\" class=\"flex-item border1\">Flex-shrink</div>\n          <div [ngStyle]=\"{'flex-grow':style['flex-grow']}\" class=\"flex-item border1\">Flex-grow</div>\n          <div *ngIf=\"style['flex-shrink']\" class=\"flex-item border1\">Extra to check flex shrink</div>\n          <div *ngIf=\"style['flex-shrink']\" class=\"flex-item border1\">flex shrink It will shrink first</div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n\n  <mat-tab label=\"SASS-scss\">\n    <h1>\n      Variable,Nesting, Mixin , Import and Extend\n    </h1>\n    <div>\n      <img [ngStyle]='{width:\"700px\"}' src='/assets/images/sass.PNG'>\n    </div>\n  </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/css/css.component.scss":
/*!****************************************!*\
  !*** ./src/app/css/css.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-data-structure,\napp-angular,\napp-sort,\napp-list,\napp-hashing,\napp-bst {\n  width: 100%; }\n\n.fl {\n  float: left; }\n\n.fr {\n  float: right; }\n\n.w100 {\n  width: 100%; }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\nhtml,\nbody {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.expand-icon {\n  font-size: 28px;\n  padding-right: 15px; }\n\n.text_background {\n  /* background-color: #f6f6f6; */\n  padding: 10px 0px 0px 10px;\n  margin-top: 5px; }\n\n.question_description {\n  padding-left: 10px; }\n\n.question_response {\n  margin-bottom: 8px; }\n\n.question_description p {\n  margin-bottom: 0px;\n  line-height: 32px; }\n\n.question_value p {\n  margin-bottom: 0px;\n  line-height: 25px;\n  font-size: 15px; }\n\n.code_snippet img {\n  width: 600px; }\n\n.mt5 {\n  margin-top: 5px; }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.space {\n  height: 70px; }\n\n.border {\n  border: 1px solid #565e64; }\n\n.box {\n  margin-top: 10px;\n  width: 100%;\n  border: 1px solid #2e7ac0; }\n\n.box-item {\n  display: inline-block;\n  width: 33.33%;\n  height: 200px;\n  vertical-align: top;\n  box-sizing: border-box;\n  text-align: center; }\n\n.q_border {\n  width: 80%;\n  margin: auto;\n  height: 100px;\n  margin-top: 50px;\n  padding-top: 18px;\n  box-sizing: border-box; }\n\n.border_y {\n  border: 1px solid yellowgreen; }\n\n.q_padding {\n  padding-top: 100px; }\n\n.q_margin {\n  margin-top: 100px; }\n\n.flex {\n  display: flex;\n  width: 100%;\n  height: 120px;\n  background-color: Silver;\n  margin-bottom: 10px; }\n\n.flex-container {\n  display: flex;\n  width: 100%;\n  height: 240px;\n  background-color: Silver;\n  margin-bottom: 10px; }\n\n.flex-item {\n  background-color: DeepSkyBlue;\n  width: 20%;\n  height: 100px;\n  margin: 5px; }\n\n.flex-item1 {\n  background-color: DeepSkyBlue;\n  width: 20%;\n  margin: 5px; }\n\n.btn {\n  margin: 16px; }\n\n.border1 {\n  border: 1px solid rebeccapurple; }\n\n/*//////////////////////Grid*/\n\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: #2196F3;\n  padding: 10px;\n  margin-top: 20px;\n  width: 600px;\n  height: 400px;\n  margin: auto;\n  margin-top: 15px;\n  margin-bottom: 30px; }\n\n.grid-item {\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 5px;\n  text-align: center; }\n\n/*Tricks*/\n\n.center1 {\n  padding: 20px;\n  text-align: center; }\n\n.center2 {\n  margin: auto;\n  width: 50%;\n  text-align: center; }\n\n.center3 {\n  height: 200px;\n  position: relative; }\n\n.center3 p {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n/*Basic*/\n\n.p-box1 {\n  height: 300px;\n  width: 600px;\n  border: 1px solid yellowgreen;\n  position: relative; }\n\n.p-box2 {\n  height: 100px;\n  width: 300px;\n  border: 1px solid salmon; }\n\n.p-relative {\n  position: relative;\n  top: 80px;\n  left: 150px; }\n\n.p-fixed {\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  bottom: 0px;\n  left: 0px; }\n\n.p-absolute {\n  position: absolute;\n  top: 100px;\n  left: 100px; }\n\n.p-sticky {\n  position: sticky;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3NzL0U6XFx3b3Jrc3BhY2VcXGFsb2dyaXRobS9zcmNcXGFzc2V0c1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2Nzcy9FOlxcd29ya3NwYWNlXFxhbG9ncml0aG0vc3JjXFxhcHBcXGNzc1xcY3NzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jc3MvRTpcXHdvcmtzcGFjZVxcYWxvZ3JpdGhtL3NyY1xcYXBwXFxjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNSSxXQUNKLEVBQUE7O0FBRUE7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2xCOztFQUVJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxTQUFTO0VBQ1QsaURBQWlELEVBQUE7O0FBR3JEO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLCtCQUFBO0VBQ0EsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FDM0VsQjtFQUNJLHlCQ0ZlLEVBQUE7O0FES25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBbUMsRUFBQTs7QUFFdkM7RUFDSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFVBQVU7RUFDVixZQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksNkJBQTZCLEVBQUE7O0FBRWpDO0VBQ0csa0JBQWtCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBRWY7RUFDSSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFZjtFQUNHLFlBQVksRUFBQTs7QUFFZjtFQUNJLCtCQUNKLEVBQUE7O0FBRUEsNkJBQUE7O0FBQ0E7RUFDSSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksMENBQTBDO0VBQzFDLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCLFNBQUE7O0FBRUE7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBR3BDLFFBQUE7O0FBRUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFFYjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUVmO0VBRUksZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Nzcy9jc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZGF0YS1zdHJ1Y3R1cmUsXG5hcHAtYW5ndWxhcixcbmFwcC1zb3J0LFxuYXBwLWxpc3QsXG5hcHAtaGFzaGluZyxcbmFwcC1ic3Qge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5mbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udzEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5leHBhbmQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi50ZXh0X2JhY2tncm91bmQge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7ICovXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucXVlc3Rpb25fZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnF1ZXN0aW9uX3Jlc3BvbnNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5xdWVzdGlvbl9kZXNjcmlwdGlvbiBwe1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbn1cbi5xdWVzdGlvbl92YWx1ZSBwe1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uY29kZV9zbmlwcGV0IGltZ3tcbiAgICB3aWR0aDogNjAwcHg7XG59XG4ubXQ1e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH0gXG5cbiAgLnNwYWNle1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICB9XG5cbiAgQG1peGluIGltcG9ydGFudC10ZXh0IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICB9IiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAnLi8uLi8uLi8uLi9zcmMvYXNzZXRzL3N0eWxlcyc7XHJcblxyXG4uYm9yZGVye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAkcHJpbWFyeV8zO1xyXG4gICBcclxufVxyXG4uYm94e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQ2LCAxMjIsIDE5MilcclxufVxyXG4uYm94LWl0ZW17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5xX2JvcmRlcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5ib3JkZXJfeXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xyXG59XHJcbi5xX3BhZGRpbmd7XHJcbiAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4ucV9tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4uZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBTaWx2ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogU2lsdmVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEZWVwU2t5Qmx1ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmZsZXgtaXRlbTEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRGVlcFNreUJsdWU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmJ0bntcclxuICAgbWFyZ2luOiAxNnB4OyBcclxufVxyXG4uYm9yZGVyMXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmViZWNjYXB1cnBsZVxyXG59XHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9HcmlkKi9cclxuLmdyaWQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5ncmlkLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLypUcmlja3MqL1xyXG5cclxuLmNlbnRlcjF7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jZW50ZXIye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICBcclxuLmNlbnRlcjMge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNlbnRlcjMgcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgXHJcbiAgfSBcclxuLypCYXNpYyovXHJcblxyXG4ucC1ib3gxe1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wLWJveDJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2FsbW9uO1xyXG59XHJcbi5wLXJlbGF0aXZle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbn1cclxuLnAtZml4ZWR7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG59XHJcbi5wLWFic29sdXRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG59XHJcbi5wLXN0aWNreXtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbiIsIiRwcmltYXJ5XzE6ICNhMmI5YmM7XHJcbiRwcmltYXJ5XzI6ICNiMmFkN2Y7XHJcbiRwcmltYXJ5XzM6ICM1NjVlNjQ7XHJcbiJdfQ== */"

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
            styles: [__webpack_require__(/*! ./css.component.scss */ "./src/app/css/css.component.scss")]
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

module.exports = ".question_question{\r\n    font-size: 18px;\r\n}\r\n.question_value{\r\n    font-size: 17px;\r\n}\r\n.question_description{\r\n    font-size: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS9kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGF0YS9kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb25fcXVlc3Rpb257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnF1ZXN0aW9uX3ZhbHVle1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5xdWVzdGlvbl9kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/data/data.component.html":
/*!******************************************!*\
  !*** ./src/app/data/data.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n    <mat-expansion-panel *ngFor=\"let data1 of data; let i =index\">\n        <mat-expansion-panel-header>\n            <mat-panel-title>\n                <h6 class=\"question_question\">\n                    {{i+1}} {{data1.question}}\n\n                </h6>\n            </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"text_background\">\n            <div *ngFor=\"let response of data1.responses\">\n                <div>\n                    <p class=\"question_value\"> {{response.value}}</p>\n                </div>\n                <div ngClass=\"mt5\" *ngIf=\"response.image\" class=\"code_snippet\">\n                     <mat-divider></mat-divider>\n                    <img [ngStyle]=\"response.style\" [src]=\"imageBaseUrl + response.image\">\n                     <mat-divider></mat-divider>\n\n                </div>\n                <div class=\"question_description\">\n                    <div *ngFor=\"let val of response.desc\">\n                        <p> {{val}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </mat-expansion-panel>\n</mat-accordion>"

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

/***/ "./src/app/dot-net/dot-net.component.html":
/*!************************************************!*\
  !*** ./src/app/dot-net/dot-net.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Angular\">\n      <app-data  imageBaseUrl=\"/assets/images/dot net/\" [data]=\"angularData.data\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data imageBaseUrl=\"/assets/images/dot net/\" [data]=\"angularData.data\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/dot-net/dot-net.component.scss":
/*!************************************************!*\
  !*** ./src/app/dot-net/dot-net.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvdC1uZXQvZG90LW5ldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dot-net/dot-net.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dot-net/dot-net.component.ts ***!
  \**********************************************/
/*! exports provided: DotNetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotNetComponent", function() { return DotNetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_dot_net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/dot-net */ "./src/app/files/dot-net.ts");
/* harmony import */ var _files_dot_netq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/dot-netq */ "./src/app/files/dot-netq.ts");




var DotNetComponent = /** @class */ (function () {
    function DotNetComponent() {
        this.angularData = '';
        this.expandAll = false;
        this.angularData = _files_dot_net__WEBPACK_IMPORTED_MODULE_2__["data"];
    }
    DotNetComponent.prototype.ngOnInit = function () {
    };
    DotNetComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.angularData = _files_dot_net__WEBPACK_IMPORTED_MODULE_2__["data"];
        }
        else if (event.index == 1) {
            this.angularData = _files_dot_netq__WEBPACK_IMPORTED_MODULE_3__["dataQ"];
        }
    };
    DotNetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dot-net',
            template: __webpack_require__(/*! ./dot-net.component.html */ "./src/app/dot-net/dot-net.component.html"),
            styles: [__webpack_require__(/*! ./dot-net.component.scss */ "./src/app/dot-net/dot-net.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DotNetComponent);
    return DotNetComponent;
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
                        "<ng-container> : simple syntax. can be used directly with html no need of extra directive like *ngIf	"
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
        },
        {
            question: "Test",
            responses: [{
                    value: "Angular uses jasmine and karma for test",
                    desc: [
                        'In angular.json file test builder get defined',
                        'test builder contain entry point for test =>main = src/test.ts',
                        'test builder has config file karma.conf.js',
                        'Its also contain other file that will get used e.g. style files'
                    ]
                },
                {
                    value: 'karma.conf.js',
                    desc: [
                        'configuration file for karma,jasmine, instanbull',
                        "Its has port,restartOnFileChange,singleRun,autoWatch",
                        'singleRun :true // it run the test close the browser'
                    ]
                },
                {
                    value: 'test.ts file',
                    desc: ["create the environment fot test and Define which file to run"],
                    image: 'testtsFile.png'
                },
                {
                    value: 'code-coverage',
                    desc: [
                        "ng test --no-watch --code-coverage",
                        'run command it create codecoverage/index.html file  gives coverage'
                    ]
                },
                {
                    value: 'beforeEach',
                    desc: [
                        'it get run before every test case.',
                        "we need to configure all the module,component.service which our component uses",
                        'you can initialize services /component in every test or just in beforeEach'
                    ]
                },
                {
                    value: "TestBed",
                    desc: [
                        'testbed dynamically create Angular test module',
                        'In angular App DI inject services to our component automatically',
                        'we use testbed to inject and create test module',
                        'Inject service in module by TestBed.inject(serviceName) or TestBed.get(serviceName)'
                    ]
                },
                {
                    value: 'HTMLElement',
                    desc: [
                        'work with browser',
                        'const htmlElement: HTMLElement = fixture.nativeElement;'
                    ]
                },
                {
                    value: 'DebugElement',
                    desc: [
                        'can work without browser environment',
                        'const debugElement: DebugElement = fixture.debugElement;',
                        'const htmlElement1: HTMLElement = debugElement.nativeElement',
                    ]
                },
                {
                    value: 'By.css',
                    desc: [
                        ' used to select html element in not browser env with DebugElement',
                        ' const bannerDe: DebugElement = fixture.debugElement;',
                        ' const paragraphDe = bannerDe.query(By.css("p"));',
                        ' const p: HTMLElement = paragraphDe.nativeElement;',
                    ]
                },
                {
                    value: 'fixture.detectChanges',
                    desc: [
                        'update the value on html'
                    ]
                },
                {
                    value: 'dispatchEvent',
                    desc: [
                        '  Change an input value with dispatchEvent()',
                        '  when we set value to input even after detectchagnes our comp dont get those value',
                        '  nameInput.value = "name change";',
                        '  nameInput.dispatchEvent(new Event("input"));',
                        '  fixture.detectChanges();',
                        '  now angular will update the binding	',
                    ]
                },
                {
                    value: 'Spy',
                    desc: [
                        'Spy method of service',
                        'spyOn(service, "getPromiseData").and.returnValue(Promise.resolve("55551"))'
                    ]
                },
                {
                    value: 'tick()',
                    desc: [
                        'it will wait until all pending asynchronous activities finish',
                        'wait for given time used inside fakeAsync'
                    ]
                },
                {
                    value: 'tick, Async and fakeAsync',
                    desc: [
                        'To work with async code we use all this'
                    ]
                }
            ]
        },
        {
            question: 'Text Example',
            responses: [{
                    style: { width: '800px' },
                    image: 'testExample.png'
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

/***/ "./src/app/files/aws.ts":
/*!******************************!*\
  !*** ./src/app/files/aws.ts ***!
  \******************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [
    {
        question: "AWS",
        responses: [{
                value: 'Amazon web services 30+',
            }]
    },
    {
        question: "Region",
        responses: [{
                value: 'Most services are region scoped -e',
                desc: [
                    'Every region has many cluster of data center(AZ)',
                    ' Availability zone :- Each region min 3-6 AZ',
                    ' One AZ is down we can launch another',
                ]
            }]
    },
    {
        question: "IAM",
        responses: [{
                value: 'Identity Access management',
                desc: [
                    'User/Groups/Roles/ security, Center of  aws',
                    'User/Groups/Roles',
                    'We write policies in JSON. What user can and can not access',
                    'One IAM Role per Application ',
                    'Never use Root account or dont share',
                ]
            }]
    },
    {
        question: "EC2",
        responses: [{
                value: 'we create server instance ',
                desc: [
                    'To connect server : putty window < 10',
                    'SSH for Mac/Window 10/Linux',
                    'EC2 connect for all from browser ',
                ]
            }]
    },
    {
        question: "Security group",
        responses: [{
                value: 'Allow traffic of EC2 Instance	(Inbound outbound)',
                desc: [
                    '    Inbound rule we add rule to access(what we can access)',
                    '    its work as firewall ',
                    '    Security group can have multiple groups   ',
                    '    can allow only Allow rules.',
                    '    includes IP and other security group',
                ]
            }]
    },
    {
        question: "Public Private Elastic IP",
        responses: [{
                desc: [
                    '  We get 1 private IP and 1 public IP on EC2 instance',
                    '  Elastic IP (5 on account):-  restart EC2 instance its get new IP, to get Fix we use Elastic IP. you own it untill you delete it',
                    '  Avoid Elastic IP use Public Ip assign DNS to it',
                    '  When machine restart Public IP changes',
                    '  When Elastic IP is not associated with EC2 then u will get charged (Better delete Elastic IP)',
                ]
            }]
    },
    {
        question: "To update server",
        responses: [{
                value: 'yum update -y ',
            }]
    },
    {
        question: "EC2 User Data",
        responses: [{
                value: 'this script run once when instance start',
                desc: [
                    'use to bootstrap. We automate task',
                    'Installing update,installing software,download common file',
                    'this script runs as root user :- run commands',
                ]
            }]
    },
    {
        question: "Type of instances",
        responses: [{
                desc: [
                    '  1.On demand instance:-short workload , predictable price (billing per second) (pay letter)',
                    '  2.Reserved instance : Minimum 1 year , large workload (pay upfront 75% discount)',
                    '    Convertible Reserved instance :- Can change EC2 instance, upto 54% discount',
                    '    Schedule reserved instance :- Launch in time when you reserve         ',
                    '    ',
                    '  3.Spot instance :- short workload cheap, can loose instance (90% discount)',
                    '      Looses Stop instance : when ur max price is less than current spot price',
                    '  4. dedicated instance :-No other customer share your hardware',
                    '  5. Dedicated hosts :- Book entire physical server  ',
                ]
            }]
    },
    {
        question: "Election network interface(ENI)",
        responses: [{
                value: 'It can get mapped to EC2 instance',
            }]
    },
    {
        question: "AMI",
        responses: [{
                value: 'To create custom instance image for server',
                desc: []
            }]
    },
    {
        question: "Scaling",
        responses: [{
                value: 'Vertical scaling increase size, horizontal scaling increase the number',
            }]
    },
    {
        question: " Load Balancer(Elastic load balancer:ELB-AWS)",
        responses: [{
                value: 'EC2 Load balancer:- Forward internet traffic to servers',
                desc: [
                    '       Its keep checking health of server every specified second',
                    '       enforce cookies stickiness',
                    '       we can setup private or public ELB',
                    '       Only load balancer can send request then :- We create security group for load balancer with any one access (source :0.0.0.0)',
                    '       then Application security group only access to load balancer by (source:security group id of load balancer)  ',
                    '    ',
                    '       3 type of load balancer',
                    '       1.classic load balance (Layer 4,7)  :- http,https,tcp',
                    '       2.Application load balancer (Layer 7) :- http ,https, websocket, can redirect form http to https',
                    '         Routing(redirect) based on path in URL,HostName,query string,header (we can redirect based on this value to different EC2 instance)',
                    '          abc.com/user - /abc.com/about , my.abc.com - kk.abc.com, ab.com?id=34  Add rule in listener',
                    '       3.Network load balancer(Layer 4) :-TCP,TLS,UDP - Less latency 100ms',
                    '          1 static IP per AZ,support assigning elastic IP (helpful for white listing sepecific IP)',
                    '          want extreme performance or want static IP',
                ]
            }]
    },
    {
        question: "Load balancer stickiness",
        responses: [{
                value: 'setting target load balancer',
                desc: [
                    'same client get redirected to same EC2 instance always  with help of cookie',
                    'this work with CLB and ALB',
                ]
            }]
    },
    {
        question: "Cross Zone load balancer",
        responses: [{
                value: 'Evenly distributed traffic to EC2 instance',
                desc: [
                    'Load balancer ditstributes all in register EC2 instance AZ	',
                    'CLB - disabled default, dont have to pay extra for Enable ',
                    'ALB - Enable default, cant disable ',
                    'NLB - disabled default, pay extra for Enable',
                ]
            }]
    },
    {
        question: "SSL/TLS",
        responses: [{
                value: 'SSL certificate traffic between client and load balancer get encrypted in transit',
                desc: [
                    '   SSL :- Secure socket layer , TLS :-(Transport layer security ) newer version of SSL',
                    '   LB uses SSL/TLS certificate, you can manage certificate using ACM(AWS certificate manager)   ',
                    '   ALB,NLB support multiple certificates (SNI :-servername indication) then can work with multiple domain (multiple support group)',
                ]
            }]
    },
    {
        question: "Auto Scaling Groups(ASG)",
        responses: [{
                desc: [
                    '  Increase or decrease EC2 instance based on load , CPU usage,Network usage ,custom metric schedule timing usage alarm of cloudfront',
                    '  If instance under ASG get terminated for some reason then ASG will create new one',
                    '  Load balance will mark instance unhealthy then ASG will destroy and create ',
                    '  Minimum and Maximum no size of instance set    ',
                ]
            }]
    },
    {
        question: "EBS (Elastic book store)",
        responses: [{
                value: 'when main instance terminated drive data get losses ',
                desc: [
                    '  EBS :- network drive you can attach to your instance when they run . allow to save data like(DB)',
                    '  its based on zone, one zone can not access other zone ',
                ]
            }]
    },
    {
        question: "EBS vs Instance store",
        responses: [{
                value: 'EBS network drive like PD Instance store is attached to machine its very fast',
            }]
    },
    {
        question: "EFS",
        responses: [{
                value: 'Elastic File system',
                desc: [
                    'its work with multiple AZ,expensive'
                ]
            }]
    },
    {
        question: "RDS:- Relational database service",
        responses: [{
                desc: [
                    ' Create Db in cloud that are manage by AWS(postgres,Mysql,MariaDb,sql,oracle,aurora). It manage Db with Sql like query   ',
                    ' We can create Replica in Other AZ and others Regaion as well. we have to pay cost',
                    ' Multi AZ :- if one DB goes down we can use our DB of backup',
                    ' Aurora DB:- AWS databases its fast on RDS. not open source. It create read replica	',
                    ' Master and replica used shared storage',
                    ' Aurora serverless :-DB it scale automatically based on load',
                ]
            }]
    },
    {
        question: "ElasitCache",
        responses: [{
                desc: [
                    'managed by Redis or Memcached. Cache memory for high performance. Ram',
                    'We can share state in multiple application',
                ]
            }]
    },
    {
        question: "Route S3 ",
        responses: [{
                value: 'Managed DNS',
                desc: [
                    '        A: Host name to IPV4',
                    '        AAAA.HostName to IPV6',
                    '        CName :- HostName to HostName',
                    '        Alias :- HostName to AWS resource		',
                    '   Can buy Domain around 12$',
                ]
            }]
    },
    {
        question: "TTL (Time to live) ",
        responses: [{
                value: 'Browser cache S3 route DNS response for TTL time  ',
            }]
    },
    {
        question: "CNAME vs Alias",
        responses: [{
                desc: [
                    '  Cname can point to any domain. not work with root domain',
                    '  alias should point to AWS domain',
                    '  Alisa free , health check.work with root domain',
                ]
            }]
    },
    {
        question: "Routing Policy ",
        responses: [{
                value: 'xxxxxxxx',
                desc: [
                    'simple :- Client side load balancing :- return IP from S3 route	',
                    'Weighted routed policy :- Can split traffic between instances like (instance1 40% ,instance2 30%, instance3 30%)  ',
                    '                              return single IP based on performance',
                    'Latency Policy :- User get redirected to instance which has less latency(CDN)		',
                    'Health check : Default 3 request to determine is healthy ro not healthy ',
                    '               Route s3 :- health check and return health instance   ',
                    'Geo Location Policy :- User from specific location goes to specific IP',
                    'Multi routing policy :- Return healthy multiple IP browse chooses any  ',
                ]
            }]
    },
    {
        question: "VPC",
        responses: [{
                value: 'Virtual Private Cloud :- Private network to deploy your resources (Regional resource) 2 Region == 2 VPC	',
                desc: [
                    '   AWS => Region => VPC => Subnet 1, subnet2     ',
                    '   Subnet:- Allow partition network inside your VPC (AZ resource) -public subnet,Private subnet	',
                    '   Internet gateway & NAT Gateways ',
                    '   Internet Gateway :-Help VPC instance to connect to internet',
                    '                      Public subnet have route to Internet Gateway',
                    '   Nat Gateway :- Allow private subnet to access Internet while remaining private',
                    '                Deploy Nat gateway to public subnet : add route to public route',
                ]
            }]
    },
    {
        question: "Network ACL",
        responses: [{
                value: 'Firewall allow traffic from and to subnet',
                desc: [
                    'Attached to subnet. Rules only includes IP'
                ]
            }]
    },
    {
        question: "VPC flow log",
        responses: [{
                value: 'Capture information about IP traffic	going into your interface ',
                desc: [
                    '             VPC flow logs',
                    '             Subnet flow logs',
                    '             Elastic network interface log ',
                    '  Monitor and troubleshoot connectivity issue eg .Subnet to internet, subnet to subnet, internet to subnet ',
                    '  VPC flow logs data can go to S3/Cloudwatch logs',
                ]
            }]
    },
    {
        question: "VPC peering",
        responses: [{
                desc: [
                    '       Connect to 2 Vpc, Privately using AWS network ',
                    '       Make them behave as they are in same network',
                    '    Must not have overlapping CIDR(Ip range address)',
                ]
            }]
    },
    {
        question: "Endpoint",
        responses: [{
                desc: [
                    '  Allow to connect to AWS services using private network instead of public www ----network	inside VPC',
                    '  VPC Endpoint gateway :- S3  & DynamoDb',
                ]
            }]
    },
    {
        question: "S3",
        responses: [{
                value: '4 types of method to encrypt file',
                desc: [
                    '              1.SSE-S3 : Key handled and managed by AWS		  ',
                    '              must se header :- x-amz-server-side-encryption:AES256		  ',
                    '    2.SSE-KMS :-Leverage AWS key management service to manage to encryption key (User master key defined on s3)',
                    '             must se header :- x-amz-server-side-encryption:aws: kms	',
                    '    3. SSE-C :-when you want to manage your own encryption key. must used:https ',
                    '       Data key in header',
                    '    4. Client side encryption ',
                ]
            }]
    },
    {
        question: "S3 Security ",
        responses: [{
                value: 'User based :IAM',
                desc: [
                    '  Resource based :-Bucket policies',
                    '  Object Access control list (ACL)',
                    '  Bucket Acess control list (ACL)	',
                ]
            }]
    },
    {
        question: "AWS CLI on local",
        responses: [{
                value: 'cmd :- aws configure > enter Access keyId, Access key,Region,Default output format :none (On your local)',
            }]
    },
    {
        question: "AWS CLI on EC2",
        responses: [{
                value: 'Use IAM roles to access',
                desc: [
                    '                run  aws configure ,dont put AWS access key and ID ',
                    '                curl instance/meta-data get meta data	',
                    ' ',
                    '   AWS configure --profile myOhterawsaccount (to use multiple AWS account in CLI)',
                    '     AWS s3 ls --profile myotherawsaccount (use others account)',
                    '				',
                    '  IAM roles has policies',
                    '  IAM policy generator,IAM Policies Simulator',
                    '  DRy run :--dry run check if we have access to perform that action',
                    '  STS - sts decode-authorization-message ',
                    '                  sts decode-authorization-message --encoded-message "msg"',
                    '',
                    '  SDK :- Software development kit to call from code	',
                ]
            }]
    },
    {
        question: "Exponential backoff ",
        responses: [{
                desc: [
                    ' if server has limit number request per second  (Throttling expeption)',
                    ' 1 req wait 1 second',
                    '  2nd req wait 2 second so on...',
                ]
            }]
    },
    {
        question: "SigV4",
        responses: [{
                value: 'xxxxxxxx',
                desc: [
                    'you are singed in with your credential to access AWS	(like video)',
                    'Added in header or in Querystring	'
                ]
            }]
    },
    {
        question: "S3 MFA Delete(We need to use root account)",
        responses: [{
                value: 'Before doing importan Operation on S3 bucket we generate code on device	            Can do it with cli only	',
            }]
    },
    {
        question: "S3 Access log:",
        responses: [{
                value: 'Log all request of s3 bucket',
            }]
    },
    {
        question: "S3 Replication (Cross region and same region",
        responses: [{
                value: 'copy bucket from one to other . can not delete',
            }]
    },
    {
        question: "S3 storage class",
        responses: [{
                desc: [
                    '1. S3 Standard general purpose :-High durability (99.99999%)',
                    '2. S3 standard :Infrequent Access(IA) : low cost ',
                    '3. S3 one Zone :Infrequent Access : 99.5 availability less cost than IA (single zone can loss)	',
                    '4. S3 intelligent Tiering :-Small Montly monitoring and tiering fees ',
                    '                           Move the object access tier based on its use',
                    '5. Amazon Glacial :- Archive save data (month:- very low 0.004$/GB + retrieval cost) (minimum 90 days)',
                    '     Retrieval Options ',
                    '      Expedited :- (1 to 5 minutes)',
                    '      Standard (3 to 5 hours)',
                    '      Bulk (5-12 hours) 		',
                    '6. Amazon Glacier Deep Archive : super long term  (minimum 180 days)',
                    '       Retrieval Options ',
                    '       Standard - 12 hours',
                    '       Bulk - 48 hours',
                ]
            }]
    },
    {
        question: "S3 event Notification",
        responses: [{
                desc: [
                    '  On S3.objectCreated. On S3.objectRemovd',
                    '  Call SNS,SQS,Lambdafunction   ',
                    '    SQS :- Simple queue service',
                ]
            }]
    },
    {
        question: "Anthena",
        responses: [{
                value: 'perform Analytics for S3 bucket files without loading data in DB Paid based on query',
            }]
    },
    {
        question: "CloudFront",
        responses: [{
                value: 'CDN Content delivery network',
                desc: [
                    '  AWS has multiple edges location file get cached at edge from main source',
                    '',
                    '  CloudFront - Origin ',
                    '              S3 bucket',
                    '              Application load balancer',
                    '              EC2 instance',
                    '              S3 website',
                    '              any http backend',
                    '',
                    '  OAI - Origin Access Identity',
                    '       Only cloudfront can access bucket with OAI ',
                    '',
                    '     Geo Restriction',
                    '       Blacklist',
                    '       Whitelist',
                ]
            }]
    },
    {
        question: "Docker",
        responses: [{
                value: 'Development platform to deploy app',
                desc: [
                    '           App are packaged in container run by any os ',
                    '           Run any application in any machine',
                    '',
                    '    Docker image stored in Docker hub (public repo)',
                    '    ECR -  private repo :-Amazon ECR (Elastic container registry)',
                    '    Dockerfile build to docker image its saved to docker repo. pull and run it gives docker container',
                    '',
                    '    Docker container management ',
                    '    kubernates(Open source)',
                    '    ECS :- Amazon own platform',
                    '    Fargate :amazon own serverless platform',
                ]
            }]
    },
    {
        question: "ECS Cluster (Elastic container service)",
        responses: [{
                value: 'logical grouping of EC2 instances',
                desc: [
                    '         EC2 instances run ECS agent(Docker container)',
                    '          ECS agent register instances to ECS cluster',
                    '          EC2 instances run special AMI made for specially for ECS',
                    '',
                    '   We create ECS cluster: ASG get created :- EC2 get created ',
                ]
            }]
    },
    {
        question: " ECS Task definition",
        responses: [{
                desc: [
                    '  its metadata JSON to tell ECS how to run a Docker container',
                    '  Image name,Port binding in container and host,Memory and CPU required',
                    '  Environment variable and Networking information',
                ]
            }]
    },
    {
        question: "ECS Service",
        responses: [{
                value: 'How many task run and How should they run',
                desc: []
            }]
    },
    {
        question: "Fargate",
        responses: [{
                value: 'Its all serverless. No more EC2 instances for docker directly use container',
            }]
    },
    {
        question: "BeanStalk",
        responses: [{
                value: 'Application to deploy application on aws ,free',
            }]
    },
    {
        question: "BeanStalk deployment option for update",
        responses: [{
                desc: [
                    '  1. all at once - stop all instance deploy and start',
                    '  2. rolling :-update few instance at time',
                    '  3.Rolling with additional batches :- spin new instance to move the batch(old application available)',
                    '  4. Immutable :-Spins up new stance in new ASG, deploy version to these instances. swap all instance when everything is healthy   ',
                ]
            }]
    },
    {
        question: "CICD",
        responses: [{
                value: 'Code push code get deployed / continuous integration : jenkins ,teamcity,codebuild AWS',
                desc: [
                    ' Code deploy AWS',
                    'Codecommit AWS = git'
                ]
            }]
    },
    {
        question: "CloudFormation",
        responses: [{
                value: 'code will deploy create,delete,update our infrastructure ',
                desc: []
            }]
    },
    {
        question: "AWS cloudWatch:",
        responses: [{
                value: 'Monitoring',
                desc: [
                    '                Metric :- AWS provide metrics for every service',
                    '					 ',
                    '                logs,',
                    '                Event,',
                    '                alarm',
                    '  AWS X-ray :- troubleshoot performance',
                    '   AWS cloudTrail :-Internal monitoring of api calls',
                ]
            }]
    },
    {
        question: "Lambda",
        responses: [{
                value: 'serverless :We dont manage server',
            }]
    },
    {
        question: "Event bridge",
        responses: [{
                desc: [
                    '   invoke lambda like jobs',
                    '   S3 event can call lambda',
                ]
            }]
    },
    {
        question: "DynamoDb",
        responses: [{
                value: 'Aws database automatically scale,Nosql',
            }]
    },
    {
        question: "Api gateway:",
        responses: [{
                value: 'route for lambda',
                desc: []
            }]
    },
    {
        question: "SAM",
        responses: [{
                value: 'Serverless application model ',
                desc: [
                    'framework for development and deploy serverless application'
                ]
            }]
    },
    {
        question: "Cognito",
        responses: [{
                value: 'Give user identity so that they can interact with our application',
            }]
    },
    {
        question: "Cognito user pool ",
        responses: [{
                desc: [
                    ' user get logged in Cognito user pool: from google,facebook,saml,from mobile or web. its gives JWT to user',
                    ' User get authenticate with CUP its give JWT and every gateway api call JWT get validated. then access data',
                ]
            }]
    },
    {
        question: "Cognito Identity pool",
        responses: [{
                value: '  Uses obtain temporary AWS credentials ',
                desc: [
                    '                (Public provider(google,facebook,),Developer authenticated identities (custom login server) )',
                ]
            }]
    },
];


/***/ }),

/***/ "./src/app/files/dot-net.ts":
/*!**********************************!*\
  !*** ./src/app/files/dot-net.ts ***!
  \**********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
    "data": [{
            question: 'Object-orientated',
            responses: [{
                    value: 'it contains encapsulation, inheritance, and polymorphism',
                }]
        },
        {
            question: 'Polymorphism',
            responses: [{
                    value: 'Function act as different',
                    desc: [
                        'Compile time => Overloading',
                        'Runtime Overriding'
                    ]
                }]
        },
        {
            question: 'inheritance',
            responses: [{
                    value: 'taking property of one class to another 1 single level, multilevel',
                    desc: [
                        'does not support multiple inheritance but can be achieved by interface'
                    ]
                }]
        },
        {
            question: 'encapsulation',
            responses: [{
                    value: 'classes, properties and access modifiers are tools to provide encapsulation in c#',
                    desc: [
                        'Encapsulation, in the context of C#, refers to an object s ability to hide data and behavior that are not necessary to its user '
                    ]
                }]
        },
        {
            question: 'type',
            responses: [{
                    value: 'The fundamental building block in C#  unit of data and functions called a type',
                    desc: [
                        ' class,struct,enum,interface,delegate'
                    ]
                }]
        },
        {
            question: 'type member',
            responses: [{
                    value: 'fields,properties,constructors,methods',
                    desc: []
                }]
        },
        {
            question: 'delegate',
            responses: [{
                    value: ' pointer to the function, Functions can be treated as values',
                    desc: [
                        'Using delegates, C# allows functions to be passed as values to and from other functions.',
                        'like callback'
                    ]
                }]
        },
        {
            question: 'Type Safety',
            responses: [{
                    value: 'We define the type at compile time int/string',
                }]
        },
        {
            question: 'Memory Management',
            responses: [{
                    value: ' C# relies on the runtime to perform automatic memory management',
                    desc: [
                        'The Common Language Runtime has a garbage collector reclaiming memory for objects that are no longer referenced.'
                    ]
                }]
        },
        {
            question: 'Common Language Runtime (CLR)',
            responses: [{
                    value: 'provides runtime services such as automatic memory management and exception handling',
                }]
        },
        {
            question: 'C# is called a managed language ',
            responses: [{
                    value: 'because it compiles source code into managed code, which is represented in Intermediate Language (IL).',
                    desc: [
                        'The CLR converts the IL into the native code of the machine, such as X86 or X64(Just-In-Time (JIT) compilation)						  '
                    ]
                }]
        },
        {
            question: 'assembly',
            responses: [{
                    value: 'generated file on compilation dll or .exe',
                    desc: [
                        'The container for managed code is called an assembly'
                    ]
                }]
        },
        {
            question: 'Dot net framework',
            responses: [{
                    value: 'Three layers',
                    desc: [
                        'Application framework :-Api for web(asp.net core,wpf,xamrin)',
                        'Base Class Libraries (BCL) :- lower level functionality (Collection,threading,I/O,networking,XML/Json)',
                        'CLR:- lower level functionality (Collection,threading,I/O,networking,XML/Json)		  ',
                    ]
                }]
        },
        {
            question: 'Instance versus static members ',
            responses: [{
                    value: 'instance method will be different for each instance. static will be same for all',
                    image: 'instance_vs_static.png',
                    desc: []
                }]
        },
        {
            question: 'Array',
            responses: [{
                    value: 'xxxxxxxxxxxxxxxx',
                    image: 'array.png'
                }]
        },
        {
            question: 'Rectangular arrays  vs Jagged arrays ',
            responses: [{
                    value: 'Jagged array inner length of array can be different',
                }]
        },
        {
            question: 'Variables and Parameters',
            responses: [{
                    value: 'value, ref, out, or in',
                    desc: []
                },
                {
                    value: ' To pass by reference',
                    desc: [
                        'Foo(ref x); =>Foo (ref int p)'
                    ]
                },
                {
                    value: 'out modifier',
                    desc: [
                        '     similar to ref. condition',
                        '     1. Dont assign doing to function',
                        '     2. Second function should assign the value',
                        '     Foo(out x); =>Foo (out int p)',
                    ]
                }, {
                    value: 'in modifier',
                    desc: [
                        'similar to ref. condition',
                        'argument’s value can not modified by the method	   ',
                        'Foo(in x); =>Foo (in int p)',
                        'helpful in passing of large size data because it does not copy.',
                        'and it can not change as well',
                    ]
                },
                {
                    value: 'The params modifier',
                    desc: [
                        '  method accepts any number of arguments of a particular type',
                        '  Sum (1, 2, 3, 4); =>Sum (params int[] ints)',
                    ]
                },
                {
                    value: 'Optional parameters',
                    desc: [
                        'Foo() =>    Foo (int x = 23)'
                    ]
                },
                {
                    value: 'Named arguments',
                    desc: [
                        'Foo (x:1, y:2) =>Foo (int x, int y)'
                    ]
                },
                {
                    value: ' Ref Locals',
                    desc: [
                        'int[] numbers = { 0, 1, 2, 3, 4 };',
                        '  ref int numRef = ref numbers [2] ',
                        '  change numRef  and numbers will get changed',
                    ]
                },
            ]
        },
        {
            question: 'Stack and the Heap ',
            responses: [{
                    value: 'Stack',
                    desc: [
                        'memory for storing local variables and parameters',
                        'grows and shrinks as a method or function is entered and exited'
                    ]
                }, {
                    value: 'Heap',
                    desc: [
                        ' memory in which objects (i.e., reference-type instances) store.',
                        ' a new object is created it is allocated on the heap, and a reference to that',
                        '  object is returned	',
                        ' The runtime has a garbage collector check of unused reference and remove it from memory',
                    ]
                }]
        },
        {
            question: 'Null-Coalescing Operator',
            responses: [{
                    value: 'string s2 = s1 ?? "nothing";',
                    desc: [
                        ' Null-Coalescing Assignment Operator =>myVariable ??= someDefault; // if myVariable is empty then it get someDefault value',
                        ' Null-Conditional Operator :- sb?.ToString();',
                    ]
                }]
        },
        {
            question: 'Namespace',
            responses: [{
                    value: ' group of types  or container',
                    desc: [
                        '     A namespace is a domain for type names.',
                        '     easier to find and avoiding conflicts',
                        '      Namespaces are independent of assemblies, 	 ',
                        '    The using Directive :-imports a  // using System',
                        '   using static :- static directive imports a type rather than a namespace. ',
                        '//using static System.Console',
                        '  WriteLine ("Hello");',
                        '  Repeated namespaces => we can same type name until there type is matches // e.g. both have same class',
                    ]
                }]
        },
        {
            question: 'Class',
            responses: [{
                    value: 'internal, abstract, sealed, static, unsafe, and partial',
                    image: 'class.png'
                }]
        },
        {
            question: 'static readonly vs const',
            responses: [{
                    value: 'Const value can not changed but static readonly can changed',
                    desc: [
                        '  static readonly DateTime StartupTime = DateTime.Now;',
                        '  const double twoPI = 2 * System.Math.PI;',
                        '  public const decimal ProgramVersion = 2.3;	// not preferable',
                        ' // supppose other assembly using this even after we changed it 2.4 it will be 2.3',
                        '   for other assembly untill it compile ',
                    ]
                }]
        },
        {
            question: 'Methods',
            responses: [{
                    value: 'performs an action in a series of statements'
                }]
        },
        {
            question: 'Overloading methods ',
            responses: [{
                    desc: [
                        'void Foo (int x) {...}',
                        'void Foo (double x) {...}',
                        'void Foo (int x, float y) {...}',
                        'void Foo (float x, int y) {...}'
                    ]
                }]
        },
        {
            question: 'Overloading constructors',
            responses: [{
                    value: ' A class or struct may overload constructors.',
                    image: 'constructor.png',
                    desc: [
                        'To avoid code duplication, one constructor can call another, using the this keyword'
                    ]
                }]
        },
        {
            question: 'Deconstructors',
            responses: [{
                    value: 'opposite to a constructor',
                    desc: [
                        'whereas a constructor typically takes a set of values (as parameters) and assigns them to fields, a deconstructor does the reverse and assigns fields back to a set of variables.',
                        ' used with out',
                        ' public void Deconstruct (out float width, out float height)',
                        ' var rect = new Rectangle (3, 4);',
                        ' (float width, float height) = rect; ',
                        ' or',
                        ' float width, height;',
                        ' rect.Deconstruct (out width, out height);',
                        ' or ',
                        ' rect.Deconstruct (out var width, out var height);',
                    ]
                }]
        },
        {
            question: 'Properties',
            responses: [{
                    value: 'Properties look like fields from the outside, but internally they contain logic, like methods do',
                    image: 'prop.png'
                }]
        },
        {
            question: 'Static Constructors',
            responses: [{
                    value: 'A static constructor executes once per type rather than once per instance',
                    desc: [
                        'A type can define only one static constructor',
                        'it must be parameterless and have the same name as the type',
                        'A type can',
                        ' define only one static constructor, and it must be parameterless and have the sam',
                        ' name as the type',
                        ' Two things trigger this',
                        '  1.Instantiating the type',
                        '  2.Accessing a static member in the type',
                    ]
                }]
        },
        {
            question: 'Static Classes',
            responses: [{
                    value: 'A class can be marked static',
                    desc: [
                        '  must be composed solely of static members',
                        '  cannot be subclassed.	',
                        '  e.g  System.Console and System.Math ',
                    ]
                }]
        },
        {
            question: 'partial class,method',
            responses: [{
                    value: 'compiler combines  two partial classes into one class, C# provides the ability to have a single class implementation in multiple .cs',
                    desc: [
                        '    .should be in same assembly and namespace.',
                        '    Can separate the code',
                        '    multiple developer can work on same file',
                        '    Partial Methods :- It has one declaration and  definition, can be in same file or in different file',
                    ]
                }]
        },
        {
            question: 'Upcasting',
            responses: [{
                    value: 'creates a base class reference',
                    desc: [
                        '    Stock msft = new Stock(); //Stock sub class class',
                        '    Asset a = msft;  // asset base class. can not access value of stock ',
                    ]
                }]
        },
        {
            question: 'Downcasting',
            responses: [{
                    desc: [
                        'creates a subclass reference',
                        'Stock msft = new Stock();',
                        'Asset a = msft; // Upcast',
                        'Stock s = (Stock)a; // now can access value of base and subclass',
                    ]
                }]
        },
        {
            question: 'Virtual Function Members',
            responses: [{
                    value: 'A function marked as virtual can be overridden by subclasses wanting to provide a specialized implementation',
                    desc: [
                        'public virtual decimal Liability => 0; // Base Class',
                        'public override decimal Liability => Mortgage; // Sub Class  ',
                    ]
                }]
        },
        {
            question: 'abstraction method',
            responses: [{
                    value: 'modifier indicates that the thing being modified has a missing or incomplete implementation.we have to override it	',
                    desc: [
                        ' public abstract decimal NetValue { get; } // base class',
                        ' public override decimal NetValue => CurrentPrice * SharesOwned;// sub class',
                    ]
                }]
        },
        {
            question: 'Hiding Inherited Members',
            responses: [{
                    value: 'same property in used in parent and child. we want hide property of parent',
                    desc: [
                        '   public class A { public int Counter = 1; } \\ Base class',
                        '   public class B : A { public new int Counter = 2; } \\ sub class',
                    ]
                }]
        },
        {
            question: 'new versus override ',
            responses: [{
                    value: 'overide will even overide the parent class method but  not new',
                }]
        },
        {
            question: 'Sealing Functions and Classes :',
            responses: [{
                    value: 'overridden function member can seal its implementation with the sealed key',
                    desc: [
                        'word to prevent it from being overridden by further subclasses   ',
                        'public sealed override decimal Liability { get { return Mortgage; } }',
                    ]
                }]
        },
        {
            question: 'The base Keyword ',
            responses: [{
                    value: 'similar to the this',
                    desc: [
                        'two essential purposes:',
                        '1. Accessing an overridden function member from the subclass',
                        '2. Calling a base-class constructor',
                    ]
                }]
        },
        {
            question: 'Constructors and Inheritance',
            responses: [{
                    value: 'A subclass must declare its own constructors',
                    desc: [
                        ' public Subclass (int x) : base (x) { }'
                    ]
                }]
        },
        {
            question: 'Boxing and Unboxing',
            responses: [{
                    value: 'box value type to reference type ',
                    desc: [
                        ' int Val = 1 Object Obj = Val; //Boxing  int i = (int)Obj unboxing	'
                    ]
                }]
        },
        {
            question: 'Structs',
            responses: [{
                    value: 'A struct is similar to a class',
                    desc: [
                        '  A struct is a value type, whereas a class is a reference type.',
                        '  A struct does not support inheritance',
                    ]
                }]
        },
        {
            question: 'Interfaces',
            responses: [{
                    value: 'xxxxxxxxxxxxxxxx',
                    desc: [
                        '      Interfaces -signatures of methods, properties, ',
                        '      events or indexers. and can be used as dependency injection,',
                        '     does not support multiple inheritance but can be achieved by interface',
                        '   similar to a class but only specifies behavior and does not hold state',
                        '                 (data). Consequently',
                        '    .Interface members are implicitly abstract.	',
                        '   internal class Countdown : IEnumerator :- It should implement all the method of interface	',
                    ]
                }]
        },
        {
            question: 'Explicit Interface Implementation',
            responses: [{
                    value: 'Implementing multiple interfaces can sometimes result in a collision between member',
                    desc: [
                        '  resolved by I2.Foo();',
                        '  public class Widget : I1, I2',
                        '  {',
                        '   public void Foo()',
                        '   {',
                        '   Console.WriteLine ("Widgets implementation of I1.Foo");',
                        '   }',
                        '   int I2.Foo()',
                        '   {',
                        '   Console.WriteLine ("Widgets implementation of I2.Foo");',
                        '   return 42;',
                        '   }',
                        '  }',
                        '  w.Foo(); // Widgets implementation of I1.Foo',
                        '  ((I1)w).Foo(); // Widgets implementation of I1.Foo',
                        '  ((I2)w).Foo(); // Widgets implementation of I2.Foo	',
                    ]
                }]
        },
        {
            question: 'Generics',
            responses: [{
                    value: 'Generics allow you to delay the specification of the data type of programming elements in a class or a method,',
                    desc: [
                        'until it is actually used in the program,work with any data type'
                    ]
                }]
        },
        {
            question: 'Delegates',
            responses: [{
                    value: 'callback function',
                    desc: [
                        '   A delegate is an object that knows how to call a method.',
                        '   it defines the method’s return type and its parameter types.',
                        '   delegate int Transformer (int x);// it can be used with any mehtod with parameter int and return type int',
                        '   static int Square (int x) { return x * x}; ',
                        '   Transformer t = Square;',
                        '   int answer = t(3); //9',
                    ]
                }]
        },
        {
            question: 'Multicast Delegates',
            responses: [{
                    value: 'call all return first one',
                    desc: [
                        '    can add list of target methods, can store multiple callback  ',
                        '    The + and += operators combine delegate instances',
                        '          delegate  int Transformer(int x);	  ',
                        '          Transformer del = function2;',
                        '          del =del+ function1;',
                        '          var x = del(9);',
                        '          ',
                        '       static int function2(int a)',
                        '      {',
                        '         ',
                        '          return a + 10;',
                        '      }',
                    ]
                }]
        },
        {
            question: 'Generic Delegate Types',
            responses: [{
                    desc: [
                        '  public delegate T Transformer<T>(T arg);	',
                        '  Transformer<int> del = function2;',
                        '  del = del+ function1;',
                        '  var x = del(9);	',
                    ]
                }]
        },
        {
            question: 'The Func and Action Delegates',
            responses: [{
                    value: 'to store delegate we have to create generic every time',
                    desc: [
                        '  Func is already generic is defined we can use that to reference and call method			',
                        '  Func<int,int> del = function2// take tha parameter int and return int',
                        '   del =del+ function1;',
                    ]
                }]
        },
        {
            question: 'Event',
            responses: [{
                    value: 'work with delegate broadcaster and subscriber',
                }]
        },
        {
            question: 'Lambda Expression',
            responses: [{
                    value: ' A lambda expression is an unnamed method written in place of a delegate instance	   ',
                    desc: [
                        '    delegate int Transformer (int i);',
                        '    Transformer sqr = x => x * x;  ',
                        '    sqr(3)',
                        '    or Func<int,int> sqr = x => x * x;',
                        '     Func<int, int> multiplier = n => n * factor;',
                    ]
                }]
        },
        {
            question: ' Anonymous Methods',
            responses: [{
                    value: 'An anonymous method is like a lambda expression, but it lacks the following features:',
                    desc: [
                        '  Implicitly typed parameters',
                        '  Expression syntax (an anonymous method must always be a statement block)',
                        '  The ability to compile to an expression tree, by assigning to Expression<T>',
                        '  delegate int Transformer (int i);',
                        '  Transformer sqr = delegate (int x) {return x * x;};',
                    ]
                }]
        },
        {
            question: 'LINQ',
            responses: [{
                    value: 'Language-Integrated Query',
                    image: 'linq.png'
                }]
        },
        {
            question: 'Query Expressions',
            responses: [{
                    value: 'shortcut for writing LINQ queries',
                    desc: [
                        ' string[] names = { "Tom", "Dick", "Harry", "Mary", "Jay" };',
                        ' IEnumerable<string> query =',
                        ' from n in names',
                        ' where n.Contains ("a") // Filter elements',
                        ' orderby n.Length // Sort elements',
                        ' select n.ToUpper(); // Translate each element (project)',
                        ' foreach (string name in query) Console.WriteLine (name);	',
                        ' int matches = (from n in names where n.Contains ("a") select n).Count();',
                    ]
                }]
        },
        {
            question: 'Subqueries',
            responses: [{
                    value: 'xxxxxxxxxxxxxxxx',
                    desc: [
                        '                musos.OrderBy (m => m.Split().Last());',
                        '                names',
                        '    .Where (n => n.Length == names.OrderBy (n2 => n2.Length)',
                        '    .Select (n2 => n2.Length).First())',
                        '                        ',
                        '                    IEnumerable<string> query = names',
                        '    .Select (n => n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                        '    .Replace ("o", "").Replace ("u", ""))',
                        '    .Where (n => n.Length > 2)',
                        '    .OrderBy (n => n);',
                        '   ',
                        '   IEnumerable<string> query = names',
                        '    .Select (n => n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                        '    .Replace ("o", "").Replace ("u", ""))',
                        '    .Where (n => n.Length > 2)',
                        '    .OrderBy (n => n);',
                    ]
                }],
        },
        {
            question: 'The into Keyword',
            responses: [{
                    desc: [
                        '  IEnumerable<string> query =',
                        '  from n in names',
                        '  select n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                        '  .Replace ("o", "").Replace ("u", "")',
                        '  into noVowel',
                        '  where noVowel.Length > 2 orderby noVowel select noVowel;',
                        '  ',
                        '  IEnumerable<string> query =',
                        '  from n1 in',
                        '  (',
                        '  from n2 in names',
                        '  select n2.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                        '  .Replace ("o", "").Replace ("u", "")',
                        '  )',
                        '  where n1.Length > 2 orderby n1 select n1;',
                    ]
                }]
        },
        {
            question: 'Object Initializers',
            responses: [{
                    value: 'xxxxxxxxxxxxxxxx',
                    desc: [
                        '   from n in names',
                        '   select new TempProjectionItem',
                        '   {',
                        '   Original = n,',
                        '   Vowelless = n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                        '   .Replace ("o", "").Replace ("u", "")',
                        '   }',
                        '   ',
                        '   var intermediate = from n in names',
                        '   select new',
                        '   {',
                        '   Original = n,',
                        '   Vowelless = n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                        '   .Replace ("o", "").Replace ("u", "")',
                        '   };',
                    ]
                }]
        },
        {
            question: 'Interpreted Queries',
            responses: [{
                    value: ' An example is Microsoft’s Entity Framework ',
                    desc: [
                        '                Query database',
                        '                IQueryable<string> query = from c in dbContext.Customers',
                        'where c.Name.Contains ("a")',
                        'orderby c.Name.Length',
                        'select c.Name.ToUpper()',
                        '',
                        'IQueryable<string> query = dbContext.customers',
                        '.Where (n => n.Name.Contains ("a"))',
                        '.OrderBy (n => n.Name.Length)',
                        '.Select (n => n.Name.ToUpper());',
                        '',
                        'IQueryable<Book> query = dbContext.Books',
                        '.Where (b => b.Title.Contains ("mercury"))',
                        '.OrderBy (b => b.Title)',
                        '.Skip (20).Take (20);',
                    ]
                }]
        },
        {
            question: 'Disposal and Garbage Collection',
            responses: [{
                    value: 'class Test : IDisposable',
                    desc: [
                        '                IDisposable, Dispose, and Close :- public interface IDisposable',
                        '                using statement',
                        '                 it handle the memory',
                        'CLR clear the heep automatically',
                    ]
                }]
        },
        {
            question: 'Forcing Garbage Collection',
            responses: [{
                    desc: [
                        'GC.Collect();',
                        'GC.WaitForPendingFinalizers();',
                        'GC.Collect();',
                    ]
                }]
        },
        {
            question: 'Managed Memory Leaks',
            responses: [{
                    value: 'CLR manually deallocate',
                    desc: [
                        '       memory when an object is no longer required',
                        '       .some objects require explicit tear-down code to release resources such as open files,',
                        '               locks, operating system handles, and unmanaged objects',
                        '        . this is called disposal, and it is supported through the IDisposable interface	',
                        '        .C#’s using statement provides a syntactic shortcut for calling Dispose on objects',
                        '           that implement IDisposable, using a try/finally block:  ',
                        '           using (FileStream fs = new FileStream ("myFile.txt", FileMode.Open))',
                        '           it get comiled into ',
                        '            finally',
                        '      {',
                        '       if (fs != null) ((IDisposable)fs).Dispose();',
                        '      }',
                    ]
                }]
        },
        {
            question: 'Close and Stop',
            responses: [{
                    value: 'Some types define a method called Close in addition to Dispose.',
                    desc: [
                        '  IDbConnection => close can be reopened',
                        '  Timer or HttpListener => stop => can be start again',
                    ]
                }]
        },
        {
            question: 'three scenarios for not disposing',
            responses: [{
                    desc: [
                        '   1. When you don’t “own” the object; for example, when obtaining a shared object',
                        '   via a static field or property	-  System.Drawing namespace - Brushes.Blue ',
                        '     Because same instance are used throughout the life of the',
                        '   application ',
                        '           2.When an object’s Dispose method does something that you don’t want',
                        '           3.When an object’s Dispose method is unnecessary by design, and disposing that',
                        '   object would add complexity to your program',
                    ]
                }]
        },
        {
            question: 'MemoryStream,StreamReader,StreamWriter,IDbConnection,DbContext',
            responses: [{
                    value: 'they all have disposal call if you dont need them',
                    desc: []
                }]
        },
        {
            question: 'unsubscribe',
            responses: [{
                    value: 'good practice to unsubscribe from events that the object has subscribed to internally over its lifetime(e,g signalR)',
                }]
        },
        {
            question: 'Dispose method',
            responses: [{
                    desc: [
                        '   A Dispose method itself does not cause (managed) memory ',
                        '   to be released—this can happen only in garbage collection',
                        '   dispose method mark memorery unsued and garbage collection free the memory',
                    ]
                }]
        },
        {
            question: 'Garbage collection',
            responses: [{
                    desc: [
                        'Garbage collection does not happen immediately after an object is orphaned	   ',
                        'it happens periodically :-not to a fixed schedule.',
                        '  run time depend on available memory, the amount of memory allocation,',
                        '  and the time since the last collection',
                    ]
                }]
        },
        {
            question: 'Generational collection',
            responses: [{
                    value: 'GC divides the managed heap into three generations.',
                    desc: [
                        '  Gen0 :-(short lived-small size)  Objects that have just been allocated	',
                        '  Gen1 :-(short lived- small size)  objects that have survived one collection cycle 	',
                        '  Gen 2:- others',
                    ]
                }]
        },
        {
            question: 'The Large Object Heap(LOH)',
            responses: [{
                    value: 'Larged object get saved in LOH :- can not allowd to save in gen0 because we access gen0 more.',
                    desc: [
                        '     The LOH is subject to fragmentation :- Large object assing in this when it goes space is left there',
                        '     we can compact LOH',
                        '       GCSettings.LargeObjectHeapCompactionMode =',
                        '         GCLargeObjectHeapCompactionMode.CompactOnce	',
                    ]
                }]
        },
        {
            question: 'Forcing Garbage Collection',
            responses: [{
                    value: '-GC.Collect() => run on full collection ',
                    desc: [
                        ' GC.Collect(0) => run on gen0 ',
                        ' GC.Collect();',
                        ' GC.WaitForPendingFinalizers();',
                        ' GC.Collect();',
                        ' // try to avoid it. we can use it in services like it run once in 1 day',
                        '   after doing task we can call GC',
                    ]
                }]
        },
        {
            question: 'Array Pooling',
            responses: [{
                    desc: [
                        '    If your application frequently instantiates array',
                        '    you can avoid most of the garbage collection overhead with array poolin',
                    ]
                }]
        },
        {
            question: 'Managed Memory Leaks',
            responses: [{
                    desc: [
                        'unused objects remaining alive by virtue of unused or forgotten references',
                        'In unmanaged languages such as C++, ',
                        'you must remember to manually deallocate memory when you dont need it',
                        'In unmanaged languages such as C++, you must remember to manually deallocate ',
                        'or memoery leak will happen ',
                        ' Timers => Forgetten time cause memory leak timer.start() // but not used timer.stop//timer.dispose()			  ',
                    ]
                }]
        },
        {
            question: 'Diagnosing Memory Leaks',
            responses: [{
                    desc: [
                        '   long memoryUsed = GC.GetTotalMemory(true);',
                        '   windbg.exe tool can help	',
                        '   microsoft clr profiler',
                        '   SciTech’s Memory Profiler,',
                        '   Red Gate’s ANTS Memory Profiler.',
                    ]
                }]
        },
        {
            question: 'Weak References',
            responses: [{
                    value: 'Object wil not get cleared by GC =>System.WeakReference',
                    desc: [
                        '    If a target is referenced only by one or more weak references, the GC will consider',
                        '    the target eligible for collection',
                        '    var weak = new WeakReference (new StringBuilder ("weak"));',
                        '     var sb = (StringBuilder) weak.Target',
                        '     // weak.Target get collected by GC but not sb becuae it been assgined to local',
                    ]
                }]
        },
        {
            question: 'Threading',
            responses: [{
                    value: 'it gives concurrency',
                    desc: [
                        '    A thread is an execution path that can proceed independently of others.',
                        '    Thread t = new Thread (WriteY); // Kick off a new thread',
                        '    t.Start();',
                        '    ',
                        '    t.join() // wait untill thread is finished',
                        '    Thread.Sleep (500);  // pause current thread for specifc time',
                        '    lock (_locker) // thread will wait if other thread is processing it ',
                    ]
                }]
        },
        {
            question: 'Passing Data to a Thread',
            responses: [{
                    desc: [
                        '   Thread t = new Thread ( () => Print ("Hello from t!") );',
                        '   t.Start();',
                        '    new Thread (() =>',
                        '    {',
                        '     Console.WriteLine ("Im running on another thread!");',
                        '     Console.WriteLine ("This is so easy!");',
                        '    }).Start();	 ',
                        '    ',
                        '     Thread t = new Thread (Print);',
                        '     t.Start ("Hello from t!");',
                    ]
                }]
        },
        {
            question: 'Foreground versus Background Threads',
            responses: [{
                    value: 't.IsBackground = true;',
                    desc: [
                        '     By default :Foreground threads',
                        '     Foreground threads keep the application alive for as long as any one of them is running',
                        '      IsBackground=true when applcation foreground thread end. end the application and ',
                        '       terminate background thread	 ',
                    ]
                }]
        },
        {
            question: 'The Thread Pool',
            responses: [{
                    value: ' Whenever you start a thread a few hundred microseconds are spent organizing such things as a fresh local variable stack.',
                    desc: [
                        'The thread pool cuts this overhead by having a pool of pre-created recyclable threads'
                    ]
                }]
        },
        {
            question: 'Tasks',
            responses: [{
                    value: 'xxxxxxxxxxxxxxxx',
                    desc: [
                        'it can overcome by task',
                        'var taskObject =  Task.Run (() => Console.WriteLine ("Foo"));',
                        'Task<int> task = Task.Run (() => { Console.WriteLine ("Foo"); return 3; });',
                        'Task.Run returns a Task object that we can use to monitor its progress,',
                    ]
                }]
        },
        {
            question: '.Wait',
            responses: [{
                    value: 'wait until task is finished',
                    desc: [
                        '  Task task = Task.Run (() =>',
                        '  {',
                        '   Thread.Sleep (2000);',
                        '   Console.WriteLine ("Foo");',
                        '  });',
                        '  Console.WriteLine (task.IsCompleted); // False',
                        '  task.Wait(); // Blocks until task is complete	',
                    ]
                }]
        },
        {
            question: 'Long-running tasks',
            responses: [{
                    desc: [
                        '     By default, the CLR runs tasks on pooled threads, which is ideal for short-running',
                        '     compute-bound work	',
                        '       For longer-running and blocking operations you can prevent use of a pooled thread as follows:',
                        '        Task task = Task.Factory.StartNew (() => ...,',
                        '      TaskCreationOptions.LongRunning);',
                    ]
                }]
        },
        {
            question: 'Returning values ',
            responses: [{
                    desc: [
                        '       Task<int> task = Task.Run (() => { Console.WriteLine ("Foo"); return 3; });',
                        '       int result = task.Result; // Blocks if not already finished',
                        '       Console.WriteLine (result); // 3 ',
                    ]
                }]
        },
        {
            question: 'Continuations',
            responses: [{
                    value: 'Work as callback function',
                    desc: [
                        '  Task<String> task = Task.Run(() => {',
                        '      return "hi";',
                        '  });',
                        '  var abc = task.GetAwaiter();',
                        '  abc.OnCompleted(() =>',
                        '  {',
                        '      var res = abc.GetResult();',
                        '      Console.WriteLine(res);',
                        '  });	',
                    ]
                }]
        },
        {
            question: 'The Roslyn Compiler ',
            responses: [{
                    value: 'written in C#, set of modular libraries known as Roslyn',
                }]
        },
        {
            question: 'how to pass data',
            responses: [{
                    desc: [
                        'ViewBag.name="abhi" =>  @ViewBag.Name',
                        'view(model)    @model Mvc.model.momdName  @modelName.Name '
                    ]
                }]
        },
        {
            question: 'MVC Application lifeCycle',
            responses: [{
                    desc: [
                        '  On Application start Global.asax application start method get called',
                        '  Webapi, routes get registered here ',
                        '  route.Config  =>Instance routetable is created ',
                        '  and store on which route which controller action get called',
                        '  appStart folder has route.config and webApi.config',
                        '  MVCHandler creates a DefaultControllerFactory processes the RequestContext to controller',
                        '  we can use UnityControllerFactory custom factory to create custom context.',
                        '  Services get injected buy only interface easy for testing',
                        '  Once action method get executed view engine render the view',
                    ]
                }]
        },
        {
            question: 'ADO.NET',
            style: {
                width: { width: '80%' }
            },
            responses: [
                {
                    style: { width: '100%' },
                    image: 'ado.PNG'
                },
                {
                    style: { width: '100%' },
                    image: 'data_adapter.PNG'
                },
                {
                    style: { width: '100%' },
                    image: 'SP.PNG'
                }
            ]
        },
        {
            question: 'Connection Pooling in ADO.NET ',
            responses: [{
                    value: 'reusing your connection to the database instead of always opening and closing connection      ',
                }]
        },
        {
            question: 'differences Between DataReader and DataSet',
            responses: [{
                    desc: [
                        'DataSet  :-  can modify data. slow lower performance',
                        'DataReader :- cannot modify data.fast and better performance '
                    ]
                }]
        },
        {
            question: 'SqlCommand',
            responses: [{
                    value: 'SqlCommand carries the SQL statement that needs to be executed on the database uses connection object to execute SQL queries',
                },
                {
                    value: 'ExecuteScalar',
                    desc: [
                        'return single value'
                    ]
                },
                {
                    value: 'ExecuteNonQuery',
                    desc: [
                        'data manipulation on the database, return value int no of row affected'
                    ]
                },
                {
                    value: 'ExecuteReader',
                    desc: [
                        'retrieve rows and columns of data'
                    ]
                }
            ]
        },
        {
            question: 'DataAdapter',
            responses: [
                {
                    desc: [
                        ' linking the database and connection object',
                        ' communication between Dataset and data sources.',
                        ' Data moves ‘in and out’ of the Dataset through DataAdapter.',
                        ' DataAdapter.fill => get the data ',
                        ' DataAdapter.update => update the data',
                    ]
                }
            ]
        },
        {
            question: 'DataSet',
            responses: [
                {
                    desc: [
                        'heart of ADO.NET.',
                        'collection of DataTable objects',
                    ]
                }
            ]
        },
        {
            question: 'DataView',
            responses: [
                {
                    value: 'create different views of the data stored in a DataTable manipulate  filter and/or sort  ',
                }
            ]
        },
        {
            question: 'Solid SRP',
            responses: [{
                    value: 'Single Responsibility Principle (SRP)',
                    desc: [
                        'One function class do only one thing'
                    ]
                }
            ]
        },
        {
            question: 'Solid (OCP)',
            responses: [{
                    value: 'Open Closed Principle ',
                    image: 'ocp.png',
                    desc: [
                        'classes, modules, functions should be open for extension, but closed for modification.',
                        'Avoid changing existing class once its development and testing is done',
                        'Use interface or abstract class and extend the new method that you need'
                    ]
                }
            ]
        },
        {
            question: 'LSP',
            responses: [{
                    value: 'Liskov Substitution Principle',
                    image: 'LSP.png',
                    desc: [
                        'use derived class instead of a parent class behave in the same manner without modification',
                        'does not impact parent class'
                    ]
                }
            ]
        },
        {
            question: 'ISP',
            responses: [{
                    value: 'Interface Segregation Principle (ISP)',
                    desc: [
                        'dont load the interface instead use sub interface to divide the task'
                    ]
                }
            ]
        },
        {
            question: 'DIP',
            responses: [{
                    value: 'Dependency Inversion Principle',
                    image: 'DIP.png',
                    desc: [
                        'high-level modules/classes should not depend on low-level modules/classes',
                        'Both should depend upon abstractions,',
                        'Make code as loosly coupled possible  ',
                    ]
                }
            ]
        },
        {
            question: 'Sessions Management',
            responses: [{
                    desc: [
                        'Inproc :- In momory object ->  stored in worker processes, not work with load balancer',
                        'stateserver :- Run by asp.net state service.we give connection string in web.config. It can be differenc server',
                        'Sql server :- Session get stored in DB',
                        'Custom :- We can use it like JWT',
                        'Cookieless :- work without cookie by unique Id in url with inproc',
                    ]
                }
            ]
        },
        {
            question: 'WCF',
            responses: [{
                    value: 'Windows Communication Foundation ',
                    desc: [
                        '     IService.cs =>  has all the declarations  call contract',
                        '     Operation Contract => operation happened call Operation Contract',
                        '                       We can call our custom by using attribute',
                        '     Data Contract => transferred and processed within service and they store the values',
                        '                    like model . they have data member like model property',
                        '      Address, Binding and Contract  => defined web.config  ',
                    ]
                }
            ]
        },
        {
            question: 'Web api vs WCF',
            responses: [{
                    desc: [
                        '   WCF => fast, support all transfer protocol https http and tcp',
                        '   web api => slow , rest api ,http and https only. uses web service and attribute  ',
                    ]
                }
            ]
        },
        {
            question: 'WCF Concurrency ServiceBehavior',
            responses: [{
                    desc: [
                        '   [ServiceBehavior(ConcurrencyMode = ConcurrencyMode.Single)]  ',
                        '   Single Concurrency Mode =>only 1 thread, others have to wait while it doing processing',
                        '                          not allow concurrent calls',
                        '                          only one request will proceed at any time',
                        '   Multiple Concurrency Mode => allows multiple accesses at the same time',
                        '   Reentrant Concurrency Mode =>  like single concurrency mode',
                    ]
                }
            ]
        },
        {
            question: '111',
            responses: [{
                    value: 'asdf',
                    desc: []
                }
            ]
        },
        {
            question: '111',
            responses: [{
                    value: 'asdf',
                    desc: []
                }
            ]
        },
        {
            question: '111',
            responses: [{
                    value: 'asdf',
                    desc: []
                }
            ]
        },
        {
            question: '111',
            responses: [{
                    value: 'asdf',
                    desc: []
                }
            ]
        },
    ]
};


/***/ }),

/***/ "./src/app/files/dot-netq.ts":
/*!***********************************!*\
  !*** ./src/app/files/dot-netq.ts ***!
  \***********************************/
/*! exports provided: dataQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataQ", function() { return dataQ; });
var dataQ = {
    "data": [
        {
            question: 'Razor',
            responses: [{
                    value: 'c# coding on view',
                }]
        },
        {
            question: 'Namespace',
            responses: [{
                    value: 'group of types  or container',
                }]
        },
        {
            question: 'types',
            responses: [{
                    value: 'class,struct,enum,interface,delegate',
                }]
        },
        {
            question: 'type member',
            responses: [{
                    value: 'fields,properties,constructors,methods',
                    desc: []
                }]
        },
        {
            question: 'Value and Reference Types',
            responses: [{
                    value: 'value type stack,struct,int,bool,byte ,Primitive data types reference type heap-Classes,Delegates,string,interface,object,array,indexes,its default value is null -both stored in ram',
                }]
        },
        {
            question: 'Boxing and Unboxing',
            responses: [{
                    value: 'box value type to reference type ; int Val = 1 Object Obj = Val; //Boxing  int i = (int)Obj unboxing',
                }]
        },
        {
            question: 'complier',
            responses: [{
                    value: 'compile code to assembly language',
                    desc: []
                }]
        },
        {
            question: 'Interfaces',
            responses: [{
                    value: 'signatures of methods, properties, events or indexers.and can be used as dependcy injection,does not support multiple inheritance but can be achieved by interface',
                }]
        },
        {
            question: 'Struct',
            responses: [{
                    value: 'value type',
                    desc: []
                }]
        },
        {
            question: 'Value type',
            responses: [{
                    value: 'int,float,double,structs,enums,stack',
                }]
        },
        {
            question: 'reference type',
            responses: [{
                    value: 'interfaces,class,delegate,array,object,string,heap',
                }]
        },
        {
            question: 'Properties',
            responses: [{
                    value: 'Properties are named members of classes, structures, and interfaces',
                    desc: []
                }]
        },
        {
            question: 'Method overloading',
            responses: [{
                    value: 'same function name with diff parameters,early binding,Static Polymorphism',
                }]
        },
        {
            question: 'method overriding',
            responses: [{
                    value: 'changing the method of base class,virtual method in base class get overridden,late binding',
                }]
        },
        {
            question: 'Method Hiding',
            responses: [{
                    value: 'used in inheritance hide method of base class create method in derived class with new keyword',
                    desc: []
                }]
        },
        {
            question: 'Polymorphism',
            responses: [{
                    value: 'one sample many form Compile time polymorphism/Overloading ,Runtime polymorphism/Overriding',
                    desc: []
                }]
        },
        {
            question: 'Inheritance',
            responses: [{
                    value: 'taking property of one class to another 1 single level,multilevel,does not support multiple inheritance but can be achieved by interface does not support mutiple inheritacne if addCorlor function present in more that on base class and added too much complexity',
                }]
        },
        {
            question: 'Static and Instance class members',
            responses: [{
                    value: 'static member can not instantiated,static cant have constructor,fast,Is sealed,Contains only static members',
                }]
        },
        {
            question: 'class',
            responses: [{
                    value: 'A class is like a blueprint  It defines the data and behavior of a type,A class is a construct that enables you to create your own custom types by grouping together variables of other types, methods and events',
                }]
        },
        {
            question: 'OBJECT',
            responses: [{
                    value: 'A class or struct definition is like a blueprint that specifies what the type can do. An object is basically a block of memory that has been allocated and configured according to the blueprint',
                }]
        },
        {
            question: 'Methods',
            responses: [{
                    value: 'A method is a code block that contains a series of statements',
                    desc: []
                }]
        },
        {
            question: 'operators',
            responses: [{
                    value: 'public private protected  Access Specifier',
                    desc: [
                        'public access in anywhere',
                        'private access in same class only',
                        'protected same class  derived class'
                    ]
                }]
        },
        {
            question: 'internal  and protected internal Access Specifier',
            responses: [{
                    value: 'internal access in current assembly',
                    desc: [
                        'protected Access to current assembly and types derived from containing class'
                    ]
                }]
        },
        {
            question: 'reflection',
            responses: [{
                    value: 'Runtime Type Information ,Reflection is the ability of a managed code to read its own metadata for the purpose of finding assemblies,It allows late binding to methods and properties',
                    desc: []
                }]
        },
        {
            question: 'attribute [obsulete("msg")]',
            responses: [{
                    value: 'is declarative tag convey information at runtime, obsulete discard a particular target element to execute',
                }]
        },
        {
            question: 'Generics',
            responses: [{
                    value: 'Generics allow you to delay the specification of the data type of programming elements in a class or a method, until it is actually used in the program,work with any data type',
                    desc: []
                }]
        },
        {
            question: 'string n string builder',
            responses: [{
                    value: 'String is immutable ,StringBuilder is mutable',
                }]
        },
        {
            question: 'partial class,method ',
            responses: [{
                    value: 'compiler combines  two partial classes into one class ,C# provides the ability to have a single class implementation in multiple .cs',
                }]
        },
        {
            question: 'Indexers',
            responses: [{
                    value: 'treat object as array to access its value by index',
                }]
        },
        {
            question: 'Named Arguments',
            responses: [{
                    value: 'you can send the arguments in any order by there name showName(name:"abhi",lastName:"yadav").',
                }]
        },
        {
            question: 'Code snippets',
            responses: [{
                    value: 'shortcuts code eg model property,constructor',
                    desc: []
                }]
        },
        {
            question: 'array',
            responses: [{
                    value: 'fixed size access by index,collection of same data type',
                    desc: []
                }]
        },
        {
            question: 'array list',
            responses: [{
                    value: 'contain any data type can grow in size, are boxed and unboxed,it is old',
                    desc: []
                }]
        },
        {
            question: 'list',
            responses: [{
                    value: 'grow in size dynamic sized,provide search sort manipulate,strongly typed list of objects that can be accessed by index,no  are boxed and unboxed,new use list',
                }]
        },
        {
            question: 'Stack and Queue',
            responses: [{
                    value: 'stack lifo queue lilo',
                }]
        },
        {
            question: 'Threading Protect shared resources,Deadlock ,monitor n lock',
            responses: [{
                    value: 'lock keyword ensures that one thread does not enter a critical section of code while another thread is in the critical section.deadlock thread lock the resource which other thread need',
                }]
        },
        {
            question: 'Anonymous Methods',
            responses: [{
                    value: 'function without name assign to delegate and we can use it',
                }]
        },
        {
            question: 'Lambda Expressions',
            responses: [{
                    value: 'annonymous function  used to create  delegate or expressions',
                    desc: []
                }]
        },
        {
            question: 'Func Delegate',
            responses: [{
                    value: 'can point to any type of function no need of delegate',
                }]
        },
        {
            question: 'extension method',
            responses: [{
                    value: 'add method to existing type,static method,first parameter is this',
                    desc: [
                        "we can add any extra method to datatable like convert into json"
                    ]
                }]
        },
        {
            question: 'route.map',
            responses: [{
                    value: 'mapped path of url',
                }]
        },
        {
            question: 'checked',
            responses: [{
                    value: 'check for overflow not constant value',
                    desc: []
                }]
        },
        {
            question: 'unchecked',
            responses: [{
                    value: 'ignore overflow exception',
                }]
        },
        {
            question: 'unsafe code',
            responses: [{
                    value: 'u can use pointer',
                }]
        },
        {
            question: 'Data annotations',
            responses: [{
                    value: 'used on model class for validation',
                }]
        },
        {
            question: 'Helpers',
            responses: [{
                    value: 'run function on view @helpers',
                }]
        },
        {
            question: 'filters',
            responses: [{
                    value: 'call filter method before calling actual method action filter,resulter filter , auth filter , excettion filter ,custom filter',
                }]
        },
        {
            question: 'cross site scripting',
            responses: [{
                    value: 'trusted user enter javascript code in html',
                }]
        },
        {
            question: 'sql injection',
            responses: [{
                    value: 'sql server executed untrusted code',
                    desc: []
                }]
        },
        {
            question: 'cross site request forgery',
            responses: [{
                    value: 'attacker send bugged form to user and users post that form',
                }]
        },
        {
            question: 'session fixation',
            responses: [{
                    value: ' bugged user machine with session id in cookie,url ,form and users get authenticated with attacker session',
                }]
        },
        {
            question: 'session hijacking',
            responses: [{
                    value: 'hijack session by cross site scripting',
                    desc: []
                }]
        },
        {
            question: 'class and struct',
            responses: [{
                    value: 'class reference type,and support inheritance struct value ',
                }]
        },
        {
            question: 'dynamic data-type',
            responses: [{
                    value: 'stored and type of data decide at run time ,turn off compile-time checking',
                }]
        },
        {
            question: 'stack and heap',
            responses: [{
                    value: 'stack at compile time,value type,fast  heap at run time ,slow',
                }]
        }, {
            question: 'viewbag,viewdata,tempdata',
            responses: [{
                    value: 'tempdata from action to action ,viewdata from action to view,viewbag wrapper around viewdata',
                }]
        }, {
            question: 'html helper',
            responses: [{
                    value: 'execute code and return string as output',
                }]
        }, {
            question: 'virtual method ',
            responses: [{
                    value: 'can be redefined in derived classes. override',
                }]
        }, {
            question: 'abstraction method',
            responses: [{
                    value: 'modifier indicates that the thing being modified has a missing or incomplete implementation.we have to override it',
                }]
        }, {
            question: 'encapsulation',
            responses: [{
                    value: 'classes, properties and access modifiers are tools to provide encapsulation in c#,Encapsulation, in the context of C#, refers to an objects ability to hide data and behavior that are not necessary to its user',
                }]
        }, {
            question: 'assembly',
            responses: [{
                    value: 'generated file on compilation dll or .exe',
                }]
        }, {
            question: 'DLL hell',
            responses: [{
                    value: 'DLL HELL is the problem where one application will install a newer version of a shared component that is not backward compatible with the version already on the machine.solved with gac by versioning',
                }]
        }, {
            question: 'GAC',
            responses: [{
                    value: 'Global Assembly cache -C:\Windows\assembly',
                }]
        }, {
            question: 'Sealed',
            responses: [{
                    value: 'cant inherit can write sealed on method',
                }]
        }, {
            question: 'Filters',
            responses: [{
                    value: 'execute some logic before or after an action method executes Authorization,Action,Exception,Result filters,',
                    desc: [
                        'Global Level at global.asax  ;Controller level ; action level'
                    ]
                }]
        }, {
            question: 'diff in encapsulations and abstraction',
            responses: [{
                    value: 'Encapsulate hides variables or some implementation that may be changed so often in a class to prevent outsiders access it directly. They must access it via getter and setter methods.',
                    desc: [
                        'Abstraction is used to hiding something too but in a higher degree(class, interface). Clients use an abstract class(or interface) do not care about who or which it was, they just need to know what it can do'
                    ]
                }]
        }, {
            question: 'generic and non generic collection',
            responses: [{
                    value: 'generic collections are strongly typed ,non-generic collections (ArrayList, Hashtable, SortedKist, Queue etc.) in non generic element stored as object first value get boxed and saved and while retrieve value get unboxed',
                }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                    value: 'xxxxxxxxxx',
                    desc: []
                }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                    value: 'xxxxxxxxxx',
                    desc: []
                }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                    value: 'xxxxxxxxxx',
                    desc: []
                }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                    value: 'xxxxxxxxxx',
                    desc: []
                }]
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
                image: "/new.png",
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
                image: "/lib-like-jquery.png",
                desc: []
            }]
    },
    {
        question: "Destructuring, Spread and Rest Parameters",
        responses: [{
                value: "Destructuring :-Assign object properties or array items to variables.",
                image: "/destructuring.png",
            }, {
                value: " Spread(...) :-unpacked or expanded  array or object",
                desc: [
                    "Make shallow copies of data structures",
                    "const concatArray =[...arr1,...arr2];",
                    "const updatedUsers = [...users, newUser]"
                ]
            },
            {
                value: "Rest Parameters(...) :- instead of packing it create the array or object",
                desc: [
                    "function func(...args)",
                    "function func(one,two...args) {",
                    "func(1, 2, 3, 4, 5, 6)",
                    "const [first, ...rest] = ['1', '2', '3',4]",
                ]
            }
        ]
    },
    {
        question: "Generator functions",
        responses: [{
                value: "They can be stopped midway and then continue from where it had stopped",
                image: "/generator.png",
            }]
    },
];


/***/ }),

/***/ "./src/app/files/javascriptq.ts":
/*!**************************************!*\
  !*** ./src/app/files/javascriptq.ts ***!
  \**************************************/
/*! exports provided: dataQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataQ", function() { return dataQ; });
var dataQ = [
    {
        question: "possible ways to create objects in JavaScript",
        responses: [{
                image: '/objectcreation.png',
            }]
    },
    {
        question: "Implicit Type Coercion",
        responses: [{
                desc: [
                    "   var x = 3;",
                    "   var y = '3;",
                    "   x + y // Returns '33' ",
                ]
            }]
    },
    {
        question: "Higher Order Functions",
        responses: [{
                value: "Functions that operate on other functions",
                image: '/higherOrderFunction.png',
                desc: []
            }]
    },
    {
        question: "this",
        responses: [{
                desc: [
                    ' The “this” keyword refers to the object that the function is a property of.',
                    ' The value of “this” keyword will always depend on the object that is invoking the function.',
                    ' From where its been called',
                ]
            }]
    },
    {
        question: "memoization",
        responses: [{
                value: "function cache the value",
                desc: []
            }]
    },
    {
        question: "constructor function",
        responses: [{
                value: "create objects in javascript",
            }]
    },
    {
        question: "classes",
        responses: [{
                value: "syntactic sugars for constructor functions.",
                image: '/class.png',
            }]
    },
    {
        question: "Set & Weakset",
        responses: [{
                image: '/set.png',
            }]
    }, {
        question: "Map and weeakMap",
        responses: [{
                image: '/map.png',
            }]
    }, {
        question: "Temporal Dead Zone",
        responses: [{
                value: "trying to access a variable before it is initialized(let const).",
                desc: [
                    "x = 23; // Gives reference error",
                    "let x;"
                ]
            }]
    }, {
        question: "use fo closer ",
        responses: [{
                image: '/closer.png',
            }]
    }, {
        question: "lambda or arrow functions",
        responses: [{
                value: "function is a shorter syntax don't have this, arguments, super, or new.target",
            }]
    }, {
        question: "first order function",
        responses: [{
                value: "function don't accept or return function",
            }]
    }, {
        question: "first class function",
        responses: [{
                value: "function is treated as var. we can pas, assign  and call",
            }]
    }, {
        question: "higher order function",
        responses: [{
                value: "function accept and return function",
            }]
    }, {
        question: "unary function",
        responses: [{
                value: "Accept 1 arguments const unaryFunction = a => console.log (a + 10);",
            }]
    }, {
        question: "IndexedDB",
        responses: [{
                value: "client-side storage of larger amounts of structured data ",
            }]
    },
    {
        question: "What is promise chaining",
        responses: [{
                value: "asdf",
                image: "/promise.png",
            }]
    },
    {
        question: "Promise.race ",
        responses: [{
                value: "like promise.all -> Only return which promise got resolved first",
            }]
    },
    {
        question: "double exclamation(!!)",
        responses: [{
                value: "resulting type is a boolean. !!(e.g. 0, null, undefined, etc.) false",
            }]
    },
    {
        question: "Eval",
        responses: [{
                value: "evaluates JavaScript code represented as a string eval('console.log(eval('1 + 2'));') ",
            }]
    },
    {
        question: "event flow",
        responses: [{
                desc: [
                    "Top to Bottom(Event Capturing)  ",
                    "Bottom to Top (Event Bubbling)  ",
                ]
            }]
    },
    {
        question: "Object.freeze(object)  Object.seal(object);",
        responses: [{
                desc: [
                    "Can not add new property to object in both case.",
                    "In seal we can changes existing property",
                    "In seal we can can't change property",
                ]
            }]
    },
    {
        question: "enumerable key and value pairs",
        responses: [{
                value: "for (let [key, value] of Object.entries(object)) {} ",
                desc: []
            }]
    },
    {
        question: "get the list of keys of any object",
        responses: [{
                value: "Object.keys(user)",
                desc: []
            }]
    },
    {
        question: "What are javascript accessors,Get , Set",
        responses: [{
                image: "/accessors.png",
            }]
    },
    {
        question: "nullish coalescing operator",
        responses: [{
                value: "returns its right-hand side operand when its left-hand side operand is null or undefined",
                desc: [
                    "  console.log(null ?? true); // true",
                    "  console.log(false ?? true); // false",
                    "  console.log(undefined ?? true); // true",
                ]
            }]
    },
    {
        question: " easiest way to ignore promise errors",
        responses: [{
                value: " await promise.catch(e => void e);",
                desc: []
            }]
    },
    {
        question: "How to detect if a function is called as constructor",
        responses: [{
                value: "new.target => called with new",
            }]
    },
    {
        question: "Proper Tail Call",
        responses: [{
                value: "it work like recursions but does not create stack like recursion",
                desc: []
            }]
    },
    {
        question: "Promise error handle",
        responses: [{
                image: '/promiseError.png',
            }]
    },
    {
        question: "Function constructor and function declaration",
        responses: [{
                image: "/function1.png",
            }]
    },
    {
        question: "How to cancel a fetch request",
        responses: [{
                value: "AbortController",
                image: "/abortController.png",
            }]
    },
    {
        question: "enhanced object literals",
        responses: [{
                desc: [
                    "//ES6",
                    "var x = 10, y = 20",
                    "obj = { x, y }",
                    "console.log(obj); // {x: 10, y:20}",
                    "//ES5",
                    "var x = 10, y = 20",
                    "obj = { x : x, y : y}",
                    "console.log(obj); // {x: 10, y:20}"
                ]
            }]
    },
    {
        question: "swap variables in destructuring assignment ",
        responses: [{
                desc: [
                    " var x = 10, y = 20;",
                    " [x, y] = [y, x];",
                    " console.log(x); // 20",
                    " console.log(y); // 10",
                ]
            }]
    },
    {
        question: "template literals",
        responses: [{
                value: "`abhishek yadav`",
            }]
    },
];


/***/ }),

/***/ "./src/app/files/mongoose.ts":
/*!***********************************!*\
  !*** ./src/app/files/mongoose.ts ***!
  \***********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
        question: "mongoose",
        responses: [{
                value: "Object Data Modeling (ODM) library for MongoDB and Node. js",
                image: '/connect.PNG',
            }]
    },
    {
        question: "schema",
        responses: [{
                style: {
                    width: '800px'
                },
                value: "Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection",
                image: '/schema.PNG',
            }]
    },
    {
        question: "Operation Buffering",
        responses: [{
                value: "We can use mongoose model before connecting to mongoDB. its hangs",
            }]
    },
    {
        question: "useNewUrlParser",
        responses: [{
                value: "true. To use new collection string parser",
            }]
    },
    {
        question: "poolSize",
        responses: [{
                value: "The maximum number of sockets the MongoDB driver will keep open for this connection",
                desc: [
                    ' default, poolSize is 5',
                    ' one operation per socket at a time',
                    ' use this if few slow queries that are blocking faster queries    ',
                ]
            }]
    },
    {
        question: "keepAlive",
        responses: [{
                value: "long running applications, enable keepAlive with a number of milliseconds  .",
                desc: [
                    "There might be chance we see message like connection closed to fix this use keepAlive"
                ]
            }]
    },
    {
        question: "Multiple connections",
        responses: [{
                value: "mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');                     ",
            }]
    },
    {
        question: "Model",
        responses: [{
                value: "compiled from Schema definitions",
                image: "/model.PNG",
            }]
    },
    {
        question: "Documents",
        responses: [{
                value: "instance of a model",
                desc: [
                    'const doc = new MyModel();',
                    'update using save',
                    'user.name ="abhi";',
                    'await user.save()',
                    ' save() function right way to update a document.get full validation and middleware  ',
                    ' update(), updateMany(), findOneAndUpdate() => not execute save() middleware',
                ]
            }]
    },
    {
        question: "Overwrite document",
        responses: [{
                value: "replacing all keys in the document",
                desc: [
                    "// Sets `name` and unsets all other properties",
                    "doc.overwrite({ name: 'abhi' });",
                    "await doc.save();",
                    "User.replaceOne({ _id }, { name: 'Jean-Luc Picard' });",
                ]
            }]
    },
    {
        question: "Subdocuments",
        responses: [{
                value: "documents embedded in other documents",
                desc: [
                    '       nest schemas in other schemas   ',
                    '       saved whenever their top-level parent document is saved',
                    '       const childSchema = new Schema({ name: "string" });',
                    '     const parentSchema = new Schema({children: [childSchema],lastName:String,  child: childSchema});     ',
                    '     subdocuments have save and validate middleware just like top-level documents',
                ]
            }]
    },
    {
        question: "Subdocuments versus Nested Paths",
        responses: [{
                value: "nested paths are subtly different from subdocuments.   ",
                desc: [
                    "   const subdocumentSchema = new mongoose.Schema({child: new mongoose.Schema({ name: String, age: Number })",
                    "   subDoc === undefined",
                    "   we can not access subdocumentSchema.child.name => gives error",
                    "   subDoc.set({name:'abhi'}) => merge the object => {name:'abhi'}",
                    "",
                    "   const nestedSchema = new mongoose.Schema({child: { name: String, age: Number }});",
                    "    nested !== undefined",
                    "    we can access nest.child.name ",
                    "    nested.set({name:'abhi'}) => merge the object => {name:'abhi',age:10}",
                ]
            }]
    },
    {
        question: "Finding a Subdocument",
        responses: [{
                value: "const doc = parent.children.id(_id)",
            }]
    },
    {
        question: "Adding Subdocs to Arrays",
        responses: [{
                value: "parent.children.push({ name: 'Liesl' });",
                desc: []
            }]
    },
    {
        question: "Removing Subdocs",
        responses: [{
                desc: [
                    "   parent.children.id(_id).remove(); //Equivalent to `parent.children.pull(_id)`",
                    "   parent.child.remove(); //Equivalent to `parent.child = null`",
                ]
            }]
    },
    {
        question: "Parents of Subdocs",
        responses: [{
                desc: [
                    "doc.child.parent() ",
                    "doc.children[0].parent()",
                    "doc.level1.level2.ownerDocument() ",
                ]
            }]
    },
    {
        question: "Queries",
        responses: [{
                image: "/query.PNG",
            }]
    },
    {
        question: "Queries are Not Promises",
        responses: [{
                value: "We call then or exec it get called multiple time",
                desc: [
                    "const q = MyModel.updateMany({}, { isDeleted: true }, function() {",
                    "           console.log('Update 1');",
                    "   });",
                    "",
                    "   q.then(() => console.log('Update 2'));",
                    "   q.then(() => console.log('Update 3'));",
                ]
            }]
    },
    {
        question: "References to other documents",
        responses: [{
                value: "No join in mongoDB. we use population for this",
                desc: [
                    "Document get loaded in other document based on path"
                ]
            }]
    },
    {
        question: "Aggregation",
        responses: [{
                value: "can do many of the same things that queries can",
                desc: [
                    "   const docs = await Person.aggregate([{ $match: { 'name.last': 'Ghost' } }]);",
                    "   try to avoid aggregate() use query",
                    "   aggregate does not return document mean we can not doc.save it  .",
                    "   aggregate does not cast its field we need to cast it   ",
                ]
            }]
    },
    {
        question: "Query Casting",
        responses: [{
                value: "query get casted like age:'100', ang age:'hundred' gives error",
                desc: []
            }]
    },
    {
        question: "The strictQuery Option ",
        responses: [{
                value: "Mongoose does not cast filter properties that aren't in your schema",
                desc: [
                    "   const query = User.findOne({ notInSchema: { $lt: 'not a number' } });",
                    " // No error because `notInSchema` is not defined in the schema",
                    "    await query.exec();   ",
                    "",
                    "    Schema({ name: String, age: Number }, {strictQuery: true}); ",
                    "    Now property that are not in schema get removed from filter and we get the result                             ",
                ]
            }]
    },
    {
        question: "Implicit $in",
        responses: [{
                value: " Character.findOne({ name: ['Abhi', 'abhi1'] });",
                desc: [
                    '      it  work ',
                    '      // `{ name: { $in: ["abhi", "abhi1"] } }`',
                    '           query.getFilter();',
                ]
            }]
    },
    {
        question: "findOneAndUpdate()",
        responses: [{
                value: "try to use save() where ever possible.",
                image: '/findOneAndUpdate.PNG'
            }]
    },
    {
        question: "Atomic Updates",
        responses: [{
                desc: [
                    '   save() work in 2 step 1. find and then save(). ',
                    '   data might get changed in between them',
                    '   to fix this use  findOneAndUpdate or use transaction ',
                ]
            }]
    },
    {
        question: "Lean",
        responses: [{
                value: "xxxxxxxxxxx",
                desc: [
                    '   Model.find().lean() // its does not return mongoose object we can not doc.save() it',
                    '   lean() bypasses all Mongoose features, including virtuals, getters/setters, and defaults ',
                    '   if you want to use that you need to use plugins                                     ',
                ]
            }]
    },
    {
        question: "Middleware",
        responses: [{
                value: "called pre and post hooks",
                image: '/prePost.PNG'
            }]
    },
    {
        question: "Naming Conflicts",
        responses: [{
                value: "xxxxxxxxxxx",
                desc: [
                    "// Only document middleware",
                    "schema.pre('remove', { document: true, query: false }, function() {  });",
                    "// Only query middleware. This will get called when you do `Model.remove()`",
                    "// but not `doc.remove()`.",
                    "schema.pre('remove', { query: true, document: false }, function() {});",
                ]
            }]
    },
    {
        question: "pre and post drawback",
        responses: [{
                value: "Pre and post save() hooks are not executed on update(), findOneAndUpdate() ",
            }]
    },
    {
        question: "Populate",
        responses: [{
                value: "reference documents in other collection. replace paths in the document with document(s) from other collection",
                image: '/populate.PNG'
            }]
    },
    {
        question: "Discriminators",
        responses: [{
                value: "inheritance mechanism",
            }]
    },
    {
        question: "Plugins",
        responses: [{
                value: " Want common functionality in all schema use plugins",
                desc: [
                    'Like we want loadedAt property at our all schema then we can use plugin           '
                ]
            }]
    },
    {
        question: "Transactions",
        responses: [{
                value: "Perform multiple operation if one fail undo all of them",
            }]
    },
    {
        question: 'MongoDb query',
        responses: [
            {
                style: {
                    width: '100%'
                },
                image: '/mongoDbQuery.png'
            }
        ]
    },
    {
        question: 'MongDb Cheat shit',
        responses: [
            {
                style: {
                    width: '100%'
                },
                image: '/mongoDbCheatShit.png'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/files/mongooseQ.ts":
/*!************************************!*\
  !*** ./src/app/files/mongooseQ.ts ***!
  \************************************/
/*! exports provided: dataQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataQ", function() { return dataQ; });
var dataQ = [
    {
        question: "MongoDB",
        responses: [{
                desc: [
                    '    open-source NoSQL database written in C++ language',
                    '    It uses JSON-like documents',
                    '    easy scalability and is a cross-platform,',
                    '    MongoDB basically uses JavaScript objects',
                    '    MongoDB uses a dynamic database schema',
                    '    MongoDB is very easy to scale up or down',
                ]
            }]
    },
    {
        question: "Document",
        responses: [{
                value: "set of keys with associated values",
            }]
    },
    {
        question: "Collection",
        responses: [{
                value: "group of documents",
            }]
    },
    {
        question: "Databases",
        responses: [{
                value: "MongoDB groups collections into databases",
            }]
    },
    {
        question: "When to use MongoDB",
        responses: [{
                desc: [
                    'applications need to evolve quickly and scale',
                    'scalable applications using agile methodologies',
                    'Support a rapid iterative development',
                ]
            }]
    },
    {
        question: "Sharding (partitioning)",
        responses: [{
                value: "splitting data up across machines",
            }]
    },
    {
        question: "Replica Set in MongoDB",
        responses: [{
                value: "Copy of your data in multiple sever ",
            }]
    },
    {
        question: "Aggregation Framework in MongoDB",
        responses: [{
                desc: [
                    '   do analytics on documents in one or more collections.',
                    '   based on the concept of a pipeline',
                    '   take  input from collection and pass to the other',
                ]
            }]
    },
    {
        question: "utilities for backup and restore in MongoDB",
        responses: [{
                desc: [
                    '   mongoimport',
                    '   mongoexport',
                    '   mongodump',
                    '   mongorestore  ',
                ]
            }]
    },
];


/***/ }),

/***/ "./src/app/files/node.ts":
/*!*******************************!*\
  !*** ./src/app/files/node.ts ***!
  \*******************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
        "question": "Node js",
        "responses": [{
                "value": "avaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser",
            }
        ]
    },
    {
        "question": " Node => v8 + libUv",
        "responses": [{
                "value": "V8(C++,JS) :- Open source javascript engine created by google.",
                desc: [
                    'libUv(C++) :- open source project give access to OS,File system, networking',
                    ' Node lib file contains the js code its called src c++ code, v8 translate js value to c++'
                ]
            }
        ]
    },
    {
        "question": "Thread",
        "responses": [{
                "value": "Unit of instruction waiting to get executed",
                desc: [
                    'Node program run in 1 thread'
                ]
            }
        ]
    },
    {
        "question": "Event Loop",
        "responses": [{
                "value": "Every time event loop is run called tick",
                desc: [
                    'Event loop check for condition if its true then it run event loop',
                    '1. Any pending settimeout, setInterval, setImediate',
                    '2. Any Pending OS task. ex:any server listening to any port',
                    '3. Any pending long running operation eg: Fs module  ',
                ]
            }
        ]
    },
    {
        "question": "Event loop do",
        "responses": [{
                desc: [
                    '1. Look of pending timers and any callback function',
                    '2. Look of pending OS task and Pending operation node execute callback',
                    '3. Pause execution. Continue when',
                    '       new Pending task done',
                    '       new pending operation done',
                    '       timer is about to complete',
                    '4. Look at pending timer. call any setimediate',
                    '5. Handle any close event  . ex readStream ',
                ]
            }
        ]
    },
    {
        "question": "Node event loop",
        "responses": [{
                "value": "Single thread",
                desc: [
                    'Some of function /std libUv:- Not a single thread. run outside of event loop',
                    'Expensive function run out of event loop(Crypto,Fs)',
                    'uses thread pool . create 4 thread process 4 task',
                ]
            }
        ]
    },
    {
        "question": "MutliThreading",
        "responses": [{
                "value": "give concurrency ",
                desc: [
                    'If 1 task taking 1sec then 2 task will take 2sec (depend on core) both will complete at same time'
                ]
            }
        ]
    },
    {
        "question": "LibUv delegate OS",
        "responses": [{
                "value": "Https request :- LibUv delegate request to OS. Os send the request Os handle the request. Event loop is free",
                desc: [
                    'Everything around networking handle by OS  :- PendingOSTask '
                ]
            }
        ]
    },
    {
        "question": "Cluster mode",
        "responses": [{
                desc: [
                    "Multiple copy of node running your server . multiple instance of server. MultiThreading - Reccommended",
                    "no of server instance should be equal to number of physical or logical core",
                    "PM2 use pm2 to handle cluster automatically",
                ]
            }
        ]
    },
    {
        "question": "Worker thread",
        "responses": [{
                "value": "Our app <===> worker thread communicate with post message and on message",
                desc: [
                    'Worker thread get executed out of event loop'
                ]
            }
        ]
    },
    {
        "question": "Redis",
        "responses": [{
                "value": "Redis for caching",
                desc: [
                    'Util.promisify make function promise'
                ]
            }
        ]
    },
    {
        "question": "Puppeteer and jest",
        "responses": [{
                "value": "Puppeteer and jest is used for node integrated testing",
                desc: [
                    'we do code in YAML its like JSON'
                ]
            }
        ]
    },
    {
        "question": "Require module",
        "responses": [{
                "value": "Require module check in node modules folder to its parent and cache the path :its caches the file",
                desc: []
            }
        ]
    },
    {
        "question": "node-gyp",
        "responses": [{
                "value": "In node we can run c++ code with node-gyp",
                desc: []
            }
        ]
    },
    {
        "question": "Benefits and drawback",
        "responses": [{
                "value": "Node is best for I/O operations :-reading/writing files or network operations",
                desc: [
                    'Not good for CPU Intensive processing like Image processing/video processing'
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/files/react.ts":
/*!********************************!*\
  !*** ./src/app/files/react.ts ***!
  \********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
    "data": [
        {
            "question": "Lib",
            "responses": [{
                    "value": "react.development.js,react-dom.development.js",
                }]
        },
        {
            "question": "Babel",
            "responses": [{
                    "value": "used for jsx, Convert ES6 code,jsx code",
                    desc: [
                        'npx babel --watch src --out-dir . --presets react-app/prod'
                    ]
                }]
        },
        {
            "question": "JSX",
            "responses": [{
                    "value": "Preprocessor like sass babel run it,JSX Prevents Injection Attacks",
                }]
        },
        {
            "question": "create the app with dependency",
            "responses": [{
                    "value": "npm init react-app my-app,npx create-react-app my-app",
                }]
        },
        {
            "question": "Next.js",
            "responses": [{
                    "value": "static and server‑rendered applications",
                }]
        },
        {
            "question": "Gatsby",
            "responses": [{
                    "value": "pre-rendered HTML and CSS to guarantee the fastest load time",
                }]
        },
        {
            "question": "ReactDOM",
            "responses": [{
                    "value": "ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'));",
                }]
        },
        {
            "question": "Props",
            "responses": [{
                    "value": "Props are Read-Only,pass data to component",
                }]
        },
        {
            "question": "state",
            "responses": [{
                    "value": " Only assign in constructor, this.setState({name: 'abhi'});",
                    desc: [
                        '    Wrong =>  this.setState({  counter: this.state.counter + this.props.increment,});',
                        '    setState is asynch we might not get the correct state',
                        '    // Correct this.setState((state, props) => ({counter: state.counter + props.increment}));',
                        '    // correct => this.setState(function(state, props) {  return {counter: state.counter + props.increment }});',
                        '    We get last stage and props',
                    ]
                }]
        },
        {
            "question": "setState",
            "responses": [{
                    "value": "it merged the object ",
                }]
        },
        {
            "question": "function",
            "responses": [{
                    "value": "state less",
                }]
        },
        {
            "question": "class",
            "responses": [{
                    "value": "state",
                }]
        },
        {
            "question": "Lifecycle",
            "responses": [{
                    "value": "use for to free up resources componentDidMount, componentWillUnmount",
                }]
        },
        {
            "question": "The Data Flows Down",
            "responses": [{
                    "value": "component can pass it state to child as props",
                }]
        },
        {
            "question": "Event",
            "responses": [{
                    desc: [
                        '   <button onClick={() => this.handleClick()}>Click me</button> // bad every time callback function get create',
                        '   <button onClick={() => this.handleClick.bind(this)}>Click me</button>           ',
                        '   <button onClick={() => this.handleClick}>Click me</button>  ',
                        '   // pass parameter ',
                        '    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>',
                        '    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>  ',
                    ]
                }]
        },
        {
            "question": "Lists and Keys",
            "responses": [{
                    desc: [
                        '  const numbers = [1, 2, 3, 4, 5];',
                        '  const listItems = numbers.map((number) =>',
                        '    <li key={number.toString()} >{number}</li>',
                        '  ); ',
                    ]
                }]
        },
        {
            "question": "Form",
            "responses": [{
                    "value": "Controlled Components : we update the value by self onChange= this.inputChange.bind(this) alternative is we can use formik lib",
                }]
        },
        {
            "question": "Lifting State Up",
            "responses": [{
                    "value": "child share state to parent",
                    desc: [
                        'We pass state from parent and one function child call this function and parent update the state'
                    ]
                }]
        },
        {
            "question": "Composition",
            "responses": [{
                    "value": "Combine component",
                    desc: [
                        '// comp1 ',
                        '<div>',
                        '<Parent>I am parent content</Parent>',
                        '</div>',
                        '',
                        ' // comp2',
                        '<div>',
                        '<h1> I am going to render parent data as well<h1>',
                        ' {props.children}',
                        '</div>',
                        '',
                        '<SplitPane left={<Contacts />} right={<Chat />} />',
                        '',
                        '<div>Left {props.left}</div>',
                        '<div>{props.right}</div>',
                    ]
                }]
        },
        {
            "question": "React.lazy",
            "responses": [{
                    "value": "Load component at lazy",
                    desc: [
                        '  const OtherComponent = React.lazy(() => import("./ OtherComponent"));',
                        '  <Suspense fallback={<div>Loading...</div>}>',
                        '     <OtherComponent />',
                        '   </Suspense>     ',
                        '',
                        '   show loading msg untill OtherComponent get loaded',
                    ]
                }]
        },
        {
            "question": "Route",
            "responses": [{
                    "value": "xxxxxxxxx",
                    desc: [
                        '      import { BrowserRouter as Router, Route, Switch } from "react - router - dom";',
                        '      const Home = lazy(() => import("./routes/Home"));',
                        '      const About = lazy(() => import("./routes/About"));',
                        '',
                        '      const App = () => (',
                        '        <Router>',
                        '          <Suspense fallback={<div>Loading...</div>}>',
                        '            <Switch>',
                        '              <Route exact path="/" component={Home}/>',
                        '              <Route path="/about" component={About}/>',
                        '            </Switch>',
                        '          </Suspense>',
                        '        </Router>',
                        '      ); ',
                    ]
                }]
        },
        {
            "question": "Context providers",
            "responses": [{
                    "value": "To pass common data to all the nesting component use Context",
                    desc: [
                        '   const ThemeContext = React.createContext("light");',
                        '   <ThemeContext.Provider value="I m data">',
                        '    <ThemeContext1.Provider value="I am data1">',
                        '      <Toolbar />',
                        '    </ThemeContext1.Provider>',
                        '    </ThemeContext.Provider>',
                        '',
                        '      <ThemeContext.Consumer>',
                        '   {data => (',
                        '     <ThemeContext1.Consumer>',
                        '       {data1 => (',
                        '         <div>',
                        '           {data1}-{data}',
                        '         </div>',
                        '       )}',
                        '     </ThemeContext1.Consumer>',
                        '   )}',
                        ' </ThemeContext.Consumer>',
                        '  always pass value as state',
                    ]
                }]
        },
        {
            "question": "ErrorBoundary",
            "responses": [{
                    "value": "handle the error in its child component",
                    desc: [
                        'componentDidCatch hanlde the error '
                    ]
                }]
        },
        {
            "question": "Forwarding Refs",
            "responses": [{
                    "value": "pass ref to access child component from parent",
                }]
        },
        {
            "question": "fragments",
            "responses": [{
                    "value": "like ng-template  :- used for grouping",
                }]
        },
        {
            "question": "Higher-Order Components",
            "responses": [{
                    "value": "takes component return new component, such as Redux’s connect",
                    desc: []
                }]
        },
        {
            "question": "Jquery",
            "responses": [{
                    "value": "can be used",
                }]
        },
        {
            "question": "Optimizing Performance",
            "responses": [{
                    "value": "Production Build,React Developer Tools for Chrome.",
                }]
        },
        {
            "question": "Portals",
            "responses": [{
                    "value": "render children into a DOM node that exists outside the DOM hierarchy of the parent component.        ",
                    desc: []
                }]
        },
        {
            "question": "Profiler",
            "responses": [{
                    "value": "measures how often a React application renders and what the “cost” of rendering is",
                }]
        },
        {
            "question": "Refs and the DOM",
            "responses": [{
                    "value": "access DOM nodes or React elements created in the render method.",
                    desc: [
                        ' this.myRef = React.createRef();',
                        ' this.myRef.current.focus();',
                        ' used for auto focus and trigger',
                    ]
                }]
        },
        {
            "question": "PropTypes",
            "responses": [{
                    "value": "its like defined moldel interface  can add validator",
                }]
        },
        {
            "question": "Hooks",
            "responses": [{
                    "value": "you use state and other React features without writing a class",
                    desc: [
                        '  import React, { useState } from "react";',
                        '  const [count, setCount] = useState(0);',
                        '  <button onClick={() => setCount(count + 1)}>',
                        '  Hooks don’t work inside classes ',
                        '  useEffect :- same as componentDidMount',
                    ]
                }]
        }
    ]
};


/***/ }),

/***/ "./src/app/files/sql.ts":
/*!******************************!*\
  !*** ./src/app/files/sql.ts ***!
  \******************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = {
    "data": [
        {
            question: 'SQL',
            responses: [{
                    image: 'sql.png',
                    style: { width: '80%' }
                }
            ]
        },
        {
            "question": "Find second highest",
            "responses": [{
                    "image": "second_highest.png",
                    style: { width: '80%' }
                }]
        },
        {
            "question": "PARTITION",
            "responses": [{
                    "value": "We can use the SQL PARTITION BY clause with the OVER clause to specify the column on which we need to perform aggregation.",
                    image: 'partition.PNG',
                    style: { width: '80%' }
                }]
        },
        {
            "question": "View",
            "responses": [{
                    "value": "virtual tables",
                    desc: [
                        "create view from choosing field from other tables",
                        'create view [getNameAndAge]  as',
                        'select [Name],Age from users',
                        'select * from GetNameAndAge',
                    ]
                }]
        },
        {
            "question": "SCOPE_IDENTITY() && @@IDENTITY",
            "responses": [{
                    "value": "Returns the last identity value inserted into an identity column in the same scope",
                    desc: [
                        '  CREATE TABLE TZ (  ',
                        '      Z_id  INT IDENTITY(1,1)PRIMARY KEY,  ',
                        '      Z_name VARCHAR(20) NOT NULL);  ',
                        'select SCOPE_IDENTITY()',
                        'select @@IDENTITY'
                    ]
                }]
        },
        {
            "question": "rowlock and nolock",
            "responses": [{
                    desc: [
                        "nolock :-  ignore locks and read directly from the tables. increae performance",
                        "rowlock :- lock the row to update or delete it"
                    ]
                }]
        },
        {
            "question": "user defined table",
            "responses": [{
                    "value": "we defined user the type e.g. we want to pass datatable to SP or any Model then first we need to defined that type in sql",
                }]
        },
        {
            "question": "delete duplicate",
            "responses": [{
                    desc: [
                        '  with cte as(',
                        '      select [name],age,pincode, RoW_NUMBER() over(partition by age order by age)as RN from users ',
                        '     ) ',
                        '     --delete from cte where  RN > 1',
                        '     select * from cte where  RN > 1',
                    ]
                }]
        }
    ]
};


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

module.exports = "<div class=\"nav-bar\">\n  <nav>\n      <a routerLinkActive=\"active\" routerLink=\"/home\">Home</a>\n      <a routerLinkActive=\"active\" routerLink=\"/angular\">Angular</a>\n      <a routerLinkActive=\"active\" routerLink=\"/data-structure\">Data Structure</a>\n      <a routerLinkActive=\"active\" routerLink=\"/javascript\">Javascript</a>\n      <a routerLinkActive=\"active\" routerLink=\"/node\">Node</a>\n      <a routerLinkActive=\"active\" routerLink=\"/mongodb\">MongoDB</a>\n      <a routerLinkActive=\"active\" routerLink=\"/css\">CSS</a>\n      <a routerLinkActive=\"active\" routerLink=\"/dotnet\">Dot Net</a>\n      <a routerLinkActive=\"active\" routerLink=\"/react\">React</a>\n      <a routerLinkActive=\"active\" routerLink=\"/aws\">Aws</a>\n      <a routerLinkActive=\"active\" routerLink=\"/sql\">SQL</a>\n  </nav>\n\n</div>\n"

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

module.exports = "<h2>\r\n    Home works\r\n</h2>\r\n<button (click)=\"clicked()\">Click me!</button>\r\n<p>{{isOn ?\"on\":\"off\"}}</p>\r\n<span>{{name}}</span>\r\n<input [(ngModel)]=\"name\">\r\nobsValue :-\r\n<h1>\r\n      {{obsValue}}\r\n</h1>\r\n<h1>\r\n    {{asyncValue |async}}\r\n</h1>\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service */ "./src/app/services/service.ts");
/* harmony import */ var _services_service1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/service1.service */ "./src/app/services/service1.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpClient, service, service1) {
        this.httpClient = httpClient;
        this.service = service;
        this.service1 = service1;
        this.name = 'abhi';
        this.isOn = false;
    }
    HomeComponent.prototype.clicked = function () { this.isOn = !this.isOn; };
    Object.defineProperty(HomeComponent.prototype, "message", {
        get: function () { return "The light is " + (this.isOn ? 'On' : 'Off'); },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        // this.setObsValue('hello1');
        this.getPromise('promise');
    };
    HomeComponent.prototype.getData = function () {
        return "component data";
    };
    HomeComponent.prototype.getServiceData = function () {
        return this.service.getData();
    };
    HomeComponent.prototype.getMockServiceData = function () {
        return this.service1.getData();
    };
    HomeComponent.prototype.getObservable = function (name) {
        var _this = this;
        this.service.getDataObs(name).subscribe(function (x) {
            _this.obsValue = x;
        });
    };
    HomeComponent.prototype.getObservableOnly = function (name) {
        this.asyncValue = this.service.getDataObs(name);
    };
    HomeComponent.prototype.getPromise = function (name) {
        var _this = this;
        this.service.getPromiseData(name).then(function (x) {
            _this.obsValue = x;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"], _services_service1_service__WEBPACK_IMPORTED_MODULE_4__["Service1Service"]])
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
/* harmony import */ var _files_javascriptq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/javascriptq */ "./src/app/files/javascriptq.ts");




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
            this.jsData = _files_javascriptq__WEBPACK_IMPORTED_MODULE_3__["dataQ"];
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

/***/ "./src/app/mongoose/mongoose.component.css":
/*!*************************************************!*\
  !*** ./src/app/mongoose/mongoose.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbmdvb3NlL21vbmdvb3NlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mongoose/mongoose.component.html":
/*!**************************************************!*\
  !*** ./src/app/mongoose/mongoose.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Basic\">\n      <app-data imageBaseUrl=\"/assets/images/mongoDB\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data  imageBaseUrl=\"/assets/images/mongoDB\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/mongoose/mongoose.component.ts":
/*!************************************************!*\
  !*** ./src/app/mongoose/mongoose.component.ts ***!
  \************************************************/
/*! exports provided: MongooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongooseComponent", function() { return MongooseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/mongoose */ "./src/app/files/mongoose.ts");
/* harmony import */ var _files_mongooseQ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../files/mongooseQ */ "./src/app/files/mongooseQ.ts");




var MongooseComponent = /** @class */ (function () {
    function MongooseComponent() {
        this.jsData = _files_mongoose__WEBPACK_IMPORTED_MODULE_2__["data"];
    }
    MongooseComponent.prototype.ngOnInit = function () {
    };
    MongooseComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.jsData = _files_mongoose__WEBPACK_IMPORTED_MODULE_2__["data"];
        }
        else if (event.index == 1) {
            this.jsData = _files_mongooseQ__WEBPACK_IMPORTED_MODULE_3__["dataQ"];
        }
    };
    MongooseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mongoose',
            template: __webpack_require__(/*! ./mongoose.component.html */ "./src/app/mongoose/mongoose.component.html"),
            styles: [__webpack_require__(/*! ./mongoose.component.css */ "./src/app/mongoose/mongoose.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MongooseComponent);
    return MongooseComponent;
}());



/***/ }),

/***/ "./src/app/node/node.component.css":
/*!*****************************************!*\
  !*** ./src/app/node/node.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vZGUvbm9kZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/node/node.component.html":
/*!******************************************!*\
  !*** ./src/app/node/node.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Basic\">\n      <app-data imageBaseUrl=\"/assets/images/node\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data  imageBaseUrl=\"/assets/images/node\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/node/node.component.ts":
/*!****************************************!*\
  !*** ./src/app/node/node.component.ts ***!
  \****************************************/
/*! exports provided: NodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeComponent", function() { return NodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/node */ "./src/app/files/node.ts");



//import { data } from '../files/node'
var NodeComponent = /** @class */ (function () {
    function NodeComponent() {
        this.jsData = _files_node__WEBPACK_IMPORTED_MODULE_2__["data"];
    }
    NodeComponent.prototype.ngOnInit = function () {
    };
    NodeComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.jsData = _files_node__WEBPACK_IMPORTED_MODULE_2__["data"];
        }
        else if (event.index == 1) {
            // this.jsData = dataQ;
        }
    };
    NodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-node',
            template: __webpack_require__(/*! ./node.component.html */ "./src/app/node/node.component.html"),
            styles: [__webpack_require__(/*! ./node.component.css */ "./src/app/node/node.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NodeComponent);
    return NodeComponent;
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

/***/ "./src/app/react/react.component.html":
/*!********************************************!*\
  !*** ./src/app/react/react.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Basic\">\n      <app-data  [data]=\"jsData\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data  [data]=\"jsData\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/react/react.component.scss":
/*!********************************************!*\
  !*** ./src/app/react/react.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWN0L3JlYWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/react/react.component.ts":
/*!******************************************!*\
  !*** ./src/app/react/react.component.ts ***!
  \******************************************/
/*! exports provided: ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ReactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/react */ "./src/app/files/react.ts");



var ReactComponent = /** @class */ (function () {
    function ReactComponent() {
    }
    ReactComponent.prototype.ngOnInit = function () {
        this.jsData = _files_react__WEBPACK_IMPORTED_MODULE_2__["data"].data;
    };
    ReactComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.jsData = _files_react__WEBPACK_IMPORTED_MODULE_2__["data"].data;
        }
    };
    ReactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-react',
            template: __webpack_require__(/*! ./react.component.html */ "./src/app/react/react.component.html"),
            styles: [__webpack_require__(/*! ./react.component.scss */ "./src/app/react/react.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReactComponent);
    return ReactComponent;
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
        return "Data from service";
    };
    HeroService.prototype.getValue = function () {
        return "Data from service";
    };
    HeroService.prototype.getDataObs = function (name) {
        if (name === void 0) { name = 'abhi'; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            //  setTimeout(() => {
            observer.next(name);
            observer.complete();
            //}, 1000);
        });
    };
    HeroService.prototype.getPromiseData = function (name) {
        if (name === void 0) { name = 'abhi'; }
        return new Promise(function (res, rej) {
            setTimeout(function () {
                res(name);
            }, 1000);
        });
    };
    HeroService.prototype.getHeroes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
    };
    HeroService.prototype.getHero = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data.filter(function (x) { return x.id == id; }));
    };
    HeroService.prototype.postData = function () {
        return this.http.post("http://localhost:8082/api/addComment", {
            "courseListIcon": "...",
            "description": "TEST",
            "iconUrl": "..",
            "longDescription": "...",
            "url": "new-url"
        });
    };
    HeroService.prototype.emitData = function (key, opts) {
        if (this._observableEmitter[key]) {
            this._observableEmitter[key].emit(opts);
        }
    };
    HeroService.prototype.apiGetCall = function () {
        return this.http.get("./getUser");
    };
    HeroService.prototype.apiPostCall = function (name, lastName) {
        return this.http.post("./saveUser", { name: name, lastName: lastName });
    };
    HeroService.prototype.postData1 = function () {
        return this.http.post("./posts", {});
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
        return "hi";
    };
    Service1Service.prototype.getHeroes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data);
    };
    Service1Service.prototype.getDataObs = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("I am from observer");
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

module.exports = ".highcharts-figure, .highcharts-data-table table {\n    min-width: 310px; \n    max-width: 800px;\n    margin: 1em auto;\n}\n\n#container {\n    height: 400px;\n}\n\n.highcharts-data-table table {\n\tfont-family: Verdana, sans-serif;\n\tborder-collapse: collapse;\n\tborder: 1px solid #EBEBEB;\n\tmargin: 10px auto;\n\ttext-align: center;\n\twidth: 100%;\n\tmax-width: 500px;\n}\n\n.highcharts-data-table caption {\n    padding: 1em 0;\n    font-size: 1.2em;\n    color: #555;\n}\n\n.highcharts-data-table th {\n\tfont-weight: 600;\n    padding: 0.5em;\n}\n\n.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {\n    padding: 0.5em;\n}\n\n.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {\n    background: #f8f8f8;\n}\n\n.highcharts-data-table tr:hover {\n    background: #f1f7ff;\n}\n\nbutton{\n    margin: 5px;\n}\n\n.pl_5{\npadding-left: 5px;\n}\n\n.ml_5{\n    margin-left: 5px;\n    }\n\n.fr{\n        float:right;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29ydC9zb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtJQUNiLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCOztBQUNBO1FBQ0ksV0FBVztJQUNmIiwiZmlsZSI6InNyYy9hcHAvc29ydC9zb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlnaGNoYXJ0cy1maWd1cmUsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGFibGUge1xuICAgIG1pbi13aWR0aDogMzEwcHg7IFxuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XG5cdGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuXHRtYXJnaW46IDEwcHggYXV0bztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiA1MDBweDtcbn1cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgY2FwdGlvbiB7XG4gICAgcGFkZGluZzogMWVtIDA7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogIzU1NTtcbn1cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGgge1xuXHRmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0ZCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGhlYWQgdHIsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YxZjdmZjtcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbjogNXB4O1xufVxuLnBsXzV7XG5wYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5tbF81e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIC5mcntcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/sort/sort.component.html":
/*!******************************************!*\
  !*** ./src/app/sort/sort.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sort works!\n</p>\n<div>\n  <input [(ngModel)]=\"totalReord\" type=\"number\">\n  <button type=\"button\" (click)=\"generateRandomData()\" class=\"btn btn-primary\">Reset</button>\n  <input class=\"pl_5 ml_5\" (change)=\"checked = !checked\" type=\"checkbox\" [checked]=\"checked\">\n  <span *ngIf=\"time\" class=\"pl_5 fr\">time {{time}}</span>\n\n</div>\n<div class=\"button\">\n  <button type=\"button\" (click)=\"bubbleSort(1)\" class=\"btn btn-primary\">bubble Sort </button>\n  <button type=\"button\" (click)=\"insertionSort(2)\" class=\"btn btn-primary\">Insertion sort</button>\n  <button type=\"button\" (click)=\"heapSort(7)\" class=\"btn btn-primary\">heap Sort</button>\n\n  <button type=\"button\" (click)=\"selectionSort(3)\" class=\"btn btn-primary\">Selection sort</button>\n  <button type=\"button\" (click)=\"shellSort(4)\" class=\"btn btn-primary\">Shell sort</button>\n  <button type=\"button\" (click)=\"quickSort(5)\" class=\"btn btn-primary\">quick Sort</button>\n  \n  <button type=\"button\" (click)=\"mergeSort(6)\" class=\"btn btn-primary\">Merge sort</button>\n \n</div>\n<div id=\"container\"> </div>\n<div class=\"explain\">\n  <div [ngSwitch]=\"active\">\n    <div class=\"sort_elment\" *ngSwitchCase=\"1\">\n      bubble sort\n      <ul>\n        <li>Highest element goes to end</li>\n        <li>\n         Compare with next element if its greater then swap\n        </li>\n        <li>\n          Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.\n        </li>\n        <li>\n          To much swap if starting element it Big\n          </li>\n          <li>\n            slow so many data to many swap\n          </li>\n      </ul>\n    </div>\n    <div class=\"sort_elment\" *ngSwitchCase=\"2\">\n      <div>Insertion sort</div>\n      <ul>\n        <li>\n         If current (a[i]) element is greater than its prvious element(a[i--]) shift previous element by\n         a[j+1] = a[j]; and a[j+1] = a[i] \n         </li>\n        <li>\n        We check in previous value shift all value which are greater than current value and place current\n        value at its place ie. array remail sorted till i \n        </li>\n         <li>\n          Time Complexity: O(n*2)\n         </li>\n         <li>\n         To much swap if ending element it small\n         </li>\n         <li>\n          slow so many data to many swap\n        </li>\n      </ul>\n    </div>\n    <div class=\"sort_elment\" *ngSwitchCase=\"3\">\n      <div>Selection sort</div>\n      <ul>\n        <li>\n          Small element comes at first\n         </li>\n        <li>\n          selet the smallest element replace with current :- repeat \n        </li>\n         <li>\n          Time Complexity: O(n2)\n         </li>\n      </ul>\n    </div>\n    <div class=\"sort_elment\" *ngSwitchCase=\"4\">\n      Shell sort\n      <li>\n       It work as insertion sort. we compare a[j] with a[j-h] and swap keep doing it till h =1\n      </li>\n      <li>\n       Instead of comparing to all element we sort with h gap  h = 3h +1 && h < data.length\n       we keep decreasing the gap till 1\n      </li>\n      <li>\n       sorting alogrithm : O(n*n)\n      </li>\n    </div>\n    <div class=\"sort_elment\" *ngSwitchCase=\"5\">\n      quick sort\n      <li>\n        Divide and conqure\n      </li>\n      <li>\n        We create partition use it in recursion. Partition we divide array in 2 parts based\n        pivot value that is last element\n      </li>\n      <li>\n        It get divided into 2 parts left is less than pivot value and right is greater\n      </li>\n      <li>\n       sorting alogrithm : O(n*n)\n      </li>\n    </div>\n    <div class=\"sort_elment\" *ngSwitchCase=\"6\">\n      Merge sort\n      <ul>\n        <li>\n          Divide and conqure ie. divide and merge \n        </li>\n        <li>\n        Best sorting alogrithm : O(nlog(n))\n        </li>\n      </ul>\n    </div>\n    <div class=\"sort_elment\" *ngSwitchCase=\"7\">\n      Heap Sort\n      <ul>\n        <li>Priority queue</li>\n        <li>heapify :- current node should be grater than its children</li>\n        <li>\n          parent is greater than child. priority queue Max heap or min heap\n        </li>\n        <li>\n          heap visualize as array nearly binary tree\n        </li>\n        <li>\n          We have to heapify only n/2 element (Because lower half does not have any child)\n        </li>\n        <li>\n          For sorting heapify array. create new array of result with same size<br>\n          Now replace first element with last elemnt<br>\n          store first element in different array (result) in last position<br>\n          now reduce the array size by 1<br>\n          keep doing till arr.length ==0         \n\n        </li>\n      </ul>\n      <pre>\n        <code [innerHTML]=\"code[7]\"></code>\n      </pre>\n\n    </div>\n  </div>\n</div>"

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

/***/ "./src/app/sql/sql.component.html":
/*!****************************************!*\
  !*** ./src/app/sql/sql.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group (selectedTabChange)=\"tabChange($event)\" mat-align-tabs=\"center\" animationDuration=\"0ms\">\n  <mat-tab label=\"Basic\">\n      <app-data imageBaseUrl=\"/assets/images/sql/\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n  <mat-tab label=\"Topic\">\n      <app-data  imageBaseUrl=\"/assets/images/sql/\" [data]=\"jsData\"></app-data>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/sql/sql.component.scss":
/*!****************************************!*\
  !*** ./src/app/sql/sql.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbC9zcWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sql/sql.component.ts":
/*!**************************************!*\
  !*** ./src/app/sql/sql.component.ts ***!
  \**************************************/
/*! exports provided: SqlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlComponent", function() { return SqlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/sql */ "./src/app/files/sql.ts");



var SqlComponent = /** @class */ (function () {
    function SqlComponent() {
    }
    SqlComponent.prototype.ngOnInit = function () {
        this.jsData = _files_sql__WEBPACK_IMPORTED_MODULE_2__["data"].data;
    };
    SqlComponent.prototype.tabChange = function (event) {
        if (event.index == 0) {
            this.jsData = _files_sql__WEBPACK_IMPORTED_MODULE_2__["data"].data;
        }
    };
    SqlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sql',
            template: __webpack_require__(/*! ./sql.component.html */ "./src/app/sql/sql.component.html"),
            styles: [__webpack_require__(/*! ./sql.component.scss */ "./src/app/sql/sql.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SqlComponent);
    return SqlComponent;
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