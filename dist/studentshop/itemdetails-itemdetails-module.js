(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["itemdetails-itemdetails-module"],{

/***/ "./src/app/itemdetails/bidmodal/bidmodal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/itemdetails/bidmodal/bidmodal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/itemdetails/bidmodal/bidmodal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/itemdetails/bidmodal/bidmodal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item text-uppercase\" style=\"background: aliceblue;font-weight: bold;\">\n          Bid Details\n        </li>\n        <li class=\"list-group-item\">\n          Bidders Name - {{bidDetails?.full_name}}\n        </li>\n        <li class=\"list-group-item\">\n          Bidders Phone - {{bidDetails?.phone_number}}\n        </li>\n        <li class=\"list-group-item\">\n          Bid Price - {{bidDetails?.bid_price}} Naira\n        </li>\n        <li class=\"list-group-item\">\n          Submitted - {{bidDetails?.date_submitted | date}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/itemdetails/bidmodal/bidmodal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/itemdetails/bidmodal/bidmodal.component.ts ***!
  \************************************************************/
/*! exports provided: BidmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidmodalComponent", function() { return BidmodalComponent; });
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

var BidmodalComponent = /** @class */ (function () {
    function BidmodalComponent() {
    }
    BidmodalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BidmodalComponent.prototype, "bidDetails", void 0);
    BidmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bidmodal',
            template: __webpack_require__(/*! ./bidmodal.component.html */ "./src/app/itemdetails/bidmodal/bidmodal.component.html"),
            styles: [__webpack_require__(/*! ./bidmodal.component.css */ "./src/app/itemdetails/bidmodal/bidmodal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BidmodalComponent);
    return BidmodalComponent;
}());



/***/ }),

/***/ "./src/app/itemdetails/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/itemdetails/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item-action{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/itemdetails/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/itemdetails/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav (delete)=\"deleteItem()\"></app-nav>\n<div class=\"jumbotron\">\n  <h3 class=\"text-center text-uppercase\">Item Details</h3>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 mt-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" style=\"font-weight: bold; background: aliceblue;\">\n          Item Description\n        </li>\n        <li class=\"list-group-item\">\n          {{itemDetails?.item}}\n        </li>\n        <li class=\"list-group-item\">\n          {{itemDetails?.item_description}}\n        </li>\n        <li class=\"list-group-item\">\n          {{itemDetails?.item_price}} Naira\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-lg-6 mt-4\">\n      <div class=\"list-group\">\n        <a class=\"list-group-item list-group-item-action text-primary justify-content-between d-flex\" style=\"color: black !important;font-weight: bold;background: aliceblue;\">\n          Buyers details\n        </a>\n        <a *ngFor=\"let bid of itemDetails?.bids\" class=\"list-group-item list-group-item-action text-primary justify-content-between d-flex\"\n          data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"populateDetails(bid)\">\n          Buyers Name - {{bid.full_name}}\n          <span>\n            <button class=\"btn btn-secondary btn-sm\">click to view</button>\n          </span>\n        </a>\n      </div>\n      <app-bidmodal [bidDetails]=\"bidDetails\"></app-bidmodal>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/itemdetails/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/itemdetails/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _itemdetails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemdetails.service */ "./src/app/itemdetails/itemdetails.service.ts");
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
    function HomeComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
        if (!this.id) {
            return this.router.navigate(['/app/dashboard']);
        }
        this.getItemDetails(this.id);
    };
    HomeComponent.prototype.getItemDetails = function (id) {
        var _this = this;
        this.service.getItemDetails(id).subscribe(function (response) {
            console.log(response);
            _this.itemDetails = response;
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.deleteItem = function () {
        var _this = this;
        this.service.deleteItem(this.id).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/app']);
        });
    };
    HomeComponent.prototype.populateDetails = function (bid) {
        this.bidDetails = bid;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/itemdetails/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/itemdetails/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _itemdetails_service__WEBPACK_IMPORTED_MODULE_2__["ItemdetailsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/itemdetails/itemdetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/itemdetails/itemdetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ItemdetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsRoutingModule", function() { return ItemdetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/itemdetails/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var ItemdetailsRoutingModule = /** @class */ (function () {
    function ItemdetailsRoutingModule() {
    }
    ItemdetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ItemdetailsRoutingModule);
    return ItemdetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/itemdetails/itemdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.module.ts ***!
  \***************************************************/
/*! exports provided: ItemdetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsModule", function() { return ItemdetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _itemdetails_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemdetails-routing.module */ "./src/app/itemdetails/itemdetails-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/itemdetails/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/itemdetails/nav/nav.component.ts");
/* harmony import */ var _bidmodal_bidmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bidmodal/bidmodal.component */ "./src/app/itemdetails/bidmodal/bidmodal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ItemdetailsModule = /** @class */ (function () {
    function ItemdetailsModule() {
    }
    ItemdetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _itemdetails_routing_module__WEBPACK_IMPORTED_MODULE_2__["ItemdetailsRoutingModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _bidmodal_bidmodal_component__WEBPACK_IMPORTED_MODULE_5__["BidmodalComponent"]]
        })
    ], ItemdetailsModule);
    return ItemdetailsModule;
}());



/***/ }),

/***/ "./src/app/itemdetails/itemdetails.service.ts":
/*!****************************************************!*\
  !*** ./src/app/itemdetails/itemdetails.service.ts ***!
  \****************************************************/
/*! exports provided: ItemdetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemdetailsService", function() { return ItemdetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemdetailsService = /** @class */ (function () {
    function ItemdetailsService(http) {
        this.http = http;
        this.api = '/api/item';
    }
    ItemdetailsService.prototype.getItemDetails = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
        return this.http.get(this.api + "/" + id, httpOptions);
    };
    ItemdetailsService.prototype.deleteItem = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
        return this.http.delete(this.api + "/" + id, httpOptions);
    };
    ItemdetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ItemdetailsService);
    return ItemdetailsService;
}());



/***/ }),

/***/ "./src/app/itemdetails/nav/nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/itemdetails/nav/nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/itemdetails/nav/nav.component.html":
/*!****************************************************!*\
  !*** ./src/app/itemdetails/nav/nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" style=\"font-weight: bolder;\" href=\"/\">StuShop</a>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link 2</a>\n      </li> -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"/app#\" id=\"navbardrop\" data-toggle=\"dropdown\">\n          Actions\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" routerLink=\"/app/\">Back to dashboard</a>\n          <a class=\"dropdown-item\" routerLink=\"/app/item\">Upload Item</a>\n          <a class=\"dropdown-item list-group-item-danger\" data-toggle=\"modal\" data-target=\"#my-modal\"\n            routerLink=\"/app/item\">Delete Item</a>\n        </div>\n      </li>\n    </ul>\n\n    <div class=\"form-inline my-2 my-lg-0\">\n      <!-- <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Find your item\"> -->\n      <button class=\"btn btn-secondary\" type=\"submit\" routerLink=\"/app/dashboard\">Dashboard</button>\n    </div>\n  </div>\n</nav>\n\n<div class=\"modal fade\" id=\"my-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <p class=\"modal-title\">Are you sure you want to delete this item?</p>\n        <p>\n          <button class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"delete.emit()\">Yes</button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/itemdetails/nav/nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/itemdetails/nav/nav.component.ts ***!
  \**************************************************/
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
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "delete", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/itemdetails/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/itemdetails/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=itemdetails-itemdetails-module.js.map