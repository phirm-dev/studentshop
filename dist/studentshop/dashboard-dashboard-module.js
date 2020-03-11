(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/bids/bids.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/bids/bids.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/bids/bids.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/bids/bids.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <br>\n      <div class=\"list-group\">\n        <span>\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">First Bid</a>\n          <br>\n        </span>\n        <span>\n          <a href=\"#\" class=\"list-group-item list-group-item-action\">Second Bid</a>\n          <br>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/bids/bids.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/bids/bids.component.ts ***!
  \**************************************************/
/*! exports provided: BidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidsComponent", function() { return BidsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BidsComponent = /** @class */ (function () {
    function BidsComponent() {
    }
    BidsComponent.prototype.ngOnInit = function () {
    };
    BidsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bids',
            template: __webpack_require__(/*! ./bids.component.html */ "./src/app/dashboard/bids/bids.component.html"),
            styles: [__webpack_require__(/*! ./bids.component.css */ "./src/app/dashboard/bids/bids.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BidsComponent);
    return BidsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/dashboard/nav/nav.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "./src/app/dashboard/items/items.component.ts");
/* harmony import */ var _bids_bids_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bids/bids.component */ "./src/app/dashboard/bids/bids.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"], _bids_bids_component__WEBPACK_IMPORTED_MODULE_6__["BidsComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n    color: #495057;\n    background-color: #fff;\n    border: none;\n    border-bottom: 4px solid #20854a;\n    font-weight: bold;\n}\n\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\n    border-left: none;\n    border-right: none;\n    border-top: none;\n}\n\n.nav-link {\n    color: #586069;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav (logOut)=\"logOut()\"></app-nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"jumbotron\">\n        <h3 class=\"text-center\">Dashboard</h3>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3\"></div>\n    <div class=\"col-lg-6\">\n      <!-- Nav tabs -->\n      <ul class=\"nav nav-tabs flex-fill nav-justified\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Items</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">Bids</a>\n        </li> -->\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu2\">Edit Profile</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-lg-3\"></div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-3\"></div>\n    <div class=\"col-lg-6\">\n      <!-- Tab panes -->\n      <div class=\"tab-content\">\n        <div class=\"tab-pane container active\" id=\"home\">\n          <app-items [items]=\"items\" [loading]=\"loading\"></app-items>\n        </div>\n        <!-- <div class=\"tab-pane container fade\" id=\"menu1\">\n          <app-bids></app-bids>\n        </div> -->\n        <div class=\"tab-pane container fade\" id=\"menu2\">\n          <br>\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-3\"></div>\n              <div class=\"col-lg-6 text-center\">\n                <br>\n                <button class=\"btn btn-primary\">Can't Change Profile</button>\n                <br>\n                <p>Contact customer support if you have to</p>\n              </div>\n              <div class=\"col-lg-3\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_uploaditem_uploaditem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/uploaditem/uploaditem.service */ "./src/app/uploaditem/uploaditem.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
        this.loading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getService();
    };
    HomeComponent.prototype.getService = function () {
        var _this = this;
        this.itemService.getItem().subscribe(function (response) {
            _this.items = response;
            _this.loading = false;
        });
    };
    HomeComponent.prototype.selectItem = function (item) {
        var path = "/app/item/details?id=" + item._id;
        console.log(path);
        this.router.navigate([path]);
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        window.location.pathname = '/auth/login';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_uploaditem_uploaditem_service__WEBPACK_IMPORTED_MODULE_1__["UploaditemService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/items/items.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/items/items.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\n    cursor: pointer;\n}\n\n.list-group-item:focus{\n    outline: none;\n}"

/***/ }),

/***/ "./src/app/dashboard/items/items.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/items/items.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"text-center mt-5\">\n        <div class=\"spinner-border spinner-border-sm\" style=\"width: 50px; height: 50px;\" *ngIf=\"loading\"></div>\n      </div>\n      <br>\n      <div class=\"list-group\">\n        <span *ngFor=\"let item of items\" routerLink=\"/app/item/details\" [queryParams]=\"{id:item?._id}\"\n          style=\"outline: none;\">\n          <a class=\"list-group-item list-group-item-action justify-content-between d-flex\">\n            {{ item.item }}\n            <!-- <span class=\"badge badge-primary badge-pill\">{{item.bids.length}}</span> -->\n            <button class=\"btn btn-primary btn-sm\">\n              View Buyers\n              <!-- <span class=\"spinner-border spinner-border-sm\"></span> -->\n              <span class=\"badge badge-light\">{{item.bids.length}}</span>\n            </button>\n          </a>\n          <br>\n        </span>\n        <div class=\"text-center\" *ngIf=\"!loading && items?.length < 1\">\n          You don't have any posted item\n          <br>\n          <button class=\"btn btn-primary\" routerLink=\"/app/item\">Click here to start</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/items/items.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/items/items.component.ts ***!
  \****************************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
        this.loading = true;
    }
    ItemsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemsComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemsComponent.prototype, "loading", void 0);
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/dashboard/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/dashboard/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/nav/nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/dashboard/nav/nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/nav/nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/dashboard/nav/nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" style=\"font-weight: bolder;\" href=\"/\">StuShop</a>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n          <!-- <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Link 1</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Link 2</a>\n          </li> -->\n          <!-- Dropdown -->\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"/app#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n                  Actions\n              </a>\n              <div class=\"dropdown-menu\">\n                  <a class=\"dropdown-item\" routerLink=\"/app/item\">Upload Item</a>\n              </div>\n          </li>\n      </ul>\n\n      <div class=\"form-inline my-2 my-lg-0\">\n          <!-- <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Find your item\"> -->\n          <button class=\"btn btn-danger\" type=\"submit\" (click)=\"logOut.emit()\">Logout</button>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/nav/nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/nav/nav.component.ts ***!
  \************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.logOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "logOut", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/dashboard/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/dashboard/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map